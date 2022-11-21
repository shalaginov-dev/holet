<template>
  <div class="select">
    <p
        @click="areOptionsVisible = !areOptionsVisible"
        class="form-select" aria-label="Property Type Select">{{ title }}</p>
    <div
        class="options"
        v-if="areOptionsVisible"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String | Number,
      default() {
        return '';
      }
    },
    title:{
      type: String,
      default(){
        return ''
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  },
}
</script>

<style scoped>
.select {
  position: relative;
  width: 300px;
  cursor: pointer;
  margin-bottom: 10px;
}

.title {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  border: 1px solid #b4b4b4;
  color: #636667;
  background-color: #ffffff;;
  border-radius: 2px;
  z-index: 2;
}

.select p {
  margin: 0;
}

.options {
  border: 1px solid #676767;
  color: #636667;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
}

.options p:hover {
  background-color: #e7e7e7;
}

</style>