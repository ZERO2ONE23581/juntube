import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("video/home", { pageTitle: "Home", videos });
  } catch {
    return res.send(`server-error`);
  }
};
//CREATE
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    meta: { views: 0, rating: 0 },
    hashtags: hashtags.split(",").map((word) => `#${word}`),
  });
  console.log(video);
  return res.redirect("/");
};
//READ
export const watchVideo = (req, res) => {
  const { id } = req.params;
  return res.render("video/watch");
};
//UPDATE
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("video/edit");
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
//DELETE
export const deleteVideo = (req, res) => {
  return res.render("video/delete");
};
