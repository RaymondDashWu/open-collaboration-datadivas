const Project = require('../models/project');

module.exports = (app) => {
    // Render index of all projects
    app.get('/', function (req, res) {
        Project.find({})
            .then(projects => {
                res.render("index.handlebars", {
                    projects
                });
                // TODO: Does not exist yet. Main index.html to convert to handlebars
            })
            .catch(err => {
                console.log(err.message);
            });
    })

    // CREATE a new project
    app.get('/projects/new', (req, res) => {
        res.render("projects-new.handlebars")
        // TODO: Make a form for new projects. Look at Project model to see what needs to be there
    });

    // TOFIX: Does not work with user authentication
    app.post("/projects/new", (req, res) => {
        if (req.user) {
            var project = new Project(req.body);
            project.author = req.user._id;
            console.log(project.author)
            project
                .save()
                .then(project => {
                    return User.findById(req.user._id);
                })
                .then(user => {
                    user.projects.unshift(project);
                    user.save();
                    // REDIRECT TO THE NEW POST
                    res.redirect("/project/" + project._id);
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
    });

    // app.post('/projects/new', (req, res) => {
    //     // INSTANTIATE INSTANCE OF PROJECT MODEL
    //     const project = new Project(req.body);
    //     if (!project) {
    //         return res.status(500).json({
    //             msg: 'Project does not exist or error creating project'
    //         })
    //     } else {
    //         // SAVE INSTANCE OF POST MODEL TO DB
    //         project.save((err, project) => {
    //             // REDIRECT TO THE ROOT
    //             return res.status(200).redirect(`/`);
    //         })
    //     }
    // });



    // Look up a single project
    app.get("/projects/:category/:id", function (req, res) {
        // Testing to see if this exists
        console.log(req.params.id)
        // LOOK UP THE POST
        Project.findById(req.params.id)
            .then(project => {
                res.render("project-show.handlebars");
                // TODO: This will show a single project. Reference wireframe
                return res.status(200);
            })
            .catch(err => {
                console.log(err.message);
                return res.status(500).json({
                    msg: 'Can not find project.'
                });
            });
    });

    // EDIT a single project
    app.get('/projects/:category/:id/edit', function (req, res) {
        Project.findById(req.params.id, function (err, projects) {
            res.render('projects-edit.handlebars', {
                projects: projects
            });
            // TODO: Screen to edit an individual project
        })
    });

    // Update a single project
    // TOFIX: Cannot GET on Postman
    app.put('/projects/:category/:id', (req, res) => {

        Project.findByIdAndUpdate(req.params.id, req.body)
            .then(projects => {
                res.redirect(`/projects/${req.params.category}/${req.params.id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    });

    // DELETE a single project
    // TOFIX: Cannot GET on Postman
    app.delete('/projects/:category/:id', function (req, res) {
        Project.findByIdAndRemove(req.params.id)
            .then((projects) => {
                res.redirect(`/${req.params.category}`)
            })
            .catch((err) => {
                console.log(err.message)
            })
    })

    // Astronomy
    app.get('/astronomy', (req, res) => {
        res.render("../Astronomy/astronomy.handlebars")
        // TODO: Astronomy landing page
    });

    // Biology
    app.get('/biology', (req, res) => {
        res.render("../Biology/biology.handlebars")
        // TODO: Biology landing page
    });

    // Chemistry
    app.get('/chemistry', (req, res) => {
        res.render("../Chemistry/chemistry.handlebars")
        // TODO: Chemistry landing page
    });

    // Computer-Science
    app.get('/computer-science', (req, res) => {
        res.render("../Computer-Science/computer-science.handlebars")
        // TODO: Computer-Science landing page
    });

    // Engineering
    app.get('/engineering', (req, res) => {
        res.render("../Engineering/engineering.handlebars")
        // TODO: Engineering landing page
    });

    // Environmental
    app.get('/environmental', (req, res) => {
        res.render("../Environmental/environmental.handlebars")
        // TODO: Environmental landing page
    });

    // Physics
    app.get('/physics', (req, res) => {
        res.render("../Physics/physics.handlebars")
        // TODO: Physics landing page
    });

    // Psychology
    app.get('/psychology', (req, res) => {
        res.render("../Psychology/psychology.handlebars")
        // TODO: Psychology landing page
    });
};