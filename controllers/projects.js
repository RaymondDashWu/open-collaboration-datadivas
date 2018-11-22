const Project = require('../models/project');

module.exports = (app) => {
    // Render index of all projects
    app.get('/', function (req, res) {
        Project.find({})
            .then(projects => {
                res.render("index.handlebars", {projects});
                // TODO: Does not exist yet
            })
            .catch(err => {
                console.log(err.message);
            });
    })

    // CREATE a new project
    app.post('/projects/new', (req, res) => {
        // INSTANTIATE INSTANCE OF PROJECT MODEL
        const project = new Project(req.body);
        // SAVE INSTANCE OF POST MODEL TO DB
        project.save((err, project) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
        })
    });

    // Look up a single project
    app.get("/projects/:category/:id", function (req, res) {
        // LOOK UP THE POST
        Project.findById(req.params.id)
            .then(project => {
                res.render("project-show.handlebars");
                // TODO: Handlebars does not exist yet
            })
            .catch(err => {
                console.log(err.message);
            });
    });

    // EDIT a single project
    app.get('/projects/:category/:id/edit', function (req, res) {
        Project.findById(req.params.id, function(err, projects) {
            res.render('projects-edit.handlebars', {projects: projects});
            // TODO: Handlebars does not exist yet
        })
    });

    // Update a single project
    // unsure if this works. Testing w/ Postman 11/21
    app.put('/projects/:category/:id', (req, res) => {
        Project.findByIdAndUpdate(req.params.id, req.body)
            .then(projects => {
                res.redirect(`/projects/${req.params.id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    });

    // DELETE a single project
    // unsure if this works. Testing w/ Postman 11/21
    app.delete('/projects/:category/:id', function (req, res) {
        Project.findByIdAndRemove(req.params.id)
            .then((projects) => {
                res.redirect(`/projects/${req.params.id}`)
            })
            .catch((err) => {
                console.log(err.message)
            })
    })

};