import express,{json} from 'express'
import toDoRouter from './routes/todoRoutes.js'
const port = 5000;
const app = express();
app.use(json)
//url encoded data
app.use(express.urlencoded({extended: true}))

app.use('/todos',toDoRouter )
app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
})
export default app;

 


