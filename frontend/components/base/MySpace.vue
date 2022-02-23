<template>
  <div class="my-space">
    <h1 class="text-center nexa-bold">Acesse o seu espaço</h1>
    <p class="text-center">
      Através do seu espaço poderá consultar os seus agendamentos, cancelar reuniões ou remarcar reuniões canceladas, tudo isso em apenas um local.
    </p>
    <form method="post">
      <div class="form-group">
        <label for="spaceHash">Informe o seu hash</label>
        <input type="email" class="form-control" name="spaceHash" id="spaceHash" aria-describedby="spaceHashHelp" placeholder="123ABC">
        <small id="spaceHashHelp" class="form-text text-light nexa-bold">O <em class="nexa-bold">hash</em> é um código enviado para o seu e-mail no momento da finalização do agendamento, tenha ele em mãos para conseguir acesso ao seu espaço e no momento da reunião com o bibliotecário</small>
      </div>
      <div class="form-group">
        <label for="spacePassword">Informe a sua senha</label>
        <input type="password" name="spacePassword" id="spacePassword" class="form-control" placeholder="··········">
      </div>
      <button type="submit" class="btn btn-success border-light">Acessar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MySpace',
}
</script>

<style scoped>
  h1 { 
    font-size: 1.5rem;
    color: var(--main-color);
  }

  em { color: var(--main-color); }

  p,
  label { font-size: 1.3rem; }
</style>