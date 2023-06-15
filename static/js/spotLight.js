		var width=300;
		var difference=2;
		var interveralID =0;
		document.getElementById("img").style.width=width;

		function increase()
		{
			clearInterval(interveralID);
			interveralID=setInterval(expand,10);
		}
		function decrease()
		{
			clearInterval(interveralID);
			interveralID=setInterval(shrink,10);
		}
		function expand()
		{
			if(width<400)
			{
				width = width+difference;
				document.getElementById("img").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
		function shrink()
		{
			if(width>300)
			{
				width = width-difference;
				document.getElementById("img").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}

		var deadline = new Date("June 30, 2023 00:00:00")
		// 30th June 2023 00:00.
		var x = setInterval(function() {
			var now = new Date().getTime();
			var t = deadline - now;
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
			var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((t % (1000 * 60)) / 1000);
			document.getElementById("timer").innerHTML = days + "d " 
			+ hours + "h " + minutes + "m " + seconds + "s ";
				if (t < 0) {
					clearInterval(x);
					document.getElementById("timer").innerHTML = "SONG IS OUT";
				}
			}, 1000);
		
		
	
		const reviewForm = document.getElementById('reviewForm');
        const nameInput = document.getElementById('nameInput');
        const ratingInputs = document.querySelectorAll('input[type="radio"][name="rating"]');
        const reviewInput = document.getElementById('reviewInput');
        const reviewTable = document.getElementById('reviewTable').querySelector('tbody');

        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = nameInput.value;
            let rating = null;
            for (let i = 0; i < ratingInputs.length; i++) {
                if (ratingInputs[i].checked) {
                    rating = ratingInputs[i].value;
                    break;
                }
            }
            const review = reviewInput.value;

            const reviewRow = document.createElement('tr');
            reviewRow.innerHTML = `
                <td>${name}</td>
                <td>${rating}</td>
                <td>${review}</td>
            `;
            reviewTable.appendChild(reviewRow);

            nameInput.value = '';
            ratingInputs[0].checked = true;
            reviewInput.value = '';
        });