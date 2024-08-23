import { randomUUID } from "crypto"

export class UniqueID {
    private _value: string;

    constructor(id?: string) {
        this._value = id ?? randomUUID();
    }

    public get value() {
        return this._value;
    }
}