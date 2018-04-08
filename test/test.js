const hk = require("./../index");

(async () => {
  const popular = await hk.getPopular();
  const newsItem = await hk.getItem(popular[0]);

  console.log(newsItem);
})();
