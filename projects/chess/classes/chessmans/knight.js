import Chessman from "./chessman.js";

class Knight extends Chessman {

    constructor(color, first = false) {
        const column = first ? 'b' : 'g';
        const row = color === 'Black' ? '8' : '1';

        const knightIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M89.75 195.2c7.849 0 13.87-6.619 13.87-13.97c0-3.581-1.416-7.122-3.991-9.78C96.93 168.9 93.33 167.5 89.7 167.5c-7.556 0-13.83 6.145-13.83 13.9C75.88 189 81.1 195.1 89.75 195.2zM313.6 435.2L288 416v-30.12c10.25-13.63 15.88-30.12 16-47.12V232.6C304 139.6 228.4 64 135.4 64H55.38C25.02 64-.0433 88.92-.0433 119.6c0 6.22 1.043 12.48 3.168 18.5C1 144.5 0 151.1 0 157.8v84.75C0 268 14.38 291.4 37 303c-21.32 29.94-20.88 61.54-20.88 62.21c0 16.67 5.481 33.03 15.88 46.42V416l-25.62 19.25C2.375 438.2 0 443 0 448v48C0 504.9 7.125 512 16 512h288c8.875 0 16-7.125 16-16V448C320 443 317.6 438.2 313.6 435.2zM48.01 119.6C48.01 115.2 51.47 112 55.38 112h80C201.8 112 256 166.2 256 232.6v106.1c0 8.5-3.375 16.62-9.375 22.62L240 368H64.75c-.0968-1.645-.4933-3.291-.4933-4.936c0-1.975 1.253-38.11 46.24-58.44l34.88-10.87C154.3 289.8 160 280.9 160 271.2V222.9L132.9 227.6c-3.875 2-6.625 5.5-7.75 9.625L119.5 256.2C115.1 270.8 94.67 273.5 92.5 273.5c-2.625 0-5.25-.625-7.75-1.75l-25-11.13C52.62 257.5 48 250.4 48 242.5V157.8c0-7.375 4.375-10.63 9.875-16L49.12 124.1C48.35 122.5 48.01 121 48.01 119.6zM48 464l32-24V416h160v24l32 24H48z"/></svg>'

        super('Knight', color, knightIcon,`${column}${row}`);
    }
}

export default Knight;