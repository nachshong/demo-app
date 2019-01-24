export class Post {
    private _id: number;
    private _userId: number;
    private _title: string;
    private _body: string;
    private _version: number;

    stage: Post;

    constructor (id?: number, userId?: number, title?: string, body?: string, version?: number) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
        this._version = version || 0;
    }

    private checkNumber(value: number | string) {
        if (value === undefined || value === null || value === '') {
            return undefined;
        }

        if (typeof value !== 'number' && (typeof value !== 'string' || Number.isNaN(value = Number(value)))) {
            throw new Error(value + ' is not a number');
        }

        return value;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        value = this.checkNumber(value);

        if (value <= 0)
            throw new Error("id must be a positive number");

        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }
    set userId(value: number) {
        value = this.checkNumber(value);

        if (value <= 0)
            throw new Error("id must be a positive number");

        this._userId = value;
    }

    get title(): string {
        return this._title;
    }
    set title(value: string) {
        if (value && value.length > 100)
            throw new Error("title length must be not greather then 100");

        this._title = value;
    }

    get body(): string {
        return this._body;
    }
    set body(value: string) {
        this._body = value;
    }

    get version(): number {
        return this._version;
    }
    set version(value: number) {
        if (value < 0)
            throw new Error("version must be a natural number");

        this._version = value;
    }
}
