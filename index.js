window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        capsLock: false,
        shift: false
    },

    init() {

    }
};
