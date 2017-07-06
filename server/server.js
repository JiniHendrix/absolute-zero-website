const express = require('express');
const path = require('path');
const { useWebpackMiddleware } = require('./index.dev.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(/\/(|about|products)\/?$/, express.static(path.resolve(__dirname, '../public')));

if (process.env.NODE_ENV !== 'development') {
  console.log('Production environment');
} else {
  console.log('Development environment');
  useWebpackMiddleware(app);
}

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
