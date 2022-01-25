<template>
  <div class="wrapper-brand d-flex flex-column">
    <div class="brand d-flex flex-column">
      <span class="head nexa-black">SOS</span>
      <span class="body nexa-black">Normaliza</span>
    </div>
    <div class="start">
      <button type="button" class="btn border-light text-light">
        <span class="nexa-black">Start</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .brand > .head {
    font-size: 5rem;
    color: #1b0037;
    letter-spacing: 10px;
    line-height: 3rem;
    text-shadow: -10px 0 1px rgba(254, 33, 226, 1);
  }

  .brand > .body {
    font-size: 2.4rem;
  }

  .start > button {
    width: 100%;
    max-height: 45px;
    max-width: 200px;
    border-radius: 35px !important;
    background-color: var(--main-bg) !important;
  }

  .start > button:hover {
    transition: 0.6s;
    text-decoration: underline !important;
    background-color: #6723b8 !important;
  }
</style>