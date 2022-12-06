import { Schema, type SchemaConfigI } from 'model-one'

export const userSchema: SchemaConfigI = new Schema({
  table_name: 'users',
  columns: [
    { name: 'id', type: 'string'},
    { name: 'address', type: 'string'},
  ],
})

export const streamSchema: SchemaConfigI = new Schema({
  table_name: 'streams',
  columns: [
    { name: 'id', type: 'string'},
    { name: 'users_id', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'code', type: 'string'},
    { name: 'stream_key', type: 'string'},
    { name: 'status', type: 'string'},
    { name: 'contract_id', type: 'string'},
  ],
})

export const quizzCollectionSchema: SchemaConfigI = new Schema({
  table_name: 'quizzes_collections',
  columns: [
    { name: 'id', type: 'string'},
    { name: 'users_id', type: 'string'},
    { name: 'quizzes_ids', type: 'array'},
  ],
})

export const quizzSchema: SchemaConfigI = new Schema({
  table_name: 'quizzes',
  columns: [
    { name: 'id', type: 'string'},
    { name: 'users_id', type: 'string'},
    { name: 'question', type: 'string'},
    { name: 'answers', type: 'array'},
    { name: 'correct_answer', type: 'number'},
  ],
})