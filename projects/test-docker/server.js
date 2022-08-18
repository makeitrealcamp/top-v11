const express = require("express");
const { sync, getAllProjects, createProject } = require("./modules/api");

const app = express();

app.get("/projects", async (req, res) => {
  await sync();
  const projects = await getAllProjects();
  res.json(projects);
});

app.post("/project/create", async (req, res) => {
  await sync();
  const newProject = await createProject({
    id: 1,
    name: "Ne project",
    description: "fjal;sfjasl;lf",
  });
  res.json(newProject);
});

app.listen(4500, () => {
  console.log("server initilizd.....");
});
