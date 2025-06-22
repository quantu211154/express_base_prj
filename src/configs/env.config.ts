import 'dotenv/config'
import { Env } from '../types/environment.type'

interface Config {
  PORT: number
  NODE_ENV: Env
  DB_URL: string
  WHITE_LIST: string[]
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: !!process.env.NODE_ENV ? (process.env.NODE_ENV as Env) : Env.DEVELOP,
  DB_URL: process.env.DB_URL || '',
  WHITE_LIST: !!process.env.WHITE_LIST ? process.env.WHITE_LIST.split('|') : [],
}

export default config
