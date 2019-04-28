<template>
  <div class="about">
    <router-link to="/">This is an about page</router-link>
    <div class="canvas">
      <canvas id="mycanvas" width="800" height="400">
        您的浏览器不支持canvas，请更新
      </canvas>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    const c = document.getElementById('mycanvas')
    const context = c.getContext("2d")
    context.fillStyle = "#ff00ff"
    context.fillRect(90,50,120,100)
    context.moveTo(0,0)
    context.lineTo(800,400)
    context.stroke()
  }
}
</script>
<style lang="less" scoped>
.canvas{
  width: 100%;
  height: 400px;
  background-color: aliceblue;
  canvas{
    border: 1px solid #ff00ff
  }
}
</style>
