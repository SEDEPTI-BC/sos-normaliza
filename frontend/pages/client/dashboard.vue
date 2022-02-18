<template>
  <div class="dashboard-client">
    <ClientNavbar :class="{'client-navbar': true, 'navbar-dark': !darkModeDisabled, 'navbar-light': darkModeDisabled, 'bg-dark': !darkModeDisabled, 'bg-light': darkModeDisabled, 'text-light': !darkModeDisabled, 'text-dark': darkModeDisabled}" />
    <div class="container-fluid">
      <div class="row">
        <ClientSidebar :class="{'client-sidebar': true, 'position-fixed': true, 'bg-dark': !darkModeDisabled, 'bg-light': darkModeDisabled, 'text-light': !darkModeDisabled, 'text-dark': darkModeDisabled}" />
        <main role="main" :class="{'col-md-12': true, 'ml-sm-auto': true, 'col-lg-9': true, 'col-xl-10': true, 'pt-3': true, 'px-4': true, 'bg-dark': !darkModeDisabled, 'bg-light': darkModeDisabled}">
          <ClientPanel :class="{'text-light': !darkModeDisabled, 'text-dark': darkModeDisabled}" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkModeDisabled: false,
    }
  }
}
</script>

<style scoped>
  .client-sidebar {
    height: 100vh;
  }
</style>