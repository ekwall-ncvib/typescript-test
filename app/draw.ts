import { Point } from "./shapes/point";

export function drawPolygon(points: Point[], context: CanvasRenderingContext2D) {
    points.forEach((point) => offsetToCenter(point, context.canvas));
    const first = points[0];

    points.forEach((point) => {
        context.lineTo(point.x, point.y);
    });
    context.lineTo(first.x, first.y);
    context.stroke();
}

function offsetToCenter(point: Point, canvas: HTMLCanvasElement) {
    point.x += canvas.width / 2;
    point.y += canvas.height / 2;
}
