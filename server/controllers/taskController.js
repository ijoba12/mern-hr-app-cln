import Task from "../models/taskModel.js";
import USER from "../models/userModel.js";
import { sendTaskMail } from "../emails/emailHandlers.js";

// create a task
export const createTask = async (req, res) => {
  const { title, description, assignedMembers, startDate, endDate, status } =
    req.body;

  try {
    if (
      !title ||
      !description ||
      !assignedMembers ||
      !startDate ||
      !endDate ||
      !status
    ) {
      return res
        .status(400)
        .json({ success: false, errMsg: "All fields are required" });
    }

    const task = await Task.create({
      title,
      description,
      assignedMembers,
      startDate,
      endDate,
      status,
    });

    const members = await USER.find({ _id: { $in: assignedMembers } });

    const clientUrl = process.env.CLIENT_URL;

    members.forEach((member) => {
      sendTaskMail({
        to: member.email,
        firstName: member.firstName,
        taskTitle: title,
        taskDescription: description,
        startDate,
        endDate,
        assignedMembers: members,

        clientUrl,
      });
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully and emails sent to assigned members.",
      task,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorResponse = {
        message: "Validation Error",
        errors: {},
      };

      // Loop through the validation errors to provide detailed messages
      for (const field in error.errors) {
        errorResponse.errors[field] = {
          message: error.errors[field].message,
          value: error.errors[field].value,
        };

        // If the error is related to an enum, you can provide additional details
        if (error.errors[field].kind === "enum") {
          errorResponse.errors[field].enumValues =
            error.errors[field].properties.enumValues;
          errorResponse.errors[field].enumMessage = `The value "${
            error.errors[field].value
          }" is not valid. Allowed values are: ${errorResponse.errors[
            field
          ].enumValues.join(", ")}.`;
        }
      }

      return res.status(400).json(errorResponse); // Send detailed validation errors
    }
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

// Get all tasks with specified details
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("assignedMembers", "firstName lastName profileImage")
      .sort({ createdAt: -1 });
    const tasksWithDetails = tasks.map((task) => {
      return {
        title: task.title,
        assignedMembers: task.assignedMembers,
        startDate: task.startDate,
        endDate: task.endDate,
        status: task.status,
      };
    });

    res.status(200).json({
      success: true,
      tasks: tasksWithDetails,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, errMsg: "Task not found." });
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};

// Edit a task
export const editTask = async (req, res) => {
  const { id } = req.params; // Extract the task ID from the request parameters
  const { title, description, assignedMembers, startDate, endDate, status } =
    req.body;

  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, assignedMembers, startDate, endDate, status },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ success: false, errMsg: "Task not found." });
    }

    res.status(200).json({ success: true, task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};
// Get a task
export const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id).populate(
      "assignedMembers",
      "firstName lastName profilePic"
    );

    if (!task) {
      return res
        .status(404)
        .json({ success: false, errMsg: "Task not found." });
    }

    const taskDetails = {
      title: task.title,
      assignedMembers: task.assignedMembers,
      startDate: task.startDate,
      endDate: task.endDate,
      status: task.status,
    };

    res.status(200).json({
      success: true,
      task: taskDetails,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};
