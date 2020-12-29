// Types
import type EventFunction from 'types/EventFunction';

// Functions found here: https://developer.brid.tv/brid-player/javascript-api-reference/javascript-events#playback
type EventFunctions = {
  // Video Events
  videoStart?: EventFunction,
  videoBeforeStart?: EventFunction,
  videoPlay?: EventFunction,
  videoPause?: EventFunction,
  videoEnded?: EventFunction,
  videoStopped?: EventFunction,
  videoLastSecond?: EventFunction,
  videoPlaybackError?: EventFunction,
  // Playlist Events
  playlistStart?: EventFunction,
  playlistSkipped?: EventFunction,
  playlistComplete?: EventFunction,
  // Seek Events
  seekTimeUpdate?: EventFunction,
  seekProgress?: EventFunction,
  seekSeeked?: EventFunction,
  // Quality Events
  qualityChange?: EventFunction,
  // Advertising Events
  adRequested?: EventFunction,
  adManagerLoadedEvent?: EventFunction,
  adBidWon?: EventFunction,
  adStart?: EventFunction,
  adVPaidStart?: EventFunction,
  adImpression?: EventFunction,
  adFirstQuartile?: EventFunction,
  adMidpoint?: EventFunction,
  adThirdQuartile?: EventFunction,
  adEnd?: EventFunction,
  adComplete?: EventFunction,
  adSkip?: EventFunction,
  adError?: EventFunction,
  adPause?: EventFunction,
  adResume?: EventFunction,
  // Other Events
  loadedMetadata?: EventFunction,
  fullscreenChange?: EventFunction,
  playerResize?: EventFunction,
  volumeChange?: EventFunction,
  muteChange?: EventFunction,
  stickyChange?: EventFunction,
}

export default EventFunctions;
