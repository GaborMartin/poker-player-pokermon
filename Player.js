class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState.community_cards);
    let cards = gameState.players;
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
    }
    bet(150);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
