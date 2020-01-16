// Task 11.
// Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши.

let input = document.querySelector('.input');
let bottomS = document.querySelectorAll ('.bottom');
let caps = 0; 

function func_1(event){
	let key = event.key;


	for (let i = 0; i < bottomS.length; i++){
		if (key == bottomS[i].getAttribute('data-key') && key == 'CapsLock'){
			if (caps < 2){
				caps++;
				bottomS[i].classList.add('active');
			}
		} else if (key == bottomS[i].getAttribute('data-key')){
			bottomS[i].classList.add('active');
		};
	}
}

function func_2(event){
	let key = event.key;

	for (let i = 0; i < bottomS.length; i++){
		if (key == bottomS[i].getAttribute('data-key') && key == 'CapsLock'){
			if (caps == 2){
				bottomS[i].classList.remove('active');
				caps = 0;
			}
		} else if (key == bottomS[i].getAttribute('data-key')){
			bottomS[i].classList.remove('active');
		}
	}
}

input.onkeydown = func_1;
input.onkeyup = func_2;