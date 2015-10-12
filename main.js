var canvas, ctx, sheet, player;
var PIXEL_SIZE = 2;

window.onload = function() {
	loadSheet(main);
}

function main() {
	canvas = document.createElement("canvas");
	canvas.width = 256 * PIXEL_SIZE;
	canvas.height = 240 * PIXEL_SIZE;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	init();
	tick();
}

function init() {
	sheet = new SpriteSheet(a_sheet);
	initSprites(sheet);
	player = new Player(s_mario,50,50,1);
}

function tick () {
	window.requestAnimationFrame(tick);

	update();
	render();
}

function update() {
	player.update(canvas);
}

function render() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	player.draw(ctx);
}