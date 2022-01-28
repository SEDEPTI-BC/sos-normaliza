<template>
  <div class="index">
    <header>
      <Navbar/>
    </header>
    <main class="d-md-flex align-items-center justify-content-between px-4">
      <div class="col-sm-12 col-md-6 text-light">
        <Tutorial class="animate__animated animate__fadeIn"/>
      </div>
      <Brand class="brand col-sm-12 col-md-5 my-4 pt-4 text-light"/>
    </main>
    <footer>
      <Rights/>
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
