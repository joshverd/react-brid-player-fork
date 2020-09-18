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
    onRequestAd: config(component.props.divId).add("requestAd", onRequestAd.bind(this)),
    onAdStart: config(component.props.divId).add("adStart", onAdStart.bind(this)),
    onAdImpression: config(component.props.divId).add("adImpression", onAdImpression.bind(this)),
    onAdFirstQuartile: config(component.props.divId).add("adFirstQuartile", onAdFirstQuartile.bind(this)),
    onAdMidpoint: config(component.props.divId).add("adMidpoint", onAdMidpoint.bind(this)),
    onAdThirdQuartile: config(component.props.divId).add("adThirdQuartile", onAdThirdQuartile.bind(this)),
    onAdEnd: config(component.props.divId).add("adEnd", onAdEnd.bind(this)),
    onAdError: config(component.props.divId).add("adError", onAdError.bind(this)),
    onAdPause: config(component.props.divId).add("adPause", onAdPause.bind(this)),
    onAdResume: config(component.props.divId).add("adResume", onAdResume.bind(this)),
    onStart: config(component.props.divId).add("start", onStart.bind(this)),
    onBeforeStart: config(component.props.divId).add("beforeStart", onBeforeStart.bind(this)),
    onPlay: config(component.props.divId).add("play", onPlay.bind(this)),
    onPause: config(component.props.divId).add("pause", onPause.bind(this)),
    onEnded: config(component.props.divId).add("ended", onEnded.bind(this)),
    onLastSecond: config(component.props.divId).add("lastSecond", onLastSecond.bind(this)),
    onPlaylistStart: config(component.props.divId).add("playlistStart", onPlaylistStart.bind(this)),
    onSkipped: config(component.props.divId).add("skipped", onSkipped.bind(this)),
    onPlaylistComplete: config(component.props.divId).add("playlistComplete", onPlaylistComplete.bind(this)),
    onFullScreen: config(component.props.divId).add("fullscreenchange", onFullScreen.bind(this)),
    onMuteChange: config(component.props.divId).add("mutechange", onMuteChange)
  };
}

export default createEventHandlers;
