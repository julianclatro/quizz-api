import { RequestI } from '../interfaces'
import { ResponseHandler } from "../utils/ResponseHandler";
import { ethers } from 'ethers';
import { Auth } from '../models';

export class AuthController {
  static async login(request: RequestI, env: any, ctx: any) {
    const payload = await request.json();
    try {
      if (!!payload.address && ethers.utils.isAddress(payload.address)) {
        const { address } = payload;
        // Check if there is an user for the given address
        // Auth.new(address, env)
        return ResponseHandler({ message: "Given address is valid", data: { address: payload.address }})
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}
