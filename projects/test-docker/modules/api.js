const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "secret", {
  host: "localhost",
  dialect: "mysql",
});

// MOdels
const Projects = sequelize.define("Project", {
  idProject: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

const sync = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    return true;
  } catch (err) {
    console.error(e);
    return false;
  }
};

const createProject = async (newProject) => {
  const newP = await Projects.create(newProject);
  return newP;
};

const getAllProjects = async () => {
  const projects = Projects.findAll();
  return projects;
};

module.exports = {
  sync,
  getAllProjects,
  createProject,
};
