import Board from "./board.js";

class App {
    constructor() {
        this.board = new Board();

        this.board.render()
    }
}

export default App;