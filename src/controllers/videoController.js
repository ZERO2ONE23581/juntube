export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
//CRUD
export const createVideo = (req, res) => {
  return res.send("<h1>CREATE VIDEO</h1>");
};
export const watchVideo = (req, res) => {
  return res.render("watch", { pageTitle: "Video" });
};
export const editVideo = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};
export const deleteVideo = (req, res) => {
  return res.send("<h1>DELETE VIDEO</h1>");
};
