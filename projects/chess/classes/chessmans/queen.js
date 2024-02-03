import Chessman from "./chessman.js";

class Queen extends Chessman {

    constructor(color) {
        const column = 'd';
        const row = color === 'Black' ? '8' : '1';

        super('Queen', color, `${column}${row}`);
    }
}

export default Queen;