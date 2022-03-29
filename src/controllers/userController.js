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
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const getEdit = (req, res) => {
  return res.render("user/edit", { pageTitle: "Edit Profile" });
};
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id, avatarUrl },
    },
    body: { email, username, name, location },
    file,
  } = req;

  const upadatedUser = await User.findByIdAndUpdate(
    _id,
    {
      avatarUrl: file ? file.path : avatarUrl,
      email,
      username,
      name,
      location,
    },
    { new: true }
  );
  req.session.user = upadatedUser;
  return res.redirect("/users/edit");
};
export const getChangePassword = (req, res) => {
  return res.render("user/change-password", { pageTitle: "Chnage Password" });
};
export const postChangePassword = async (req, res) => {
  const {
    session: {
      user: { _id, password },
    },
    body: { oldPassword, newPassword, newPassword2 },
  } = req;
  const user = await User.findById(_id);
  const ok = await bcrypt.compare(oldPassword, user.password);
  if (!ok) {
    return res.status(400).render("user/change-password", {
      pageTitle: "Change Password",
      errorMessage: "Current password is incorrect!",
    });
  }

  if (newPassword !== newPassword2) {
    return res.status(400).render("user/change-password", {
      pageTitle: "Change Password",
      errorMessage: "Password doesn't match!",
    });
  }
  user.password = newPassword;
  await user.save();

  //
  return res.redirect("/users/logout");
};
