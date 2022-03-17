export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "Sign Up" });
};
export const postJoin = (req, res) => {
  return;
};
export const login = (req, res) => {
  return res.send("<h1>Login</h1>");
};
export const getEdit = (req, res) => {
  return res.send("<h1>Edit</h1>");
};
export const deleteUser = (req, res) => {
  return res.send("<h1>Delete</h1>");
};
