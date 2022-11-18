<template>
  <div>
    <TopBar/>
    <VerticalMenu/>
    <MainContent/>
  </div>
</template>

<script>
import TopBar from "@/components/Admin/TopBar";
import VerticalMenu from "@/components/Admin/VerticalMenu";
import MainContent from "@/components/Admin/MainContent/MainContent";
export default {
  name: "MainPage",
  components: {MainContent, VerticalMenu, TopBar}
}
</script>

<style scoped>

</style>