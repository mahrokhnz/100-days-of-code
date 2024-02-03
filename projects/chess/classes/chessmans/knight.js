import Chessman from "./chessman.js";

class Knight extends Chessman {

    constructor(color, first = false) {
        const column = first ? 'b' : 'g';
        const row = color === 'Black' ? '8' : '1';

        super('Knight', color, `${column}${row}`);
    }
}

export default Knight;