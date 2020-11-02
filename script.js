


baseURL = "http://api.airvisual.com/"
key = "567a9596-cf01-4b97-8f9b-d58d8f80da89"


// //POPULATING COUNTRY DROPDOWN//
// let dropdown = document.getElementById('country');
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose State/Province';

// dropdown.add(defaultOption);
// dropdown.selectedIndex = 0;

// const url = 'https://api.myjson.com/bins/7xq2x';

// fetch(url)  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.warn('Looks like there was a problem. Status Code: ' + 
//           response.status);  
//         return;  
//       }

//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         let option;
    
//     	for (let i = 0; i < data.length; i++) {
//           option = document.createElement('option');
//       	  option.text = data[i].name;
//       	  option.value = data[i].abbreviation;
//       	  dropdown.add(option);
//     	}    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.error('Fetch Error -', err);  
//   });

var dt = new Date();
document.getElementById("dateTime").innerHTML = dt.toLocaleString()
document.getElementById('submit').addEventListener('click', fetchResults)
let city = document.getElementById('city')
let state = document.getElementById('state')
// let country = document.getElementById('country')


var requestOptions = {
	method: 'GET',
	redirect: 'follow'
  };



function fetchResults(e) {
e.preventDefault();
fetch(`${baseURL}v2/city?city=${city.value}&state=${state.value}&country=USA&key=${key}`)
.then(function(result) {
  return result.json();
}) .then(function(json) {
  displayResults(json);
})
}  

function displayResults(json) {
let temp = (json.data.current.weather.tp * 9/5) + 32
let airQuality = json.data.current.pollution.aqius
let humidity = json.data.current.weather.hu
let weather = json.data.current.weather.ic
let city = json.data.city
let state = json.data.state
console.log(weather)

document.getElementById('cityState').innerText = `${city}, ${state}`
document.getElementById('temp').innerText = `${temp}` + '\u00B0'
document.getElementById('airQuality').innerText = `${airQuality} air quality`
document.getElementById('humidity').innerText = `${humidity}`

if (weather === '01d') {
document.getElementById('weather').src = '01d.png'
} else if (weather === '01n') {
document.getElementById('weather').src = '01n.png'
} else if (weather === '02d') {
document.getElementById('weather').src = '02d.png'
} else if (weather === '02n') { 
  document.getElementById('weather').src = '02n.png'
} else if (weather === '03d') {
  document.getElementById('weather').src = '03d.png'
} else if (weather === '04d') {
  document.getElementById('weather').src = '04d.png'
} else if (weather === '09d') {
   document.getElementById('weather').src = '09d.png'
} else{
  document.getElementById('weather').src = '10n.png'
} 
}
