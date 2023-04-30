window.addEventListener('DOMContentLoaded', () => {
    const keyboard = new Keyboard();
    keyboard.init();
})

class Keyboard {
    constructor() {
        this.keys = [],
        this.changeLanguage = null,
        this.toggleCircle = null,
        this.language = null,
        this.textArea = null,
        this.main = null,
        this.keyboard = null,
        this.keysWrap = null,

        this.keyRow = null,
        this.keyRowOne = null,
        this.keyRowTwo = null,
        this.keyRowThree = null,
        this.keyRowFour = null,

        this.keysObjects = [
            {
              code: 'Backquote',
              enKey: '`',
              ruKey: 'ё',
              enUpt: '~',
              ruUp: 'Ё',
            },
            {
              code: 'Digit1',
              enKey: '1',
              ruKey: '1',
              enUpt: '!',
              ruUp: '!',
            },
            {
              code: 'Digit2',
              enKey: '2',
              ruKey: '2',
              enUpt: '@',
              ruUp: '"',
            },
            {
              code: 'Digit3',
              enKey: '3',
              ruKey: '3',
              enUpt: '#',
              ruUp: '№',
            },
            {
              code: 'Digit4',
              enKey: '4',
              ruKey: '4',
              enUpt: '$',
              ruUp: ';',
            },
            {
              code: 'Digit5',
              enKey: '5',
              ruKey: '5',
              enUpt: '%',
              ruUp: '%',
            },
            {
              code: 'Digit6',
              enKey: '6',
              ruKey: '6',
              enUpt: '^',
              ruUp: ':',
            },
            {
              code: 'Digit7',
              enKey: '7',
              ruKey: '7',
              enUpt: '&',
              ruUp: '?',
            },
            {
              code: 'Digit8',
              enKey: '8',
              ruKey: '8',
              enUpt: '*',
              ruUp: '*',
            },
            {
              code: 'Digit9',
              enKey: '9',
              ruKey: '9',
              enUpt: '(',
              ruUp: '(',
            },
            {
              code: 'Digit0',
              enKey: '0',
              ruKey: '0',
              enUpt: ')',
              ruUp: ')',
            },
            {
              code: 'Minus',
              enKey: '-',
              ruKey: '-',
              enUpt: '_',
              ruUp: '_',
            },
            {
              code: 'Equal',
              enKey: '=',
              ruKey: '=',
              enUpt: '+',
              ruUp: '+',
            },
            {
              code: 'Backspace',
              enKey: 'Bs',
              ruKey: 'Bs',
            },

            {
              code: 'Tab',
              enKey: 'Tab',
              ruKey: 'Tab',
            },
            {
              code: 'KeyQ',
              enKey: 'q',
              ruKey: 'й',
              enUpt: 'Q',
              ruUp: 'Й',
            },
            {
              code: 'KeyW',
              enKey: 'w',
              ruKey: 'ц',
              enUpt: 'W',
              ruUp: 'Ц',
            },
            {
              code: 'KeyE',
              enKey: 'e',
              ruKey: 'у',
              enUpt: 'E',
              ruUp: 'У',
            },
            {
              code: 'KeyR',
              enKey: 'r',
              ruKey: 'к',
              enUpt: 'R',
              ruUp: 'К',
            },
            {
              code: 'KeyT',
              enKey: 't',
              ruKey: 'е',
              enUpt: 'T',
              ruUp: 'Е',
            },
            {
              code: 'KeyY',
              enKey: 'y',
              ruKey: 'н',
              enUpt: 'Y',
              ruUp: 'Н',
            },
            {
              code: 'KeyU',
              enKey: 'u',
              ruKey: 'г',
              enUpt: 'U',
              ruUp: 'Г',
            },
            {
              code: 'KeyI',
              enKey: 'i',
              ruKey: 'ш',
              enUpt: 'I',
              ruUp: 'Ш',
            },
            {
              code: 'KeyO',
              enKey: 'o',
              ruKey: 'щ',
              enUpt: 'O',
              ruUp: 'Щ',
            },
            {
              code: 'KeyP',
              enKey: 'p',
              ruKey: 'з',
              enUpt: 'P',
              ruUp: 'З',
            },
            {
              code: 'BracketLeft',
              enKey: '[',
              ruKey: 'х',
              enUpt: '{',
              ruUp: 'Х',
            },
            {
              code: 'BracketRight',
              enKey: ']',
              ruKey: 'ъ',
              enUpt: '}',
              ruUp: 'Ъ',
            },
            {
              code: 'Backslash',
              enKey: '\\',
              ruKey: '\\',
              enUpt: '|',
              ruUp: '/',
            },
            {
              code: 'Delete',
              enKey: 'Del',
              ruKey: 'Del',
            },

            {
              code: 'CapsLock',
              enKey: 'CLock',
              ruKey: 'CLock',
            },
            {
              code: 'KeyA',
              enKey: 'a',
              ruKey: 'ф',
              enUpt: 'A',
              ruUp: 'Ф',
            },
            {
              code: 'KeyS',
              enKey: 's',
              ruKey: 'ы',
              enUpt: 'S',
              ruUp: 'Ы',
            },
            {
              code: 'KeyD',
              enKey: 'd',
              ruKey: 'в',
              enUpt: 'D',
              ruUp: 'В',
            },
            {
              code: 'KeyF',
              enKey: 'f',
              ruKey: 'а',
              enUpt: 'F',
              ruUp: 'А',
            },
            {
              code: 'KeyG',
              enKey: 'g',
              ruKey: 'п',
              enUpt: 'G',
              ruUp: 'П',
            },
            {
              code: 'KeyH',
              enKey: 'h',
              ruKey: 'р',
              enUpt: 'H',
              ruUp: 'Р',
            },
            {
              code: 'KeyJ',
              enKey: 'j',
              ruKey: 'о',
              enUpt: 'J',
              ruUp: 'О',
            },
            {
              code: 'KeyK',
              enKey: 'k',
              ruKey: 'л',
              enUpt: 'K',
              ruUp: 'Л',
            },
            {
              code: 'KeyL',
              enKey: 'l',
              ruKey: 'д',
              enUpt: 'L',
              ruUp: 'Д',
            },
            {
              code: 'Semicolon',
              enKey: ';',
              ruKey: 'ж',
              enUpt: ':',
              ruUp: 'Ж',
            },
            {
              code: 'Quote',
              enKey: "'",
              ruKey: 'э',
              enUpt: '"',
              ruUp: 'Э',
            },
            {
              code: 'Enter',
              enKey: 'Enter',
              ruKey: 'Enter',
            },

            {
              code: 'ShiftLeft',
              enKey: 'Shift',
              ruKey: 'Shift',
            },
            {
              code: 'KeyZ',
              enKey: 'z',
              ruKey: 'я',
              enUpt: 'Z',
              ruUp: 'Я',
            },
            {
              code: 'KeyX',
              enKey: 'x',
              ruKey: 'ч',
              enUpt: 'X',
              ruUp: 'Ч',
            },
            {
              code: 'KeyC',
              enKey: 'c',
              ruKey: 'с',
              enUpt: 'C',
              ruUp: 'С',
            },
            {
              code: 'KeyV',
              enKey: 'v',
              ruKey: 'м',
              enUpt: 'V',
              ruUp: 'М',
            },
            {
              code: 'KeyB',
              enKey: 'b',
              ruKey: 'и',
              enUpt: 'B',
              ruUp: 'И',
            },
            {
              code: 'KeyN',
              enKey: 'n',
              ruKey: 'т',
              enUpt: 'N',
              ruUp: 'Т',
            },
            {
              code: 'KeyM',
              enKey: 'm',
              ruKey: 'ь',
              enUpt: 'M',
              ruUp: 'Ь',
            },
            {
              code: 'Comma',
              enKey: ',',
              ruKey: 'б',
              enUpt: '<',
              ruUp: 'Б',
            },
            {
              code: 'Period',
              enKey: '.',
              ruKey: 'ю',
              enUpt: '>',
              ruUp: 'Ю',
            },
            {
              code: 'Slash',
              enKey: '/',
              ruKey: '.',
              enUpt: '?',
              ruUp: ',',
            },
            {
              code: 'ArrowUp',
              enKey: '▲',
              ruKey: '▲',
            },
            {
              code: 'ShiftRight',
              enKey: 'Shift',
              ruKey: 'Shift',
            },

            {
              code: 'ControlLeft',
              enKey: 'Ctrl',
              ruKey: 'Ctrl',
            },
            {
              code: 'MetaLeft',
              enKey: 'Win',
              ruKey: 'Win',
            },
            {
              code: 'AltLeft',
              enKey: 'Alt',
              ruKey: 'Alt',
            },
            {
              code: 'Space',
              enKey: ' ',
              ruKey: ' ',
            },
            {
              code: 'ArrowLeft',
              enKey: '◄',
              ruKey: '◄',
            },
            {
              code: 'ArrowDown',
              enKey: '▼',
              ruKey: '▼',
            },
            {
              code: 'ArrowRight',
              enKey: '►',
              ruKey: '►',
            },
            {
              code: 'ControlRight',
              enKey: 'Ctrl',
              ruKey: 'Ctrl',
            },

          ];
    }

    init() {
        //DOM

        this.main = document.createElement('div');
        this.main.className = 'container';
        document.body.appendChild(this.main);

        this.changeLanguage = document.createElement('div');
        this.changeLanguage.className = 'change-language';
        this.main.appendChild(this.changeLanguage);

        this.toggleCircle = document.createElement('div');
        this.toggleCircle.className = 'toggle-circle';
        this.changeLanguage.appendChild(this.toggleCircle);

        this.language = document.createElement('div');
        this.language.className = 'language';
        this.language.innerText = 'english';
        this.changeLanguage.appendChild(this.language);

        this.keyboard = document.createElement('div');
        this.keyboard.className = 'keyboard-wrapp';
        this.main.appendChild(this.keyboard);

        this.keysWrap = document.createElement('div');
        this.keysWrap.className = 'keyboard-keys';
        this.keyboard.appendChild(this.keysWrap);

        this.keyRows = document.createElement('div')
        this.keyRows.className = 'row';
        this.keysWrap.appendChild(this.keyRows);
        this.keyRowsOne = document.createElement('div')
        this.keyRowsOne.className = 'row-one';
        this.keysWrap.appendChild(this.keyRowsOne);
        this.keyRowsTwo = document.createElement('div')
        this.keyRowsTwo.className = 'row-two';
        this.keysWrap.appendChild(this.keyRowsTwo);
        this.keyRowsThree = document.createElement('div')
        this.keyRowsThree.className = 'row-three';
        this.keysWrap.appendChild(this.keyRowsThree);
        this.keyRowsFour = document.createElement('div')
        this.keyRowsFour.className = 'row-four';
        this.keysWrap.appendChild(this.keyRowsFour);

        this.textArea = document.createElement('input');
        this.textArea.setAttribute('type', 'text');
        // this.textArea.setAttribute('readonly', 'readonly');
        this.textArea.className = 'text';
        this.main.appendChild(this.textArea);

        //Keys

        const allKeys = this.keysObjects;

        let arr = allKeys.slice(0, 14);
        let arrOne = allKeys.slice(14, 29);
        let arrTwo = allKeys.slice(29, 42);
        let arrThree = allKeys.slice(42, 55);
        let arrFour = allKeys.slice(55, allKeys.length);

        function addKey(arrElem, elem) {
            if(elem.classList.contains('shift-active') || elem.classList.contains('caps-active')) {
                elem.innerText = arrElem.enUpt;
            } else if(elem.classList.contains('ru-active')) {
                elem.innerText = arrElem.ruKey;
            } else if(elem.classList.contains('ru-active') && (elem.classList.contains('shift-active') || elem.classList.contains('caps-active'))) {
                elem.innerText = arrElem.ruUp;
            } else {
                elem.innerText = arrElem.enKey;
            }
        }

        arr.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data", key.code);
            keyElement.className = 'keys';

            keyElement.innerText = key.enKey;

            if(key.code === "Backspace") {
                keyElement.className = "keys backspace-key";
            }

            this.keyRows.appendChild(keyElement);
        })
        arrOne.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data", key.code);
            keyElement.className = 'keys';

            keyElement.innerText = key.enKey;

            if(key.code === "Tab") {
                keyElement.className = "keys tab-key";
            }

            this.keyRowsOne.appendChild(keyElement);
        });
        arrTwo.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data", key.code);
            keyElement.className = 'keys';

            keyElement.innerText = key.enKey;

            if(key.code === "CapsLock") {
                keyElement.className = "keys caps-lock-key";
            } else if(key.code === "Enter") {
                keyElement.className = "keys enter-key";
            }

            this.keyRowsTwo.appendChild(keyElement);
        });
        arrThree.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data", key.code);
            keyElement.className = 'keys';

            keyElement.innerText = key.enKey;

            if(key.code === "ShiftRight") {
                keyElement.className = "keys shift-key shift-right";
            }
            if(key.code === "ShiftLeft") {
                keyElement.className = "keys shift-key shift-left";
            }

            this.keyRowsThree.appendChild(keyElement);
        });
        arrFour.forEach(key => {
            const keyElement = document.createElement('button');
            keyElement.setAttribute("type", "button");
            keyElement.setAttribute("data", key.code);
            keyElement.className = 'keys';

            keyElement.innerText = key.enKey;

            if(key.code === "ControlLeft" || key.code === "ControlRight") {
                keyElement.className = "keys ctrl-key";
            } else if(key.code === "MetaLeft") {
                keyElement.className = "keys win-key";
            } else if(key.code === "AltLeft" || key.code === "AltRight") {
                keyElement.className = "keys alt-key";
            } else if(key.code === "Space") {
                keyElement.className = "keys space-key";
            }

            this.keyRowsFour.appendChild(keyElement);
        });

        //EventListener
        let keys = document.querySelectorAll('.keys');
        let spaceKey = document.querySelector('.space-key');
        let shiftLeft = document.querySelector('.shift-left');
        let shiftRight = document.querySelector('.shift-right');
        let metaKey = document.querySelector('.win-key');
        let ctrlKey = document.querySelector('.ctrl-key');
        let capsLock = document.querySelector('.caps-lock-key');
        let toggleCircle = document.querySelector('.toggle-circle');
        let body = document.querySelector('body');
        let textInput = document.querySelector('.text');
        let changeLanguage = document.querySelector('.change-language');
        let value = '';
        let upper = 0;
        let pressed = 0;

        for(let i = 0; i < keys.length; i++) {
            keys[i].setAttribute('keyname', keys[i].innerText);
            keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
        };

        window.addEventListener('keydown', (e) => {
            for(let i = 0; i < keys.length; i++) {
                if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
                    keys[i].classList.add('active')
                }
                if(e.code == 'MetaLeft') {
                    metaKey.classList.add('active')
                }
                if(e.code == 'Space') {
                    spaceKey.classList.add('active')
                }
                if(e.code == 'ControlLeft') {
                    ctrlKey.classList.add('active')
                }
                if(e.code == 'ShiftLeft') {
                    shiftRight.classList.remove('active');
                    upper = 1;
                }
                if(e.code == 'ShiftRight') {
                    shiftLeft.classList.remove('active');
                    upper = 1;
                }

                if((e.code == 'ShiftLeft' || e.code == 'ShiftRight') && e.target.classList.contains('ru-active') && upper === 1) {
                    console.log('ru')
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('shift-active');
                        if(keys[j].classList.contains('shift-active')) {
                            keys[j].innerText = this.keysObjects[j].ruUp ? this.keysObjects[j].ruUp : this.keysObjects[j].ruKey;
                        } else {
                            keys[j].classList.remove('shift-active');
                            keys[j].innerText = this.keysObjects[j].ruKey;
                        }
                    }
                }
                if((e.code == 'ShiftLeft' || e.code == 'ShiftRight') && !e.target.classList.contains('ru-active') && upper === 1) {
                    console.log('en')
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('shift-active');
                        if(keys[j].classList.contains('shift-active')) {
                            keys[j].innerText = this.keysObjects[j].enUpt ? this.keysObjects[j].enUpt : this.keysObjects[j].enKey;
                        } else {
                            keys[j].classList.remove('shift-active');
                            keys[j].innerText = this.keysObjects[j].enKey;
                        }
                    }
                }

                if(e.code == 'CapsLock') {
                    capsLock.classList.toggle('active');
                    capsLock.classList.toggle('caps');
                    upper = 1;
                }

                if(e.code == 'CapsLock' && e.target.classList.contains('ru-active') && upper === 1) {
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('caps-active');
                        if(keys[j].classList.contains('caps-active')) {
                            keys[j].innerText = this.keysObjects[j].ruUp ? this.keysObjects[j].ruUp : this.keysObjects[j].ruKey;
                        } else {
                            keys[j].innerText = this.keysObjects[j].ruKey;
                        }
                    }
                    upper = 0;
                }

                if(e.code == 'CapsLock' && !e.target.classList.contains('ru-active') && upper === 1) {
                        for(let j = 0; j < keys.length; j++) {
                            keys[j].classList.toggle('caps-active');
                            if(keys[j].classList.contains('caps-active')) {
                                keys[j].innerText = this.keysObjects[j].enUpt ? this.keysObjects[j].enUpt : this.keysObjects[j].enKey;
                            } else {
                                keys[j].innerText = this.keysObjects[j].enKey;
                            }
                        }
                        upper = 0;

                }
            }
        });

        window.addEventListener('keyup', (e) => {
            for(let i = 0; i < keys.length; i++) {
                if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
                    keys[i].classList.remove('active')
                    keys[i].classList.add('remove')
                }
                if(e.code == 'MetaLeft') {
                    metaKey.classList.remove('active');
                    metaKey.classList.add('remove');
                }
                if(e.code == 'Space') {
                    spaceKey.classList.remove('active');
                    spaceKey.classList.add('remove');
                }
                if(e.code == 'ControlLeft') {
                    ctrlKey.classList.remove('active')
                }
                if(e.code == 'ShiftLeft') {
                    shiftRight.classList.remove('active');
                    shiftRight.classList.remove('remove');
                    pressed = 1;
                    upper = 0;
                }
                if(e.code === 'AltLeft' && pressed === 1) {
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('ru-active');
                        if(keys[j].classList.contains('ru-active')) {
                            keys[j].innerText = this.keysObjects[j].ruKey;
                            this.language.innerText = 'русский';
                        } else {
                            keys[j].innerText = this.keysObjects[j].enKey;
                            this.language.innerText = 'english';
                        }
                        pressed = 0;
                    }
                }
                if(e.code == 'ShiftRight' || e.code == 'ShiftLeft') {
                    shiftLeft.classList.remove('active');
                    shiftLeft.classList.remove('remove');
                    upper = 0;
                }

                if((e.code == 'ShiftLeft' || e.code == 'ShiftRight') && upper === 0) {
                    console.log('ru')
                    for(let j = 0; j < keys.length; j++) {
                        if(keys[j].classList.contains('ru-active')) {
                            keys[j].classList.remove('shift-active');
                            keys[j].innerText = this.keysObjects[j].ruKey;
                        } else {
                            keys[j].classList.remove('shift-active');
                            keys[j].innerText = this.keysObjects[j].enKey;
                        }
                    }
                }

                setTimeout(()=> {
                    keys[i].classList.remove('remove')
                },200)
            }
        });

        window.addEventListener('mousedown', (e) => {
            if(e.target.getAttribute('keyname') === 'Shift') {
                upper = 1;
            }

            if(e.target.getAttribute('keyname') === 'Shift' && e.target.classList.contains('ru-active') && upper === 1) {
                for(let j = 0; j < keys.length; j++) {
                    keys[j].classList.add('shift-active');
                    if(keys[j].classList.contains('shift-active')) {
                        keys[j].innerText = this.keysObjects[j].ruUp ? this.keysObjects[j].ruUp : this.keysObjects[j].ruKey;
                    } else {
                        keys[j].innerText = this.keysObjects[j].ruKey;
                    }
                }
            }

            if(e.target.getAttribute('keyname') === 'Shift' && !e.target.classList.contains('ru-active') && upper === 1) {
                for(let j = 0; j < keys.length; j++) {
                    keys[j].classList.add('shift-active');
                    if(keys[j].classList.contains('shift-active')) {
                        keys[j].innerText = this.keysObjects[j].enUpt ? this.keysObjects[j].enUpt : this.keysObjects[j].enKey;
                    } else {
                        keys[j].innerText = this.keysObjects[j].enKey;
                    }
                }
            }
        })

        window.addEventListener('mouseup', (e) => {
            if(e.target.getAttribute('keyname') === 'Shift' && e.target.classList.contains('ru-active') && upper === 1) {
                for(let j = 0; j < keys.length; j++) {
                    keys[j].classList.remove('shift-active');
                    keys[j].innerText = this.keysObjects[j].ruKey;
                }
            }

            if(e.target.getAttribute('keyname') === 'Shift' && !e.target.classList.contains('ru-active') && upper === 1) {
                for(let j = 0; j < keys.length; j++) {
                    keys[j].classList.remove('shift-active');
                    keys[j].innerText = this.keysObjects[j].enKey;
                }
            }
            upper = 0;
        });

        changeLanguage.addEventListener('click', () => {
            this.language.classList.toggle('active');
            toggleCircle.classList.toggle('active');
            changeLanguage.classList.toggle('active');
            textInput.classList.toggle('active');

            for(let i = 0; i < keys.length; i++) {
                keys[i].classList.toggle('keys-night');
                keys[i].classList.toggle('ru-active');
                if(keys[i].classList.contains('ru-active')) {
                    keys[i].innerText = this.keysObjects[i].ruKey;
                    this.language.innerText = 'русский';
                } else {
                    keys[i].innerText = this.keysObjects[i].enKey;
                    this.language.innerText = 'english';
                }
            }
        })

        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                key.classList.remove('remove');
                key.classList.add('active');
                if(key.classList.contains('caps-lock-key')) {
                    key.classList.toggle('caps');
                }
                if(key.getAttribute('data') === 'ShiftLeft' || key.getAttribute('data') === 'ShiftRight') {
                    upper = 1;
                } else if(key.getAttribute('data') === 'CapsLock') {
                    upper = 1;
                }
                value += key.innerText;

                if(key.getAttribute('data') === 'ShiftLeft') {
                    shiftRight.classList.remove('active');
                    shiftRight.classList.remove('remove');
                    pressed = 1;
                }

                if(key.getAttribute('data') === 'AltLeft' && pressed === 1) {
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('ru-active');
                        if(keys[j].classList.contains('ru-active')) {
                            keys[j].innerText = this.keysObjects[j].ruKey;
                            this.language.innerText = 'русский';
                        } else {
                            keys[j].innerText = this.keysObjects[j].enKey;
                            this.language.innerText = 'english';
                        }
                        pressed = 0;
                    }
                }

                if(key.getAttribute('data') === 'CapsLock' && key.classList.contains('ru-active') && upper === 1) {
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('caps-active');
                        if(keys[j].classList.contains('caps-active')) {
                            keys[j].innerText = this.keysObjects[j].ruUp ? this.keysObjects[j].ruUp : this.keysObjects[j].ruKey;
                        } else {
                            keys[j].innerText = this.keysObjects[j].ruKey;
                        }
                        upper = 0;
                    }
                }

                if(key.getAttribute('data') === 'CapsLock' && upper === 1) {
                    for(let j = 0; j < keys.length; j++) {
                        keys[j].classList.toggle('caps-active');
                        if(keys[j].classList.contains('caps-active')) {
                            keys[j].innerText = this.keysObjects[j].enUpt ? this.keysObjects[j].enUpt : this.keysObjects[j].enKey;
                        } else {
                            keys[j].innerText = this.keysObjects[j].enKey;
                        }
                        upper = 0;
                    }
                }
            });
            key.addEventListener('mouseleave', () => {
                key.classList.remove('active');
                key.classList.add('remove');
            });
        });

        if(capsLock.classList.contains('keys-night') && capsLock.classList.contains('caps')) {
            capsLock.style.backgroundColor = '#adadad';
            capsLock.style.color = '#000000;';
        }

    }

    addKeys() {
        this.keysWrap = document.createElement('div');
        this.keysWrap.className = 'keyboard-keys';
        this.keyboard.appendChild(this.keysWrap);

        this.keyRows = document.createElement('div')
        this.keyRows.className = 'row';
        this.keysWrap.appendChild(this.keyRows);
        this.keyRowsOne = document.createElement('div')
        this.keyRowsOne.className = 'row-one';
        this.keysWrap.appendChild(this.keyRowsOne);
        this.keyRowsTwo = document.createElement('div')
        this.keyRowsTwo.className = 'row-two';
        this.keysWrap.appendChild(this.keyRowsTwo);
        this.keyRowsThree = document.createElement('div')
        this.keyRowsThree.className = 'row-three';
        this.keysWrap.appendChild(this.keyRowsThree);
        this.keyRowsFour = document.createElement('div')
        this.keyRowsFour.className = 'row-four';
        this.keysWrap.appendChild(this.keyRowsFour);
    }
}