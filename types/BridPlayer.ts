// Constants
import EventNameToBridEventName from '../constants/EventNameToBridEventName';

// Types
import type EventFunction from 'types/EventFunction';

// This is obviously not all the types on the brid player object
type BridPlayer = {
  // The ad function can only accept a brid event name
  add: (eventName: EventNameToBridEventName, listener: EventFunction) => void,
}

export default BridPlayer;
