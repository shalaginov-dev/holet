<template>
  <div>
    <div class="filters">
      <Select
          :options="categories"
          :selected="selected"
          @select="sortByCategories"

      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
        <div class="range-values">
          <p>Min: {{ minPrice }}</p>
          <p>Max: {{ maxPrice }}</p>
        </div>
      </div>
    </div>
    <div class="posts">
      <div class='card' v-for="post  in filteredPosts" :key="post.id">
        <span>{{ post.name }}</span>
        <span>{{ post.price }}</span>
        <span>{{ post.category }}</span>
      </div>
    </div>
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
      maxPrice: 1000,
      posts: [
        {
          name: 'House 1',
          description: 'cool house',
          price: 100000,
          id: 'T1',
          available: true,
          category: 'House'
        },
        {
          name: 'House 2',
          description: 'home with perfect view',
          price: 105000,
          id: 'T2',
          available: true,
          category: 'Apartment'
        },
        {
          name: 'House 3',
          description: 'very big house',
          price: 143000,
          id: 'T3',
          available: false,
          category: 'House'
        },
        {
          name: 'House 4',
          description: 'small and cosy apartment',
          price: 98400,
          id: 'T4',
          available: true,
          category: 'Apartment'
        },
        {
          name: 'House 5',
          description: 'so expensive object',
          price: 87050,
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
      selected: 'All',
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
      this.selected = category.name
      this.sortedPosts = []
      let vm = this
      this.posts.map(p => {
        if (p.category === category.name) {
          vm.sortedPosts.push(p)
        }
      })
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = temp
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.posts {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.main-layout .card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
  padding: 8px;
  width: 150px;
  height: 150px;
  border: 1px black solid;
  box-shadow: 2px 2px 5px #888787;
}
</style>