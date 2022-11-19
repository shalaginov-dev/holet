<template>
  <div class="admin-layout">
    <div id="layout-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainPage from "@/pages/Admin/MainPage";

export default {
  name: "AdminLayout",
  components: {MainPage}
}
</script>

<style lang="css">
@import "../styles/admin.scss";
</style>