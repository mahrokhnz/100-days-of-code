import Chessman from "./chessman.js";

class Pawn extends Chessman {

    constructor(color, column) {
        const row = color === 'Black' ? '7' : '2';

        super('Pawn', color, `${column}${row}`);
    }
}

export default Pawn;