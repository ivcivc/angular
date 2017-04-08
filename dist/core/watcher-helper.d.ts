export declare class WatcherHelper {
    private _watchers;
    getWatchMethod(): (valueGetter: any, valueChangeCallback: any, options: any) => () => void;
    private _isElementExpired(element);
    private _isDifferentValues(oldValue, newValue, deepCheck);
    private _checkObjectsFields(checkingFromObject, checkingToObject);
    checkWatchers(): void;
}
