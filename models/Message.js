// access db
var db = require('../db/config');

module.exports = {
  findAll: function () {
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM Messages, Users WHERE Users.id = Messages.user_id';
      db.query(queryString, (err, res) => {
        if (err) {
          // send back an error
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  create: function (req) {
      return new Promise ((resolve, reject) => {
        const queryString = 'INSERT INTO messages SET ?';

        db.query(queryString, {body: req.message, user_id: 1}, (err, res) => {
          if (err) {
            reject(err);
          } else {
            console.log("message created")
            resolve(req.input_message);
          }
        });
      });
    },
}