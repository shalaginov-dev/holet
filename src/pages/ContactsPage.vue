<template>
  <div>
    <!--  <Preloader/>-->
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <Info/>
    <Contact/>
    <Map/>
    <Newsletter/>
  </div>
</template>

<script>
import Preloader from "@/assets/preloader/Preloader";
import SearchArea from "@/components/SearchArea";
import PageHeader from "@/components/ContactsPage/PageHeader";
import Info from "@/components/ContactsPage/Info";
import Contact from "@/components/ContactsPage/Contact";
import Map from "@/components/ContactsPage/Map";
import Newsletter from "@/components/Newsletter";

export default {
  name: "ContactsPage",
  components: {Newsletter, Map, Contact, Info, PageHeader, SearchArea, Preloader}
}
</script>

<style scoped>

</style>