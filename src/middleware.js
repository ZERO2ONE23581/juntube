import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "준튜브";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user || {};
  next();
};

//로그인된 유저만
export const loggedInUserOnly = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
//로그아웃된 유저만
export const loggedOutUserOnly = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const avatarUploads = multer({
  dest: "uploads/avatars/",
  limits: { fileSize: 3000000000 },
});
export const videoUploads = multer({
  dest: "uploads/videos/",
  limits: { fileSize: 3000000000000 },
});
