export const randomColor = (colors) => (colors[Math.floor(Math.random()*(colors.length - 1))]);

export const setBgColor = (filter, colors) => {
    return filter ? filter.color : randomColor(colors);
};

export const setTextColor = (labelColor, colorList, baseTextColor, lighterTextColor) => {
    const colorArr = [colorList.GREY, colorList.PURPLE, colorList.BLACK, colorList.GREEN];
    return Object.values(colorArr).includes(labelColor) ? lighterTextColor : baseTextColor;
};
