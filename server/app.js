var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { graphqlHTTP } = require("express-graphql");
const cors = require('cors');
const firebase = require("firebase");


const firebaseConfig = {
    apiKey: "AIzaSyAN6RGs98SjeIE6ZP4dlGH247NqddpJak4",
    authDomain: "phonebook-34c59.firebaseapp.com",
    databaseURL: "https://phonebook-34c59-default-rtdb.firebaseio.com",
    projectId: "phonebook-34c59",
    storageBucket: "phonebook-34c59.appspot.com",
    messagingSenderId: "665604432601",
    appId: "1:665604432601:web:dd80dee3dfc2dcbdfb14c8",
    measurementId: "G-XMVW1EW4WC"
  };
firebase.initializeApp(firebaseConfig);

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);

const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));

module.exports = app;
