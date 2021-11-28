export const getHMS = (totalTime) => {
    const h = Math.floor(totalTime / 3600000);
    const m = Math.floor((totalTime - 3600000 * initialHours) / 60000);
    const s = Math.floor((totalTime - (3600000 * initialHours) - 60000 * initialMinutes) / 1000);

    return [h, m, s];
}