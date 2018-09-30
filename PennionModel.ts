import { WatchObject } from "./ObjectWatch/ObjectWatch";

export class PennionModel {
    content: any;
    constructor(private _content: string, 
        private _functionAfterObjectChanged: Function) {
        let jsonObject = JSON.parse(_content);
        this.content = WatchObject(jsonObject,  _functionAfterObjectChanged);
    }
}