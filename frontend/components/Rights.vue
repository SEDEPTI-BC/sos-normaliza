<template>
  <div class="wrapper-rights d-flex flex-row-reverse text-light">
    <div class="maintainer">
      <a href="http://bc.ufpa.br" target="_blank" rel="noopener noreferrer">
        <img src="@/static/images/bc.png" alt="Biblioteca Central">
      </a>
    </div>
    <div class="developer mr-2">
      <img src="@/static/images/sedepti.png" alt="SEDEPTI">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rights',
}
</script>

<style scoped>
  img {
    max-height: 75px;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    .wrapper-rights {
      flex-direction: column !important;
      align-items: center;
   }
  }
</style>
