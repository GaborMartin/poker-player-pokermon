class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let myPlayer = this.getMyPlayer(gameState);
    console.log(myPlayer);
    let community_cards = gameState.community_cards;
    let cards = gameState.players;
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
    for (let i = 0; 0 < gameState.players.length; i ++) {
      if (gameState.player[i].name == "Pokermon") {
        return player = gameState.player[i];
      }
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
