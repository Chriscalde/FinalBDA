const Member = require('../models/member.model.js');

// Create and Save a new Member
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Member name can not be empty"
        });
    }

    // Create a Member
    const member = new Member({
        name: req.body.name || "Desconocido",
        fatherLastName: req.body.flname || "Desconocido",
        motherLastName: req.body.mlname || "Desconocido",
        birthDate: req.body.birthdate || "Desconocido",
        curp: req.body.curp || "Desconocido",
        team: req.body.team || "Desconocido",
        league: req.body.league || "Desconocido",
        "info.address": req.body.address || "Desconocido",
        "info.neighborhood": req.body.neighborhood || "Desconocido",
        "info.phone": req.body.phone || "Desconocido",
        "info.school": req.body.school || "Desconocido",
        "info.year": req.body.year || "Desconocido",
        "player.number": req.body.number || 0,
        "player.position": req.body.position || "None",
        "player.senior": req.bodysenior || false,
        "player.offense_stats.yards_pass": req.bodyyards_pass || 0,
        "player.offense_stats.yards_run": req.bodyyards_run || 0,
        "player.offense_stats.yards_received": req.bodyyards_received || 0,
        "player.defense_stats.tackles": req.body.tackles || 0,
        "player.defense_stats.interceptions": req.body.interceptions || 0,
        "player.defense_stats.sacks": req.body.sacks || 0,
        "staff.role": req.body.role || "Desconocido",
        "staff.experience": req.body.experience || "Desconocido",
        "staff.wins": req.body.wins || 0,
        "staff.losses": req.body.losses || 0,
        "staff.championships": req.body.championships || 0

    });

    // Save Member in the database
    member.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Member."
            });
        });
};


// Retrieve and return all members from the database.
exports.findAll = (req, res) => {
    Member.find()
        .then(members => {
            res.send(members);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving members."
            });
        });
};

// Find a single member with a memberId
exports.findOne = (req, res) => {
    Member.findById(req.params.memberId)
        .then(member => {
            if (!member) {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            res.send(member);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            return res.status(500).send({
                message: "Error retrieving member with id " + req.params.memberId
            });
        });
};

// Update a member identified by the noteId in the request
exports.update = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            message: "Member content can not be empty"
        });
    }

    // Find member and update it with the request body
    Member.findByIdAndUpdate(req.params.memberId, {
            name: req.body.name || "Desconocido",
            fatherLastName: req.body.flname || "Desconocido",
            motherLastName: req.body.mlname || "Desconocido",
            birthDate: req.body.birthdate || "Desconocido",
            curp: req.body.curp || "Desconocido",
            team: req.body.team || "Desconocido",
            league: req.body.league || "Desconocido",
            "info.address": req.body.address || "Desconocido",
            "info.neighborhood": req.body.neighborhood || "Desconocido",
            "info.phone": req.body.phone || "Desconocido",
            "info.school": req.body.school || "Desconocido",
            "info.year": req.body.year || "Desconocido",
            "player.number": req.body.number || 0,
            "player.position": req.body.position || "None",
            "player.senior": req.bodysenior || false,
            "player.offense_stats.yards_pass": req.bodyyards_pass || 0,
            "player.offense_stats.yards_run": req.bodyyards_run || 0,
            "player.offense_stats.yards_received": req.bodyyards_received || 0,
            "player.defense_stats.tackles": req.body.tackles || 0,
            "player.defense_stats.interceptions": req.body.interceptions || 0,
            "player.defense_stats.sacks": req.body.sacks || 0,
            "staff.role": req.body.role || "Desconocido",
            "staff.experience": req.body.experience || "Desconocido",
            "staff.wins": req.body.wins || 0,
            "staff.losses": req.body.losses || 0,
            "staff.championships": req.body.championships || 0
        }, { new: true })
        .then(member => {
            if (!member) {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            res.send(member);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            return res.status(500).send({
                message: "Error updating member with id " + req.params.memberId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Member.findByIdAndRemove(req.params.memberId)
        .then(member => {
            if (!member) {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            res.send({ message: "Member deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Member not found with id " + req.params.memberId
                });
            }
            return res.status(500).send({
                message: "Could not delete member with id " + req.params.memberId
            });
        });
};