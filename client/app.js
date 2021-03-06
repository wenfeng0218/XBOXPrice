//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var util = require('./utils/util.js')
var logger = require('./utils/logger.js')

App( {
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl);
        var log = "App: " +
            util.formatTime(new Date) +
        " App Launched Success.";
        console.log(log);
    }
} )