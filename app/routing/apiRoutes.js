var friendsData = require ("../data/friends");


module.exports = function(app) {
  app.get("/api/friends", function(req, res){
      res.json(friendsData);
      console.log(friendsData);
  });

  app.post("/api/friends", function(req, res){
      var newUser=req.body;
      var smallestDifference=100
      var bestMatch;
      console.log(newUser.scores);
      for (var j=0; j<friendsData.length; j++){
          var totalDifference=0;
        for(var i=0; i<newUser.scores.length; i++){
            totalDifference+=(Math.abs(newUser.scores[i]-friendsData[j].scores[i]));
        };
        if (totalDifference<smallestDifference){
            smallestDifference=totalDifference
            bestMatch=friendsData[j]
        };
      };
      res.json(bestMatch);
      friendsData.push(req.body);
  });
};