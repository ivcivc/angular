import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { DxTemplateHost } from './dx.template-host';
export declare class RenderData {
    model: any;
    itemIndex: number;
    container: any;
}
export declare class DxTemplateDirective {
    private templateRef;
    private viewContainerRef;
    private templateHost;
    childView: EmbeddedViewRef<any>;
    name: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, templateHost: DxTemplateHost);
    private _renderCore(renderData);
    templateAsFunction(model: any, itemIndex: any, container: any): void;
    _normalizeArguments(model: any, itemIndex: any, container: any): RenderData;
    render(renderData: RenderData): any;
    dispose(): void;
    owner(): any;
    source(): any;
    dxTemplateOf: any;
}
export declare class DxTemplateModule {
}
