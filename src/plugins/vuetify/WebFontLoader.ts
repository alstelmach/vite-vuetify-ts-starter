import { load } from 'webfontloader';

function prefetch() : void {
  const prefetch = document.createElement('link');
  prefetch.rel = 'dns-prefetch';
  prefetch.href = '//fonts.googleapis.com';
  document.head.appendChild(prefetch);
}

function preconnect() : void {
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  preconnect.crossOrigin = 'crossorigin';
  document.head.appendChild(preconnect);
}

export async function loadFonts(): Promise<void> {
  prefetch();
  preconnect();

  return new Promise<void>(resolve =>
    load(
      {
        google: {
          families: [
            'Roboto:100,300,400,500,700,900',
            'Roboto+Mono:100,300,400,500,700,900',
            'Noto+Color+Emoji&display=swap',
          ],
        },
        active: () => resolve(),
      }
    )
  );
}
