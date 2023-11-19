const API_URL = `${process.env.BASE_URL}/fakeRoute?appid=${process.env.API_KEY}`;

const triggerError404 = () => {
  return new Promise((resolve) => {
    fetch(API_URL).then((res) => {
      console.log("404 RESPONSE:", res.status);
      resolve();
    });
  });
};

module.exports = triggerError404;
