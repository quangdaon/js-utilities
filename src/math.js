export function constrain(val, min, max) {
    return Math.min(max, Math.max(val, min));
}