import React, { Component } from "react";

import createEventHandlers from "./create-event-handlers/create-event-handlers";
import injectPlayerScript from "./helpers/inject-player-script";
import removeBridPlayerInstance from "./helpers/remove-brid-player-instance";

const displayName = "ReactBridPlayer";
class ReactBridPlayer extends Component {
  constructor(props) {
    super(props);

    this.scriptSrc = "//services.brid.tv/player/build/brid.min.js";
    this.uniqueScriptId = "brid-player-script";

    this.playerConfig = {
      id: this.props.id,
      width: this.props.width,
      height: this.props.height,
      stats: {"rj" : 1},
      autoplay: true,
      pauseOffView: true,
      pauseAdOffView: true,
    };

    (this.props.video) ? this.playerConfig.video = this.props.video : this.playerConfig.playlist = this.props.playlist;

    this.state = { ready: "false", div: {} };

    this.initialize = this.initialize.bind(this);
  }
  componentDidMount() {
    injectPlayerScript({
      context: document,
      onLoadCallback: this.initialize,
      scriptSrc: this.scriptSrc,
      uniqueScriptId: this.uniqueScriptId
    });
  }
  componentWillUnmount() {
    removeBridPlayerInstance(this.props.divId, window);
  }
  initialize() {
    const player = window.$bp(this.props.divId, this.playerConfig);

    // Set the video quality to 480p by default
    player.setVideoSource('hsd');

    this.setState({ ready: true, div: player });
    window.$bp(this.props.divId, this.playerConfig);
    this.eventHandlers = createEventHandlers.bind(this)(this, window.$bp);

    this.props.onPlayerInit();

    // Set the video quality to 480p by default
    if(player.tech) player.setVideoSource('hsd');
  }

  render() {
    return (
      <div
        id={this.props.divId}

        className={[
          this.props.className || '',
          "brid",
        ].join(' ')}
        style={{ width: this.props.width, height: this.props.height }}
      />
    );
  }
}

ReactBridPlayer.displayName = displayName;

export default ReactBridPlayer;
