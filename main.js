function calcSet() {
	let firstTry = document.getElementById('first-try').value;

	if (firstTry/2 == 0) { // check if user input only numbers
		messanger.innerHTML = 'Invalid value';
	}
	
	document.getElementById('set1').innerHTML = Math.ceil(firstTry - firstTry / 100 * 30);
	document.getElementById('set2').innerHTML = Math.ceil(firstTry - firstTry / 100 * 15);
	document.getElementById('set3').innerHTML = Math.ceil(firstTry - firstTry / 100 * -10);
	document.getElementById('set4').innerHTML = Math.ceil(firstTry - firstTry / 100 * 35);
	document.getElementById('set5').innerHTML = Math.ceil(firstTry - firstTry / 100 * 50);

	document.getElementById('messanger').innerHTML = "After every set make 1 minute rest (or 30 sec. if it's very easy for you).";
}

document.getElementById('submit-try').addEventListener('click', calcSet);
