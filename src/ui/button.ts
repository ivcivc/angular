



import {
    Component,
    NgModule,
    ElementRef,
    EventEmitter,
    NgZone,
    Input,
    Output
} from '@angular/core';

import DxButton from 'devextreme/ui/button';


import { DxComponent } from '../core/dx.component';
import { DxTemplateHost } from '../core/dx.template-host';
import { WatcherHelper } from '../core/watcher-helper';


let providers = [];
providers.push(DxTemplateHost, WatcherHelper);


@Component({
    selector: 'dx-button',
    template: '',
    providers: providers
})
export class DxButtonComponent extends DxComponent {
    instance: DxButton;


    @Input()
    get height(): any {
        return this._getOption('height');
    }

    set height(value: any) {
        this._setOption('height', value);
    }

    @Input()
    get rtlEnabled(): any {
        return this._getOption('rtlEnabled');
    }

    set rtlEnabled(value: any) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get width(): any {
        return this._getOption('width');
    }

    set width(value: any) {
        this._setOption('width', value);
    }

    @Input()
    get accessKey(): any {
        return this._getOption('accessKey');
    }

    set accessKey(value: any) {
        this._setOption('accessKey', value);
    }

    @Input()
    get activeStateEnabled(): any {
        return this._getOption('activeStateEnabled');
    }

    set activeStateEnabled(value: any) {
        this._setOption('activeStateEnabled', value);
    }

    @Input()
    get disabled(): any {
        return this._getOption('disabled');
    }

    set disabled(value: any) {
        this._setOption('disabled', value);
    }

    @Input()
    get focusStateEnabled(): any {
        return this._getOption('focusStateEnabled');
    }

    set focusStateEnabled(value: any) {
        this._setOption('focusStateEnabled', value);
    }

    @Input()
    get hint(): any {
        return this._getOption('hint');
    }

    set hint(value: any) {
        this._setOption('hint', value);
    }

    @Input()
    get hoverStateEnabled(): any {
        return this._getOption('hoverStateEnabled');
    }

    set hoverStateEnabled(value: any) {
        this._setOption('hoverStateEnabled', value);
    }

    @Input()
    get tabIndex(): any {
        return this._getOption('tabIndex');
    }

    set tabIndex(value: any) {
        this._setOption('tabIndex', value);
    }

    @Input()
    get visible(): any {
        return this._getOption('visible');
    }

    set visible(value: any) {
        this._setOption('visible', value);
    }

    @Input()
    get icon(): any {
        return this._getOption('icon');
    }

    set icon(value: any) {
        this._setOption('icon', value);
    }

    @Input()
    get iconSrc(): any {
        return this._getOption('iconSrc');
    }

    set iconSrc(value: any) {
        this._setOption('iconSrc', value);
    }

    @Input()
    get template(): any {
        return this._getOption('template');
    }

    set template(value: any) {
        this._setOption('template', value);
    }

    @Input()
    get text(): any {
        return this._getOption('text');
    }

    set text(value: any) {
        this._setOption('text', value);
    }

    @Input()
    get type(): any {
        return this._getOption('type');
    }

    set type(value: any) {
        this._setOption('type', value);
    }

    @Input()
    get useSubmitBehavior(): any {
        return this._getOption('useSubmitBehavior');
    }

    set useSubmitBehavior(value: any) {
        this._setOption('useSubmitBehavior', value);
    }

    @Input()
    get validationGroup(): any {
        return this._getOption('validationGroup');
    }

    set validationGroup(value: any) {
        this._setOption('validationGroup', value);
    }

    @Output() onDisposing: EventEmitter<any>;
    @Output() onInitialized: EventEmitter<any>;
    @Output() onOptionChanged: EventEmitter<any>;
    @Output() onClick: EventEmitter<any>;
    @Output() heightChange: EventEmitter<any>;
    @Output() rtlEnabledChange: EventEmitter<any>;
    @Output() widthChange: EventEmitter<any>;
    @Output() accessKeyChange: EventEmitter<any>;
    @Output() activeStateEnabledChange: EventEmitter<any>;
    @Output() disabledChange: EventEmitter<any>;
    @Output() focusStateEnabledChange: EventEmitter<any>;
    @Output() hintChange: EventEmitter<any>;
    @Output() hoverStateEnabledChange: EventEmitter<any>;
    @Output() tabIndexChange: EventEmitter<any>;
    @Output() visibleChange: EventEmitter<any>;
    @Output() iconChange: EventEmitter<any>;
    @Output() iconSrcChange: EventEmitter<any>;
    @Output() templateChange: EventEmitter<any>;
    @Output() textChange: EventEmitter<any>;
    @Output() typeChange: EventEmitter<any>;
    @Output() useSubmitBehaviorChange: EventEmitter<any>;
    @Output() validationGroupChange: EventEmitter<any>;

    constructor(elementRef: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, private _watcherHelper: WatcherHelper) {

        super(elementRef, ngZone, templateHost, _watcherHelper);
        this.widgetClassName = 'dxButton';
        this._events = [
            { subscribe: 'disposing', emit: 'onDisposing' },
            { subscribe: 'initialized', emit: 'onInitialized' },
            { subscribe: 'optionChanged', emit: 'onOptionChanged' },
            { subscribe: 'click', emit: 'onClick' },
            { emit: 'heightChange' },
            { emit: 'rtlEnabledChange' },
            { emit: 'widthChange' },
            { emit: 'accessKeyChange' },
            { emit: 'activeStateEnabledChange' },
            { emit: 'disabledChange' },
            { emit: 'focusStateEnabledChange' },
            { emit: 'hintChange' },
            { emit: 'hoverStateEnabledChange' },
            { emit: 'tabIndexChange' },
            { emit: 'visibleChange' },
            { emit: 'iconChange' },
            { emit: 'iconSrcChange' },
            { emit: 'templateChange' },
            { emit: 'textChange' },
            { emit: 'typeChange' },
            { emit: 'useSubmitBehaviorChange' },
            { emit: 'validationGroupChange' }
        ];

        this._properties = [
            'this.height',
            'this.rtlEnabled',
            'this.width',
            'this.accessKey',
            'this.activeStateEnabled',
            'this.disabled',
            'this.focusStateEnabled',
            'this.hint',
            'this.hoverStateEnabled',
            'this.tabIndex',
            'this.visible',
            'this.icon',
            'this.iconSrc',
            'this.template',
            'this.text',
            'this.type',
            'this.useSubmitBehavior',
            'this.validationGroup'
        ];

        this.onDisposing = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onOptionChanged = new EventEmitter();
        this.onClick = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.rtlEnabledChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.accessKeyChange = new EventEmitter();
        this.activeStateEnabledChange = new EventEmitter();
        this.disabledChange = new EventEmitter();
        this.focusStateEnabledChange = new EventEmitter();
        this.hintChange = new EventEmitter();
        this.hoverStateEnabledChange = new EventEmitter();
        this.tabIndexChange = new EventEmitter();
        this.visibleChange = new EventEmitter();
        this.iconChange = new EventEmitter();
        this.iconSrcChange = new EventEmitter();
        this.templateChange = new EventEmitter();
        this.textChange = new EventEmitter();
        this.typeChange = new EventEmitter();
        this.useSubmitBehaviorChange = new EventEmitter();
        this.validationGroupChange = new EventEmitter();
    }

    protected _createInstance(element, options) {
        return new DxButton(element, options);
    }

}



@NgModule({
  declarations: [
    DxButtonComponent
  ],
  exports: [
    DxButtonComponent
  ],
})
export class DxButtonModule { }
