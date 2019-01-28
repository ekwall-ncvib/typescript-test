export class Point {
    private _x: number;
    private _y: number;
    private _z: number;
    
    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    
    public get x(): number {
        return this._x;
    }
    public set x(x: number) {
        this._x = x;
    }
    
    public get y(): number {
        return this._y;
    }
    
    public set y(y: number) {
        this._y = y;
    }
    
    public get z(): number {
        return this._z;
    }
    
    public set z(z: number) {
        this._z = z;
    }
    
    public zoom(factor: number): void {
        const scale: number = Math.pow(factor, 2);
        this.x *= scale;
        this.y *= scale;
    }

    public changePerspective(distance: number) {
        const fov = this.z + distance;
        this.x /= fov;
        this.y /= fov;
    }

    public clone(): Point {
        return new Point(this.x, this.y, this.z);
    }
}
