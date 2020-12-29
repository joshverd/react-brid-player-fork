// Types
import type EventFunctions from 'types/EventFunctions';

// Mapping our event names to the brid function
//
// Functions from: https https://developer.brid.tv/brid-player/javascript-api-reference/javascript-events#playback
enum EventNameToBridEventName {
  adBidWon = "bidWon",
  adComplete = "adComplete",
  adEnd = "adEnd",
  adError = "adError",
  adFirstQuartile = "adFirstQuartile",
  adImpression = "adImpression",
  adManagerLoadedEvent = "AdsManagerLoadedEvent",
  adMidpoint = "adMidpoint",
  adPause = "adPause",
  adRequested = "requestAd",
  adResume = "adResume",
  adSkip = "adSkip",
  adStart = "adStart",
  adThirdQuartile = "adThirdQuartile",
  adVPaidStart = "vpaidStart",
  fullscreenChange = "fullscreenchange",
  loadedMetadata = "loadedmetadata",
  muteChange = "mutechange",
  playerResize = "playerresize",
  playlistComplete = "playlistComplete",
  playlistSkipped = "skipped",
  playlistStart = "playlistStart",
  qualityChange = "qualityChange",
  seekProgress = "progress",
  seekSeeked = "seeked",
  seekTimeUpdate = "timeupdate",
  stickyChange = "stickyChange",
  videoBeforeStart = "beforeStart",
  videoEnded = "ended",
  videoLastSecond = "lastSecond",
  videoPause = "pause",
  videoPlay = "play",
  videoPlaybackError = "playbackerror",
  videoStart = "start",
  videoStopped = "stopped",
  volumeChange = "volumechange",
}

export default EventNameToBridEventName;
