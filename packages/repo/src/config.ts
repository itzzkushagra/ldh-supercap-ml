import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenvSafe from 'dotenv-safe';
import { z } from 'zod';

const fileDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(fileDir, '../../..');
const envPath = path.join(workspaceRoot, '.env');
const examplePath = path.join(workspaceRoot, '.env.example');

const configSchema = z.object({
  REPO_REMOTE_URL: z.string().url()
});

type Config = z.infer<typeof configSchema>;

let cachedConfig: Config | null = null;

function hydrateEnvironment(): void {
  if (cachedConfig) {
    return;
  }

  dotenvSafe.config({
    allowEmptyValues: false,
    example: examplePath,
    path: fs.existsSync(envPath) ? envPath : undefined
  });
}

export function loadConfig(): Config {
  if (cachedConfig) {
    return cachedConfig;
  }

  hydrateEnvironment();
  const config = configSchema.parse(process.env);
  cachedConfig = config;
  return config;
}

export type { Config };
