const HackerNews = require('./../index');

const hk = new HackerNews();

(async () => {
  const popular = await(hk.getPopular());
  const item = await hk.getItem(popular[0]);

  console.log(item);
})();
