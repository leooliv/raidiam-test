const API_URL = `${process.env.BASE_URL}?appid=18fe346154506365cc1a47a94a76dbe2`;

const triggerError400 = () => {
  return new Promise((resolve) => {
    fetch(API_URL).then((res) => {
      console.log("400 RESPONSE:", res.status);
      resolve();
    });
  });
};

module.exports = triggerError400;
