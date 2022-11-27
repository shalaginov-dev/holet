<template>
  <tr v-if="!editMode">
    <td>{{ name }}</td>
    <td>{{ status }}</td>
    <td>{{ rights }}</td>
    <td>{{ city }}</td>
    <td>{{ age }}</td>
    <td>{{ price }}</td>
    <td><button @click="editMode = !editMode" class="adm-btn"><i class="fas fa-edit"></i></button></td>
  </tr>
  <tr class="tr-edit" v-else>
    <td><input placeholder="Имя"/></td>
    <td><input placeholder="Статус"/></td>
    <td><input type="number" placeholder="Права"/></td>
    <td><input placeholder="Город"/></td>
    <td><input type="number" placeholder="Возраст"/></td>
    <td><input placeholder="Продажи"/></td>
    <td><button @click="editMode = !editMode" class="adm-btn"><i class="fas fa-edit"></i></button></td>
  </tr>

</template>

<script>
export default {
  name: "UsersItem",
  data() {
    return {
      form: {
        name: '',
        status: '',
        rights: '',
        city: '',
        age: '',
        sales: '',
      },
      editMode: false
    }
  },
  methods:{

  },
  props: {
    name: {
      type: String,
      default() {
        return ''
      }
    },
    status: {
      type: String,
      default() {
        return ''
      }
    },
    rights: {
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
    age: {
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
  border-radius: 20%;
  cursor: pointer;
  font-weight: 500;
  background: none;
}

.adm-btn:hover {
  background-color: #116ac0;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
}
.tr-edit td{
  padding: 12px 0;
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