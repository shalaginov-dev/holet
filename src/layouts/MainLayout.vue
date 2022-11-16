<template>
  <div class="main-layout">
    <CustomFilter/>
<!--    <Header/>-->
<!--    <HomePage/>-->
<!--    <SinglePage/>-->
<!--    <AboutUsPage/>-->
<!--    <ContactsPage/>-->
<!--    <GalleryPage/>-->
<!--    <Footer/>-->
  </div>
</template>

<script>
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import HomePage from "@/pages/HomePage";
import SinglePage from "@/pages/SinglePage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactsPage from "@/pages/ContactsPage";
import GalleryPage from "@/pages/GalleryPage";
import CustomFilter from "@/components/CustomFilter";

export default {
  name: "MainLayout",
  components: {CustomFilter, Footer, Header, GalleryPage, ContactsPage, AboutUsPage, SinglePage, HomePage},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style>
@import "../styles/Layouts/MainLayout.scss";
</style>