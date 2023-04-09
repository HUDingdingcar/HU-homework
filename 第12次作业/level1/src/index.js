import './css/1.css'

const div1 = document.querySelector('.yellow')
const div2 = document.querySelector('.blue')
const div3 = document.querySelector('.green')

new Promise((resolve, reject) => {
  const timer1 = setInterval(() => {
    div1.style.left = div1.offsetLeft + 10 + 'px'
    if (div1.offsetLeft > 600) {
      clearInterval(timer1)
      resolve()
    }
  }, 50)
})
  .then(() => {
    return new Promise((resolve, reject) => {
      const timer2 = setInterval(() => {
        div2.style.left = div2.offsetLeft + 10 + 'px'
        if (div2.offsetLeft > 600) {
          clearInterval(timer2)
          resolve(1)
        }
      }, 50)
    })
  })
  .then(() => {
    const timer3 = setInterval(() => {
      div3.style.left = div3.offsetLeft + 10 + 'px'
      if (div3.offsetLeft > 600) {
        clearInterval(timer3)
      }
    }, 50)
  })
