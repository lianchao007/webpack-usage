import bar from './bar.js'
import _ from 'lodash'
import '../css/a.css'
import Data from '../data/data.xml'
import Notes from '../data/data.csv'
import toml from '../data/data.toml'
import yaml from '../data/data.yaml'
import json from '../data/data.json5'

console.log(toml)
console.log(yaml)
console.log(json)

const zc = require('../img/zc.png')
function component() {
	const element = document.createElement('div')
	element.innerHTML = _.join([Data.person.name[0], Data.person.age[0], ' 这是汉字'])
	element.classList.add('hello')
	return element
}
document.body.appendChild(component())

const img = document.createElement('img')
img.src = zc
document.body.appendChild(img)

console.log(Notes)
console.log(bar(2, 3))