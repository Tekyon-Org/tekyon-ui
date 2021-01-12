/**
 * Tekyon UI
 * Standard message structure
*/

export var Message = (type, data) => {
    return {
        tui: true,
        t: type,
        data: data
    };
};