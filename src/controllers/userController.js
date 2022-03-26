import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("user/join", { pageTitle: "Sign Up" });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Sign Up";
  const { name, username, email, password, password2, location } = req.body;
  const dupData = await User.exists({ $or: [{ username }, { email }] });
  if (dupData) {
    return res.status(400).render("user/join", {
      pageTitle,
      errorMessage: `This username/email is already taken!`,
    });
  } else if (password !== password2) {
    return res.status(400).render("user/join", {
      pageTitle,
      errorMessage: `Password confirmation doesn't match!`,
    });
  } else {
    try {
      await User.create({
        email,
        username,
        password,
        name,
        location,
      });
      return res.redirect("/login");
    } catch (error) {
      return res.status(400).render("user/join", {
        pageTitle,
        errorMessage: error._message,
      });
    }
  }
};
export const getLogin = (req, res) => {
  return res.render(`user/login`, { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const pageTitle = "Login";
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.render("user/login", {
      pageTitle,
      errorMessage: "An account with this username doesn't exists!",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.render("user/login", {
      pageTitle,
      errorMessage: "Wrong password!",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const getEdit = (req, res) => {
  return res.send("<h1>Edit</h1>");
};
export const deleteUser = (req, res) => {
  return res.send("<h1>Delete</h1>");
};
