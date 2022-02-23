<template>
  <nav class="col-md-3 col-xl-2 d-none d-lg-block sidebar">
    <div class="sidebar-sticky">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"  data-toggle="collapse" href="#contentId" aria-expanded="true" aria-controls="contentId">
        <span>Ações</span>
        <a class="d-flex align-items-center text-muted">
          <span class="d-none">Ícone do usuário</span>
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
      </h6>
      <div class="collapse" id="contentId">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa fa-calendar" aria-hidden="true"></i> Agendamentos
            </a>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/agendamento">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Novo agendamento
            </NuxtLink>
          </li>
        </ul>
      </div>

      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Redes Sociais</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span class="d-none">Ícone de compartilhamento</span>
          <i class="fa fa-share-alt" aria-hidden="true"></i>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" href="https://bc.ufpa.br/" target="_blank">
            <i class="fa fa-book" aria-hidden="true"></i> Biblioteca Central
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://portal.ufpa.br/" target="_blank">
            <i class="fa fa-university" aria-hidden="true"></i> Portal da UFPA
          </a>
        </li>
      </ul>
      <div class="d-flex justify-content-center align-items-center dark-mode">
        <i class="fa fa-sun-o mr-1" :class="{focus: !darkModeEnabled}" aria-hidden="true"></i>
        <label class="switch mt-2">
          <input type="checkbox" aria-label="Habilitar ou desabilitar modo escuro" v-model="darkModeEnabled" @click="darkMode()">
          <span class="slider round"></span>
        </label>
        <i class="fa fa-moon-o ml-1" :class="{focus: darkModeEnabled}" aria-hidden="true"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ClientSidebar',
  data() {
    return {
      darkModeEnabled: false,
    }
  },
  methods: {
    darkMode() {
      if (this.darkModeEnabled == true) {
        console.log('Inativo');
      } else {
        console.log('Ativo');
      }
    }
  }
}
</script>

<style scoped>
  .sidebar { border-right: 1px solid #00000024; }

  .sidebar-heading { cursor: pointer; }

  .nav-item { font-size: 1rem !important; }

  .nav-link { color: var(--main-bg); }

  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider::before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--secondary-bg);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--main-br);
  }

  input:checked + .slider::before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }

  .slider.round {
    border-radius: 17px;
  }

  .slider.round::before {
    border-radius: 50%;
  }

  .dark-mode { font-size: 1rem; }

  .focus { color: var(--main-bg); }
</style>