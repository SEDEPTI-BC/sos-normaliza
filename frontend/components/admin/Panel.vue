<template>
  <div class="panel">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
      <h1>Painel de Controle</h1>
    </div>
    <h2>Agendamentos</h2>
    <div class="table-responsive">
      <table class="table table-striped table-sm text-dark">
        <thead>
          <tr>
            <th class="d-none d-lg-block">ID</th>
            <th>Horário</th>
            <th>Data</th>
            <th>Bibliotecário</th>
            <th>Ações</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="d-none d-lg-block">
              001
            </td>
            <td>
              2M2
            </td>
            <td>
              32/02/71
            </td>
            <td>
              Nezuko Kamado
            </td>
            <td>
              <div class="buttons options">
                <button class="btn btn-warning">
                  <i class="fa fa-pencil text-light" aria-hidden="true"></i>
                </button>
                <button class="btn btn-danger">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td class="d-none d-lg-block">
              002
            </td>
            <td>
              2M3
            </td>
            <td>
              32/02/72
            </td>
            <td>
              Zenitsu Agatsuma
            </td>
            <td>
              <div class="buttons options">
                <button class="btn btn-warning">
                  <i class="fa fa-pencil text-light" aria-hidden="true"></i>
                </button>
                <button class="btn btn-danger">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </td>
            <td>Pendente</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
}
</script>

<style>
  .panel {
    height: 100vh;
    overflow-y: scroll !important;
    scrollbar-width: unset !important;
  }

  @media screen and (max-width: 448px) {
    .options {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      align-items: center !important;
      gap: 2px;
    }
  }
</style>