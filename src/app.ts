import  express from 'express'
import cors from 'cors'
import { CategoryRoutes } from './app/modules/category/category.route'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'

const app = express()
//Parser
app.use(express.json())
app.use(cors())

//Routes
app.use("/categories",CategoryRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Handle error globally
app.use(globalErrorHandler)

export default app