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
}

module.exports = HackerNews;
