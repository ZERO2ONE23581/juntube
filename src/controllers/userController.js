import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "Sign Up" });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Sign Up";
  const { name, username, email, password, password2, location } = req.body;
  const dupData = await User.exists({ $or: [{ username }, { email }] });
  if (dupData) {
    return res.render("user/join", {
      pageTitle,
      errorMessage: `This username/email is already taken!`,
    });
  }
  if (password !== password2) {
    return res.render("user/join", {
      pageTitle,
      errorMessage: `Password confirmation doesn't match!`,
    });
  }
  await User.create({
    email,
    username,
    password,
    name,
    location,
  });
  return res.redirect("/login");
};
export const getLogin = (req, res) => {
  return res.render(`user/login`, { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  return;
};
export const getEdit = (req, res) => {
  return res.send("<h1>Edit</h1>");
};
export const deleteUser = (req, res) => {
  return res.send("<h1>Delete</h1>");
};
