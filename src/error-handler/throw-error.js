export const throwError = ({ code, status }) => ({
  code: code || 500,
  status: status || 'Internal Server Error'
})
