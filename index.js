window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

const Keyboard = {
    elements: {
        textArea: null,
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
        this.elements.textArea = document.createElement("textarea");
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        this.elements.textArea.classList.add("keyboard-input");
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard-wrapper");
        this.elements.keysContainer.appendChild(this.createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard-item");

        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.textArea);
        document.body.appendChild(this.elements.main);

        document.querySelectorAll(".keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });

            // document.addEventListener("keydown", (e) => {
            //     if(e.target) {
            //         let elem = e.target.charCodeAt();
            //         document.querySelector('.keyboard-item[data-content=" '+elem+'"]');
            //     }
            // })
        });
    },

    createKeys(num) {
        const fragment = document.createDocumentFragment();
        const keyLayout =
        ["~","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","+","backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","|",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l",";", "'", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
        "ctrl", "alt", "space", "alt", "ctrl"]

        const createIconHTML = (iconName) => {
            return `<i class="icons">${iconName}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "|", "enter", "/"].indexOf(key) !== -1;

            if(key==="Tab" || key==="backspace" || key==="caps" || key==="enter" || key==="shift" || key==="ctrl" || key==="alt" || key==="space"){
                elementCode = 81;
            }
            elementCode = key.charCodeAt();
            keyElement.setAttribute("data", " " + elementCode);
            keyElement.setAttribute("type", "button");
            keyElement.classList.add(`keyboard-item`);


            elementCode = 113;
            elementCode = key.charCodeAt();

            switch (key) {
                case "Tab":
                    keyElement.classList.add("keyboard-item-tab");
                    keyElement.innerHTML = createIconHTML("Tab");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "   ";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "backspace":
                    keyElement.classList.add("keyboard-item-tab");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this.triggerEvent("oninput");
                    });
                    break;

                case "enter":
                    keyElement.classList.add("keyboard-item-caps");
                    keyElement.innerHTML = createIconHTML("Enter");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this.triggerEvent("oninput");
                    });
                    break;

                case "space":
                    keyElement.classList.add("keyboard-item-space");
                    keyElement.innerHTML = createIconHTML("[___]");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this.triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard-item-caps", "keyboard-item-caps-active");
                    keyElement.innerHTML = createIconHTML("CapsLock");

                    keyElement.addEventListener("click", () => {
                        this.toggleCapsLock();
                        keyElement.classList.toggle("keyboard-item-active", this.properties.capsLock);
                    });

                    break;

                case "shift":
                    keyElement.classList.add("keyboard-item-tab");
                    keyElement.innerHTML = createIconHTML("Shift");

                    keyElement.addEventListener("click", () => {
                        this.properties.shift = true;
                    })

                    break;

                case "ctrl":
                    keyElement.classList.add("keyboard-item");
                    keyElement.innerHTML = createIconHTML("Ctrl");
                    break;

                case "alt":
                    keyElement.classList.add("keyboard-item");
                    keyElement.innerHTML = createIconHTML("Alt");

                    keyElement.addEventListener("click", () => {
                        if(num){
                            num = false;
                        }
                        else{
                            num = true;
                        }
                        this.createKeys(num);
                    })

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        if(this.properties.shift){
                            if(key==="1"){ key="!"}
                            else if(key==="2"){ key="@"}
                            else if(key==="3"){ key="#"}
                            else if(key==="4"){ key="$"}
                            else if(key==="5"){ key="%"}
                            else if(key==="6"){ key="^"}
                            else if(key==="7"){ key="&"}
                            else if(key==="8"){ key="*"}
                            else if(key==="9"){ key="("}
                            else if(key==="0"){ key=")"}
                            else if(key==="-"){ key="_"}
                            else if(key==="="){ key="+"}
                            else if(key==="["){ key="{"}
                            else if(key==="]"){ key="}"}
                            this.properties.value += key.toUpperCase();
                            this.triggerEvent("oninput");
                            this.properties.shift = false;
                        }
                        else{
                            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                            this.triggerEvent("oninput");
                        }
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                if(key.textContent==="1"){ key.textContent="!"}
                else if(key.textContent==="!"){ key.textContent="1"}
                if(key.textContent==="2"){ key.textContent="@"}
                else if(key.textContent==="@"){ key.textContent="2"}
                if(key.textContent==="3"){ key.textContent="#"}
                else if(key.textContent==="#"){ key.textContent="3"}
                if(key.textContent==="4"){ key.textContent="$"}
                else if(key.textContent==="$"){ key.textContent="4"}
                if(key.textContent==="5"){ key.textContent="%"}
                else if(key.textContent==="%"){ key.textContent="5"}
                if(key.textContent==="6"){ key.textContent="^"}
                else if(key.textContent==="^"){ key.textContent="6"}
                if(key.textContent==="7"){ key.textContent="&"}
                else if(key.textContent==="&"){ key.textContent="7"}
                if(key.textContent==="8"){ key.textContent="*"}
                else if(key.textContent==="*"){ key.textContent="8"}
                if(key.textContent==="9"){ key.textContent="("}
                else if(key.textContent==="("){ key.textContent="9"}
                if(key.textContent==="0"){ key.textContent=")"}
                else if(key.textContent===")"){ key.textContent="0"}
                if(key.textContent==="-"){ key.textContent="_"}
                else if(key.textContent==="_"){ key.textContent="-"}
                if(key.textContent==="="){ key.textContent="+"}
                else if(key.textContent==="+"){ key.textContent="="}
                if(key.textContent==="["){ key.textContent="{"}
                else if(key.textContent==="{"){ key.textContent="["}
                if(key.textContent==="]"){ key.textContent="}"}
                else if(key.textContent==="}"){ key.textContent="]"}

                // key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }

        }
        this.bindCaps();
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
    }
};
