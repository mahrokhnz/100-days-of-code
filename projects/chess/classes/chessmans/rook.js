import Chessman from "./chessman.js";

class Rook extends Chessman {

    constructor(color, first = false) {
        const column = first ? 'a' : 'h';
        const row = color === 'Black' ? '8' : '1';
        const rookIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M313.6 435.2L288 416v-24c0-11.12-7.75-20.12-18.12-22.75L264.5 251.5l26.75-20.12c8-6 12.75-15.5 12.75-25.5V96c0-17.62-14.38-32-32-32h-224c-17.62 0-32 14.38-32 32v110C16 216 20.75 225.5 28.75 231.6l26.75 20l-5.375 117.6C39.75 371.9 32 380.9 32 392V416l-25.62 19.25C2.375 438.2 0 443 0 448v48C0 504.9 7.125 512 16 512h288c8.875 0 16-7.125 16-16V448C320 443 317.6 438.2 313.6 435.2zM64 112h40v32h32v-32h48v32h32v-32H256v85.88L215.5 228.5L221.5 368h-123l6-139.6L64 198V112zM48 464l32-24V416h160v24l32 24H48zM184 247.6C184 234.5 173.5 224 160.4 224c-13 0-23.5 10.5-23.5 23.62V288H184V247.6z"/></svg>'

        super('Rook', color, rookIcon, `${column}${row}`);
    }
}

export default Rook;