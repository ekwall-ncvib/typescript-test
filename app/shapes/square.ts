import { Point } from "./point";

export class Square {

    private points: Point[];

    public get Points(): Point[] {
        return this.points;
    }

    constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
        this.points = [p1, p2, p3, p4];
    }
}
