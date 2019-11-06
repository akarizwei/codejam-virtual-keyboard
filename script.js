
document.body.innerHTML = " <main class=\"wrapper\">\n" +
    "        <textarea name=\"keys\" id=\"text\" cols=\"30\" rows=\"10\" disabled></textarea>\n" +
    "        <div class=\"grid\">\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "            <div class=\"grid-item en\"></div>\n" +
    "        </div>\n" +
    "    </main>\n";


let items = document.querySelectorAll('.grid-item');

let btnArray = [
    {
        code: 'Backquote', ru: 'ё', en: '`', enSpec: '~',
    },
    {
        code: 'Digit1', ru: '1', en: '1', enSpec: '!', ruSpec: '!',
    },
    {
        code: 'Digit2', ru: '2', en: '2', enSpec: '@', ruSpec: '"',
    },
    {
        code: 'Digit3', ru: '3', en: '3', enSpec: '#', ruSpec: '№',
    },
    {
        code: 'Digit4', ru: '4', en: '4', enSpec: '$', ruSpec: ';',
    },
    {
        code: 'Digit5', ru: '5', en: '5', enSpec: '%', ruSpec: '%',
    },
    {
        code: 'Digit6', ru: '6', en: '6', enSpec: '^', ruSpec: ':',
    },
    {
        code: 'Digit7', ru: '7', en: '7', enSpec: '&', ruSpec: '?',
    },
    {
        code: 'Digit8', ru: '8', en: '8', enSpec: '*', ruSpec: '*',
    },
    {
        code: 'Digit9', ru: '9', en: '9', enSpec: '(', ruSpec: '(',
    },
    {
        code: 'Digit0', ru: '0', en: '0', enSpec: ')', ruSpec: ')',
    },
    {
        code: 'Minus', ru: '-', en: '-', enSpec: '_', ruSpec: '_',
    },
    {
        code: 'Equal', ru: '=', en: '=', enSpec: '+', ruSpec: '+',
    },
    {code: 'Backspace', ru: 'Backspace', en: 'Backspace'},
    {code: 'Delete', ru: 'Del', en: 'Del'},
    {code: 'Tab', ru: 'Tab', en: 'Tab'},
    {code: 'KeyQ', ru: 'й', en: 'q'},
    {code: 'KeyW', ru: 'ц', en: 'w'},
    {code: 'KeyE', ru: 'у', en: 'e'},
    {code: 'KeyR', ru: 'к', en: 'r'},
    {code: 'KeyT', ru: 'е', en: 't'},
    {code: 'KeyY', ru: 'н', en: 'y'},
    {code: 'KeyU', ru: 'г', en: 'u'},
    {code: 'KeyI', ru: 'ш', en: 'i'},
    {code: 'KeyO', ru: 'щ', en: 'o'},
    {code: 'KeyP', ru: 'з', en: 'p'},
    {
        code: 'BracketLeft', ru: 'х', en: '[', enSpec: '{',
    },
    {
        code: 'BracketRight', ru: 'ъ', en: ']', enSpec: '}',
    },
    {
        code: 'Backslash', ru: '\\', en: '\\', enSpec: '|', ruSpec: '/',
    },
    {code: 'CapsLock', ru: 'Caps Lock', en: 'Caps Lock'},
    {code: 'KeyA', ru: 'ф', en: 'a'},
    {code: 'KeyS', ru: 'ы', en: 's'},
    {code: 'KeyD', ru: 'в', en: 'd'},
    {code: 'KeyF', ru: 'а', en: 'f'},
    {code: 'KeyG', ru: 'п', en: 'g'},
    {code: 'KeyH', ru: 'р', en: 'h'},
    {code: 'KeyJ', ru: 'о', en: 'j'},
    {code: 'KeyK', ru: 'л', en: 'k'},
    {code: 'KeyL', ru: 'д', en: 'l'},
    {
        code: 'Semicolon', ru: 'ж', en: ';', enSpec: ':',
    },
    {
        code: 'Quote', ru: 'э', en: '"', enSpec: '"',
    },
    {code: 'Enter', ru: 'Enter', en: 'Enter'},
    {code: 'ShiftLeft', ru: 'Shift', en: 'Shift'},
    {code: 'KeyZ', ru: 'я', en: 'z'},
    {code: 'KeyX', ru: 'ч', en: 'x'},
    {code: 'KeyC', ru: 'с', en: 'c'},
    {code: 'KeyV', ru: 'м', en: 'v'},
    {code: 'KeyB', ru: 'и', en: 'b'},
    {code: 'KeyN', ru: 'т', en: 'n'},
    {code: 'KeyM', ru: 'ь', en: 'm'},
    {
        code: 'Comma', ru: 'б', en: ',', enSpec: '<',
    },
    {
        code: 'Dot', ru: 'ю', en: '.', enSpec: '>',
    },
    {
        code: 'Slash', ru: '.', en: '/', enSpec: '?', ruSpec: ',',
    },
    {code: 'ShiftRight', ru: 'Shift', en: 'Shift'},
    {code: 'ArrowUp', ru: '↑', en: '↑'},
    {code: 'ControlLeft', ru: 'Ctrl', en: 'Ctrl'},
    {code: 'Function', ru: 'Fn', en: 'Fn'},
    {code: 'MetaLeft', ru: 'Win', en: 'Win'},
    {code: 'AltLeft', ru: 'Alt', en: 'Alt'},
    {code: 'Space', ru: ' ', en: ' '},
    {code: 'AltRight', ru: 'Alt', en: 'Alt'},
    {code: 'ControlRight', ru: 'Ctrl', en: 'Ctrl'},
    {code: 'ArrowLeft', ru: '←', en: '←'},
    {code: 'ArrowDown', ru: '↓', en: '↓'},
    {code: 'ArrowRight', ru: '→', en: '→'},

];

if(!localStorage.getItem('lang')){
    localStorage.setItem('lang', 'ru');
}


// let lang = 'ru';
let shift = false,
    alt = false;

function ParseKeys() {
    items.forEach((item, index) => {
        item.innerHTML = btnArray[index][`${localStorage.getItem('lang')}`];
        item.classList.add(btnArray[index].code);
    });
}


document.addEventListener('keydown', (event) => {

    if (event.key == 'Shift') {
        shift = true;
    }
    if (event.key == 'Alt') {
        alt = true;
    }
    if (alt == true && shift == true) {
        switch (localStorage.getItem('lang')) {
            case 'ru':
                localStorage.setItem('lang', 'en');
                ParseKeys();
                break;
            case 'en':
                localStorage.setItem('lang', 'ru');
                ParseKeys();
                break;
        }
    }

    let key;

    items.forEach((item, index) => {
        if (item.classList.contains(event.code)) {
            key = item;
            key.index = index;
        }
    });


    if (event.key.length < 2) {
        if (shift){
            if(btnArray[key.index][`${localStorage.getItem('lang')}Spec`] == undefined){
                document.getElementById('text').value += key.innerHTML.toUpperCase();
            } else {
                document.getElementById('text').value += btnArray[key.index][`${localStorage.getItem('lang')}Spec`];
            }
        } else {
            document.getElementById('text').value += key.innerHTML;
        }

    }

    // document.getElementById('text').value += event.key;

    items.forEach((item, index) => {
        if (item.classList.contains(event.code)) {
            item.classList.add('pressed');
        }

    });

});


document.addEventListener('keyup', (event) => {
    if (event.key == 'Shift') {
        shift = false;
    }
    if (event.key == 'Alt') {
        alt = false;
    }
    items.forEach((item, index) => {
        if (item.classList.contains(event.code)) {
            item.classList.remove('pressed');
        }
    });
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('grid-item') && event.target.innerText.length === 1) {
        document.getElementById('text').value += `${event.target.innerText}`;
    }
});
ParseKeys();

