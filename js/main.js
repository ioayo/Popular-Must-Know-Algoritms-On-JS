document.addEventListener("DOMContentLoaded", () =>{
	//Generate Random Array
	function getRandomArray(min, max, num) {
		if (num == undefined) num = 100;
		let newArr = [];
		for (let i = 0; i < num; i++) {
			newArr[i] = Math.floor(Math.random() * (max-min) + min);
		}
		return newArr;
	}
	//Render Generate Rand Arr
	function renderRandomArray(e) {
		console.log(e.target);
	}

	const sortButtons = document.querySelector('.sort-buttons');
	sortButtons.addEventListener('click', renderRandomArray);
})
