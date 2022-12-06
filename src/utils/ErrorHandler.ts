type ErrorMessage = {

}
export const ErrorHandler = ({ message = 'Something went wrong.', status = 400, error = {} }: { message?: string, status?: number, error: ErrorMessage }) => {
  return new Response(JSON.stringify({
    status,
    message,
    error
  }), {
    status,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}
