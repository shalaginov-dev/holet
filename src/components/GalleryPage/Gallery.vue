<template>
  <section class="gallery padding-top padding-bottom">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h3>Галерея</h3>
          <p>Explore our famous properties</p>
        </div>
      </div>
      <div class="gallery__wrapper">
        <div class="default__filter-btns gallery__filter-btns justify-content-center mb-5">
          <a class="default__filter-btn" href="javascript:void(0);" data-filter="*">All</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".office">Office</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".cottage">Cottage</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".flat">Flat</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".com">Commercial</a>
        </div>
        <AddPostBlock/>

        <div class="gallery__grid row g-3">
          <GalleryItem
              v-for="post in items"
              :name="post.name"
              :description="post.description"
              :price="post.price"
              img="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/24151024/Rawson_Facade2_2000x1500.jpg"
          />

          <!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item  com">-->
          <!--            <div class="gallery__item">-->
          <!--              <div class="gallery__item-inner">-->
          <!--                <img src="../../assets/MainLayout/images/property/02.jpg" alt="Property Image">-->
          <!--                <div class="gallery__item-content">-->
          <!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
          <!--                  <p>-->
          <!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
          <!--                    277 hudson River Rd, Waterford.-->
          <!--                  </p>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GalleryItem from "@/components/GalleryPage/GalleryItem";
import {postsAPI} from "@/api/posts-api";
import AddPostBlock from "@/components/AddPostBlock";

export default {
  name: "Gallery",
  components: {AddPostBlock, GalleryItem},
  methods: {
    getItems() {
      postsAPI.getPosts().then(res => {
        this.$data.items = res
      })
    },
  },
  async mounted() {
    await this.getItems()
  },
  data() {
    return {
      items: [],
    }
  },
}
</script>

<style scoped>

</style>