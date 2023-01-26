const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    position: {
        type: String, 
        enum: ['PG', 'SG', 'SF', 'PF', 'C'],
        required: true
    },
    team: {
        type: String, 
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    assists: { 
       type: Number,
       required: true
    }, 
    rebounds: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema)