// require libraries
const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
AdminJS.registerAdapter(AdminJSMongoose);

// app config
const config = require("./config");

// init adminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
});
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);

mongoose.connect(`${config.CONNECTION_STRING}/${config.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, 
    // Comment this code becasue Mongoose v6 not support and the default value already false. Refer : https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
});

app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'));