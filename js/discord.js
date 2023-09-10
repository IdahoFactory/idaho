function myFunction() {
	var e = document.getElementById("myInput");
	e.select(), e.setSelectionRange(0, 99999), navigator.clipboard.writeText(e.value), swal({
		title: "Sukces!",
		text: "Skopiowano mojego discorda: idaho111",
		icon: "success",
		button: "Gotowe",
		dangerMode: !1
	})
}