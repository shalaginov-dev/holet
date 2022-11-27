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
        <div class="add-post-block">
          <h5>Добавить пост</h5>
          <div class="findProp__input">
            <input v-model="formData.name" class="form-control" type="text" placeholder="Название"
                   aria-label="Enter Keyword">
          </div>
          <div class="findProp__input">
            <input v-model="formData.description" class="form-control" type="text" placeholder="Описание"
                   aria-label="Enter Keyword">
          </div>
          <div class="findProp__input">
            <input disabled class="form-control" type="number" placeholder="Стоимость" aria-label="Enter Keyword">
          </div>
          <button @click="addItem" class="adm-btn">Добавить</button>
        </div>

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

export default {
  name: "Gallery",
  components: {GalleryItem},
  methods: {
    getItems() {
      postsAPI.getPosts().then(res => {
        this.$data.items = res
      })
    },
    addItem() {
      postsAPI.createPosts({
        name: this.formData.name,
        description: this.formData.description,
        category_id: '0',
        id: Math.floor(Math.random() * 100)
      }).then(res => console.log(res))
    },
  },
  async mounted() {
    await this.getItems()
  },
  data() {
    return {
      items: [],
      formData: {
        name: '',
        description: '',
        category_id: '0',
        id: Math.floor(Math.random() * 100)
      }
    }
  },
}
</script>

<style scoped>
.add-post-block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  height: 280px;
  width: 270px;
  margin: 0 auto 30px;
}
.add-post-block h5 {
  margin-bottom: 10px;
}

.add-post-block input {
  width: 200px;
  margin-bottom: 10px;
}

.adm-btn {
  width: 200px;
  height: 38px;
  border: none;
  color: white;
  background-color: #08c1e0;;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)
}

.adm-btn:hover {
  background-color: #07a7c2;;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
}
</style>