<template>
  <div class="dashboard-librarian" @click="showSidebar($event)">
    <LibrarianNavbar class="librarian-navbar navbar-light bg-light text-dark" />
    <div class="container-fluid">
      <div class="row">
        <LibrarianSidebar class="librarian-sidebar position-fixed bg-light text-dark" v-show="hiddenSidebar == true"/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 col-xl-10 pt-3 px-4 bg-light">
          <LibrarianPanel class="text-dark" v-show="hiddenSidebar == true" />
          <LibrarianSidebar class="librarian-sidebar-full bg-light text-dark d-block animate__animated" :class="{'animate__fadeInLeft': hiddenSidebar == false, 'animate__fadeInRight': hiddenSidebar == true}" v-show="hiddenSidebar == false" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hiddenSidebar: true
    }
  },
  methods: {
    showSidebar($event) {
      if ($event == true) {
        this.hiddenSidebar = false;
      } else {
        this.hiddenSidebar = true;
      }

      console.log('Recebendo o evento do filho')
      console.log($event)
    }
  }
}
</script>

<style scoped>
  .librarian-sidebar,
  .librarian-sidebar-full {height: 100vh; }

  .librarian-sidebar-full {
    border: none;
  }
</style>