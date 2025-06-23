import fs from 'fs'
import path from 'path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const logDir = path.join(__dirname, '../../logs')

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const dailyRotateTransport = new DailyRotateFile({
  dirname: logDir,
  filename: 'quizzy-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
})

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level.toUpperCase()}: ${message}`
    }),
  ),
  transports: [new winston.transports.Console(), dailyRotateTransport],
})
