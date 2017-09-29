document.addEventListener("DOMContentLoaded", () =>{
	(function(){
		const generateRandomArrayButton = document.getElementById('generateRandomArray'),
					input = {};
		let array = [];
		//generate Random Array
		function getRandomArray(min, max, num) {
			if (num == undefined) num = 100;
			let newArr = [];
			for (let i = 0; i < num; i++) {
				newArr[i] = Math.floor(Math.random() * (max-min) + min);
			}
			return newArr;
		}

		//Render Generate Rand Arr
		function renderRandomArray(e, array) {
			let html = array.map((item) => {
				return `<li>${item}</li>`
			}).join('');
			document.getElementById('algoritm').innerHTML = html;
		}
		//add event listener to max min inputs
		const inputWrap = document.querySelector('.inputs');
				inputWrap.addEventListener('input', (e) => {
				input[e.target.id] = e.target.value;
		});

		//add event listener to generate random array button
		generateRandomArray.addEventListener('click', (e) => {
			const min = parseInt(input.min, 10),
						max = parseInt(input.max, 10);
			//store array
			array = getRandomArray(min, max);
			//render array
			renderRandomArray(e, array);
		});

		const sortButtons = document.querySelector('.sort-buttons');
		sortButtons.addEventListener('click', (e) => {

		});
	})();
});
