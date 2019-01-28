import { Point } from "./point";

export class Square {
    private points: Point[];

    // constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
    //     this.points = [p1, p2, p3, p4];
    // }
    constructor(points: Point[]) {
        this.points = points;
    }

    public get Points(): Point[] {
        return this.points;
    }

    public clone(): Square {
        const points: Point[] = this.points.map((point) => point.clone());
        const square: Square = new Square(points);

        return square;
    }

    public draw(context: CanvasRenderingContext2D) {
        this.points.forEach((point) => this.offsetToCenter(point, context.canvas));
        const first = this.points[0];
        context.moveTo(first.x, first.y);

        this.points.forEach((point) => {
            context.lineTo(point.x, point.y);
        });
        context.lineTo(first.x, first.y);
        context.stroke();
    }

    public zoom(factor: number): void {
        this.points.forEach((point) => point.zoom(factor));
    }

    public changePerspective(distance: number) {
        this.points.forEach((point) => point.changePerspective(distance));
    }

    private offsetToCenter(point: Point, canvas: HTMLCanvasElement) {
        point.x += canvas.width / 2;
        point.y += canvas.height / 2;
    }
}
