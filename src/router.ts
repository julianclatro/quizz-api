import { Router } from 'itty-router'
import { AuthController, QuizzesController, StreamController } from './controllers'
import { requireAuth } from './middlewares/requireAuth'
const router = Router()

router
  .post('/login', AuthController.login)
  .post('/streams/new', requireAuth, StreamController.new)
  .get('/streams/:stream_id', requireAuth, StreamController.find)
  .get('/quizzes', requireAuth, QuizzesController.all)
  .post('/quizzes/new', requireAuth, QuizzesController.new)


// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default router; 