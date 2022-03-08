<template>
  <nav class="navbar sticky-top flex-md-nowrap p-1">
    <a class="navbar-brand col-sm-12 col-md-2 mr-0 text-center">
      <NuxtLink class="nexa-bold text-dark" to="/"><span class="highlight nexa-bold">SOS</span> Normaliza</NuxtLink>
    </a>
    <ul class="navbar-nav col-sm-12 col-md-3 px-3">
      <li class="nav-item text-nowrap d-flex justify-content-between align-items-center">
        <div class="wrapper-toggler">
          <button class="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" @click="activeSidebar()">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="options text-wrap">
          <a class="btn nexa-bold" title="Sair do dashboard">
            <span class="d-none">Notificações</span>
            <i class="fa fa-bell" aria-hidden="true"></i>
          </a>
          <a class="btn btn-danger nexa-bold" title="Sair do dashboard">
            <span class="d-none">Sair do Dashboard</span>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'LibrarianNavbar',
  data() {
    return {
      hiddenSidebar: true
    }
  },
  methods: {
    activeSidebar() {
      let sidebar = this.hiddenSidebar;
      this.$emit('showSidebar', sidebar);
      console.log('Emitindo evento')
    }
  }
}
</script>

<style scoped>
  nav { box-shadow: 0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f; }

  .highlight { color: var(--border-bg); }
  
  @media screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
    }
  }
</style>