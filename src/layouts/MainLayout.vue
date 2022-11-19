<template>
  <div class="main-layout">
    <HomePage/>
    <SinglePage/>
    <AboutUsPage/>
    <ContactsPage/>
    <GalleryPage/>
  </div>
</template>

<script>
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import HomePage from "@/pages/Main/HomePage";
import SinglePage from "@/pages/Main/SinglePage";
import AboutUsPage from "@/pages/Main/AboutUsPage";
import ContactsPage from "@/pages/Main/ContactsPage";
import GalleryPage from "@/pages/Main/GalleryPage";
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

<style lang="scss">
//@import "../styles/main";
</style>