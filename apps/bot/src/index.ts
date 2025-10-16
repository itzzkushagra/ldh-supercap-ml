import { loadConfig } from '@workspace/repo';

export function startBot(): string {
  const { REPO_REMOTE_URL } = loadConfig();
  return `Bot connected to ${REPO_REMOTE_URL}`;
}
