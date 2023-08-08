import './style.css'
import { setupCounter } from './src/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a class="logo">hello world</a>
  </div>
`

setupCounter(document.querySelector('#counter'))