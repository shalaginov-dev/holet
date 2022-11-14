<template>
  <div class="select">
    <p
        @click="areOptionsVisible = !areOptionsVisible"
        class="title">{{ selected }}</p>
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
      type: String,
      default() {
        return '';
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
  width: 200px;
  cursor: pointer;
}

.title {
  border: 1px solid black;
}

.select p {
  margin: 0;
}

.options {
  border: 1px solid black;
  position: relative;
  top: 20px;
  right: 0;
  width: 100%;
}

.options p:hover {
  background-color: #e7e7e7;
}

</style>