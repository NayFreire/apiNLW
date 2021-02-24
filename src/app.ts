import 'reflect-metadata'
import express from 'express'
import './database' //importa o arquivo index.ts por padrão
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

export{app}
