import Chessman from "./chessman.js";

class Rook extends Chessman {

    constructor(color, first = false) {
        const column = first ? 'a' : 'h';
        const row = color === 'Black' ? '8' : '1';

        super('Rook', color, `${column}${row}`);
    }
}

export default Rook;