<template>
  <div class="admin-layout">
    <div id="layout-wrapper">
      <MainPage/>
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

<style lang="scss">
//@import "../styles/admin.scss";
</style>