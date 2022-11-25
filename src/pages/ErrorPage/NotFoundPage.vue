<template>
  <div class="not-found-page">
    <h1>404 Стриница не надйена</h1>
    <p><a href="/"><b>Вернуться назад</b></a></p>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.not-found-page h1{
  font-family: "Montserrat", sans-serif;
  color: #495057;
  font-size: 35px;
  font-weight: bold;
  margin: 30px 0;
}

.not-found-page p {
  font-size: 25px;
  text-decoration: underline;
  color: #6d61ea;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
}
.not-found-page p:hover {
  color: #234c9a;
}
</style>