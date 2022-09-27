// require libraries
const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

const { PositionResourceOptions } = require("./position/position.options");
const { EmailResourceOptions } = require("./email/email.options");
const { CandidateResourceOptions } = require("./candidate/candidate.options");

const emailRoute = require("./email/email.route");

AdminJS.registerAdapter(AdminJSMongoose);

// app config
const config = require("./config");

// init adminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [PositionResourceOptions, EmailResourceOptions, CandidateResourceOptions]
});
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
mongoose.connect(`${config.CONNECTION_STRING}`);

// custom route
app.use(express.json()); // after mounting adminJS route to avoid conflict

app.use("/emails", emailRoute);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "INTERNAL_ERROR" });
});


app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'));