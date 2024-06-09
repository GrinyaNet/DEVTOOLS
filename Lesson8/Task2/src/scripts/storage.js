export const setItem = (key, value) => {
    //Object.assign(storage, { [key]: value });
    localStorage.setItem(key, JSON.stringify(value));
};

//export const getItem = key => storage[key];
export const getItem = key => JSON.parse(localStorage.getItem(key));