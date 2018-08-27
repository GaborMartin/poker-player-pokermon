class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    let myPlayer = this.getMyPlayer(gameState);
    console.log(myPlayer);
    let community_cards = gameState.community_cards;
    console.log(community_cards);
    let cards = myPlayer.hole_cards;
    console.log(cards);
    let counter = 0;

    if (community_cards.length > 0) {
      for (let i = 0; i < community_cards.length; i++) {
        for (let j = 0; j < cards.length; j++) {
          if (community_cards[i].rank == cards[j].rank) {
            counter += 1;
          }
        }
      }
      if (counter > 1) {
        bet(300);
      } else if (counter == 4) {
        bet(myPlayer.stack);
      }
      console.log(gameState.current_buy_in-myPlayer.bet + 10);
    }
    bet(gameState.current_buy_in-myPlayer.bet + 10);
  }

  static getMyPlayer(gameState) {
    var player = null;
    for (let i = 0; i < gameState.players.length; i++) {
      if (gameState.players[i].name == 'Pokermon') {
        player = gameState.players[i];
      }
    }
    return player;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
