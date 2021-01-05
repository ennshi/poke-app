export const isValidSearchName = (text) => {
    return (text.trim().length && text.match(/^[A-Za-z0-9-]+$/));
};
