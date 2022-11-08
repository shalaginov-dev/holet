<template>
  <div>
    <!--    <Preloader/>-->
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <Property/>
    <Newsletter/>
  </div>
</template>

<script>
import Preloader from "@/assets/preloader/Preloader";
import Newsletter from "@/components/Newsletter";
import Property from "@/components/SinglePage/Property";
import PageHeader from "@/components/SinglePage/PageHeader";
import SearchArea from "@/components/SearchArea";

export default {
  name: "SinglePage",
  components: {SearchArea, PageHeader, Property, Newsletter, Preloader}
}
</script>

<style scoped>

</style>