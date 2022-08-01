
 import Task from '../models/Task';


 export const renderTasks = async(req,res) => {

    const task = await Task.find().lean();
    res.render('index', {tasks:task});
};

export const createTasks =   async (req,res) => {
    try {
      const task = Task(req.body);
      const task1 = await task.save();
  
      
      console.log(req.body);
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
      
  };

  export const renderTaskEdit = async (req,res)=>{

    try {
      const task =  await Task.findById(req.params.id).lean();
      res.render('edit',{task:task});
    } catch (error) {
      console.log(error.message);
    }
  };

  export const editTask = async (req,res)=>{

    const {id} = req.params; 
    await Task.findByIdAndUpdate(id, req.body);

    res.redirect('/');
};

export const deleteTask = async (req,res)=>{

    try {
      const {id} = req.params; 
      await Task.findByIdAndDelete(id);
      res.redirect('/');
    } catch (error) {
      console.log(error.message);
    }
  
     
  };

  export const taskToggleDone = async (req,res)=>{

    try {
      const {id} = req.params; 
      const task = await Task.findById(id);
      task.done = !task.done;

      await task.save();
      res.redirect('/');
    } catch (error) {
      console.log(error.message);
    }
  
     
  };






