const rp = require("request-promise");

class HackerNews {
  constructor() {
    this.baseUrl = "https://hacker-news.firebaseio.com/v0/";
  }

  async getPopular() {
    const { baseUrl } = this;

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
  }

  async getItem(itemID) {
    const { baseUrl } = this;

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
  }

  async getMaxItem() {
    const { baseUrl } = this;

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
  }

  async getAskStories() {
    const { baseUrl } = this;

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
  }

  async getShowStories() {
    const { baseUrl } = this;

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
  }

  async getJobStories() {
    const { baseUrl } = this;

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
  }
}

module.exports = HackerNews;
