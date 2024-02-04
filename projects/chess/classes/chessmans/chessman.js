class Chessman {
    name;
    color;
    icon;

    place;
    initialPlace;

    // movement

    constructor(name, color, icon, initialPlace) {
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.place = initialPlace;
        this.initialPlace = initialPlace;
    }
}

export default Chessman;