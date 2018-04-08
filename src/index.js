const rp = require("request-promise");
const baseUrl = "https://hacker-news.firebaseio.com/v0/";

module.exports.getPopular = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/topstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getUser = async function(nickname) {
  try {
    const response = rp({
      baseUrl,
      url: `/user/${nickname}.json`,
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getItem = async function(itemID) {
  try {
    const response = rp({
      baseUrl,
      url: `/item/${itemID}.json`,
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getMaxItem = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/maxitem.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getAskStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/askstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getShowStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/showstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getJobStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/jobstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getUpdates = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/updates.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getNewStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/newstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getTopStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/topstories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

module.exports.getBestStories = async function() {
  try {
    const response = rp({
      baseUrl,
      url: "/beststories.json",
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};
