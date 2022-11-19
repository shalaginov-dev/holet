<template>
  <div>
    <!--    <Preloader/>-->
    <Header/>
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <Property/>
    <Newsletter/>
    <Footer/>
  </div>
</template>

<script>
import Preloader from "@/assets/MainLayout/preloader/Preloader";
import Newsletter from "@/components/Newsletter";
import Property from "@/components/SinglePage/Property";
import PageHeader from "@/components/SinglePage/PageHeader";
import SearchArea from "@/components/SearchArea";
import CustomFilter from "@/components/CustomFilter";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";

export default {
  name: "SinglePage",
  components: {Footer, Header, CustomFilter, SearchArea, PageHeader, Property, Newsletter, Preloader}
}
</script>

<style scoped>

</style>