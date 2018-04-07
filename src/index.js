const rp = require('request-promise');

class HackerNews {
  constructor () {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getPopular () {
    const { baseUrl } = this;
    const url = '/topstories.json';

    try {
      const response = rp(`${baseUrl}/${url}`);

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getItem (itemID) {
    const { baseUrl } = this;
    const url = `/item/${itemID}.json`;

    try {
      const response = await rp (`${baseUrl}/${url}`);

      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = HackerNews;
