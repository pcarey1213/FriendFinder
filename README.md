### FriendFinder

Available on Heroku! ("https://cryptic-inlet-58591.herokuapp.com/")

This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

The Express module is used to handle routing. App is deployed to Heroku so multiple users can fill it out.

### Instructions and Info

1. The `server.js` uses express and requires `htmlRoutes.js` and `apiRoutes.js` for routing. 
   ("")
2. The `/` path directs the user to the home page.
   ("")
3. The `htmlRoutes.js` file includes two routes:
   * A GET Route to `/survey` which displays the survey page.
   ("")
   * A default, catch-all route that leads to `home.html` which displays the home page.
   ("")
4. The `apiRoutes.js` file contains two routes:
   ("")
   * A GET route with the url `/api/friends` that displays a JSON of all possible friends.
   ("")
   * A POST route `/api/friends` that handles all incoming survey results and compatibility logic.
   ("")
5. Application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects roughly follows the format below.
   ("")

6. The user's most compatible friend is determined from logic in `apiRoutes.js`
   ("")
7. Once the current user's most compatible friend is found, the result is displayed as a modal pop-up.
   ("")

**thanks for using FriendFinder!**
