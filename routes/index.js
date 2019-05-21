const db = require('../config')

module.exports = app => {
  // your routes here...

/**
 * COPY PASTA FROM OLDER FILE 
 */
  //MAIN
  app.get('/', (req, res) => {
    return res.render('index')
  })
  //POST
    app.post('/burger', (req, res) => {
    db.query('INSERT INTO burgers SET ?', req.body, e => {
      if (e) throw e
      res.send('ok')
    })
  })
  // Read
  app.get('/burger', (req, res) => {
    db.query('SELECT * FROM burgers', (e, users) => {
      if (e) throw e
      res.json(burgers)
    })
  })
  // Update
  app.put('/burger/:id', (req, res) => {
    db.query('UPDATE burgers SET ? WHERE ?', [req.body, { id: req.params.id }], e => {
      if (e) throw e
      res.send('ok')
    })
  })
  // Delete
  app.delete('/burger/:id', (req, res) => {
    db.query('DELETE FROM burgers WHERE ?', { id: req.params.id }, e => {
      if (e) throw e
      res.send('ok')
    })
  })
}
