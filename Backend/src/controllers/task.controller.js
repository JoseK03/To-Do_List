import Task from "../models/Task.model.js";

export const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find({
            user:req.user.id
        })
        if(!tasks) res.status(404).json({message:'Task not found'})
        res.json(tasks)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Error encontrando las tareas'});
    }
};
export const createTask = async (req,res) => {
    const { title, description, date} = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });

    const taskSaved = await newTask.save();
    res.json({message:'tarea creada con éxito', taskSaved})

};
export const getTask = async (req,res) => {
    const task = await Task.findById(req.params.id);
    (!task) ? res.status(404).json({message:'Task not found'}) : res.json(task);
};

export const deleteTask = async (req,res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    (!task) ? res.status(404).json({message:'Task not found'}) : res.json({message:'Tarea eliminada satisfactoria mente',task});
};
export const updateTask = async (req,res) => {
    const task = await Task.findByIdAndUpdate(req.params.id , req.body, {new: true});
    (!task) ? res.status(404).json({message:'Task not found'}) : res.json(task);
};