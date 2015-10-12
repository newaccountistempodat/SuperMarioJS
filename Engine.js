function Player(sprite, x, y, size) {
	this.sprite = sprite;
	this.x = x;
	this.y = y;
	this.Dx = 0;
	this.Dy = 0;
	this.size = size;
	this.draw = function(ctx) {
		this.sprite.draw(ctx,this.x,this.y,this.size);
	};
	this.update = function(canvas) {
		this.Dy++;
		if (this.Dy >= 30) this.Dy = 30;
		this.x += this.Dx;
		this.y += this.Dy;
		if (this.y >= canvas.width) this.y = 0;
	}
}