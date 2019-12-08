const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    name: { required: true, type: String },
    fatherLastName: { required: true, type: String },
    motherLastName: { required: true, type: String },
    birthdate: Date,
    curp: { required: true, type: String },
    info: {
        address: String,
        neighborhood: String,
        phone: String,
        school: String,
        year: String
    },
    player: {
        number: Number,
        position: String,
        senior: Boolean,
        offense_stats: {
            yards_pass: Number,
            yards_run: Number,
            yards_received: Number
        },
        defense_stats: {
            tackles: Number,
            interceptions: Number,
            sacks: Number
        }
    },
    staff: {
        role: String,
        experience: String,
        wins: Number,
        losses: Number,
        championships: Number
    },
    team: String,
    league: String
});

module.exports = mongoose.model('Member', MemberSchema);