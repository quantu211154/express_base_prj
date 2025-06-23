import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

export const SWAGGER_OPTIONS = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quizzy ',
      version: '1.0.0',
      description: 'API documentation for Quizzy',
    },
  },
  apis: [path.resolve(__dirname, '../routes/*.ts')],
})
