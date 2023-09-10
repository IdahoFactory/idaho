const navbar = document.getElementById("navbar"),
	logo = document.getElementById("logo"),
	menu = document.getElementById("menu"),
	navBtns = document.getElementById("navBtns");
window.addEventListener("scroll", (() => {
	window.pageYOffset > 1 ? navbar.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.05)" : navbar.style.boxShadow = "none"
})), logo.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .4,
		scrollTo: 0,
		ease: "power2"
	})
})), menu.addEventListener("click", (function() {
	menu.classList.toggle("open"), navBtns.classList.toggle("open")
}));
let height = screen.height / 3;
const l1 = document.getElementById("l1"),
	l2 = document.getElementById("l2"),
	l3 = document.getElementById("l3"),
	contact = document.getElementById("contact"),
	aboutMe = document.getElementById("aboutMe"),
	socialMedia = document.getElementById("socialMedia"),
	sIcon1 = document.getElementById("sIcon1"),
	sIcon2 = document.getElementById("sIcon2"),
	sIcon3 = document.getElementById("sIcon3");
l1.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .5,
		scrollTo: {
			y: "#aboutMe",
			offsetY: height
		}
	}), menu.classList.remove("open"), navBtns.classList.remove("open"), setTimeout((() => {
		aboutMe.style.fontSize = "1.15rem", aboutMe.style.color = "rgb(1, 97, 187)"
	}), 300), setTimeout((() => {
		aboutMe.style.fontSize = null, aboutMe.style.color = null
	}), 2300)
})), l2.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .5,
		scrollTo: {
			y: "#aboutMe",
			offsetY: height
		}
	}), menu.classList.remove("open"), navBtns.classList.remove("open"), setTimeout((() => {
		sIcon1.style.fontSize = "3.2rem", sIcon1.style.color = "rgb(1, 97, 187)", sIcon2.style.fontSize = "3.2rem", sIcon2.style.color = "rgb(1, 97, 187)", sIcon3.style.fontSize = "3.2rem", sIcon3.style.color = "rgb(1, 97, 187)"
	}), 300), setTimeout((() => {
		sIcon1.style.fontSize = null, sIcon1.style.color = null, sIcon2.style.fontSize = null, sIcon2.style.color = null, sIcon3.style.fontSize = null, sIcon3.style.color = null
	}), 2300)
})), l3.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .5,
		scrollTo: {
			y: "#txt",
			offsetY: 75
		}
	}), menu.classList.remove("open"), navBtns.classList.remove("open")
})), contact.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .5,
		scrollTo: {
			y: "#form",
			offset: 75
		}
	}), menu.classList.remove("open"), navBtns.classList.remove("open")
}));
const myWork = document.getElementById("myWorkBtn");
myWork.addEventListener("click", (function() {
	gsap.to(window, {
		duration: .5,
		scrollTo: {
			y: "#myWork",
			offsetY: 75
		}
	})
}));