<template>
  <form class="search-users">
    <input
      
      class="search-users"
      type="text"
      placeholder="Search by nickname..."
    />
  </form>
</template>

<script setup>


</script>

<style lang="scss">
@import "../css/fluid.sass";
.search-users {
  width: auto;
  float: right;
  margin-right: 30px;
  @media screen and (max-width: 300px) {
    margin-right: 0px;
  }

  input {
    color: #324b4e;
    @include fluid("width", 350);
    @include fluid("height", 62);
    padding-left: 15px;
    border-radius: 42px;
    border: 2px solid #324b4e;
    background: #f9f0da;
    outline: none;
    position: relative;
    transition: 0.3s linear;
  }
  input:focus {
    @include fluid("width", 400);
  }
}
</style>
