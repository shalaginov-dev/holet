<template>
  <section class="property padding-top padding-bottom bg--bgColor">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h3>Recent Properties</h3>
          <p>Search your properties for you happy life</p>
        </div>
      </div>
      <div class="property__wrapper">
        <div class="row g-4">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardProduct from "@/components/HomePage/CardProduct/CardProduct";
export default {
  name: "RecentProperties",
  components: {CardProduct}
}
</script>

<style scoped>

</style>