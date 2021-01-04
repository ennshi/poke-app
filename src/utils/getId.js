export const getId = (url) => {
    const arr = url.split('/');
    return arr.slice(-2, -1);
};
