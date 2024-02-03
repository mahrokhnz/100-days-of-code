class Chessman {
    name;
    color;
    place;

    initialPlace;

    // movement

    constructor(name, color, initialPlace) {
        this.name = name;
        this.color = color;
        this.place = initialPlace;
        this.initialPlace = initialPlace;
    }
}

export default Chessman;