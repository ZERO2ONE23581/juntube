const fakeUser = { username: "Junwoo", loggedIn: false };
const videos = [
  {
    title: "Video 1",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video 2",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 11,
    id: 2,
  },
  {
    title: "Video 3",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 111,
    id: 3,
  },
];

export const handleHome = (req, res) => {
  return res.render("video/home", { pageTitle: "Home", fakeUser, videos });
};
//CRUD
export const getUpload = (req, res) => {
  return res.render("video/upload", { pageTitle: "Upload Video", fakeUser });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const watchVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("video/watch", { pageTitle: video.title, fakeUser, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("video/edit", { video, pageTitle: `Edit ${video.title}`, fakeUser });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { title } = req.body; //post method //express urlencoded NEEDED!
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const deleteVideo = (req, res) => {
  return res.render("video/delete", { pageTitle: "Delete Video", fakeUser });
};
