import Task from '../models/taskModel.js'; // Adjust the import based on your file structure
import USER from '../models/userModel.js'; // Import your User model to get user details
export const createTask = async (req, res) => {
  const { title, description, assignedMembers, startDate, endDate, status } = req.body;

  try {
    if(!title || !description || !assignedMembers || !startDate || !endDate || !status){
        return res.status(400).json({success:false,errMsg:"all fields are required"})
    }
    const task = await Task.create({
      title,
      description,
      assignedMembers,
      startDate,
      endDate,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};

// Get all tasks with specified details
export const getAllTasks = async (req, res) => {
    try {
      // Fetch all tasks and populate the assignedMembers field
      const tasks = await Task.find().populate('assignedMembers', 'profileImage fullName'); // Adjust the fields to include only needed information
  
      // Map through tasks to format the response
      const formattedTasks = tasks.map(task => {
        // Get profile pictures for up to 3 members
        const memberPics = task.assignedMembers.slice(0, 3).map(member => ({
          profileImage: member.profileImage,
          fullName: member.fullName,
        }));
  
        return {
          description: task.description,
          duration: {
            startDate: task.startDate,
            endDate: task.endDate,
          },
          status: task.status,
          memberPics, // Include the member profile pictures
        };
      });
  
      res.status(200).json({
        success: true,
        count: formattedTasks.length,
        tasks: formattedTasks,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errMsg: "Server error." });
    }
  };

  // Delete a task
export const deleteTask = async (req, res) => {
    const { id } = req.params; // Extract the task ID from the request parameters
    try {
      const task = await Task.findByIdAndDelete(id);
      
      if (!task) {
        return res.status(404).json({ success: false, errMsg: "Task not found." });
      }
  
      res.status(200).json({ success: true, message: "Task deleted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errMsg: "Server error." });
    }
  };
  
  // Edit a task
  export const editTask = async (req, res) => {
    const { id } = req.params; // Extract the task ID from the request parameters
    const { title, description, assignedMembers, startDate, endDate, status } = req.body;
  
    try {
      const task = await Task.findByIdAndUpdate(
        id,
        { title, description, assignedMembers, startDate, endDate, status },
        { new: true, runValidators: true }
      );
  
      if (!task) {
        return res.status(404).json({ success: false, errMsg: "Task not found." });
      }
  
      res.status(200).json({ success: true, task });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errMsg: "Server error." });
    }
  };
