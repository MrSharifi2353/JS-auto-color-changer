function rand(from, to) {
	return Math.floor((Math.random() * to) + from);
}
function ChangeBG() {
    document.body.style.backgroundColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    document.body.style.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
}

