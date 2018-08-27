class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      console.log(gameState);
      let myPlayer = this.getMyPlayer(gameState);
      let community_cards = gameState.community_cards;
      let cards = myPlayer.hole_cards;
      console.log(myPlayer);

      // if no community cards
      if (community_cards.length == 0) {
        if (myPlayer.hole_cards[0].rank == myPlayer.hole_cards[1].rank && ( myPlayer.hole_cards[0].rank == '10' || myPlayer.hole_cards[0].rank == 'J' || myPlayer.hole_cards[0].rank == 'Q' || myPlayer.hole_cards[0].rank == 'K' || myPlayer.hole_cards[0].rank == 'A' )) {
          bet(gameState.current_buy_in - myPlayer.bet + 10);
        }
        else {
          bet(0);
        }
      }

      // If flop turn river.
      else if (community_cards.length > 0) {
        if (this.countPairs(gameState) == 4) {
          bet(myPlayer.stack);
        } else if (this.countPairs(gameState) == 3) {
          bet(myPlayer.stack);
        } else if (this.countPairs(gameState) == 2) {
          bet(gameState.current_buy_in - myPlayer.bet + gameState.current_buy_in - myPlayer.bet / 2);
        } else if (this.countPairs(gameState) == 1) {
          bet(gameState.current_buy_in - myPlayer.bet + 10);
        }
        if (myPlayer.hole_cards[0].rank == myPlayer.hole_cards[1].rank && ( myPlayer.hole_cards[0].rank == '10' || myPlayer.hole_cards[0].rank == 'J' || myPlayer.hole_cards[0].rank == 'Q' || myPlayer.hole_cards[0].rank == 'K' || myPlayer.hole_cards[0].rank == 'A' )) {
          bet(gameState.current_buy_in - myPlayer.bet + 10);
        }
        else {
          bet(0);
        }
      } else {
        bet(0);
      /*
      if (gameState.current_buy_in < 100) {
        bet(gameState.current_buy_in-myPlayer.bet + 10);
      }
      */
    } 
    } catch (er) {
      console.log(er);
      bet(0);
    }
  }

  static countPairs(gameState) {
    let myPlayer = this.getMyPlayer(gameState);
    let community_cards = gameState.community_cards;
    let cards = myPlayer.hole_cards;
    console.log(community_cards);
    console.log(cards);
    let counter = 0;
    for (let i = 0; i < community_cards.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (community_cards[i].rank == cards[j].rank) {
          counter += 1;
        }
      }
    }
    return counter;
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
