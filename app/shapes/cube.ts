import { Square } from "./square";

export class Cube {
    private squares: Square[];
    
    constructor(square: Square, depth: number) {
        const square2: Square = square.clone();
        square2.Points.forEach((point) => point.z = point.z + depth);
        this.squares = [square, square2];
        
        this.squares.forEach((x) => console.log(x));
    }
    
    public draw(context: CanvasRenderingContext2D): void {
        this.squares.forEach((square) => square.draw(context));
    }
    
    public zoom(factor: number): void {
        this.squares.forEach((square) => {
            square.zoom(factor);
         });
    }

    public changePerspective(distance: number) {
        this.squares.forEach((square) => {
           square.changePerspective(distance);
        });
    }
}
