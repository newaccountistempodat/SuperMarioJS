//a_variable: asset
//s_variable: sprite

var a_sheet;
var s_mario;

function initSprites(sheet) {
	s_mario = new Sprite(sheet,0,0,16,16,["#706800","#d80000","#f8ab00","empty"]);
}

function loadSheet(callback) {
	a_sheet = new Image();
	a_sheet.onload = callback;
	a_sheet.src = "Assets/Spritesheet.png";
}