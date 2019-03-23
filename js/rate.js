let search = document.querySelector("#input")
var userinput = search.value

let button = document.querySelector("#mainButton") 
button.addEventListener("click", e=> {
console.log("This button was pressed")
sendApiRequest(userinput)
})
function sendApiRequest(userinput) {
  var userinput = input.value
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+userinput+"&units=imperial&APPID=514125f32d866acb5e73efe1abbee758")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
       getWeatherFrom(json)
    });
};


function getWeatherFrom(myJSON) {
  let cityName = myJSON.name
  let temp = myJSON.main.temp
  let Country = myJSON.sys.country
  let message = `It is ${temp} degrees in ${cityName},${Country}`
  let wrapper = document.querySelector("#wrapper")
  wrapper.innerHTML = message 
};


function addImageToScreen(myURL) {

};
