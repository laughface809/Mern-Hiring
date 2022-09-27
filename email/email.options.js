const { Email } = require("./email.model");
const EmailResourceOptions = {
  resource: Email,
  options: {
    properties: {
      body: {
       type: "richtext",
      }
    }
  },
}
module.exports = {
  EmailResourceOptions
}