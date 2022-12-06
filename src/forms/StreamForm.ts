import { Form } from 'model-one'
import { StreamI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  users_id: Joi.string(),
  name: Joi.string(),
  code: Joi.string(),
  status: Joi.string(),
  stream_key: Joi.string(),
  contract_id: Joi.string(),
})

export class StreamForm extends Form {
  constructor(data: StreamI) {
    super(schema, data)
  }
}