let items = document.querySelectorAll('.grid-item');
let btnArrayRu = "~ 1 2 3 4 5 6 7 8 9 0 - = Backspace Del Tab q w e r t y u i o p [ ] | CapsLock a s d f g h j k l ; ' Enter LShift z x c v b n m , . / RShift up LCtrl Fn Win LAlt Space RAlt RCtrl left down right".split(" ");
let btnArrayEn = "ё 1 2 3 4 5 6 7 8 9 0 - = Backspace Del Tab й ц у к е н г ш щ з х ъ / CapsLock ф ы в а п р о л д ж э Enter LShift я ч с м и т ь б ю . RShift up LCtrl Fn Win LAlt Space RAlt RCtrl left down right".split(" ");

items.forEach((item, index) => {
    item.innerHTML = btnArrayRu[index];
    item.classList.add(btnArrayRu[index]);
});

document.addEventListener('keydown', (event)=>{
    if(event.ctrlKey && event.altKey){
        for( let item of items){
            if(item.classList.contains('ru')){
                item.classList.add('en');
                item.classList.remove('ru');
            }
        }
    };
});

// let counter = 0,
//     word = ['KeyY', 'KeyT', 'KeyN', 'KeyJ','KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];

document.addEventListener('keydown', (event)=>{
    console.log(event.code);
    // if(event.code === word[counter]){
    //     counter++;
    // } else {
    //     counter = 0;
    // }
    // if(counter === 9){
    //     document.getElementsByClassName('secret')[0].classList.toggle('visible');
    // }
});