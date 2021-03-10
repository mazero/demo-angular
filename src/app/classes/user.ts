export class User {
    constructor(
        private _num?: number,
        private _firstname?: string, 
        private _lastname?: string
    ) {
    }

    get num(): number {
        return this._num;
    }

    set num(num: number) {
        this._num = num;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(firstname: string) {
        this._firstname = firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(lastname: string) {
        this._lastname = lastname;
    }
}


