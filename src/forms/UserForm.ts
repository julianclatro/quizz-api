import { Form } from 'model-one'
import { UserI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  address: Joi.string()
})

export class UserForm extends Form {
  constructor(data: UserI) {
    super(schema, data)
  }
}
