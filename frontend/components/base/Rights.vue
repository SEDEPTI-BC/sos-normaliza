<template>
  <div class="wrapper-rights d-flex flex-row-reverse text-light">
    <div class="maintainer">
      <a href="http://bc.ufpa.br" target="_blank" rel="noopener noreferrer">
        <span class="d-none">Biblioteca Central</span>
        <figure>
          <img src="@/static/images/bc.png" alt="Biblioteca Central" title="Biblioteca Central">
        </figure>
      </a>
    </div>
    <div class="developer mr-2">
      <span class="d-none">Biblioteca Central</span>
      <figure>
        <img src="@/static/images/sedepti.png" alt="SEDEPTI" title="SEDEPTI">
      </figure>
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
      /* flex-direction: column !important; */
      justify-content: center;
      align-items: center;
   }
  }
</style>
