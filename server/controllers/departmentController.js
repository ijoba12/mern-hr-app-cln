import DEPARTMENT from "../models/departmentModel.js";
import USER from "../models/userModel.js";

// Create Department
export const createDepartment = async (req, res) => {
  const { name, manager } = req.body;
  if (!name || !manager) {
    res.status(400).json({ success: false, errMsg: "all fields are required" });
    return;
  }

  try {
    const department = await DEPARTMENT.create({ name, manager });
    res
      .status(201)
      .json({ success: true, message: "Department created", department });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// all depts
export const getDepartments = async (req, res) => {
  try {
    const departments = await DEPARTMENT.find({});
    res.status(200).json({ success: true, departments });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching departments" });
  }
};

// single dept
export const getSingleDepartment = async (req, res) => {
  const { id } = req.params; // Get the department ID from the request parameters

  try {
    // Find the department by ID and populate the members with their relevant fields
    const department = await DEPARTMENT.findById(id)
      .populate({
        path: 'members',
        select: 'firstName lastName profileImage jobTitle employmentStatus', // Select the fields to populate
      })
      .populate({
        path: 'manager', // Populate the manager field
        select: 'firstName lastName profileImage jobTitle employmentStatus', // Select relevant fields for the manager
      });

    // If the department is not found
    if (!department) {
      return res.status(404).json({ success: false, errMsg: "Department not found." });
    }

    // Create a member array with the manager included
    const membersWithDetails = department.members.map(member => ({
      fullName: `${member.firstName} ${member.lastName}`, // Combine first and last names
      profileImage: member.profileImage,
      jobTitle: member.jobTitle,
      status: member.employmentStatus,
    }));

    // Add the manager details to the members array
    if (department.manager) {
      membersWithDetails.push({
        fullName: `${department.manager.firstName} ${department.manager.lastName}`,
        profileImage: department.manager.profileImage,
        jobTitle: department.manager.jobTitle,
        status: department.manager.employmentStatus,
      });
    }

    // Return the department with member details
    res.status(200).json({
      success: true,
      department: {
        ...department.toObject(), // Convert Mongoose document to plain JavaScript object
        members: membersWithDetails, // Add formatted members including the manager
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, errMsg: "Server error." });
  }
};
