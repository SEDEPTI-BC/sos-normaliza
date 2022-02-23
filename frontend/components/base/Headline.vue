<template>
  <div class="wrapper">
    <div class="head">
      <h1>Agende um dia e horário para <span class="nexa-bold">atendermos sua demanda de normalização acadêmica!</span></h1>
    </div>
    <div class="body my-3">
      <span>Teremos uma equipe disponível para te ajudar.</span>
    </div>
    <div class="tail">
      <span class="nexa-bold">Simples. Prático. Produtivo</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headline',
}
</script>

<style scoped>
  h1, span {
    font-size: 1.5rem;
  }

  div.tail > span {
    color: var(--main-color);
  }
</style>
