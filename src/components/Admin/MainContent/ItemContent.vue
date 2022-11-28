<template>
  <tr v-if="!editMode">
    <td>{{ name }}</td>
    <td>{{ description }}</td>
    <td>{{ type }}</td>
    <td>{{ city }}</td>
    <td>{{ rooms }}</td>
    <td>{{ price }}</td>
    <td><button @click="editMode = !editMode" class="adm-btn"><i class="fas fa-edit"></i></button></td>
    <td><button @click="removeItem(id)" class="adm-btn"><i class="fas fa-trash"></i></button></td>
  </tr>
  <tr class="tr-edit" v-else>
    <td><input v-model="formData.name" placeholder="Название"/></td>
    <td><input v-model="formData.description" placeholder="Описание"/></td>
    <td><input type="number" placeholder="Тип"/></td>
    <td><input placeholder="Город"/></td>
    <td><input type="number" placeholder="Кол-во. комнат"/></td>
    <td><input placeholder="Цена"/></td>
    <td><button @click="updateItem(id)" class="adm-btn"><i class="fas fa-check"></i></button></td>
    <td><button @click="editMode = !editMode" class="adm-btn"><i class="fas fa-times"></i></button></td>
  </tr>
</template>

<script>
import {postsAPI} from "@/api/posts-api";

export default {
  name: "ItemContent",
  methods: {
    removeItem(id) {
      postsAPI.deletePost(id).then(res => console.log(res))
    },
    updateItem(id) {
      postsAPI.updatePost(id,{...this.formData}).then(res => console.log(res))
    },
  },
  data() {
    return {
      editMode: false,
      formData: {
        name: '',
        description: '',
      }
    }
  },
  props: {
    id: {
      type: Number,
      default() {
        return 0
      }
    },
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
      type: Number,
      default() {
        return 0
      }
    },
  }
}
</script>

<style scoped>
.adm-btn {
  margin: 0 0 0 10px;
  width: 28px;
  height: 28px;
  border: none;
  color: black;
  /*background-color: #888787;*/
  border-radius: 20%;
  cursor: pointer;
  font-weight: 500;
  background: none;
  /*box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)*/
}

.adm-btn:hover {
  background-color: #116ac0;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
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