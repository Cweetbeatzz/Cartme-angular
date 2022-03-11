const Users = require("../Models/Users");

//#######################################################
const vertifyIfUserIsAdmin = async (req, res, next) => {};
//#######################################################
const vertifyIfUserIsClient = async (req, res, next) => {};
//#######################################################
const vertifyIfUserIsOfficial = async (req, res, next) => {};
//#######################################################

module.exports = {
  vertifyIfUserIsAdmin,
  vertifyIfUserIsClient,
  vertifyIfUserIsOfficial,
};
