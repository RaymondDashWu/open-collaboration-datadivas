const Project = require('../models/project');

module.exports = (app) => {
    // Render index of all projects
    app.get('/', function (req, res) {
        Project.find({})
        // Changed index.handlebars to main.handlebars
            .then(projects => {
                // res.send('hello')
                res.render('index.handlebars')
                // TODO: Does not exist yet. Main index.html to convert to handlebars
                // index.html is now main.handlebars - anna
            })
            .catch(err => {
                // console.log(err.message);
            });
    })

    // CREATE a new project
    app.get('/projects/:category/new', (req, res) => {
        res.render("../views/projects-new.handlebars", {category: req.params.category.toLowerCase()})
        // TODO: Make a form for new projects. Look at Project model to see what needs to be there
    });

    // TOFIX: Does not work with user authentication
    app.post("/projects/new", (req, res) => {
        console.log(req.user)
        // if (req.user) {

            var project = new Project(req.body);
            //project.author = req.user._id;
            console.log(project.author)
            project
                .save()
                // .then(project => {
                //     return User.findById(req.user._id);
                // })
                .then(proj => {
                    // user.projects.unshift(project);
                    proj.save();
                    // REDIRECT TO THE NEW POST
                    console.log(proj)
                    res.redirect("/projects/" + proj._id);
                })
                .catch(err => {
                    console.log(err.message);
                });

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
    app.get("/projects/:id", function (req, res) {
        // Testing to see if this exists
        console.log(req.params.id)
        // LOOK UP THE POST
        Project.findById(req.params.id)
            .then(project => {
                res.render("projects-show.handlebars", {project});
            })
            .catch(err => {
                console.log(err.message);
                return res.status(500).json({
                    msg: 'Can not find project.'
                });
            });
    });

    // EDIT a single project
    app.get('/projects/:id/edit', function (req, res) {
        Project.findById(req.params.id, function (err, projects) {
            res.render('projects-edit.handlebars', {
                projects: projects
            });
            // TODO: Screen to edit an individual project
        })
    });

    // Update a single project
    // TOFIX: Cannot GET on Postman
    app.put('/projects/:id', (req, res) => {
        Project.findByIdAndUpdate(req.params.id, req.body)
            .then(projects => {
                res.redirect(`/projects/${req.params.id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    });

    // DELETE a single project
    // TOFIX: Cannot GET on Postman
    app.delete('/projects/:id', function (req, res) {
        Project.findByIdAndRemove(req.params.id)
            .then((projects) => {
                console.log("LOOK HERE")
                console.log(req.params.id)
                console.log(projects)
                res.redirect(`/`)
                // res.redirect(`/${req.params.category}`)
            })
            .catch((err) => {
                console.log(err.message)
            })
    })

    // Astronomy
    // TODO: Make this /:category
    app.get('/astronomy', (req, res) => {
        var category = req.path.split('/')[1];
        res.render("../views/Astronomy/astronomy.handlebars", {category})
        // TODO: Astronomy landing page
    });

    // Biology
    app.get('/biology', (req, res) => {
        res.render("../views/Biology/biology.handlebars")
        // TODO: Biology landing page
    });

    // Chemistry
    app.get('/chemistry', (req, res) => {
        res.render("../views/Chemistry/chemistry.handlebars")
        // TODO: Chemistry landing page
    });

    // Computer-Science
    app.get('/computer-science', (req, res) => {
        res.render("../views/Computer-Science/computer-science.handlebars")
        // TODO: Computer-Science landing page
    });

    // Engineering
    app.get('/engineering', (req, res) => {
        res.render("../views/Engineering/engineering.handlebars")
        // TODO: Engineering landing page
    });

    // Environmental
    app.get('/environmental', (req, res) => {
        res.render("../views/Environmental/environmental.handlebars")
        // TODO: Environmental landing page
    });

    // Physics
    app.get('/physics', (req, res) => {
        res.render("../views/Physics/physics.handlebars")
        // TODO: Physics landing page
    });

    // Psychology
    app.get('/psychology', (req, res) => {
        res.render("../views/Psychology/psychology.handlebars")
        // TODO: Psychology landing page
    });
};
