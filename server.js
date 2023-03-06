const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require("react-router-dom/server");
const App = require('./src/App').default;
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${reactApp}</div>`
      )
    )
  });
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});