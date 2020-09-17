function removeBridPlayerInstance(playerId, context) {
    const player = context.$bp
    if (player) {
      player(playerId).destroy();
    }
  }
  
  export default removeBridPlayerInstance;