const sass = require('node-sass')

module.exports = (data, file) => {
  return sass.renderSync({
    data,
    file,
    outputStyle: 'compressed'
  }).css.toString('utf8')
}