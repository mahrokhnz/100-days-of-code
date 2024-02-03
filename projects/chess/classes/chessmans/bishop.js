import Chessman from "./chessman.js";

class Bishop extends Chessman {

    constructor(color, first = false) {
        const column = first ? 'c' : 'f';
        const row = color === 'Black' ? '8' : '1';

        super('Bishop', color, `${column}${row}`);
    }
}

export default Bishop;