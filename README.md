# hacker-news-api
### JavaScript wrapper for the official Hacker News API

[![npm package](https://img.shields.io/npm/v/@moondef/hacker-news-api.svg)](https://www.npmjs.com/package/@moondef/hacker-news-api)

## Usage
```
$ npm install --save @moondef/hacker-news-api
```
or
```
$ yarn add @moondef/hacker-news-api
```

```js
const hk = require('@moondef/hacker-news-api');

(async () => {
  const popular = await hk.getPopular(); // you will get IDs of popular news
  const newsItem = await hk.getItem(popular[0]);

  console.log(newsItem);
})();
```

## Methods
```js
- getPopular() // Array
- getUser(nickname) // Object
- getItem(id) // Object
- getMaxItem() // Number
- getAskStories() // Array
- getShowStories() // Array
- getJobStories() // Array
- getUpdates() // Object
- getNewStories() // Array
- getTopStories() // Array
- getBestStories() // Array
```
