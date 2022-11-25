<template>
  <div>
    <TopBar/>
    <VerticalMenu/>
    <Posts/>
  </div>
</template>

<script>
import TopBar from "@/components/Admin/TopBar";
import VerticalMenu from "@/components/Admin/VerticalMenu";
import Posts from "@/components/Admin/Posts/Posts";

export default {
  name: "PostsPage",
  components: {Posts, VerticalMenu, TopBar}
}
</script>

<style scoped>

</style>