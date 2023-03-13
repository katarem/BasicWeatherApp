import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const usrInput = document.createElement('input')
usrInput.id = 'inp'
const api_key = '0d3751c7e7fb4680849513005bff7b6f'

const button = document.createElement('button')
const sImg = document.createElement('img')
sImg.src = 'https://cdn-icons-png.flaticon.com/512/3917/3917754.png'
sImg.id = 'icon'
button.appendChild(sImg)


button.addEventListener('click', () => {
  getWeather()
})

async function getWeather(){
  const city_name = usrInput.value.toLowerCase()
  if(usrInput.value==='')
    window.alert('Añada una ciudad')
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${city_name}&country=ES&lang=es&key=${api_key}`)
  const tiempo = await response.json()
  const objeto = await tiempo.data[0]
  const contenedor = document.createElement('div')
  const cityView = document.createElement('p')
  const iconView = document.createElement('img')
  const weatherData = document.createElement('p')
  iconView.src = `https://www.weatherbit.io/static/img/icons/${objeto.weather.icon}.png`
  weatherData.textContent = objeto.weather.description
  cityView.textContent = objeto.city_name + ' ' + Math.round(objeto.temp) + 'ºC'
  contenedor.id = 'omg'
  contenedor.appendChild(iconView)
  contenedor.appendChild(weatherData)
  contenedor.appendChild(cityView)
  const epico = document.getElementById('epico')
  if(epico.lastChild)
    epico.removeChild(epico.lastChild)
  epico.appendChild(contenedor)
}
button.id = 'a'
usrInput.id = 'inp'
const divi = document.createElement('div')
divi.append(usrInput,button)
divi.id = 'divi'
document.body.append(divi)

reportWebVitals();
