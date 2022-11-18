<template>
  <div>
    <!--    <Preloader/>-->
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <PageHeader/>
    <AbotUs/>
    <Stat/>
    <Agents/>
    <Testimonial/>
    <Newsletter/>
  </div>
</template>

<script>
import PageHeader from "@/components/AboutUsPage/PageHeader";
import AbotUs from "@/components/AboutUsPage/AboutUs";
import Stat from "@/components/AboutUsPage/Stat";
import Agents from "@/components/Agents";
import Testimonial from "@/components/AboutUsPage/Testimonial";
import Newsletter from "@/components/Newsletter";

export default {
  name: "AboutUsPage",
  components: {Newsletter, Testimonial, Agents, Stat, AbotUs, PageHeader}
}
</script>

<style scoped>

</style>