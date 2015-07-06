var application = require("application");
var trace = require("trace");
application.mainModule = "main-page";
application.cssFile = "./app.css";

trace.enable();
trace.addCategories("Layout");
application.start();
