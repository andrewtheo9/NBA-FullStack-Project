const Player = require('../models/player')

module.exports = {
    index,
    new: newPlayer,
    create,
    show,
    update: updatePlayer
}

function show(req, res) {
    Player.findById(req.params.id)
      .exec(function (err, player) {
          console.log(player);
          res.render("players/show", { title: "Player Stats", player });
        });
  }

function index(req, res) {
    Player.find({}, function(err, players) {
        console.log(players)
        res.render('players/index', { title: "All Players", players })
    })
}

function newPlayer(req, res) {
    res.render('players/new', { title: "Add Player" });
}

function create(req, res) {
    const player = new Player(req.body);
    player.save(function(err) {
        if (err) return res.redirect('/players/new');
        console.log(player);
        res.redirect(`/players/${player._id}`);
    })
}

function updatePlayer(req, res) {
    Player.updateOne(req.params.id)
}