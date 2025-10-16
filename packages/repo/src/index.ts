import { loadConfig } from './config.js';

export { loadConfig };
export type { Config } from './config.js';

export function getRepoRemoteUrl(): string {
  const { REPO_REMOTE_URL } = loadConfig();
  return REPO_REMOTE_URL;
}
