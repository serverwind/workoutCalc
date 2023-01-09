const sets = document.querySelectorAll('#sets span');

function calcSet() {
	let firstTry = document.getElementById('first-try').value;

	if (firstTry/2 == 0) { // check if user input only numbers
		messanger.innerHTML = 'Invalid value';
	}
	
	sets[0].innerHTML = Math.ceil(firstTry - firstTry / 100 * 30);
	sets[1].innerHTML = Math.ceil(firstTry - firstTry / 100 * 15);
	sets[2].innerHTML = Math.ceil(firstTry - firstTry / 100 * -5);
    sets[3].innerHTML = Math.ceil(firstTry - firstTry / 100 * 35);
	sets[4].innerHTML = Math.ceil(firstTry - firstTry / 100 * 50);

    hideInfo()
}

function hideInfo() {
    document.getElementById('form').style.display = 'none';
	document.getElementById('messanger').innerHTML = "After every set make 1 minute rest (or 30 sec. if it's very easy for you).";

    markDone()
}

function setDone() {
    this.style.background = 'lime';
}

function markDone() {
    for (i=0; i<5; i++) {
        sets[i].addEventListener('click', setDone);
    }
}

document.getElementById('submit-try').addEventListener('click', calcSet);
