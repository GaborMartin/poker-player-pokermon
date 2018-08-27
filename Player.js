class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(10);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
