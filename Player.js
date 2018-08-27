class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    let myPlayer = this.getMyPlayer(gameState);
    console.log(myPlayer);
    
    // if no community cards
    if (community_cards.length == 0) {
      if (myPlayer.hole_cards[0].rank == myPlayer.hole_cards[1].rank || myPlayer.hole_cards[0].rank=='J' || myPlayer.hole_cards[0].rank=='Q' ||myPlayer.hole_cards[0].rank=='K' ||myPlayer.hole_cards[0].rank=='A' || myPlayer.hole_cards[1].rank=='J' || myPlayer.hole_cards[1].rank=='Q'|| myPlayer.hole_cards[1].rank=='K'|| myPlayer.hole_cards[1].rank=='A' ){
        bet(gameState.current_buy_in-myPlayer.bet + 10);
      } 
    }

    // If flop turn river.
    else if (community_cards.length > 0) {
      if (this.countPairs() == 4) {
        bet(myPlayer.stack);
      } else if (this.countPairs() == 3) {
        bet(myPlayer.stack);
      } else if (this.countPairs() == 2) {
        bet(gameState.current_buy_in-myPlayer.bet + gameState.current_buy_in-myPlayer.bet / 2);
      } else if (this.countPairs() == 1) {
        bet(gameState.current_buy_in-myPlayer.bet + 10);
      }
    } else {
      bet(0);
    }

    /*
    if (gameState.current_buy_in < 100) {
      bet(gameState.current_buy_in-myPlayer.bet + 10);
    }
    */
  } 

  static countPairs() {
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
