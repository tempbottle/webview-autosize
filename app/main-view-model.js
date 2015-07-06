var observable = require("data/observable");
var platformModule = require("platform");
var DemoModel = (function (_super) {
    __extends(DemoModel, _super);
    function DemoModel() {
        _super.call(this);
        this.set("webViewUrl", "~/myPage.html");
        if (platformModule.device.os == "iOS") {
            this.set("webViewHeight", 100);
            this.set("webViewWidth", 100);
        } else {
            this.set("webViewHeight", "");
            this.set("webViewWidth", "");
        }
    }

    DemoModel.prototype.loadFinished = function(args) {
        if (platformModule.device.os == "iOS") {
//            args.object.requestLayout();
        this.set("webViewHeight", "");
        this.set("webViewWidth", "");
        }
        console.log("Load Finished");
    }
    return DemoModel;
})(observable.Observable);
exports.DemoModel = DemoModel;
exports.mainViewModel = new DemoModel();
