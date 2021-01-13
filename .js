const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  }, {
    firstName: 'Pablo',
    lastName: 'Escobar',
    age: 21
  }, {
    firstName: 'Tony',
    lastName: 'Montana',
    age: 29}],

  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Falcons',
    teamPoints: 22,
    opponentPoints: 17
  },
  {
    opponent: 'Bills',
    teamPoints: 14,
    opponentPoints: 28
  }],

  get players () {
    return this._players;
  },

  get games() {
    return this._games;
  },
  addGame(opponentName, ourPoints, theirPoints) {
    let game = {
      opponentName,
      ourPoints,
      theirPoints};
      this.games.push(game)
    },
 


  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age};

      this.players.push(player);}

    };
    team.addPlayer('steph','curry',28);
    team.addPlayer('lisa','curry',28);
    team.addPlayer('bugs','bunny',28);
    team.addGame('Rams',32,45);
    team.addGame('Chargers',32,45);
