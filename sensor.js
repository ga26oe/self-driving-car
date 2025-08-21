class Sensor {
  constructor(car) {
    this.car = car;
    this.rayCount = 3;
    this.rayLength = 100; // rays extend 100 pixels
    this.raySpread = Math.PI / 4; // 45 degrees spread apart

    this.rays = []; //store ray data in an array
  }

  update() {
    this.rays = []; // clear the array
    for (let i = 0; i < this.rayCount; i++) {
      const rayAngle = lerp(
        this.raySpread / 2,
        -this.raySpread / 2,
        i / (this.rayCount - 1)
      );

      const start = { x: this.car, y: this.car.y };
      const end = {
        x: this.car.x - Math.sin(rayAngle) * this.rayLength,
        y: this.car.y - Math.cos(rayAngle) * this.rayLength,
      };
      this.rays.push([start, end]);
    }
    

    
  }
  draw(ctx){
    for(let i=0;i<this.rayCount;i++){
        ctx.beginPath();
        ctx.lineWidth=2;
        ctx.strokeStyle="yellow";
        ctx.moveTo(
            this.rays[i][0].x,
            this.rays[i][0].y
        );
        ctx.stroke();
    }
  }

  
   
}
