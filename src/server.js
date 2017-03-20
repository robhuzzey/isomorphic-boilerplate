import path from 'path'
import express from 'express'
import consolidate from 'consolidate';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import Application from './Application';

const app = express();

app.engine('html', consolidate.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <Application />
    </StaticRouter>
  )
  return res.render('index', { markup });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
