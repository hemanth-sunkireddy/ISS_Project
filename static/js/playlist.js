

// button = document.getElementById("butt1");
// console.log('hello');
// song_duration = document.getElementById("time1").innerText;
// name1Element=document.getElementById("name1")
// song_name = name1Element.childNodes[2].textContent.trim();
  
//   button.addEventListener("click", function() {
   
//       console.log(song_duration);
//       console.log(song_name);                                                        
//       fetch('/add_to_database', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               'name': song_name,
//               'song_duration': song_duration
//           })
//       }).then(response => {
//             console.log("Success")
//       }).catch(error => {
//           console.log("Failed")
//       });
//   });




// Get references to all the button elements
const button1 = document.getElementById('butt1');
const button2 = document.getElementById('butt2');
const button3 = document.getElementById('butt3');
const button4 = document.getElementById('butt4');
const button5 = document.getElementById('butt5');

// Get references to all the song name and duration elements
const songName1 = document.getElementById('name1');
const songDuration1 = document.getElementById('time1');
const songName2 = document.getElementById('name2');
const songDuration2 = document.getElementById('time2');
const songName3 = document.getElementById('name3');
const songDuration3 = document.getElementById('time3');
const songName4 = document.getElementById('name4');
const songDuration4 = document.getElementById('time4');
const songName5 = document.getElementById('name5');
const songDuration5 = document.getElementById('time5');

// Create variables to store the song name and duration
let song_name = '';
let song_duration = '';

// Add event listeners to the button elements
button1.addEventListener('click', () => {
    song_name = songName1.childNodes[2].textContent.trim();
    song_duration = songDuration1.innerText.trim();

    console.log(song_duration);
      console.log(song_name);
      fetch('/add_to_database', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              'name': song_name,
              'song_duration': song_duration
          })
      }).then(response => {
            console.log("Success")
      }).catch(error => {
          console.log("Failed")
      });
});

button2.addEventListener('click', () => {
    song_name = songName2.childNodes[2].textContent.trim();
    song_duration = songDuration2.innerText.trim();

    console.log(song_duration);
    console.log(song_name);
    fetch('/add_to_database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': song_name,
            'song_duration': song_duration
        })
    }).then(response => {
        console.log("Success")
    }).catch(error => {
        console.log("Failed")
    });
    
});

button3.addEventListener('click', () => {
    song_name = songName3.childNodes[2].textContent.trim();
    song_duration = songDuration3.innerText.trim();

    console.log(song_duration);
    console.log(song_name);
    fetch('/add_to_database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': song_name,
            'song_duration': song_duration
        })
    }).then(response => {
        console.log("Success")
    }).catch(error => {
        console.log("Failed")
    });
});

button4.addEventListener('click', () => {
    song_name = songName4.childNodes[2].textContent.trim();
    song_duration = songDuration4.innerText.trim();

    console.log(song_duration);
    console.log(song_name);
    fetch('/add_to_database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': song_name,
            'song_duration': song_duration
        })
    }).then(response => {
        console.log("Success")
    }).catch(error => {
        console.log("Failed")
    });
});

button5.addEventListener('click', () => {
    song_name = songName5.childNodes[2].textContent.trim();
    song_duration = songDuration5.innerText.trim();

    console.log(song_duration);
    console.log(song_name);
    fetch('/add_to_database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': song_name,
            'song_duration': song_duration
        })
    }).then(response => {
        console.log("Success")
    }).catch(error => {
        console.log("Failed")
    });
});
