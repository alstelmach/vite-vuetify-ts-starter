export function setup(): void {
  // @ts-ignore
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  };
}
