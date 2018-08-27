class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let myPlayer = this.getMyPlayer(gameState);
    console.log(myPlayer);
    let community_cards = gameState.community_cards;
    let cards = gameState.players.hole_cards;
    let counter = 0;
    for (let i = 0; i < community_cards.length; i++) {
      for (let j = 0; i < cards.length; i++) {
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
    bet(150);
  }

  static getMyPlayer(gameState) {
    var player = null;
    for (let i = 0; 0 < gameState.players.length; i ++) {
      if (gameState.players[i].name == "Pokermon") {
        player = gameState.players[i];
      }
    }
    return player;
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
