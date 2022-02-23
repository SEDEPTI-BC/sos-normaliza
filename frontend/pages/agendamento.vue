<template>
  <div class="index">
    <header>
      <BaseNavbar/>
    </header>
    <main class="d-md-flex align-items-center justify-content-center">
      <div class="col-sm-12 col-md-8 text-light">
        <BaseScheduling class="animate__animated animate__fadeIn" />
      </div>
    </main>
    <footer>
      <BaseRights/>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  main {
    min-height: 70vh;
  }

  @media screen and (min-width: 769px) {
    footer {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    main {
      flex-direction: column !important;
    }

    .brand {
      align-items: center;
    }
  }
</style>
