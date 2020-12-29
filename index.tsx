import React from 'react';
const { useEffect, useState } = React;

// Utils
import playerUtils from './utils/player';
import eventsUtils from './utils/events';

// Types
import type BridPlayerConfig from 'types/BridPlayerConfig';
import type EventFunctions from 'types/EventFunctions';
import type BridPlayer from 'types/BridPlayer';

type ReactBridPlayerProps = {
  divID: string,
  // The id of the brid.tv player
  bridPlayerID: string,
  className?: string,
  height?: string,
  width?: string,
  // Should the video autoplay?
  autoplay?: boolean,
  // Pause video when user tabs out?
  pauseOffView?: boolean,
  // Pause ad when user tabs out?
  pauseAdOffView?: boolean,
  // When the player is initialized, run this function
  onPlayerInit?: () => void,
  // The ID of the video this player is showing
  videoID?: string,
  // The ID of the playlist this player is showing
  playlistID?: string,
  eventHandlers?: EventFunctions,
}

const ReactBridPlayer = (props: ReactBridPlayerProps) => {
  if(props.videoID === undefined && props.playlistID === undefined) throw 'videoID or playlistID must be defined';

  const [config, setConfig] = useState<BridPlayerConfig>({
    id: props.divID,
    // No idea what this does, brid docs don't help
    stats: {
      rs: 1,
    },
    autoplay: props.autoplay,
    pauseOffView: props.pauseOffView,
    pauseAdOffView: props.pauseAdOffView,
    width: props.width,
    height: props.height,
    video: props.videoID,
    playlist: props.playlistID,
  });

  const uniqueScriptID = 'brid-player-script';

  // Once player script is loaded
  const onPlayerLoad = () => {
    // Get the player
    const player: BridPlayer = window.$bp(props.divID, config);

    // Setup the handler functions if they are specified
    if(props.eventHandlers) {
      eventsUtils.setupEventFunctions({
        eventHandlers: props.eventHandlers,
        player,
      });
    }

    // Run the ready function if specified
    if(props.onPlayerInit) props.onPlayerInit();
  }

  // On load, inject the brid player script
  useEffect(() => {
    playerUtils.injectPlayerScript({
      onLoadCallback: onPlayerLoad,
      scriptSrc: 'https://services.brid.tv/player/build/brid.min.js',
      uniqueScriptID: uniqueScriptID,
    });

    // On unload, remove the player instance
    return () => {
      playerUtils.removeBridPlayerInstance(uniqueScriptID);
    };
  }, []);

  return (
    <div
      id={props.divID}
      className={[
        props.className ?? '',
        'brid',
      ].join(' ')}
      style={{
        width: props.width,
        height: props.height,
      }}
    />
  );
}

export default ReactBridPlayer;
