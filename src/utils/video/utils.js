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

export function transformColorDecToHex(color) {
    return parseInt(color, 10).toString(16);
}