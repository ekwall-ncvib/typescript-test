import { drawPolygon } from "./app/draw";
import { Cube } from "./app/shapes/cube";
import { Point } from "./app/shapes/point";
import { Square } from "./app/shapes/square";

export class AppModule {
    public start(): void {

        try {
            // const mainDiv: HTMLElement = document.getElementById("mainDiv");
            // mainDiv.innerHTML = "Ready";

            const canvas: HTMLCanvasElement = document.querySelector("canvas");
            const context: CanvasRenderingContext2D = canvas.getContext("2d");
            context.strokeStyle = "#fff";

            const p1: Point = new Point(-50, -50, 0);
            const p2: Point = new Point(50, -50, 0);
            const p3: Point = new Point(50, 50, 0);
            const p4: Point = new Point(-50, 50, 0);
            const square: Square = new Square([p1, p2, p3, p4]);
            const cube: Cube = new Cube(square, 50);

            cube.changePerspective(100);
            cube.zoom(8);
            
            cube.draw(context);

            console.log("done");

        } catch (error) {
            console.log(error);
        }

    }
}
