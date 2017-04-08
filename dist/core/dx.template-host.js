"use strict";
var DxTemplateHost = (function () {
    function DxTemplateHost() {
    }
    DxTemplateHost.prototype.setHost = function (host) {
        this.host = host;
    };
    DxTemplateHost.prototype.setTemplate = function (template) {
        this.host.setTemplate(template);
    };
    return DxTemplateHost;
}());
exports.DxTemplateHost = DxTemplateHost;

//# sourceMappingURL=dx.template-host.js.map
