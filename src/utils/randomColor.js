export const randomColor = (colors) => (colors[Math.floor(Math.random()*(colors.length - 1))]);

export const setBgColor = (filter, colors) => {
    return filter ? filter.color : randomColor(colors);
};
