<template>
  <div>
    <!--  <Preloader/>-->
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <Gallery/>
    <Newsletter/>
  </div>
</template>

<script>
import Preloader from "@/assets/MainLayout/preloader/Preloader";
import SearchArea from "@/components/SearchArea";
import PageHeader from "@/components/GalleryPage/PageHeader";
import Gallery from "@/components/GalleryPage/Gallery";
import Newsletter from "@/components/Newsletter";

export default {
  name: "GalleryPage",
  components: {Newsletter, Gallery, PageHeader, SearchArea, Preloader}
}
</script>

<style scoped>

</style>