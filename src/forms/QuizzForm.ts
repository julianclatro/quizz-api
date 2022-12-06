import { Form } from 'model-one'
import { QuizzI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  users_id: Joi.string(),
  question: Joi.string(),
  answers: Joi.string(),
  correct_answer: Joi.number()
})

export class QuizzForm extends Form {
  constructor(data: QuizzI) {
    super(schema, data)
  }
}
