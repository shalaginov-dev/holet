<template>
  <div class="auth-layout">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>
@import "../styles/admin.scss";
.auth-layout{
  background-color: #6d61ea;
}
</style>