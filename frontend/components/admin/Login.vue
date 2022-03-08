<template>
  <div class="login">
    <form class="form-signin text-center">
      <h1 class="h3 mb-3 font-weight-normal">Preencha os campos abaixo para acessar a área de administrador</h1>
      <input type="email" id="inputEmail" class="form-control mb-1" placeholder="inosuke@hashibira.com" aria-label="Informe o seu e-mail" required autofocus>
      <input type="password" id="inputPassword" class="form-control" placeholder="··········" aria-label="Informe a sua senha" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" aria-label="Logar no sistema">Login</button>
      <p class="mt-5 mb-3 text-muted">&copy; SEDEPTI 2021 - {{ currentYear }} </p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

</style>