<template>
  <div>
    <!--  <Preloader/>-->
    <Header/>
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <Info/>
    <Contact/>
    <Map/>
    <Newsletter/>
    <Footer/>
  </div>
</template>

<script>
import Preloader from "@/assets/MainLayout/preloader/Preloader";
import SearchArea from "@/components/SearchArea";
import PageHeader from "@/components/ContactsPage/PageHeader";
import Info from "@/components/ContactsPage/Info";
import Contact from "@/components/ContactsPage/Contact";
import Map from "@/components/ContactsPage/Map";
import Newsletter from "@/components/Newsletter";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";

export default {
  name: "ContactsPage",
  components: {Footer, Header, Newsletter, Map, Contact, Info, PageHeader, SearchArea, Preloader}
}
</script>

<style scoped>

</style>