<template>
  <div class="dashboard-client">
    <ClientNavbar :class="{'client-navbar': true, 'navbar-dark': darkModeEnabled, 'navbar-light': !darkModeEnabled, 'bg-dark': darkModeEnabled, 'bg-light': !darkModeEnabled, 'text-light': darkModeEnabled, 'text-dark': !darkModeEnabled}" />
    <div class="container-fluid">
      <div class="row">
        <ClientSidebar :class="{'client-sidebar': true, 'position-fixed': true, 'bg-dark': darkModeEnabled, 'bg-light': !darkModeEnabled, 'text-light': darkModeEnabled, 'text-dark': !darkModeEnabled}" />
        <main role="main" :class="{'col-md-12': true, 'ml-sm-auto': true, 'col-lg-9': true, 'col-xl-10': true, 'pt-3': true, 'px-4': true, 'bg-dark': darkModeEnabled, 'bg-light': !darkModeEnabled}">
          <ClientPanel :class="{'text-light': darkModeEnabled, 'text-dark': !darkModeEnabled}" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkModeEnabled: false,
    }
  }
}
</script>

<style scoped>
  .client-sidebar {
    height: 100vh;
  }
</style>