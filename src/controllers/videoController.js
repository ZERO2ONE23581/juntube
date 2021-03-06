import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home", { pageTitle: "JUNTUBE", videos });
  } catch (error) {
    return res.status(404).render("error/404", { pageTitle: error._message });
  }
};
//CREATE
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description, hashtags },
    file,
  } = req;
  try {
    await Video.create({
      fileUrl: file.path,
      title,
      description,
      hashtags: Video.createHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("video/upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
//READ
export const watchVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("error/404", { pageTitle: "Video not found" });
  } else {
    return res.render("video/watch", { pageTitle: video.title, video });
  }
};
//UPDATE
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("error/404", { pageTitle: "Video not found" });
  } else {
    return res.render("video/edit", { video, pageTitle: `Edit <${video.title}>` });
  }
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id }); //exists method returns TRUE when there is a data with condition (filtered)
  if (!video) {
    return res.status(404).render("error/404", { pageTitle: "Video not found" });
  } else {
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.createHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
  }
};
//DELETE
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

//Search
export const searchVideo = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  return res.render("video/search", { pageTitle: `Search Video`, videos });
};
