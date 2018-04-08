const rp = require("request-promise");
const baseUrl = "https://hacker-news.firebaseio.com/v0/";

const get = url => rp({ baseUrl, url, json: true });

module.exports.getPopular = () => get("/topstories.json");
module.exports.getUser = nickname => get(`/user/${nickname}.json`);
module.exports.getItem = itemID => get(`/item/${itemID}.json`);
module.exports.getMaxItem = () => get("/maxitem.json");
module.exports.getAskStories = () => get("/askstories.json");
module.exports.getShowStories = () => get("/showstories.json");
module.exports.getJobStories = () => get("/jobstories.json");
module.exports.getUpdates = () => get("/updates.json");
module.exports.getNewStories = () => get("/newstories.json");
module.exports.getTopStories = () => get("/topstories.json");
module.exports.getBestStories = () => get("/beststories.json");
