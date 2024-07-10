import  express from 'express'
import cors from 'cors'

const app = express()
//Parser
app.use(express.json())
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app