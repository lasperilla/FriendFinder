const friends = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
    // API POST Requests
    app.post("/api/friends", function (req, res) {
            friends.push(req.body);
            res.json(
                {
                    message: 'successfully added profile.'
                    //todo: respond with best match obj here?
                }
                );
    });
