<template>
  <div class="wrapper-brand d-flex flex-column">
    <NuxtLink to="/" class="text-decoration-none text-light">
      <div class="brand d-flex flex-column">
        <span class="head crafter-rough">SOS</span>
        <span class="body crafter-rough">Normaliza</span>
      </div>
    </NuxtLink>
    <div class="start">
      <a name="btnStart" id="btnStart" class="btn btn-start border-light" role="button">
        <NuxtLink to="/agendamento" class="text-light crafter-rough">
          Start
        </NuxtLink>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
}
</script>

<style>
  .brand > .head {
    font-size: 5rem;
    color: #1b0037;
    letter-spacing: 10px;
    line-height: 3rem;
    text-shadow: -10px 0 1px rgba(254, 33, 226, 1);
  }

  .brand > .body {
    font-size: 2rem;
  }

  .start > .btn-start {
    width: 100%;
    max-height: 45px;
    max-width: 230px;
    font-size: 1.5rem;
    border-radius: 35px !important;
    background-color: var(--main-bg) !important;
  }

  .start > .btn-start:hover {
    transition: 0.6s;
    text-decoration: underline !important;
    background-color: var(--secondary-bg) !important;
  }
</style>