# hacker-news-api
### API for news.ycombinator.com

## Usage
```
$ npm install --save @moondef/hacker-news-api
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
```-