import { RequestI } from '../interfaces'
import { ResponseHandler } from "../utils/ResponseHandler";
import { QuizzForm } from '../forms/QuizzForm'
import { Quizz } from '../models/Quizz'
export class QuizzesController {
  static async all(request: RequestI, env: any, ctx: any) {
    const { DB: binding } = env;
    const { current_user} = request.state

    try {
      
      return ResponseHandler({ data: "Get all Quizzes"})
    } catch (error) {
      console.log(error)
    }
  }

  static async new(request: RequestI, env: any, ctx: any) {
    const { DB: binding } = env;
    const { current_user } = request.state
    try {
      const quizzForm = new QuizzForm(
        new Quizz({
          users_id: current_user,
          question: '',
          answers: [],
          correct_answer: 0
        }),
      )
      await Quizz.create(quizzForm, binding)

      return ResponseHandler({ data: "Quizz created successfully!"})

    } catch (error) {
      console.log(error)
    }
  }
}
