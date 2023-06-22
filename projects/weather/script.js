apik = "3045dd712ffe6e702e3245525ac7fa38";

const searchBar = document.querySelector(".searchBar");
const search = document.querySelector(".search");
const date = document.querySelector(".date");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".value");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const weather = document.querySelector(".weather");

let today = new Date().toLocaleDateString("fa-IR-u-nu-latn");

const requestApi = (city = "Tehran") => {
  localStorage.setItem("user-city", city);

  searchBar.value = city;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((res) => {
      date.innerHTML = today;
      resHandler(res);
    })
    .catch(() => {
      weather.style.display = "none";
    });
};

requestApi(localStorage.getItem("user-city"));

const iconUrl = (iconCode) => {
  return "http://openweathermap.org/img/w/" + iconCode + ".png";
};

const unitConverter = (value) => {
  return `${Math.round(value - 273.15)} °C`;
};

const capitalize = (text) => {
  let newText = "";
  const textArray = text.split(" ");

  for (let i = 0; i < textArray.length; i++) {
    const changedFirstLetter = textArray[i][0].toUpperCase();
    newText = newText + changedFirstLetter + textArray[i].substring(1) + " ";
  }

  return newText;
};

const resHandler = (res) => {
  if (res.main?.temp) {
    weather.style.display = "flex";

    maxTemp.innerHTML = `${unitConverter(res.main?.temp_max)} ↑`;
    minTemp.innerHTML = `${unitConverter(res.main?.temp_min)} ↓`;
    temp.innerHTML = unitConverter(res.main?.temp);

    feelsLike.innerHTML = unitConverter(res.main?.feels_like);

    icon.src = iconUrl(res.weather && res.weather[0]?.icon);
    description.innerHTML = capitalize(
      res.weather && res.weather[0]?.description
    );
  } else {
    weather.style.display = "none";
  }
};

const fetchHandler = (city) => {
  requestApi(city);
};

search.addEventListener("click", () => {
  fetchHandler(searchBar.value);
});

searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchHandler(searchBar.value);
  }
});
