export const getHMS = (totalTime) => {
    const h = Math.floor(totalTime / 3600000);
    const m = Math.floor((totalTime - 3600000 * h) / 60000);
    const s = Math.floor((totalTime - (3600000 * h) - 60000 * s) / 1000);

    return [h, m, s];
}