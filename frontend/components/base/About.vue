<template>
  <div class="about">
    <article>
      <h1 class="nexa-bold">Sobre o SOS Normaliza</h1>
      <h2 class="nexa-bold">Objetivo</h2>
      <p>
        O objetivo do sistema é cadastrar agendamentos de alunos, onde essese terão reuniões com servidores da Biblioteca Central da UFPA em um horário para fins de sanar as dúvidas com relação à normalização de trabalhos acadêmicos.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
  .about {
    max-height: 390px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  h1 { 
    font-size: 1.5rem;
    color: var(--main-color);
  }

  h2 { font-size: 1.4rem; }

  p { font-size: 1.3rem; }
</style>
