const friends = require("../data/friends.js");

module.exports = function(app) {
    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        const user = req.body;
        let bestMatchVariance = null;
        let bestMatchID = null;

        for (var i = 0; i < friends.length; i++) {
            let friendScores = friends[i].scores;

            //iterate comparing user and friend score arrays at index i. return sum of diff
            function calcVarianceFunc(userscore, friendscore) {
                var diffArr = [];
                for (var j = 0; j < userscore.length; j++) {
                    diffArr.push(Math.abs(userscore[j] - friendscore[j]));
                };
                var sum = diffArr.reduce(function(a, b) {
                    return a + b;
                }, 0);
                return sum;
            };

            //get variance of friend[i] scores from array of friend objects
            let friendVariance = calcVarianceFunc(user.scores, friends[i].scores);
            
            console.log('==============');
            console.log('itteration '+i);
            console.log('friendVariance ' + i+": "+friendVariance);
            console.log('bestMatchVariance =' +bestMatchVariance);
            console.log('==============');

            //as loop itterates for each friend, if a lower variance is found, set as best match
            if (bestMatchID === null || friendVariance < bestMatchVariance) {
                bestMatchID = i;
                console.log('best match is now ' + friends[bestMatchID].name);
                bestMatchVariance = friendVariance;
            };
        };

        //all loops are done. best friend has already been determined.
        console.log('your best friend is ' + friends[bestMatchID].name);

        //respond to api request with an object containing best match's name/photo
        res.json({
            message: 'successfully matched.',
            name: friends[bestMatchID].name,
            photo: friends[bestMatchID].photo
        });
    });
};
