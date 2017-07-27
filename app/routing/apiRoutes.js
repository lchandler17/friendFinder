var friendsData = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res) {

		var userData = req.body;
		friendsData.push(userData);

		var totalScore = 1;
		var bestMatch = 50;
		var matchIndex = "";

		// console.log("user:" + userData.name);
		// console.log("Last index:" + friendsData[friendsData.length-1].name);

		for (var i = 0; i < friendsData.length-1; i++) {
			totalScore = 
		    	Math.abs(parseInt(friendsData[i].scores[0]) - parseInt(userData.scores[0])) +
		    	Math.abs(parseInt(friendsData[i].scores[1]) - parseInt(userData.scores[1])) +
		    	Math.abs(parseInt(friendsData[i].scores[2]) - parseInt(userData.scores[2])) +
		    	Math.abs(parseInt(friendsData[i].scores[3]) - parseInt(userData.scores[3])) +
		    	Math.abs(parseInt(friendsData[i].scores[4]) - parseInt(userData.scores[4])) +
		    	Math.abs(parseInt(friendsData[i].scores[5]) - parseInt(userData.scores[5])) +
		    	Math.abs(parseInt(friendsData[i].scores[6]) - parseInt(userData.scores[6])) +
		    	Math.abs(parseInt(friendsData[i].scores[7]) - parseInt(userData.scores[7])) +
		    	Math.abs(parseInt(friendsData[i].scores[8]) - parseInt(userData.scores[8])) +
		    	Math.abs(parseInt(friendsData[i].scores[9]) - parseInt(userData.scores[9]));
		    // console.log(totalScore);

		    if (totalScore < bestMatch) {
		    	bestMatch = totalScore;
		    	// console.log("bestmatch:" + bestMatch);
		    	matchIndex = i;
		    	// console.log("matchindex:" + matchIndex);
		    }
		}

		res.json(friendsData[matchIndex]);

	});
}