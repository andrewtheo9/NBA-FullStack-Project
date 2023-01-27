const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    }
 }, {
        timestamps: true
})

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
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema)