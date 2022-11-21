<template>
  <div>
    <div class="filters">
      <div class="filter-title">
        <p>Filter</p>
      </div>
      <div class="select-item">
        <Select
            :options="categories"
            :selected="selectedCategories"
            :title=" 'Категория' "
            @select="sortByCategories"
        />
      </div>
      <div class="select-item">
        <Select
            :options="roomsNumber"
            :selected="selectedRooms"
            :title=" 'Кол-во комнат' "
            @select="sortByCategories"
        />
      </div>
      <div class="select-item">
        <Select
            :options="roomsNumber"
            :selected="selectedRooms"
            :title=" 'Город' "
            @select="sortByCategories"
        />
      </div>
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max='10000'
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-title">
        <span>Минимальная цена:</span>
        <span>Максимальная цена:</span>
      </div>
      <div class="range-values">
        <input type="number" placeholder="мин. цена" v-model="minPrice">
        <input type="number" placeholder="макс. цена" v-model="maxPrice">
      </div>

    </div>
    <!--    <div class="posts">-->
    <!--      <div class='card' v-for="post  in filteredPosts" :key="post.id">-->
    <!--        <span>{{ post.name }}</span>-->
    <!--        <span>Price: {{ post.price }}</span>-->
    <!--        <span>Category: {{ post.category }}</span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import Select from "@/components/Select";

export default {
  name: "CustomFilter",
  components: {Select},
  data() {
    return {
      minPrice: 0,
      maxPrice: 10000,
      posts: [
        {
          name: 'House 1',
          description: 'cool house',
          price: 570,
          id: 'T1',
          available: true,
          category: 'House'
        },
        {
          name: 'House 2',
          description: 'home with perfect view',
          price: 290,
          id: 'T2',
          available: true,
          category: 'Apartment'
        },
        {
          name: 'House 3',
          description: 'very big house',
          price: 680,
          id: 'T3',
          available: false,
          category: 'House'
        },
        {
          name: 'House 4',
          description: 'small and cosy apartment',
          price: 190,
          id: 'T4',
          available: true,
          category: 'Apartment'
        },
        {
          name: 'House 5',
          description: 'so expensive object',
          price: 380,
          id: 'T5',
          available: true,
          category: 'Apartment'
        }
      ],
      sortedPosts: [],
      categories: [
        {name: 'All', value: 'ALL'},
        {name: 'House', value: 'h'},
        {name: 'Apartment', value: 'a'},
      ],
      roomsNumber: [
        {name: 1},
        {name: 2},
        {name: 3},
      ],
      selectedRooms: 1,
      selectedCategories: 'All',
    }
  },
  computed: {
    filteredPosts() {
      if (this.sortedPosts.length) {
        return this.sortedPosts
      } else return this.posts
    }
  },
  methods: {
    sortByCategories(category) {
      let vm = this
      this.sortedPosts = [...this.posts]
      this.sortedPosts = this.sortedPosts.filter((post) => {
        return post.price >= vm.minPrice && post.price <= vm.maxPrice
      })
      if (category) {
        vm.selected = category.name
      }
      if (category) {
        this.sortedPosts = this.sortedPosts.filter((e) => {
          return e.category === category.name
        })
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = temp
      }
      this.sortByCategories()
    }
  },
  mounted() {
    this.sortByCategories()
  }
}
</script>

<style scoped>
@import "../styles/components/CustomFilter.scss";
</style>