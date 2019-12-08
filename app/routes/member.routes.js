module.exports = (app) => {
    const members = require('../controllers/member.controller.js');

    // Create a new Member
    app.post('/members', members.create);

    // Retrieve all Members
    app.get('/members', members.findAll);

    // Retrieve a single Member with memberId
    app.get('/members/:memberId', members.findOne);

    // Update a Member with memberId
    app.put('/members/:memberId', members.update);

    // Delete a Member with memberId
    app.delete('/members/:memberId', members.delete);
}