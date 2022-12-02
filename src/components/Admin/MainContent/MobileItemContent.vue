<template>
  <tbody>
    <tr>
      <td>Название</td>
      <td>{{ name }}</td>
    </tr>
    <tr>
      <td>Описание</td>
      <td>{{ description }}</td>
    </tr>
    <tr>
      <td>Тип</td>
      <td>{{ type }}</td>
    </tr>
    <tr>
      <td>Город</td>
      <td>{{ city }}</td>
    </tr>
    <tr>
      <td>Количество комнат</td>
      <td>{{ rooms }}</td>
    </tr>
    <tr>
      <td>Цена</td>
      <td>{{ price }}</td>
    </tr>
  <tr>
    <td><button @click="" class="adm-btn"><i class="fas fa-edit"></i></button></td>
    <td><button @click="removeItem(id)" class="adm-btn"><i class="fas fa-trash"></i></button></td>
  </tr>
  </tbody>
</template>

<script>
export default {
  name: "MobileItemContent",
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
tbody{
  border: 5px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
}
td{
  width: 200px;
}
</style>