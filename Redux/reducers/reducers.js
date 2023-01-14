export const lightModeState = (state = true, action) => {
    switch (action.type) {
        case "light":
            return true;
        case "dark":
            return false;
        default:
            return state;
    }
};