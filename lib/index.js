'use strict';

const Subtext = require('subtext');

const middlewareFactory = module.exports = (options) => {

  options = options || {};
  options.parse = options.parse === undefined ? true : options.parse;
  options.output = options.output === undefined ? 'data' : options.output; 

  return (req, res, next) => Subtext.parse(req, null, options, (err, parsed) => {

    if (err) {
      next(err);
    }

    req.body = parsed.payload;
    
    next();
  });
};