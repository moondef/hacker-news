# hacker-news-api
### API for API for news.ycombinator.com

## Usage
```js
const hk = require('@moondef/hacker-news-api')();
(async () => {
  const popular = await hk.getPopular(); // you will get IDs of popular news
  const popularArr = JSON.parse(popular);

  const newsItem = await hk.getItem(popularArr[0]);
  console.log(newsItem);
})();
```