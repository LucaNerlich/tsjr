class Circle {
    constructor(x, y, radius, context, color = "red", line_width = 2) {
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.draw = () => {
            this.context.save();
            this.context.beginPath();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.lineWidth;
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.restore();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
        this.context = context;
    }
}
//# sourceMappingURL=Circle.js.map