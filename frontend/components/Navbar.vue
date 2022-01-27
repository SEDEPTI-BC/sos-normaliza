<template>
  <nav class="navbar navbar-expand-md navbar-dark p-4 bg-transparent">
    <button class="navbar-toggler border-muted ml-auto" type="button" data-toggle="collapse" data-target="#navbarTarget"> 
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTarget">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-light" href="#sobre">Sobre <span class="sr-only">(current)</span></a>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#contato">Contato</a>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#meu-espaco">Meu espaço</a>
        </li>
        <div class="separator d-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#tutorial">Tutorial</a>
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