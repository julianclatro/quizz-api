
export const ResponseHandler = async ({ message, data }: { message?: string, data?: any }) => {

  return new Response(JSON.stringify({
    status: 200,
    message: !!message ? message : 'OK',
    data: !!data ? data : undefined,
  }), {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}
