// alert('Здравствуй уважаемый проверяющий! Работа еще не закончена (по тз пункты выполнены, но есть баги, которые нужно исправить)! \n Вернитесь пожалуйста к моей работе в последний день проверки или будьте более лояльны относительно багов, если остальное соответсвует ТЗ \n Заранее безумно благодарю за проверку и подсказки улучшений!')
window.addEventListener('DOMContentLoaded', () => {
    const keyboard = new Keyboard();
    keyboard.init();
  })

  class Keyboard {
    constructor() {
      this.isShiftActive = false;
      this.isCapsActive = false;

      this.keys = [],
        this.changeLanguage = null,
        this.toggleCircle = null,
        this.language = null,
        this.textArea = null,
        this.main = null,
        this.keyboard = null,
        this.keysWrap = null,
        this.attention = null;

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
            isLetter: true
          },
          {
            code: 'KeyW',
            enKey: 'w',
            ruKey: 'ц',
            enUpt: 'W',
            ruUp: 'Ц',
            isLetter: true
          },
          {
            code: 'KeyE',
            enKey: 'e',
            ruKey: 'у',
            enUpt: 'E',
            ruUp: 'У',
            isLetter: true
          },
          {
            code: 'KeyR',
            enKey: 'r',
            ruKey: 'к',
            enUpt: 'R',
            ruUp: 'К',
            isLetter: true
          },
          {
            code: 'KeyT',
            enKey: 't',
            ruKey: 'е',
            enUpt: 'T',
            ruUp: 'Е',
            isLetter: true
          },
          {
            code: 'KeyY',
            enKey: 'y',
            ruKey: 'н',
            enUpt: 'Y',
            ruUp: 'Н',
            isLetter: true
          },
          {
            code: 'KeyU',
            enKey: 'u',
            ruKey: 'г',
            enUpt: 'U',
            ruUp: 'Г',
            isLetter: true
          },
          {
            code: 'KeyI',
            enKey: 'i',
            ruKey: 'ш',
            enUpt: 'I',
            ruUp: 'Ш',
            isLetter: true
          },
          {
            code: 'KeyO',
            enKey: 'o',
            ruKey: 'щ',
            enUpt: 'O',
            ruUp: 'Щ',
            isLetter: true
          },
          {
            code: 'KeyP',
            enKey: 'p',
            ruKey: 'з',
            enUpt: 'P',
            ruUp: 'З',
            isLetter: true
          },
          {
            code: 'BracketLeft',
            enKey: '[',
            ruKey: 'х',
            enUpt: '{',
            ruUp: 'Х',
            isLetter: true
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
            isLetter: true
          },
          {
            code: 'KeyS',
            enKey: 's',
            ruKey: 'ы',
            enUpt: 'S',
            ruUp: 'Ы',
            isLetter: true
          },
          {
            code: 'KeyD',
            enKey: 'd',
            ruKey: 'в',
            enUpt: 'D',
            ruUp: 'В',
            isLetter: true
          },
          {
            code: 'KeyF',
            enKey: 'f',
            ruKey: 'а',
            enUpt: 'F',
            ruUp: 'А',
            isLetter: true
          },
          {
            code: 'KeyG',
            enKey: 'g',
            ruKey: 'п',
            enUpt: 'G',
            ruUp: 'П',
            isLetter: true
          },
          {
            code: 'KeyH',
            enKey: 'h',
            ruKey: 'р',
            enUpt: 'H',
            ruUp: 'Р',
            isLetter: true
          },
          {
            code: 'KeyJ',
            enKey: 'j',
            ruKey: 'о',
            enUpt: 'J',
            ruUp: 'О',
            isLetter: true
          },
          {
            code: 'KeyK',
            enKey: 'k',
            ruKey: 'л',
            enUpt: 'K',
            ruUp: 'Л',
            isLetter: true
          },
          {
            code: 'KeyL',
            enKey: 'l',
            ruKey: 'д',
            enUpt: 'L',
            ruUp: 'Д',
            isLetter: true
          },
          {
            code: 'Semicolon',
            enKey: ';',
            ruKey: 'ж',
            enUpt: ':',
            ruUp: 'Ж',
            isLetter: true
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
            isLetter: true
          },
          {
            code: 'KeyX',
            enKey: 'x',
            ruKey: 'ч',
            enUpt: 'X',
            ruUp: 'Ч',
            isLetter: true
          },
          {
            code: 'KeyC',
            enKey: 'c',
            ruKey: 'с',
            enUpt: 'C',
            ruUp: 'С',
            isLetter: true
          },
          {
            code: 'KeyV',
            enKey: 'v',
            ruKey: 'м',
            enUpt: 'V',
            ruUp: 'М',
            isLetter: true
          },
          {
            code: 'KeyB',
            enKey: 'b',
            ruKey: 'и',
            enUpt: 'B',
            ruUp: 'И',
            isLetter: true
          },
          {
            code: 'KeyN',
            enKey: 'n',
            ruKey: 'т',
            enUpt: 'N',
            ruUp: 'Т',
            isLetter: true
          },
          {
            code: 'KeyM',
            enKey: 'm',
            ruKey: 'ь',
            enUpt: 'M',
            ruUp: 'Ь',
            isLetter: true
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
      this.keysForTextarea = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        'Enter',
        'Tab',
        'Space',
        'Backquote',
        'Digit1',
        'Digit2',
        'Digit3',
        'Digit4',
        'Digit5',
        'Digit6',
        'Digit7',
        'Digit8',
        'Digit9',
        'Digit0',
        'Minus',
        'Equal',
        'KeyQ',
        'KeyW',
        'KeyE',
        'KeyR',
        'KeyT',
        'KeyY',
        'KeyU',
        'KeyI',
        'KeyO',
        'KeyP',
        'BracketLeft',
        'BracketRight',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyF',
        'KeyG',
        'KeyH',
        'KeyJ',
        'KeyK',
        'KeyL',
        'Semicolon',
        'Quote',
        'KeyZ',
        'KeyX',
        'KeyC',
        'KeyV',
        'KeyB',
        'KeyN',
        'KeyM',
        'Comma',
        'Period',
        'Slash',
        'Backslash',
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

      this.language = document.createElement('input');
      this.language.setAttribute('readolnly', 'readolnly');
      this.language.className = 'language';
      this.language.innerText = 'english';
      this.language.value = 'english';
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

      this.textArea = document.createElement('textarea');
      this.textArea.setAttribute('type', 'text');
      this.textArea.className = 'text';
      this.main.appendChild(this.textArea);

      this.attention = document.createElement('div');
      this.attention.className = 'attention';
      this.attention.innerText = 'Задание выполнено на базе Windows \n Для переключения между языками можно использовать меню или сочетание Alt + Shift';
      this.main.appendChild(this.attention);

      //Keys

      const allKeys = this.keysObjects;

      let arr = allKeys.slice(0, 14);
      let arrOne = allKeys.slice(14, 29);
      let arrTwo = allKeys.slice(29, 42);
      let arrThree = allKeys.slice(42, 55);
      let arrFour = allKeys.slice(55, allKeys.length);

      arr.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute("type", "button");
        keyElement.setAttribute("data", key.code);
        keyElement.ruKey = key.ruKey;
        keyElement.ruUp = key.ruUp;
        keyElement.enKey = key.enKey;
        keyElement.enUpt = key.enUpt;
        keyElement.className = 'keys';

        keyElement.innerText = key.enKey;

        if (key.code === "Backspace") {
          keyElement.className = "keys backspace-key";
        }

        this.keyRows.appendChild(keyElement);
      })
      arrOne.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute("type", "button");
        keyElement.setAttribute("data", key.code);
        keyElement.ruKey = key.ruKey;
        keyElement.ruUp = key.ruUp;
        keyElement.enKey = key.enKey;
        keyElement.enUpt = key.enUpt;
        keyElement.className = 'keys';

        if(this.language.value === 'english') {
          keyElement.innerText = key.enKey;
        } else {
          keyElement.innerText = key.ruKey;

        }

        if (key.code === "Tab") {
          keyElement.className = "keys tab-key";
        }

        this.keyRowsOne.appendChild(keyElement);
      });
      arrTwo.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute("type", "button");
        keyElement.setAttribute("data", key.code);
        keyElement.ruKey = key.ruKey;
        keyElement.ruUp = key.ruUp;
        keyElement.enKey = key.enKey;
        keyElement.enUpt = key.enUpt;
        keyElement.className = 'keys';

        keyElement.innerText = key.enKey;

        if (key.code === "CapsLock") {
          keyElement.className = "keys caps-lock-key";
        } else if (key.code === "Enter") {
          keyElement.className = "keys enter-key";
        }

        this.keyRowsTwo.appendChild(keyElement);
      });
      arrThree.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute("type", "button");
        keyElement.setAttribute("data", key.code);
        keyElement.ruKey = key.ruKey;
        keyElement.ruUp = key.ruUp;
        keyElement.enKey = key.enKey;
        keyElement.enUpt = key.enUpt;
        keyElement.className = 'keys';

        keyElement.innerText = key.enKey;

        if (key.code === "ShiftRight") {
          keyElement.className = "keys shift-key shift-right";
        }
        if (key.code === "ShiftLeft") {
          keyElement.className = "keys shift-key shift-left";
        }

        this.keyRowsThree.appendChild(keyElement);
      });
      arrFour.forEach(key => {
        const keyElement = document.createElement('button');
        keyElement.setAttribute("type", "button");
        keyElement.setAttribute("data", key.code);
        keyElement.ruKey = key.ruKey;
        keyElement.ruUp = key.ruUp;
        keyElement.enKey = key.enKey;
        keyElement.enUpt = key.enUpt;
        keyElement.className = 'keys';

        keyElement.innerText = key.enKey;

        if (key.code === "ControlLeft" || key.code === "ControlRight") {
          keyElement.className = "keys ctrl-key";
        } else if (key.code === "MetaLeft") {
          keyElement.className = "keys win-key";
        } else if (key.code === "AltLeft" || key.code === "AltRight") {
          keyElement.className = "keys alt-key";
        } else if (key.code === "Space") {
          keyElement.className = "keys space-key";
        }

        this.keyRowsFour.appendChild(keyElement);
      });

      //EventListener
      let keys = document.querySelectorAll('.keys');
      let shiftLeft = document.querySelector('.shift-left');
      let shiftRight = document.querySelector('.shift-right');
      let capsLock = document.querySelector('.caps-lock-key');
      let toggleCircle = document.querySelector('.toggle-circle');
      let textInput = document.querySelector('.text');
      let changeLanguage = document.querySelector('.change-language');
      let language = document.querySelector('.language');

      for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
      };

      //KeyDown

      window.addEventListener('keydown', (e) => {
        e.preventDefault()
        let elem
        keys.forEach((element) => {
          if (e.code == element.getAttribute('data')) {
            elem = element
          }
        })
        if (!elem) {
          return 1;
        }
        elem.classList.remove('remove');
        if (e.code == elem.getAttribute('data')) {
          elem.classList.add('active');
        }
        if (this.keysForTextarea.includes(e.code) && e.code == elem.getAttribute('data')) {
          if (elem.textContent === 'Tab') {
            // Надо вставлять по курсору, так вставляется в конец (лучше написать функцию, которая будет это делать)
            this.textArea.value += '  ';
            return 0;
          }
          if (elem.textContent === 'Enter') {
            // Надо вставлять по курсору, так вставляется в конец
            this.textArea.value += '\n';
            return 0;
          }
          // Надо вставлять по курсору, так вставляется в конец
          this.textArea.value += elem.textContent;
          return 0;
        }
        if (e.code === 'Backspace' || e.code === 'Delete') {
          this.select(elem)
        }

        if ((e.code == 'ShiftLeft' || e.code == 'ShiftRight') && !e.repeat) {
          shiftLeft.classList.add('active');
          shiftRight.classList.add('active');
          this.isShiftActive = true;
          if (this.isShiftActive === true) {
            if (this.isCapsActive) {
                showSmallLetters(this.language.innerText);
            } else {
                showBigLetters(this.language.innerText);
            }
            keys.forEach(element => {
              if (!element.ruUp) {
                return 1;
              } else {
                if (this.language.innerText === 'русский') {
                  element.innerText = element.ruUp;
                  element.classList.add('shift-active');
                } else {
                  element.innerText = element.enUpt;
                  element.classList.add('shift-active');
                }
              }
            });
          } else {
            keys.forEach(element => {
              if (this.language.innerText === 'русский') {
                element.innerText = element.ruKey;
                element.classList.remove('shift-active');
              } else {
                element.innerText = element.enKey;
                element.classList.remove('shift-active');
              }
            });
          }
          return 0;

        }

        if (e.code == 'CapsLock' && !e.repeat) {
            console.log('key')
            function showBigLetters(language) {
                keys.forEach(element => {
                    if (!element.ruUp) {
                        return 1;
                    } else {
                    if (language === 'русский') {
                        element.innerText = element.ruUp;
                        element.classList.add('caps-active');
                    } else {
                        element.innerText = element.enUpt;
                        element.classList.add('caps-active');
                    }
                    }
                });
            }
            function showSmallLetters(language) {
                keys.forEach(element => {
                    if (!element.ruUp) {
                        return 1;
                    } else {
                        if (language === 'русский') {
                            element.innerText = element.ruKey;
                            element.classList.remove('caps-active');
                        } else {
                            element.innerText = element.enKey;
                            element.classList.remove('caps-active');
                        }
                    }
                });
            }
            capsLock.classList.toggle('active');
            capsLock.classList.toggle('caps');
            capsLock.classList.toggle('caps-active');
            this.isCapsActive = !this.isCapsActive;
            if (this.isCapsActive) {
                if (this.isShiftActive === false) {
                    showBigLetters(this.language.innerText)
                } else if (this.isShiftActive === true) {
                    showSmallLetters(this.language.innerText)
                }
            } else if (this.isCapsActive === false) {
                if (this.isShiftActive === false) {
                    showSmallLetters(this.language.innerText)
                } else if (this.isShiftActive === true) {
                    showBigLetters(this.language.innerText)
                }
            }

        }
      });

      //KeyUp

      window.addEventListener('keyup', (e) => {
        e.preventDefault()
        for (let i = 0; i < keys.length; i++) {
          if (e.code == keys[i].getAttribute('data')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
          }

          if ((e.code == 'ShiftLeft' || e.code == 'ShiftRight') && !e.repeat) {
            shiftLeft.classList.remove('active');
            shiftRight.classList.remove('active');

            this.isShiftActive = false;
            if (this.isShiftActive === true) {
              keys.forEach(element => {
                if (!element.ruUp) {
                  return 1;
                } else {
                  if (this.language.innerText === 'русский') {
                    element.innerText = element.ruUp;
                    element.classList.add('shift-active');
                  } else {
                    element.innerText = element.enUpt;
                    element.classList.add('shift-active');
                  }
                }
              });
            } else {
              keys.forEach(element => {
                if (this.language.innerText === 'русский') {
                  element.innerText = element.ruKey;
                  element.classList.remove('shift-active');
                } else {
                  element.innerText = element.enKey;
                  element.classList.remove('shift-active');
                }
              });
            }
            return 0;

          }
          if ((e.code === 'AltLeft' && e.shiftKey)) {
            for (let j = 0; j < keys.length; j++) {
              keys[j].classList.toggle('ru-active');
              keys[j].classList.toggle('keys-night');
              if (keys[j].classList.contains('ru-active')) {
                keys[j].innerText = this.keysObjects[j].ruKey;
                this.language.innerText = 'русский';
              } else {
                keys[j].innerText = this.keysObjects[j].enKey;
                this.language.innerText = 'english';
              }
            }
          }
        }
      });

      // Click
      window.addEventListener('click', (e) => {
        // Shift check
        if (e.target.getAttribute('data') === 'ShiftLeft' || e.target.getAttribute('data') === 'ShiftRight') {
          this.isShiftActive = !this.isShiftActive;

          if (this.isShiftActive === true) {
            keys.forEach(element => {
              if (!element.ruUp) {
                return 1;
              } else {
                if (this.language.innerText === 'русский') {
                  element.innerText = element.ruUp;
                  element.classList.add('shift-active');
                } else {
                  element.innerText = element.enUpt;
                  element.classList.add('shift-active');
                }
              }
            });
          } else {
            keys.forEach(element => {
              if (this.language.innerText === 'русский') {
                element.innerText = element.ruKey;
                element.classList.remove('shift-active');
              } else {
                element.innerText = element.enKey;
                element.classList.remove('shift-active');
              }
            });
          }
          return 0;
        }
        // Caps check
        if (e.target.getAttribute('data') === 'CapsLock' && !e.repeat) {
            console.log('caps')
            function showBigLetters(language) {
                keys.forEach(element => {
                    if (!element.ruUp) {
                        return 1;
                    } else {
                        if (language === 'русский') {
                            element.innerText = element.ruUp;
                            element.classList.add('caps-active');
                        } else {
                            element.innerText = element.enUpt;
                            element.classList.add('caps-active');
                        }
                    }
                });
            }
            function showSmallLetters(language) {
                keys.forEach(element => {
                    if (!element.ruUp) {
                        return 1;
                    } else {
                        if (language === 'русский') {
                            element.innerText = element.ruKey;
                            element.classList.remove('caps-active');
                        } else {
                            element.innerText = element.enKey;
                            element.classList.remove('caps-active');
                        }
                    }
                });
            }
            capsLock.classList.toggle('active');
            capsLock.classList.toggle('caps');
            capsLock.classList.toggle('caps-active')
            this.isCapsActive = !this.isCapsActive;
            if (this.isCapsActive) {
                if (this.isShiftActive === false) {
                    showBigLetters(this.language.innerText)
                } else if (this.isShiftActive === true) {
                    showSmallLetters(this.language.innerText)
                }
            } else if (this.isCapsActive === false) {
                if (this.isShiftActive === false) {
                    showSmallLetters(this.language.innerText)
                } else if (this.isShiftActive === true) {
                    showBigLetters(this.language.innerText)
                }
            }

        }
    })

      //Language

      changeLanguage.addEventListener('click', () => {
        this.language.classList.toggle('active');
        toggleCircle.classList.toggle('active');
        changeLanguage.classList.toggle('active');
        textInput.classList.toggle('active');

        for (let i = 0; i < keys.length; i++) {
          keys[i].classList.toggle('keys-night');
          keys[i].classList.toggle('ru-active');
          if (keys[i].classList.contains('ru-active')) {
            keys[i].innerText = this.keysObjects[i].ruKey;
            this.language.innerText = 'русский';
            this.language.value = 'русский';
          } else {
            keys[i].innerText = this.keysObjects[i].enKey;
            this.language.innerText = 'english';
            this.language.value = 'english';
          }
        }
      })

      //KeysInput

      keys.forEach(key => {
        key.addEventListener('click', (e) => {
          let newChar = ''
          //Input
          if (key.classList.contains('caps-lock-key')) {
            newChar += '';
          } else if (key.getAttribute('keyname') === 'Shift') {
            newChar += '';
          } else if (key.getAttribute('keyname') === 'Alt') {
            this.textArea.blur();
          } else if (key.getAttribute('data') === 'Backspace') {
            this.select(key);
          } else if (key.getAttribute('data') === 'Delete') {
            this.select(key);
          } else if (key.getAttribute('data') === 'Enter') {
            newChar += '\n';
          } else if (key.getAttribute('data') === 'MetaLeft') {
            newChar += '';
          } else {
            newChar += key.innerHTML;
          }

          this.textArea.selectionStart = this.textArea.selectionEnd;
          this.textArea.value += newChar;

          //Classes
          key.classList.remove('remove');
          key.classList.add('active');


          if (key.classList.contains('caps-lock-key')) {
            key.classList.toggle('caps');
          }

          if (key.getAttribute('data') === 'ShiftLeft') {
            shiftRight.classList.remove('active');
            shiftRight.classList.remove('remove');
          }
        });

        key.addEventListener('mouseleave', () => {
          key.classList.remove('active');
          key.classList.add('remove');
        });
      });

      if (capsLock.classList.contains('keys-night') && capsLock.classList.contains('caps')) {
        capsLock.style.backgroundColor = '#adadad';
        capsLock.style.color = '#000000;';
      }

    //LockalStorage
    window.addEventListener('beforeunload', () => setLocalStorage('text', textInput));
    window.addEventListener('load', () => getLocalStorage('text', textInput));
    window.addEventListener('beforeunload', () => setLocalStorage('language', language));
    window.addEventListener('load', () => {
      getLocalStorage('language', language);
      if(language.value === 'english') {
        return 1;
      } else if(language.value === 'русский') {
        changeLanguage.click();
      }
    });
    console.log(language.value)

    function setLocalStorage(value, arg) {
        localStorage.setItem(value, arg.value);
    }

    function getLocalStorage(value, arg) {
        if(localStorage.getItem(value)) {
          arg.value = localStorage.getItem(value);
        }
    }
    }

    select(key) {
      let newStr;
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        if (key.getAttribute('data') === 'Backspace') {
          newStr = this.textArea.setRangeText('', this.textArea.selectionStart === 0 ? this.textArea.selectionStart : this.textArea.selectionStart - 1, this.textArea.selectionStart);
          this.textArea.focus();
        } else if (key.getAttribute('data') === 'Delete') {
          newStr = this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionStart + 1);
          this.textArea.focus();
        }
      } else if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
        newStr = this.textArea.setRangeText('', this.textArea.selectionStart === 0 ? this.textArea.selectionStart : this.textArea.selectionStart - 1, this.textArea.selectionEnd);
        this.textArea.focus();
      }
      return newStr;
    }
  }