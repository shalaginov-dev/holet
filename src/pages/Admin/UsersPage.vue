<template>
  <div>
    <TopBar/>
    <VerticalMenu/>
    <UsersTable/>
  </div>
</template>

<script>
import TopBar from "@/components/Admin/TopBar";
import VerticalMenu from "@/components/Admin/VerticalMenu";
import UsersTable from "@/components/Admin/Users/UsersTable";

export default {
  name: "UsersPage",
  components: {UsersTable, VerticalMenu, TopBar}
}
</script>

<style scoped>

</style>