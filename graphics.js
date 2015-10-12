function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(col) {
    return "#" + componentToHex(col[0]) + componentToHex(col[1]) + componentToHex(col[2]);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

var baseCols = ["#020202",
                "#555555",
                "#aaaaaa",
                "#ffffff"]

function SpriteSheet(img) {
    this.img = img;
}

function getImageFromSource(src) {
    var img = new Image();
    img.src = src;
    return img;
}

function canvasFromImg(img) {
    var _c = document.createElement('canvas');
    _c.width = img.width;
    _c.height = img.height;
    _c.getContext("2d").drawImage(img,0,0);
    return _c;
}

function Sprite(sheet,x,y,w,h,col) {
    this.sheet = sheet;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = crop(this.sheet.img,this.x,this.y,this.w,this.h);
    this.col = col;
    this.colored = colorImg(this.img,this.col);
    this.draw = function(ctx,x,y,size) {
        ctx.drawImage(this.colored,0,0,this.w,this.h,x,y,this.w*size,this.h*size);
    }
}

function colorImg(img, col) {
    var _c = canvasFromImg(img);
    var _ctx = _c.getContext("2d");
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var pd = _ctx.getImageData(x,y,1,1).data;
            var c = col[baseCols.indexOf(rgbToHex(pd))];
            if (c === "empty") continue;
            _ctx.fillStyle = c;
            _ctx.fillRect(x,y,1,1);
        }
    }
    return getImageFromSource(_c.toDataURL());
}

function crop(img,x,y,w,h) {
    var _c = document.createElement("canvas");
    _c.width = w;
    _c.height = h;
    _c.getContext("2d").drawImage(img,x,y,w,h,0,0,w,h);
    return getImageFromSource(_c.toDataURL());
}