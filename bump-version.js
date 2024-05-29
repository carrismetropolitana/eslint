/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/* * */

import fs from 'fs'

import pJson from './package.json' with { type: 'json' }

/* * */

const now = new Date()
const year = now.getFullYear()
const month = Number(now.getMonth() + 1)
const day = Number(now.getDate())
const hours = Number(now.getHours())
const minutes = Number(now.getMinutes())

const version = `${year}.${month}.${day}${hours}${minutes}`

pJson.version = version

fs.writeFileSync('./package.json', JSON.stringify(pJson, null, 4))
