<template>
  <div class="col-xl-3 col-lg-6">
    <div class="card card-animate">
      <img class="card-img-top img-fluid" :src="img"
           alt="Card image cap">
      <div class="card-body">
        <h5 class="mb-1"><a href="" class="text-dark">{{title}}</a></h5>
        <p class="text-muted font-size-13 mb-0">{{type}}</p>
        <span>{{city}}</span>
        <p class="text-muted m-0">{{description}}</p>
        <p class="text-muted ">Комнат: {{rooms}}</p>
        <p>Цена: {{price}}</p>

        <a href="#" class="btn btn-sm btn-primary">Редактировать</a>
      </div>
    </div> <!-- end card-->
  </div>

</template>

<script>
export default {
  name: "PostItem",
  props: {
    title: {
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
    type: {
      type: String,
      default() {
        return ''
      }
    },
    city: {
      type: String,
      default() {
        return ''
      }
    },
    rooms: {
      type: String,
      default() {
        return ''
      }
    },
    price: {
      type: String,
      default() {
        return ''
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
.card-img-top{
  height: 250px;
  width: 320px;
}
</style>