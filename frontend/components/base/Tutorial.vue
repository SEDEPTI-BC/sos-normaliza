<template>
  <div class="tutorial">
    <figure>
      <video src="@/static/video/test.mp4" controls></video>
      <figcaption>
        <b class="nexa-bold">Vídeo:</b> Tutorial de uso do novo SOS Normaliza
      </figcaption>
    </figure>
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
