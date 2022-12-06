import { RequestI } from '../interfaces'
import { Livepeer } from '../utils/Livepeer';
import { ResponseHandler } from "../utils/ResponseHandler";

export class StreamController {
  static async find(request: RequestI, env: any, ctx: any) {
    const { DB: binding } = env;
    try {
      // Find an stream by code
      return ResponseHandler({ data: "TEST"})
    } catch (error) {
      console.log(error)
    }
  }

  static async new(request: RequestI, env: any, ctx: any) {
    const { DB: binding, LIVEPEER_SECRET_KEY } = env;
    try {
      // Create an stream at livepeer, then create a new Stream
      // await Livepeer.create_stream(LIVEPEER_SECRET_KEY)
      return ResponseHandler({ data: "TEST"})
    } catch (error) {
      console.log(error)
    }
  }
}
