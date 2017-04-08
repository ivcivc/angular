/// <reference path="../../typings/globals/node/index.d.ts" />
/// <reference path="../../typings/modules/mkdirp/index.d.ts" />
export interface IObjectStore {
    read(name: string): Object;
    write(name: string, data: Object): void;
}
export declare class FSObjectStore implements IObjectStore {
    private _encoding;
    read(filePath: any): any;
    write(filePath: any, data: any): void;
}
export default class DXComponentMetadataGenerator {
    private _store;
    constructor(_store?: IObjectStore);
    generate(config: any): void;
}
