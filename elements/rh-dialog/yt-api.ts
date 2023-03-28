declare class Player {
  constructor(iframeOrID: string | HTMLIFrameElement, options?: {
    events?: {
      onReady?(event: Event): void;
    };
  });

  pauseVideo(): void
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady(): void;
    YT: {
      Player: typeof Player;
    };
  }
}

const players = new WeakMap<HTMLIFrameElement, Player>();

async function getPlayer(iframe: HTMLIFrameElement): Promise<Player | void> {
  return new Promise(r => {
    let player = players.get(iframe);
    if (!player) {
      players.set(iframe, new window.YT.Player(iframe, {
        events: {
          onReady() {
            player = players.get(iframe);
            r(player);
          }
        }
      }));
    } else {
      requestAnimationFrame(() => r(player));
    }
  });
}

export async function pauseVideo(iframe: HTMLIFrameElement) {
  if (!iframe.src.match(/enablejsapi=1/)) {
    // eslint-disable-next-line no-console
    console.warn('Cannot pause video, please add `enablejsapi=1` to iframe url.');
    return;
  }
  // 2. This code loads the IFrame Player API code asynchronously.
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const [firstScriptTag] = document.getElementsByTagName('script');
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const orig = window.onYouTubeIframeAPIReady;
    await new Promise(r => {
      window.onYouTubeIframeAPIReady = function() {
        r(void 0);
      };
    });
    window.onYouTubeIframeAPIReady = orig;
  }
  const player = await getPlayer(iframe);
  player?.pauseVideo();
}
