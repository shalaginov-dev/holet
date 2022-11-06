<template>
  <div>
    <Banner/>
    <FindProperties/>
    <FeatProperties/>
    <RecentProperties/>
    <Agents/>
    <Testimonial/>
    <Blog/>
    <CTA/>
    <Newsletter/>
  </div>
</template>

<script>
import Swiper from '@/assets/js/swiper-bundle.min.js'
import Banner from "@/components/HomePage/Banner";
import FindProperties from "@/components/HomePage/FindProperties";
import FeatProperties from "@/components/HomePage/FeatProperties";
import RecentProperties from "@/components/HomePage/RecentProperties";
import Agents from "@/components/HomePage/Agents";
import Testimonial from "@/components/HomePage/Testimonial";
import Blog from "@/components/HomePage/Blog";
import CTA from "@/components/HomePage/CTA";
import Newsletter from "@/components/HomePage/Newsletter";

export default {
  name: "HomePage",
  components: {Newsletter, CTA, Blog, Testimonial, Agents, RecentProperties, FeatProperties, FindProperties, Banner},
  mounted() {
    $(document).ready(function () {
      var swiper = new Swiper(".banner__slider1", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".banner__slider1-next",
          prevEl: ".banner__slider1-prev",
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
    })
  }
}
</script>

<style scoped>

</style>