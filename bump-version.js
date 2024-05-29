/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/* * */

import fs from 'fs'

import pJson from './package.json' with { type: 'json' }

/* * */

const now = new Date()
const year = now.getFullYear()
const month = Number(now.getMonth() + 1)
const seconds = Number(parseInt(now.getTime()/1000))

const version = `${year}.${month}.${seconds}`

pJson.version = version

fs.writeFileSync('./package.json', JSON.stringify(pJson, null, 4))
