<template>
  <div v-if="!editMode" class="col-xl-3 col-lg-6">
    <div class="card card-animate">
      <img class="card-img-top img-fluid" :src="img"
           alt="Card image cap">
      <div class="card-body">
        <h5 class="mb-1"><a href="" class="text-dark">{{ title }}</a></h5>
        <p class="text-muted font-size-13 mb-0">{{ type }}</p>
        <span>{{ city }}</span>
        <p class="text-muted m-0">{{ description }}</p>
        <p class="text-muted ">Комнат: {{ rooms }}</p>
        <p>Цена: {{ price }}</p>
        <button class="btn btn-sm btn-primary" @click="editMode = !editMode">Редактировать</button>
      </div>
    </div>
  </div>
  <div v-else class="col-xl-3 col-lg-6">
    <div class="card card-animate align-items-center p-5">
      <input type="file" placeholder="Image">
      <div class="card-body">
        <p><input type="text" placeholder="Название"></p>
        <p><input type="text" placeholder="Тип строения"></p>
        <p><input type="text" placeholder="Город"></p>
        <textarea placeholder="Описание"/>
        <p class="text-muted pt-2"><input type="number" placeholder="Количество комнат"/></p>
        <p><input placeholder="Цена"/></p>
        <button class="btn btn-sm btn-primary" @click="editMode = !editMode">Сохранить</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PostItem",
  data() {
    return {
      editMode: false
    }
  },

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
.card-img-top {
  height: 250px;
  width: 320px;
}

input, textarea {
  width: 115px;
  background-color: #f6f6f6;;
  border: 1px solid #b4b4b4;
  color: #636667;
  margin: 0 0 5px 0;
  border-radius: 3px;
}
</style>