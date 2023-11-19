require("dotenv").config();

const triggerError404 = require("./errors/404.js");
const triggerError400 = require("./errors/400.js");
const triggerError401 = require("./errors/401.js");
const triggerError5xx = require("./errors/5xx.js");

async function main() {
  console.log("STARTING APPLICATION");
  
  // await triggerError400();
  // await triggerError401();
  // await triggerError404();
  await triggerError5xx();
}

main();
