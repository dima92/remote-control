"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureImage = void 0;
var Jimp = require('jimp');
var robot = require('robotjs');
function captureImage() {
    var pic = robot.screen.capture();
    var width = pic.width;
    var height = pic.height;
    var image = new Jimp(width, height);
    var red, green, blue;
    pic.image.forEach(function (byte, i) {
        switch (i % 4) {
            case 0:
                return blue = byte;
            case 1:
                return green = byte;
            case 2:
                return red = byte;
            case 3:
                image.bitmap.data[i - 3] = red;
                image.bitmap.data[i - 2] = green;
                image.bitmap.data[i - 1] = blue;
                image.bitmap.data[i] = 255;
        }
    });
    return image;
}
exports.captureImage = captureImage;
captureImage().write('capture.png');
