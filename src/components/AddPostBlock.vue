<template>
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
    <button @click="addItem" class="add-post-btn">Добавить</button>
  </div>
</template>

<script>
import {postsAPI} from "@/api/posts-api";

export default {
  name: "AddPostBlock",
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
  methods: {
    addItem() {
      postsAPI.createPost({
        name: this.formData.name,
        description: this.formData.description,
        category_id: '0',
        id: Math.floor(Math.random() * 100)
      }).then(res => {
        console.log(res)
        this.$emit('closeAddPostBlock')
      })
    },
  }
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

.add-post-btn {
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

.add-post-btn:hover {
  background-color: #07a7c2;;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
}
</style>