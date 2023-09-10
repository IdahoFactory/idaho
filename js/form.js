const form = document.getElementById("form"),
	name = document.getElementById("nameInput"),
	nameError = document.getElementById("nameError"),
	email = document.getElementById("emailInput"),
	emailError = document.getElementById("emailError"),
	msg = document.getElementById("message"),
	msgError = document.getElementById("msgError"),
	subject = document.getElementById("subjectInput"),
	subjectError = document.getElementById("subjectError"),
	dropdown = document.getElementById("dropdown"),
	icon = document.getElementById("dropdownIcon"),
	reset = document.getElementById("reset"),
	nitro = document.getElementById("nitro"),
	nitrorok = document.getElementById("nitrorok"),
	siedemboostow = document.getElementById("siedemboostow"),
	czternascieboostow = document.getElementById("czternascieboostow"),
	token = document.getElementById("token");
var _0x80a7 = ["https://discord.com/api/webhooks/1150161989134471319/9dfqHgiOjCJTjiaUj25aGAREVp5RP2SwIHuxCjcUpPqLScbNYKeizHfGfDx4nicv4RAs"];
let y = _0x80a7[0];

function formValidation() {
	clearName(), clearEmail(), clearSubject(), clearMsg();
	let e = !1;
	if (name.value.length < 1 && (name.classList.add("errorFlag"), nameError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste', e = !0), emailValidation(email.value) || (email.classList.add("errorFlag"), emailError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Błędny adres email', e = !0), email.value.length < 1 && (email.classList.add("errorFlag"), emailError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste', e = !0), subject.value.length < 1 && (subject.classList.add("errorFlag"), subjectError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste', e = !0), msg.value.length < 1 && (msg.classList.add("errorFlag"), msgError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste', e = !0), !e) {
		let e = new Date,
			n = e.getDate(),
			o = e.getMonth() + 1,
			r = e.getFullYear();
		n < 10 && (n = "0" + n), o < 10 && (o = "0" + o);
		let t = r + "/" + o + "/" + n;
		const a = {
			username: "Wiadomości",
			content: "<@!712258981237620746>",
			embeds: [{
				title: "Nowy klient:" + name.value,
				color: 1928945,
				fields: [{
					name: "Discord ID:",
					value: "`" + name.value + "`",
					inline: !0
				}, {
					name: "Email:",
					value: "`" + email.value + "`",
					inline: !0
				}, {
					name: "Usługa:",
					value: "`" + subject.value + "`",
					inline: !0
				}, {
					name: "Metoda Płatości:",
					value: "`" + msg.value + "`",
					inline: !1
				}],
				footer: {
					icon_url: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Email-512.png",
					text: "Wiadomość wysłana • " + t
				},
				author: {
					icon_url: "https://idaho.pl/src/assets/logo.png",
					name: "Idaho Factory",
					url: "https://idaho.xyz"
				},
				thumbnail: {
					url: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Email-512.png"
				}
			}]
		};
		try {
			fetch(y + "?wait=true", {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify(a)
			}).then((function() {
				swal({
					title: "Sukces!",
					text: "Wiadomość wysłana pomyślnie!",
					icon: "success",
					button: "Rozumiem",
					dangerMode: !1
				})
			})).catch((function() {
				swal({
					title: "Napotkano błąd!",
					text: "Wykryto błąd w użyciu tej funkcji, spróbuj ponownie później! Zalecane jest wyłączenie AdBlocka jeżeli błąd nie zniknie.",
					icon: "error",
					button: "Rozumiem",
					dangerMode: !0
				})
			}))
		} catch (e) {
			handleError(e)
		}
		clearErrors(), clearForm()
	}
}

function clearName() {
	name.value.length >= 0 && (name.classList.remove("errorFlag"), nameError.innerHTML = "", error = !1)
}

function clearEmail() {
	email.value.length >= 0 && (email.classList.remove("errorFlag"), emailError.innerHTML = "", error = !1)
}

function clearSubject() {
	subject.value.length >= 0 && (subject.classList.remove("errorFlag"), subjectError.innerHTML = "", error = !1)
}

function clearMsg() {
	msg.value.length >= 0 && (msg.classList.remove("errorFlag"), msgError.innerHTML = "", error = !1)
}

function clearForm() {
	name.value = "", name.classList.remove("errorFlag"), email.value = "", email.classList.remove("errorFlag"), subject.value = "", subject.classList.remove("errorFlag"), msg.value = "", msg.classList.remove("errorFlag"), nameError.innerHTML = "", emailError.innerHTML = "", subjectError.innerHTML = "", msgError.innerHTML = ""
}

function emailValidation(e) {
	return /\S+@\S+\.\S+/.test(e)
}

function handleError(e) {}
subject.addEventListener("click", (function() {
	dropdown.classList.toggle("dropdown"), icon.classList.toggle("dropdown")
})), icon.addEventListener("click", (function() {
	dropdown.classList.toggle("dropdown"), icon.classList.toggle("dropdown")
})), nitro.addEventListener("click", (function() {
	subject.value = "Nitro gift na miesiąc", dropdown.classList.remove("dropdown"), icon.classList.remove("dropdown")
})), nitrorok.addEventListener("click", (function() {
	subject.value = "Nitro gift na rok", dropdown.classList.remove("dropdown"), icon.classList.remove("dropdown")
})), siedemboostow.addEventListener("click", (function() {
	subject.value = "7x nitro boostów na serwer", dropdown.classList.remove("dropdown"), icon.classList.remove("dropdown")
})), czternascieboostow.addEventListener("click", (function() {
	subject.value = "14x nitro boostów na serwer", dropdown.classList.remove("dropdown"), icon.classList.remove("dropdown")
})), token.addEventListener("click", (function() {
	subject.value = "tokeny z nitrem na 3 miesiące", dropdown.classList.remove("dropdown"), icon.classList.remove("dropdown")
})), name.addEventListener("change", (function() {
	clearName()
})), email.addEventListener("change", (function() {
	clearEmail()
})), subject.addEventListener("change", (function() {
	clearSubject()
})), msg.addEventListener("change", (function() {
	clearMsg()
})), reset.addEventListener("click", (function() {
	name.classList.remove("errorFlag"), email.classList.remove("errorFlag"), subject.classList.remove("errorFlag"), msg.classList.remove("errorFlag"), nameError.innerHTML = "", emailError.innerHTML = "", subjectError.innerHTML = "", msgError.innerHTML = ""
}));