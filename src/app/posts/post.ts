export class Post {
    private _id: number;
    private _userId: number;
    private _title: string;
    private _body: string;

    constructor (id?: number, userId?: number, title?: string, body?: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        if (value && value <= 0)
            throw new Error("id must be a positive number");

        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }
    set userId(value: number) {
        if (value && value <= 0)
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
}
