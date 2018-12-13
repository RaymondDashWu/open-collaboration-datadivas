const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const Project = require('../models/project');


chai.use(chaiHttp);

describe('site', () => {
  // Describe what you are testing
  it('Should have home page', (done) => {
    // Describe what should happen
    // In this case we test that the home page loads
    chai
      .request('localhost:5000')
      .get('/')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      expect(res).to.have.status(200);
        return done(); // Call done if the test completed successfully.
      });
  });
});

describe('category', () => {
  // Describe what you are testing
  it('Should be able to load categories', (done) => {
    // Describe what should happen
    // In this case we test that the home page loads
    chai
      .request('localhost:5000')
      .get('/astronomy')
      .get('/biology')
      .get('/chemistry')
      .get('/computer-science')
      .get('/engineering')
      .get('/environmental')
      .get('/physics')
      .get('/psychology')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); // Call done if the test completed successfully.
      });
  });
});

describe('Projects', () => {
  it('should create with valid attributes at POST /projects', (done) => {
    const project = {
      category: 'Astronomy',
      title: 'Awesome project',
      url: 'https://www.google.com',
      summary: 'project summary',
      projectImg: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      author: ObjectId('5bff2f7bb2d985ca51b3928c')
    };

    Project.find((err, projects) => {
      const projectCount = projects.count;
      chai
        .request('localhost:5000')
        .post('/projects/new')
        .send(project)
        .then((res) => {
          Project.find((err, projects) => {
            projectCount.should.be.equal(projects.length - 1);
            res.should.have.status(200);
            return done();
          });
        })
        .catch(err => done(err));
    });

    Project.findOneAndRemove(project, () => {
      Project.find((err, projects) => {
        const projectCount = projects.count;
        chai
          .request('localhost:3000')
          .post('/projects/new')
          .send(project)
          .then((res) => {
            Project.find((err, projects) => {
              projectCount.should.be.equal(projects.length + 1);
              res.should.have.status(200);
              return done();
            });
          })
          .catch(err => done(err));
      });
    });
  });
});
