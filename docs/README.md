# DATASK - An Open Collaborative Platform for Science!
[INSERT LOGO ONCE COMPLETED]
Want to help find a cure for breast cancer? What about Alzheimers? What about helping an animal from going extinct? For many people there's a desire to help with causes like these. Those people could donate money to the cause, fundraise, or spread the word about the cause they're passionate about. However, what if there was a third option? What if you could directly help one of the causes you're passionate about? That's what our platform aims to be. One where anyone  could contribute to the scientific community and be a direct impact on the causes they're passionate about. Further writeup can be found on my Medium post:

https://medium.com/p/595fd39dd214/edit

Built in collaboration with:
https://github.com/AnniePawl

### What does it do?
Users will be able to create projects and look for other users to collaborate with. 

As an API the following options exist:

* /:category - at the moment the current options are astronomy, biology, chemistry, computer science, environmental, engineering, physics, psychology. This will display all projects for their respective categories
* /projects/new - create a new project
* /projects/:id - view a single project based on ID given. ID is an object
* /projects/:id/edit - edit a single project based on ID given
* /sign-up - create a new user
* /login - login
* /logout - logout, cookies are cleared

A test user and project can be found in the "test" folder.

### Installation
Clone the repo and enter the following commands in the terminal:

```sh
$ npm install
$ mongod
$ nodemon server.js
```

### Tech

Datask uses a number of open source projects to work properly:

* [bcryptjs]
* [body-parser]
* [cookie-parser]
* [dotenv]
* [express]
* [express-handlebars]
* [handlebars]
* [jsonwebtoken]
* [mongodb]
* [mongoose]
* [nodemon]
* [eslint-config-airbnb]
* [mocha]
* [chai]

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Running the tests
```sh
$ npm test
```

### Todos

 - Write MORE Tests
 - Add user routes
 - 

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[bcryptjs]: https://www.npmjs.com/package/bcryptjs
[body-parser]: https://www.npmjs.com/package/body-parser
[cookie-parser]: https://www.npmjs.com/package/cookie-parser
[dotenv]: https://github.com/motdotla/dotenv
[express]: <http://expressjs.com>
[express-handlebars]: https://www.npmjs.com/package/express-handlebars
[handlebars]: https://handlebarsjs.com/
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken
[mongodb]: https://www.mongodb.com/
[mongoose]: https://mongoosejs.com/
[nodemon]: https://nodemon.io/
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb-base
[mocha]: https://mochajs.org/
[chai]: https://www.chaijs.com/
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
