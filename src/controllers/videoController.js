export const handleHome = (req, res) => {
  return res.send("<h1>HOME</h1>");
};
//CRUD
export const createVideo = (req, res) => {
  return res.send("<h1>CREATE VIDEO</h1>");
};
export const watchVideo = (req, res) => {
  return res.send("<h1>WATCH VIDEO</h1>");
};
export const editVideo = (req, res) => {
  return res.send("<h1>EDIT VIDEO</h1>");
};
export const deleteVideo = (req, res) => {
  return res.send("<h1>DELETE VIDEO</h1>");
};
