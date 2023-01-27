const Player = require('../models/player');

module.exports = {
    create,
    delete: deleteComment,
    update: updateComment
};

function create(req, res) {
    Player.findById(req.params.id, function(err, player) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        player.comments.push(req.body)
        player.save(function(err) {
            res.redirect(`/players/${player._id}`);
        });
    });
}

async function deleteComment(req, res, next) {
    try {
        const player = await Player.findOne({'comments._id': req.params.id})
        if (!player) return res.redirect('/players')
        player.comments.remove(req.params.id)
        await player.save()
        res.redirect(`/players/${player._id}`)
    } catch(err) {
        return next(err)
    }
}

async function updateComment(req, res, next) {
    try {
        const player = await Player.findOne({'comments._id': req.params.id})
        if (!player) return res.redirect('/players')
        player.comments.updateOne(req.params.id)
        await player.save()
        res.redirect(`/players/${player._id}`)
    } catch(err) {
        return next(err)
    }
}