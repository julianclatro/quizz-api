import { Form } from 'model-one'
import { QuizzCollectionI } from '../interfaces/models'
import Joi from 'joi'

const schema = Joi.object({
  id: Joi.string(),
  users_id: Joi.string(),
  quizzes_ids: Joi.string(),
})

export class QuizzCollectionForm extends Form {
  constructor(data: QuizzCollectionI) {
    super(schema, data)
  }
}
