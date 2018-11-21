const Project = require('../models/project');

module.exports = (app) => {
    // app.get('/', function (req, res) {
    //     Project.find({})
    //         .then(projects => {
    //             res.render("index.handlebars", {projects});
    //             // can't pass variables through without handlebars
    //             // 
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         });
    // })

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

    // TODO: Account for categories of projects
    app.get("/projects/:category/:id", function (req, res) {
        // LOOK UP THE POST
        Project.findById(req.params.id)
            .then(post => {
                res.render("// TODO: Talk w/ Anna. DOES NOT EXIST YET");
            })
            .catch(err => {
                console.log(err.message);
            });
    });

};