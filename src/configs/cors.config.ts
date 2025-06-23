import { CorsOptions } from 'cors'
import env from './env.config'

export const CORS_CONFIG: CorsOptions = {
  credentials: true,
  origin: (requestOrigin, callback) => {
    if (!requestOrigin || env.WHITE_LIST.includes(requestOrigin)) callback(null, true)
    else callback(new Error('Not allowed by Cors'))
  },
}
