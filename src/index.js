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
const api_key = '0d3751c7e7fb4680849513005bff7b6f'

const button = document.createElement('button')
button.innerText = 'click me'
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
  const city = await objeto.city_name
  const icon = await objeto.weather.icon
  const temp = await objeto.temp
  const wdata = await objeto.weather.description
  const contenedor = document.createElement('div')
  const cityView = document.createElement('p')
  const iconView = document.createElement('img')
  const weatherData = document.createElement('p')
  iconView.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`
  weatherData.textContent = wdata
  cityView.textContent = city + ' ' + Math.round(temp) + 'ºC'
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
