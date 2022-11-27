<template>
  <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item  flat">
    <div class="gallery__item">
      <div class="gallery__item-inner">
        <img :src="img" alt="Property Image">
        <div class="gallery__item-content">
          <h4><a href="property-single.html">Eden Garden Plaza</a></h4>
          <p>
            <span><i class="fa-solid fa-location-dot"></i></span>
            277 hudson River Rd, Waterford.
          </p>
        </div>
      </div>
      <div class="desc-item">
        <p>{{name}}</p>
        <p>Описание: {{description}}</p>
        <p>Стоимость: {{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  data(){
    return{
    }
  },
  props:{
    name: {
      type: String,
      default() {
        return ''
      }
    },
    description: {
      type: String,
      default() {
        return ''
      }
    },
    price: {
      type: Number,
      default() {
        return 0
      }
    },
    img: {
      type: String,
      default() {
        return ''
      }
    },
  },
}
</script>

<style scoped>
.gallery__item-inner img{
  height: 200px;
}
.desc-item{
  border: 1px solid black;
  border-radius: 2px;
  border-top: none;
}
</style>