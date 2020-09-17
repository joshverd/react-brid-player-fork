import {
  onRequestAd,
  onAdStart,
  onAdImpression,
  onAdFirstQuartile,
  onAdMidpoint,
  onAdThirdQuartile,
  onAdEnd,
  onAdError,
  onAdPause,
  onAdResume,
  onStart,
  onBeforeStart,
  onPlay,
  onPause,
  onEnded,
  onLastSecond,
  onPlaylistStart,
  onSkipped,
  onPlaylistComplete,
  onFullScreen,
  onMuteChange
} from "./EventListeners";

function createEventHandlers(component, config) {
  return {
    onRequestAd: config(component.props.divId).add("requestAd", onRequestAd),
    onAdStart: config(component.props.divId).add("adStart", onAdStart),
    onAdImpression: config(component.props.divId).add("adImpression", onAdImpression),
    onAdFirstQuartile: config(component.props.divId).add("adFirstQuartile", onAdFirstQuartile),
    onAdMidpoint: config(component.props.divId).add("adMidpoint", onAdMidpoint),
    onAdThirdQuartile: config(component.props.divId).add("adThirdQuartile", onAdThirdQuartile),
    onAdEnd: config(component.props.divId).add("adEnd", onAdEnd),
    onAdError: config(component.props.divId).add("adError", onAdError),
    onAdPause: config(component.props.divId).add("adPause", onAdPause),
    onAdResume: config(component.props.divId).add("adResume", onAdResume),
    onStart: config(component.props.divId).add("start", onStart),
    onBeforeStart: config(component.props.divId).add("beforeStart", onBeforeStart),
    onPlay: config(component.props.divId).add("play", onPlay),
    onPause: config(component.props.divId).add("pause", onPause),
    onEnded: config(component.props.divId).add("ended", onEnded),
    onLastSecond: config(component.props.divId).add("lastSecond", onLastSecond),
    onPlaylistStart: config(component.props.divId).add("playlistStart", onPlaylistStart),
    onSkipped: config(component.props.divId).add("skipped", onSkipped),
    onPlaylistComplete: config(component.props.divId).add("playlistComplete", onPlaylistComplete),
    onFullScreen: config(component.props.divId).add("fullscreenchange", onFullScreen),
    onMuteChange: config(component.props.divId).add("mutechange", onMuteChange)
  };
}

export default createEventHandlers;
