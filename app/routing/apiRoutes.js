const friends = require("../data/friends.js");

module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        let bestMatchVariance = null;
        let bestMatchID = null;
        for (var i = 0; i < friends.length; i++) {
            var friendScores = friends[i].scores;


            function calcDiffFunc(userscore, friendscore) {
                var diffArr = [];
                for (var j = 0; j < userscore.length; j++) {
                    diffArr.push(Math.abs(userscore[j] - friendscore[j]));
                };
                var sum = diffArr.reduce(function(a, b) {
                    return a + b;
                }, 0);
                return sum;
            }; //end calcdiff func

            let friendVariance = calcDiffFunc(user.scores, friends[i].scores);
            console.log('friendVariance' + i)
            console.log(friendVariance)

            if (!bestMatchID || friendVariance < bestMatchVariance) {
                bestMatchID = i;
                console.log('best match is now' + bestMatchID)
                bestMatchVariance = friendVariance;
            };
        };

        console.log('your best friend is ' + friends[bestMatchID].name)
        res.json({
            message: 'successfully added profile.'
                //todo: respond with best match obj here?
        });
    });
};
