<template>
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header text-light">
          <h5 class="modal-title nexa-bold">Logar no sistema</h5>
            <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body bg-light">
          <form method="post">
            <div class="form-group">
              <label for="emailLogin">Informe o seu e-mail</label>
              <input type="email" class="form-control" name="emailLogin" id="emailLogin" aria-describedby="emailHelpId" placeholder="tanjiro@kamado.com" autofocus>
            </div>
            <div class="form-group">
              <label for="passwordLogin">Informe a sua senha</label>
              <input type="password" class="form-control" name="passwordLogin" id="passwordLogin" placeholder="***************">
            </div>
            <div class="form-group text-center mb-0">
              <small>
                <a href="#">Clique aqui caso tenha esquecido sua senha!</a>
              </small>
            </div>
          </form>
        </div>
        <div class="modal-footer mx-auto">
          <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button> -->
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
  .modal-content {
    border: none !important;
    background: #e1e1e1 !important ;
  }

  .modal-content .form-control {
    border: none !important;
  }

  .modal-header {
    background: var(--secondary-bg) !important;
  }
</style>
