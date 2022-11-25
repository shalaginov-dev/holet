<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ status }}</td>
    <td>{{ rights }}</td>
    <td>{{ city }}</td>
    <td>{{ age }}</td>
    <td>{{ price }}</td>
    <td><button class="adm-btn"><i class="fas fa-edit"></i></button></td>
  </tr>

</template>

<script>
export default {
  name: "UsersItem",
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
</style>