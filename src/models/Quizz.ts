import { Model } from 'model-one';
import { quizzSchema } from '../database/Schema'
import { QuizzI } from '../interfaces/models'

export class Quizz extends Model implements QuizzI {
  data: QuizzI['data']

  constructor(props: QuizzI['data']) {
    super(quizzSchema, props)
    this.data = props
  }
}
