const db = require('../config')

module.exports = app => {
  // your routes here...

/**
 * COPY PASTA FROM OLDER FILE 
 */
  //   app.post('/users', (req, res) => {
//     db.query('INSERT INTO users SET ?', req.body, e => {
//       if (e) throw e
//       res.send('ok')
//     })
//   })
//   // Read
//   app.get('/users', (req, res) => {
//     db.query('SELECT * FROM users', (e, users) => {
//       if (e) throw e
//       res.json(users)
//     })
//   })
//   // Update
//   app.put('/users/:id', (req, res) => {
//     db.query('UPDATE users SET ? WHERE ?', [req.body, { id: req.params.id }], e => {
//       if (e) throw e
//       res.send('ok')
//     })
//   })
//   // Delete
//   app.delete('/users/:id', (req, res) => {
//     db.query('DELETE FROM users WHERE ?', { id: req.params.id }, e => {
//       if (e) throw e
//       res.send('ok')
//     })
//   })
// }
