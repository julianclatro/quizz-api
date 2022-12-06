import { Model } from 'model-one'

export interface UserI extends Model {
  data: {
    id?: string
  }
}

export interface QuizzI extends Model {
  data: {
    id?: string
    users_id: string
    question: string
    answers: string[]
    correct_answer: number
  }
}

export interface QuizzCollectionI extends Model {
  data: {
    id?: string
    users_id: string
    quizzes_ids: string[]
  }
}

export interface StreamI extends Model {
  data: {
    id?: string
    users_id: string
    code: string
    name: string
    stream_key: string
    contract_id: string
  }
}