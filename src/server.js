import express from 'express'
import _ from 'lodash'

import { routers } from './routes/index'

const api = express()

api.use('/v1/public', routers)

// CATCH ERRORS
api.use((req, res, next) => {
  const json = { status: 'Not Found', code: 404 }
  const error = new Error(JSON.stringify(json))
  next(error)
})

// eslint-disable-next-line no-unused-vars
api.use((error, req, res, next) => {
  const err = JSON.parse(_.get(error, 'message'))

  return res
    .status(_.get(err, 'code', 500))
    .json({
      statusCode: _.get(err, 'code', 500),
      error: _.get(err, 'status', 'Internal Server Error')
    })
})

export { api }
