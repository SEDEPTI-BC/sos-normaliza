<template>
  <div class="dashboard-client">
    <ClientNavbar class="client-navbar navbar-light bg-light text-dark" />
    <div class="container-fluid">
      <div class="row">
        <ClientSidebar class="client-sidebar position-fixed bg-light text-dark" />
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 col-xl-10 pt-3 px-4 bg-light">
          <ClientPanel class="text-dark" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .client-sidebar {
    height: 100vh;
  }
</style>