const project = db => ({

  getAll: () =>
    db.all('SELECT * FROM Project'),

  getById: id =>
    db.get('SELECT * FROM Project WHERE id = ?', id),

  insert: (project) =>
    db.run('INSERT INTO Project (clientId, name, isFinished, amountHours) VALUES (?, ?, ?, ?)', project.clientId, project.name, project.isFinished, project.amountHours),

  update: (project) =>
    db.run('UPDATE Project SET clientId = ?, name = ?, isFinished = ?, amountHours = ? WHERE id = ?', project.clientId, project.name, project.isFinished, project.amountHours, project.id),
  
  delete: (id) =>
    db.run('DELETE FROM Project WHERE id = ?', id)

})

module.exports = project