<template>
  <div class="app-container">
    <MainLayout/>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";


export default {
  name: 'App',
  components: {
    MainLayout,
  }

}
</script>

<style lang="scss">
@import "styles/main";
</style>
