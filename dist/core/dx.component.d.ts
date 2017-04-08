import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { DxTemplateDirective } from './dx.template';
import { DxTemplateHost } from './dx.template-host';
import { WatcherHelper } from './watcher-helper';
export declare abstract class DxComponentBase {
    protected element: ElementRef;
    private ngZone;
    private watcherHelper;
    private _initialOptions;
    templates: DxTemplateDirective[];
    widgetClassName: string;
    instance: any;
    protected _events: {
        subscribe?: string;
        emit: string;
    }[];
    protected _properties: string[];
    private _initTemplates();
    private _initOptions();
    private _initEvents();
    protected _getOption(name: string): any;
    protected _setOption(name: string, value: any): void;
    private _initProperties();
    protected abstract _createInstance(element: any, options: any): any;
    protected _createWidget(element: any): void;
    constructor(element: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, watcherHelper: WatcherHelper);
    setTemplate(template: DxTemplateDirective): void;
}
export declare abstract class DxComponent extends DxComponentBase implements AfterViewInit {
    ngAfterViewInit(): void;
}
export declare abstract class DxComponentExtension extends DxComponentBase {
    createInstance(element: any): void;
}
