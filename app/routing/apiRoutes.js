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

    for (friends.length){
        var friendScores = friends[i].scores;
        var bestMatchVariance = null;
        var bestMatchID = null;
        
        function calcDiffFunc = function(userscore, friendscore) { 
        for (userscore.length) {
            var diffArr = []
            diffArr.push(Math.abs(userscore[i]-friendscore[i]);
            var sum = diffArr.reduce(function(a, b) { return a + b; }, 0);
            return sum;
        };//end for userscore
        };//end calcdiff func 
         
        var friendVariance = calcDiffFunc(user.scores, friends[i].scores);
        
            if (!bestMatchVariance || friendVariance < bestMatchVariance) {
                bestMatchID = 
