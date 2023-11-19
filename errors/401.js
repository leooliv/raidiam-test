const API_URL = `${process.env.BASE_URL}?lat=10,10&lon=10,10`

const triggerError401 = () => {
  return new Promise((resolve) => {
    fetch(API_URL).then((res) => {
      console.log('401 RESPONSE:', res.status)
      resolve()
    })
  })
}

module.exports = triggerError401
