export function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export function isArray(value) {
    return Array.isArray(value);
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}