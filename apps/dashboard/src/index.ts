import { parseText } from '@workspace/parser';

export function renderDashboard(input: string): string {
  const parsed = parseText(input);
  return `Dashboard is using: ${parsed}`;
}
