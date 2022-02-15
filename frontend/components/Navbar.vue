<template>
  <nav class="navbar navbar-expand-md navbar-dark p-4 bg-transparent">
    <button class="navbar-toggler border-muted ml-auto" type="button" data-toggle="collapse" data-target="#navbarTarget" aria-label="navbar-toggler"> 
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTarget">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <NuxtLink class="nav-link text-light" to="/sobre">Sobre</NuxtLink>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <NuxtLink class="nav-link text-light" to="/contato">Contato</NuxtLink>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <NuxtLink class="nav-link text-light" to="/meu-espaco">Meu espaço</NuxtLink>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <NuxtLink class="nav-link text-light" to="/tutorial">Tutorial</NuxtLink>
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="text-light" name="loginButton" id="loginButton" href="#" role="button" data-toggle="modal" data-target="#loginModal">
            Login
          </a>
          <Login/>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
  nav {
    font-size: 1.3rem !important;
  }

  div.separator {
    height: 1rem;
  }
</style>