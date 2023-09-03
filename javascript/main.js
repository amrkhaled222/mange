//list code

let burgericon = document.querySelector(".burgerIcon");
let mylist = document.querySelector(".navList");
let xIcon = document.querySelector(".xIcon");
let overlay = document.querySelector(".overlay");

burgericon.onclick = (e) => {
	mylist.classList.toggle("active");
	xIcon.classList.toggle("active");
	overlay.classList.toggle("active");
	burgericon.classList.toggle("active");
};

xIcon.addEventListener("click", () => {
	burgericon.classList.toggle("active");
	mylist.classList.toggle("active");
	xIcon.classList.toggle("active");
	overlay.classList.toggle("active");
});

window.onresize = () => {
	if (window.screen.availWidth > 784) {
		burgericon.classList.remove("active");
		mylist.classList.remove("active");
		xIcon.classList.remove("active");
		overlay.classList.remove("active");
	} else {
		burgericon.classList.add("active");
	}
};
//end list

/* slider code*/
let slide = document.getElementsByClassName("slide");

let slider = (numberofslide) => {
	let el = document.getElementsByClassName("bullet");
	for (let i = 0; i < el.length; i++) {
		el[i].style.listStyle = "circle";
	}
	let xAxis = 100 - numberofslide * 100;
	let gap = 30 - numberofslide * 30;
	document.querySelector(`.slide-${numberofslide}`).style.listStyle = "disc";
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.transform = `translate(calc(${xAxis}% + ${gap}px),0)`;
	}
};
//to make slider always in the right place

let container = document.querySelector(".slidercontainer");
let widthofwindow = screen.width;
if (screen.width <= 784) {
	container.style.transform = `translate(${
		-377.5 + (screen.width - 377.5) / 2
	}px,0 )`;
} else {
	container.style.transform = `translate(${
		-577.5 + (screen.width - 577.5) / 2
	}px,0 )`;
}
window.onresize = () => {
	if (screen.width <= 784) {
		container.style.transform = `translate(${
			-377.5 + (screen.width - 377.5) / 2
		}px,0 )`;
	} else {
		container.style.transform = `translate(${
			-577.5 + (screen.width - 577.5) / 2
		}px,0 )`;
	}
};
let incremental = 1;
function slidee() {
	slider(incremental);
	incremental++;
	if (incremental == 4) {
		incremental = 0;
	}
}
let sliding = setInterval(slidee, 3000);

for (let i = 0; i < slide.length; i++) {
	slide[i].addEventListener("mouseover", () => {
		clearInterval(sliding);
	});
}
for (let i = 0; i < slide.length; i++) {
	slide[i].addEventListener("mouseout", () => {
		sliding = setInterval(slidee, 3000);
	});
}

/* end slider*/

/* email check */
let regexp = /\w+@\w+\.\w+/;

let emailbutton = document.querySelector(".emailchecker"),
	theemail = document.querySelector('[name="email"]'),
	span = document.querySelector(".validationMassege");

emailbutton.onclick = (e) => {
	if (
		theemail.value.match(regexp) == null ||
		theemail.value.match(regexp).length > 1
	) {
		e.preventDefault();
		span.style.display = "inline-block";
		theemail.style.color = "#f3603c";
		theemail.style.border = "3px solid #f3603c";
	}
};
//end email check
