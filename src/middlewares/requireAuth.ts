import { RequestI } from '../interfaces'
import { ErrorHandler } from '../utils/ErrorHandler'

export const requireAuth = async (request: RequestI, env: any, ctx: any) => {
  const authorization = request.headers.get('Authorization')

  if (!authorization || authorization === 'Bearer ') {
    const error = { message: 'Error'}
    return ErrorHandler({message: 'Log in again.', status: 401, error})
  }

  try {
    const { JWT_SECRET_KEY, DB } = env
    const token = authorization.replace('Bearer ', '');
    if (true) {
      // Find users
      // request.state = { current_user: users_id}
    } else {
      const error = { message: 'Error'}
      return ErrorHandler({message: 'Log in again.', status: 401, error})
    }
  }
  catch (e) {
    const error = { message: 'Error'}
    return ErrorHandler({message: 'Log in again.', status: 401, error})
  }
};