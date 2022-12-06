import { Model } from 'model-one';
import { userSchema } from '../database/Schema'
import { UserI } from '../interfaces/models'

export class User extends Model implements UserI {
  data: UserI['data']

  constructor(props: UserI['data']) {
    super(userSchema, props)
    this.data = props
  }
}
