"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dx_template_host_1 = require('./dx.template-host');
var $ = require('jquery');
var RenderData = (function () {
    function RenderData() {
    }
    return RenderData;
}());
exports.RenderData = RenderData;
var DxTemplateDirective = (function () {
    function DxTemplateDirective(templateRef, viewContainerRef, templateHost) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.templateHost = templateHost;
        templateHost.setTemplate(this);
    }
    DxTemplateDirective.prototype._renderCore = function (renderData) {
        var childView = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': renderData.model });
        if (renderData.container) {
            renderData.container.append(childView.rootNodes);
        }
        childView['detectChanges']();
        return $(childView.rootNodes);
    };
    DxTemplateDirective.prototype.templateAsFunction = function (model, itemIndex, container) {
        var renderData = this._normalizeArguments(model, itemIndex, container);
        this.render(renderData);
    };
    DxTemplateDirective.prototype._normalizeArguments = function (model, itemIndex, container) {
        if (container === undefined) {
            if (itemIndex === undefined) {
                container = model;
                model = undefined;
            }
            else if (itemIndex instanceof $) {
                container = itemIndex;
                itemIndex = undefined;
            }
            else {
                container = model;
                model = itemIndex;
            }
        }
        else if (itemIndex instanceof $) {
            var cachedItemIndex = container;
            container = itemIndex;
            itemIndex = cachedItemIndex;
        }
        return {
            model: model,
            itemIndex: itemIndex,
            container: container
        };
    };
    DxTemplateDirective.prototype.render = function (renderData) {
        renderData.container.empty();
        return this._renderCore(renderData);
    };
    DxTemplateDirective.prototype.dispose = function () {
        this.templateHost = null;
    };
    DxTemplateDirective.prototype.owner = function () {
        if (this.templateHost) {
            return this.templateHost.host.instance;
        }
        return null;
    };
    DxTemplateDirective.prototype.source = function () {
        return $();
    };
    Object.defineProperty(DxTemplateDirective.prototype, "dxTemplateOf", {
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    DxTemplateDirective = __decorate([
        core_1.Directive({
            selector: '[dxTemplate]',
            inputs: ['dxTemplate', 'dxTemplateOf']
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef, dx_template_host_1.DxTemplateHost])
    ], DxTemplateDirective);
    return DxTemplateDirective;
}());
exports.DxTemplateDirective = DxTemplateDirective;
var DxTemplateModule = (function () {
    function DxTemplateModule() {
    }
    DxTemplateModule = __decorate([
        core_1.NgModule({
            declarations: [DxTemplateDirective],
            exports: [DxTemplateDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], DxTemplateModule);
    return DxTemplateModule;
}());
exports.DxTemplateModule = DxTemplateModule;

//# sourceMappingURL=dx.template.js.map
