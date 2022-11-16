<template>
  <div class="app-container">
<!--    <AuthLayout/>-->
    <AdminLayout/>
<!--    <MainLayout/>-->
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";


export default {
  name: 'App',
  components: {
    AdminLayout,
    AuthLayout,
    MainLayout,
  }

}
</script>

<style lang="scss">
@import "styles/main";
</style>
