const client = db => ({

  getAll: () =>
    db.all('SELECT * FROM Client'),

  getById: id =>
    db.get('SELECT * FROM Client WHERE id = ?', id),

  insert: (client) =>
    db.run('INSERT INTO Client (userId, name, isActive) VALUES (?, ?, ?)', client.userId, client.name, client.isActive),

  update: (client) =>
    db.run('UPDATE Client SET userId = ?, name = ?, isActive = ? WHERE id = ?', client.userId, client.name, client.isActive, client.id),
  
  delete: (id) =>
    db.run('DELETE FROM Client WHERE id = ?', id)

})

module.exports = client