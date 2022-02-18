<template>
  <nav class="navbar sticky-top flex-md-nowrap p-1">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0 text-center">
      <NuxtLink class="nexa-bold text-dark" to="/"><span class="highlight nexa-bold">SOS</span> Normaliza</NuxtLink>
    </a>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="btn nexa-bold" title="Sair do dashboard">
          <i class="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a class="btn btn-danger nexa-bold" title="Sair do dashboard">
          Sair
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ClientNavbar'
}
</script>

<style scoped>
  nav { box-shadow: 0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f; }

  .highlight { color: var(--border-bg); }
</style>