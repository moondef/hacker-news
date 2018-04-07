# hacker-news-api
### API for news.ycombinator.com

## Usage
```
$ npm install --save @moondef/hacker-news-api
```

```js
const HackerNewsApi = require('@moondef/hacker-news-api');
const hk = new HackerNewsApi;

(async () => {
  const popular = await hk.getPopular(); // you will get IDs of popular news
  const newsItem = await hk.getItem(popular[0]);

  console.log(newsItem);
})();

```