export class SettingsValue<T> {
    private value: T;

    constructor(private key: string, private defaultValue: T = null) {
    }

    get(): T {
        if (this.value === undefined) {
            let item = sessionStorage.getItem(this.key); 

            if (item === null) {
                item = localStorage.getItem(this.key);
            }

            if (item === null) {
                this.value = this.defaultValue;
            } else {
                this.value = JSON.parse(item);
            }
        }

        return this.value;
    }

    set(value: T) {
        if (value === this.value)
            return;

        if (value === this.defaultValue || value === undefined) {
            sessionStorage.removeItem(this.key);
            this.value = this.defaultValue;
        } else {
            sessionStorage.setItem(this.key, JSON.stringify(value));
            this.value = value;
        }
    }
}
