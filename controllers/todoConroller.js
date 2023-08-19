import axios from 'axios'


const getAllTodos = async (req, res) => {
   console.log(req.body);
   console.log('get all todos');
   try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

    return res.status(200).json({
         success: true,
         todos: data
    })
    
   } catch (error) {
      console.log(error.message);

      res.status(500).json({
         success: false,
         error: error.message
      })
    
   }
}

const getSingleTodo = async (req, res) => {
   try {
      const {id} = req.params
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
   
      return res.status(200).json({
            success: true,
            todo: data
         })
      
   } catch (error) {
      console.log(error.message);
      res.status(404).json({
         error:'Todo not found'
      })
      

      
   }
}

export {getAllTodos,getSingleTodo}