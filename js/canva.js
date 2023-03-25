;(function () {
  let canvas = document.querySelector('canvas')
  let context = canvas.getContext('2d')

  let w = window.innerWidth // 窗口宽
  let h = window.innerHeight // 窗口高

  canvas.width = w // 把窗口宽度给画布的宽
  canvas.height = h

  let num = 200
  let snows = []

  for (let i = 0; i < num; i++) {
    snows.push({
      x: Math.random() * w, // 雪花位置
      y: Math.random() * h,
      r: Math.random() * 8 + 1, // 雪花半径
    })
  }

  // 让雪花动起来
  const move = () => {
    for (let i = 0; i < num; i++) {
      let snow = snows[i]
      // 雪花位置
      snow.x += Math.random() * 2 + 1
      snow.y += Math.random() * 2 + 1
      // 边界问题
      if (snow.x > w) snow.x = 0
      if (snow.y > h) snow.y = 0
    }
  }

  // 画出雪花
  const draw = () => {
    context.clearRect(0, 0, w, h)

    context.beginPath()

    context.fillStyle = '#ffffff' // 背景颜色
    context.shadowColor = '#ffffff' // 阴影颜色
    context.shadowBlur = 10 // 模糊程度

    for (let i = 0; i < num; i++) {
      let snow = snows[i]
      context.moveTo(snow.x, snow.y) //雪花坐标
      context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2) // 画圆
    }
    context.fill()
    context.closePath()

    // 动起来
    move()
  }
  draw()
  setInterval(draw, 30)
})()
;(function () {
  let card = document.querySelector('.card')
  card.addEventListener('click', function () {
    location.href = '../home/home.html'
  })
})()
