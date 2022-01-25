<template>
  <nav class="navbar navbar-expand-md navbar-dark p-4 bg-transparent">
    <button class="navbar-toggler border-muted ml-auto" type="button" data-toggle="collapse" data-target="#navbarTarget"> 
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTarget">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Sobre <span class="sr-only">(current)</span></a>
        </li>
        <div class="separator d-sm-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Contato</a>
        </li>
        <div class="separator d-sm-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Meu espaço</a>
        </li>
        <div class="separator d-sm-none d-md-block border-right border-primary mx-2 my-auto"></div>
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Tutorial</a>
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link text-light" href="#">Login</a>
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
    font-size: 1.3rem;
  }

  div.separator {
    height: 1rem;
  }
</style>