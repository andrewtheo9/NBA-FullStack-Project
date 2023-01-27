require('dotenv').config();
require('./config/database');

const Player = require('./models/player');
const 
let player, players;

Player.updateMany(
    {},
    {nextOpponent: []},
    function(err, result) {console.log(result)}
)