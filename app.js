// require libraries
const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

const { PositionResourceOptions } = require("./position/position.options");
const { EmailResourceOptions } = require("./email/email.options")

AdminJS.registerAdapter(AdminJSMongoose);

// app config
const config = require("./config");

// init adminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [PositionResourceOptions, EmailResourceOptions]
});
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);

mongoose.connect(`${config.CONNECTION_STRING}`);

app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'));