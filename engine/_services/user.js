const user = db => ({

  getAll: () => db.all('SELECT * FROM User'),

  getById: id => db.get('SELECT * FROM User WHERE id = ?', id),

  insert: (user) => db.run('INSERT INTO User (name, login, password) VALUES (?, ?, ?)', user.name, user.login, user.password),

  update: (user) => db.run('UPDATE User SET name = ? WHERE id = ?', user.name, user.id),
  
  delete: (id) => db.run('DELETE FROM User WHERE id = ?', id)

})

module.exports = user