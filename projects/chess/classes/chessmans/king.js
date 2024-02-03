import Chessman from "./chessman.js";

class King extends Chessman {

    constructor(color) {
        const column = 'e';
        const row = color === 'Black' ? '8' : '1';

        super('King', color, `${column}${row}`);
    }
}

export default King;