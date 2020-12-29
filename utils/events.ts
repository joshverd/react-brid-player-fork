// Constants
import EventNameToBridEventName from '../constants/EventNameToBridEventName';

// Types
import type EventFunctions from '../types/EventFunctions';
import type BridPlayer from '../types/BridPlayer';

export default {
  setupEventFunctions,
}

// Called when the player is initialized and we need to setup handlers for each of the functions passed in via props
function setupEventFunctions(
  {
    eventHandlers,
    player,
  } : {
    eventHandlers: EventFunctions,
    player: BridPlayer,
  },
) {
  // Loop through event handlers specified
  for(const [ eventHandlerName, eventHandlerFunction ] of Object.entries(eventHandlers)) {
    // Get the brid event name from the event handler name
    const bridEventName = EventNameToBridEventName[eventHandlerName as keyof EventFunctions];

    // If no event handler function is defined for this eventHandlerName, ignore it
    if(!eventHandlerFunction) continue;

    // Add the event handler function as a brid event
    player?.add(bridEventName, eventHandlerFunction);
  }
}
