<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ description }}</td>
    <td>{{ type }}</td>
    <td>{{ city }}</td>
    <td>{{ rooms }}</td>
    <td>{{ price }}</td>
    <td><button class="adm-btn"><i class="fas fa-edit"></i></button></td>
  </tr>

</template>

<script>
export default {
  name: "ItemContent",
  props: {
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
</style>