import protobuf from 'protobufjs'

export function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export function isArray(value) {
    return Array.isArray(value);
}

export function getTextWidth(content, fontSize) { // 可以尝试canvas的measureText
    const span = document.createElement('span');
    span.innerText = content;
    span.style.fontSize = fontSize + 'px';
    span.style.position = 'absolute';
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
}

export function getTextPosition(canvas, fontSize, ctx) {
    let x = canvas.width;
    let y = canvas.height * Math.random();
    y < fontSize && (y = fontSize);
    y > canvas.height - fontSize && (y = canvas.height - fontSize);
    ctx.X = x;
    ctx.Y = y;
}

export function transformColorDecToHex(color) {
    return parseInt(color, 10).toString(16);
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}