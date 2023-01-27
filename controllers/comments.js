const Player = require('../models/player');

module.exports = {
    create
};

function create(req, res) {
    Player.findById(req.params.id, function(err, player) {
        player.comments.push(req.body)
        player.save(function(err) {
            res.redirect(`/players/${player._id}`);
        });
    });
}