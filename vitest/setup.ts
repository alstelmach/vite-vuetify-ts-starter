export function setup(): void {
  // @ts-expect-error
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  };
}
