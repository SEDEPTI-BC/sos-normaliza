<template>
  <div class="index">
    <header>
      <Navbar/>
    </header>
    <main class="d-md-flex align-items-center justify-content-between px-4">
      <Headline class="col-sm-4 text-light"/>
      <Brand class="mt-4 pt-4 col-sm-5 text-light"/>
    </main>
    <footer class="fixed-bottom">
      <Rights/>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
  main {
    min-height: 75vh;
  }
</style>
