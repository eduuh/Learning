const movie = require('../../data/movies.json')
  
exports.handlers = async () => {
  return {
     statusCode: 200,
     body: JSON.stringify(movie)
  }  ;
}