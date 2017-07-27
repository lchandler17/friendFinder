var friendsData = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res) {

		var newEntry = friendsData[friendsData.length-1];
		var totalScore = "";
		var bestMatch = 50;
		var matchIndex = "";

		for (var i = 0; i < friendsData.length; i++) {
			totalScore = 
		    	Math.abs(parseInt(friendsData[i].scores[0]) - parseInt(newEntry.scores[0])) +
		    	Math.abs(parseInt(friendsData[i].scores[1]) - parseInt(newEntry.scores[1])) +
		    	Math.abs(parseInt(friendsData[i].scores[2]) - parseInt(newEntry.scores[2])) +
		    	Math.abs(parseInt(friendsData[i].scores[3]) - parseInt(newEntry.scores[3])) +
		    	Math.abs(parseInt(friendsData[i].scores[4]) - parseInt(newEntry.scores[4])) +
		    	Math.abs(parseInt(friendsData[i].scores[5]) - parseInt(newEntry.scores[5])) +
		    	Math.abs(parseInt(friendsData[i].scores[6]) - parseInt(newEntry.scores[6])) +
		    	Math.abs(parseInt(friendsData[i].scores[7]) - parseInt(newEntry.scores[7])) +
		    	Math.abs(parseInt(friendsData[i].scores[8]) - parseInt(newEntry.scores[8])) +
		    	Math.abs(parseInt(friendsData[i].scores[9]) - parseInt(newEntry.scores[9])) +
		    	Math.abs(parseInt(friendsData[i].scores[10]) - parseInt(newEntry.scores[10]));

		    if (totalScore < bestMatch) {
		    	bestMatch = totalScore;
		    	matchIndex = i;
		    }

		    console.log(totalScore);
		}

		console.log(matchIndex);

		res.json(friendsData[matchIndex]);

	});
}