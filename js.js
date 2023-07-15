const sliderLine = document.querySelector('.slider-line');
let prevBut = document.querySelector('.button-prev');
let nextBut = document.querySelector('.button-next');
let dots = document.querySelectorAll('.dot');
let position = 0, dotIndex = 0;
let current = 0;
console.log(dots)

let b = [1, 2, 3]

const nextSlide = () => {
	if (position < (dots.length - 1) * 800) {
		dotIndex++;
		let timerId = setInterval(step, 50);
		setTimeout(() => { clearInterval(timerId); }, 2500);
		nextBut.disabled = 'yes';
	}
	else {
		dotIndex = 0;
		position = 0;
		sliderLine.style.left = -position + "px";
	}
	dots.forEach((dot) => {
		dot.setAttribute("disabled", "disabled");
		setTimeout(dots_worck, 2600);

	});
	setTimeout(btn_next, 2600);
	thisSlide(dotIndex);

}
const prevSlide = () => {
	if (position > 0) {
		let timerIdback = setInterval(stepBack, 50);
		dotIndex--;
		prevBut.disabled = 'yes';
		setTimeout(() => { clearInterval(timerIdback); }, 2500);
	}
	else {
		position = (dots.length - 1) * 800;
		dotIndex = (dots.length - 1);
		sliderLine.style.left = -position + "px";

	}
	dots.forEach((dot) => {
		dot.setAttribute("disabled", "disabled");
		setTimeout(dots_worck, 2600);

	});
	thisSlide(dotIndex);
	setTimeout(btn_back, 2600);
}

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		position = current * 800;
		nextBut.disabled = 'yes';
		prevBut.disabled = 'yes';
		setTimeout(btn_next, 2600);
		setTimeout(btn_back, 2600);
		let timerIdbackk = setInterval(point, 50, index, current);
		setTimeout(() => { clearInterval(timerIdbackk); }, 2500);
		dots.forEach((dot) => {
			dot.setAttribute("disabled", "disabled");
			setTimeout(dots_worck, 2600);

		});


	});
});

function point(index, current) {
	position += 16 * (index - current);
	sliderLine.style.left = -position + 'px';
	dotIndex = index;
	thisSlide(dotIndex);
	console.log(current);

}
function sayHi() {
	console.log(current + ' hello');
}
setInterval(sayHi, 5000)
prevBut.addEventListener('click', prevSlide);
nextBut.addEventListener('click', nextSlide);
function btn_next() {
	nextBut.removeAttribute('disabled');
}
function btn_back() {
	prevBut.removeAttribute('disabled');
}

function dots_worck() {
	dots.forEach((dot, index) => {
		dot.removeAttribute('disabled');
	});
}
const thisSlide = (index) => {
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	dots[index].classList.add('active');
	current = index;
}
function step() {
	position += 16;
	sliderLine.style.left = -position + "px";
}
function stepBack() {
	position -= 16;
	sliderLine.style.left = -position + "px";
}














