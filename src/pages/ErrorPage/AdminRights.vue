<template>
  <div class="adm-rights">
    <h1>You do not have administrator rights</h1>
    <p><a href="/login"><b>Back</b></a></p>
  </div>
</template>

<script>
export default {
  name: "AdminRights"
}
</script>

<style scoped>
.adm-rights {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.adm-rights p {
  font-size: 25px;
  text-decoration: underline;
}
</style>