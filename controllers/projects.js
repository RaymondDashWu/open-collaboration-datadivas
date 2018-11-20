const Project = require('../models/project');

module.exports = (app) => {

  // CREATE
  app.post('/projects/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const project = new Project(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    project.save((err, project) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};