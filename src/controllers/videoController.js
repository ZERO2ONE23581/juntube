const fakeUser = { username: "Junwoo", loggedIn: false };

export const handleHome = (req, res) => {
  const videos = [
    {
      title: "Video 1",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video 2",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "Video 3",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
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
