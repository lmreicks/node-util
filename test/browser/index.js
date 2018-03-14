try {
  require('./inspect');
  require('./is');
  require('./promisify');
  require('./callbackify');
} catch (err) {
  console.log(err.stack || err.message);
  throw err;
}
