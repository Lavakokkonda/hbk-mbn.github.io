var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var dateElem = document.getElementById('date');
		var dayElem = document.getElementById('day');
        var weekElem = document.getElementById('week');

		function updateDate() {
			var today = new Date();
			var date = today.getDate();
			var month = months[today.getMonth()];
			var year = today.getFullYear();
			var day = days[today.getDay()];

			dateElem.innerHTML = `${date}${getOrdinalSuffix(date)} ${month} ${year}`;
			dayElem.innerHTML = day;
		}

		function getOrdinalSuffix(date) {
			if (date > 3 && date < 21) return 'th';
			switch (date % 10) {
				case 1: return 'st';
				case 2: return 'nd';
				case 3: return 'rd';
				default: return 'th';
			}
		}

		function getWeekNumber(date) {
			var firstDayOfYear = new Date(date.getFullYear(), 0, 1);
			var pastDaysOfYear = (date - firstDayOfYear) / 86400000;
			return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
		}

		updateDate();
		setInterval(updateDate, 1000);

		

        function toggleMenu() {
			const navbar = document.querySelector('.navbar__list');
			const toggleBtn = document.querySelector('.navbar__toggle-button');
		  
			navbar.classList.toggle('navbar__list--active');
		  
			if (navbar.classList.contains('navbar__list--active')) {
			  toggleBtn.innerHTML = '&#10006;';
			} else {
			  toggleBtn.innerHTML = '&#9776;';
			}
		  }
		  
		  function scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}

		
		