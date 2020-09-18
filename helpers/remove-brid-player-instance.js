function removeBridPlayerInstance(playerId, context) {
    const player = context.$bp
    if (player) {
      player(playerId).destroy(true);
    }
  }

  export default removeBridPlayerInstance;
