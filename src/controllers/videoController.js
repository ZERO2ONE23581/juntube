import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("video/home", { pageTitle: "Home", videos });
  } catch {
    return res.send(`server-error`);
  }
};
//CREATE
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags,
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("video/upload", {
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
    return res.render("error/404", { pageTitle: "Video not found" });
  } else {
    return res.render("video/watch", { pageTitle: video.title, video });
  }
};
//UPDATE
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("error/404", { pageTitle: "Video not found" });
  } else {
    return res.render("video/edit", { video, pageTitle: `Edit <${video.title}>` });
  }
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id }); //exists method returns TRUE when there is a data with condition (filtered)
  if (!video) {
    return res.render("error/404", { pageTitle: "Video not found" });
  } else {
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word} `)),
    });
    return res.redirect(`/videos/${id}`);
  }
};
//DELETE
export const deleteVideo = (req, res) => {
  return res.render("video/delete");
};
