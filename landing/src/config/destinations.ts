function destination(configured: string | undefined, port: number, productionPath: string): string {
  if (configured?.trim()) return configured.trim();
  if (import.meta.env.DEV) return `${window.location.protocol}//${window.location.hostname}:${port}`;
  return new URL(productionPath, window.location.origin).href;
}

const frontend = destination(import.meta.env.VITE_FRONTEND_URL, 5175, '/portal/');
export const demoUrl = destination(import.meta.env.VITE_DEMO_URL, 5174, '/demo/');

export function frontendEntry(search = ''): string {
  const url = new URL(frontend, window.location.origin);
  url.hash = '/ingreso' + search;
  return url.href;
}
