const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');

const sequalize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new sequalizeStore(({
    db: sequalize
  })
)};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequalize.sync({forse: false}).then(() => {
  app.listen(PORT, ()=> console.log(`Now listening art http://localhost:${PORT} `))
});
