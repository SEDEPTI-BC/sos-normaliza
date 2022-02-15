<template>
  <div class="tutorial">
    <video src="@/static/video/test.mp4" controls></video>
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
}
</script>

<style scoped>
  video {
    width: 100%;
    max-width: 800px;
    height: 100%;
    max-height: 500px;
  }
</style>
