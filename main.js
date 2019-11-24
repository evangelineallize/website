
function OpenModal(src) {
	document.getElementById('modal').classList.remove("modal-close");
	document.getElementById('modal-content').getElementsByTagName('img')[0].src = src;
}

function CloseModal() {
	document.getElementById('modal').classList.add("modal-close");
}
