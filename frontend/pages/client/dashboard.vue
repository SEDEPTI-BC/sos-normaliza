<template>
  <div class="dashboard-client" @click="showSidebar($event)">
    <ClientNavbar class="client-navbar navbar-light bg-light text-dark" />
    <div class="container-fluid">
      <div class="row">
        <ClientSidebar class="client-sidebar position-fixed bg-light text-dark" v-show="hiddenSidebar == true"/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 col-xl-10 pt-3 px-4 bg-light">
          <ClientPanel class="text-dark" v-show="hiddenSidebar == true" />
          <ClientSidebar class="client-sidebar-full bg-light text-dark d-block animate__animated" :class="{'animate__fadeInLeft': hiddenSidebar == false, 'animate__fadeInRight': hiddenSidebar == true}" v-show="hiddenSidebar == false" />
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
  created() {
    this.$nuxt.$on('showSidebar', function ($event) {
      if ($event == true) {
        this.hiddenSidebar = false;
      } else {
        this.hiddenSidebar = true;
      }
    })
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
  .client-sidebar,
  .client-sidebar-full {height: 100vh; }

  .client-sidebar-full {
    border: none;
  }
</style>