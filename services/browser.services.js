import Cookies from 'js-cookie';

export const loadState = (name) => {
	try {
    const serialState = Cookies.get(name);
    if (!serialState) return;
    return JSON.parse(serialState);
	} catch (e) {
		return;
	}
};



export const saveState = (name, state) => {
	try {
    const serialState = JSON.stringify(state);
    Cookies.set(name, serialState, { expires: 7, sameSite: 'strict', secure: true });
	} catch(e) {
		return;
	}
};

export const removeState = (name) => {
	try {
    Cookies.remove(name);
	} catch(e) {
		return;
	}
};