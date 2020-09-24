import { PORT } from './settings'
import { api } from './server'

api.listen(PORT, () => {
  console.log(`Server running localhost: ${PORT}`)
  console.log('To drop server: ctrl + c')
})
