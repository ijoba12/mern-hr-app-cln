import DEPARTMENTS from "../models/departmentModel.js";
import USER from "../models/userModel.js";
import Task from "../models/taskModel.js";

export const allSchemaCount = async (req, res) => {
  try {
    const users = await USER.find();
    const depts = await DEPARTMENTS.find();
    const tasks = await Task.find();
    const leaves = 15;
    // counts
    const eventLenght =[
        {
            title:"Total Employees",
            count:users.length,
        },
        {
            title:"Total Tasks",
            count:tasks.length,
        },
        {
            title:"Current Leaves",
            count:leaves,
        }
    ] 
    res.status(200).json({ success: true, eventLenght });
  } catch (error) {
    res.json(error);
  }
};
