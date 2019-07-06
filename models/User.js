// access db
var db = require('../db/config');

module.exports = {
  // Return a new promise for finding a single user
  findOne: function (user) {
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM Users WHERE username=?';
      db.query(queryString, [user.input_username], (err, res) => {
        if (err) {
          // send back an error
          reject(err);
        } else {
          if (res.length) {
            // found a user with username that was passed in
            resolve(res[0]);
          } else {
            // did not find a user with username
            resolve(false);
          }
        }
      });
    });
  },
  create: function (user) {
      return new Promise ((resolve, reject) => {
        const queryString = 'INSERT INTO users SET ?';

        db.query(queryString, {username: user.input_username, password: user.input_password}, (err, res) => {
          if (err) {
            reject(err);
          } else {
            console.log("user created")
            resolve(user);

          }
        });
      });
    },
}