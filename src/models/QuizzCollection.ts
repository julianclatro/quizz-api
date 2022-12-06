import { Model } from 'model-one';
import { quizzCollectionSchema } from '../database/Schema'
import { QuizzCollectionI } from '../interfaces/models'

export class Quizz extends Model implements QuizzCollectionI {
  data: QuizzCollectionI['data']

  constructor(props: QuizzCollectionI['data']) {
    super(quizzCollectionSchema, props)
    this.data = props
  }
}
