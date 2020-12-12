function onRequestAd(event) {
  this.props.onRequestAd(event);
}
function onAdStart(event) {
  this.props.onAdStart(event);
}
function onAdImpression(event) {
  this.props.onAdImpression(event);
}
function onAdFirstQuartile(event) {
  this.props.onAdFirstQuartile(event);
}
function onAdMidpoint(event) {
  this.props.onAdMidpoint(event);
}
function onAdThirdQuartile(event) {
  this.props.onAdThirdQuartile(event);
}
function onAdEnd(event) {
  this.props.onAdEnd(event);
}
function onAdError(event) {
  this.props.onAdError(event);
}
function onAdPause(event) {
  this.props.onAdPause(event);
}
function onAdResume(event) {
  this.props.onAdResume(event);
}
function onStart(event) {
  this.props.onStart(event);
}
function onBeforeStart(event) {
  this.props.onBeforeStart(event);
}
function onPlay(event) {
  this.props.onPlay(event);
}
function onPause(event) {
  this.props.onPause(event);
}
function onEnded(event) {
  this.props.onEnded(event);
}
function onLastSecond(event) {
  this.props.onLastSecond(event);
}
function onPlaylistStart(event) {
  this.props.onPlaylistStart(event);
}
function onSkipped(event) {
  this.props.onSkipped(event);
}
function onPlaylistComplete(event) {
  this.props.onPlaylistComplete(event);
}
function onFullScreen(event) {
  this.props.onFullScreen(event);
}
function onMuteChange(event) {
  this.props.onMuteChange(event);
}
function onAdSkip(event) {
  this.props.onAdSkip(event);
}
function onAdComplete(event) {
  this.props.onAdComplete(event);
}
function seeked(event) {
  this.props.seeked(event);
}

export {
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
  onMuteChange,
  onAdSkip,
  onAdComplete,
  seeked,
}
