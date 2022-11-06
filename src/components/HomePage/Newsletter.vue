<template>
  <section class="newsletter" style="background-image:url(../../assets/images/newsletter/bg.jpg)">
    <div class="container">
      <div class="newsletter__wrapper">
        <div class="row g-4 align-items-center">
          <div class="col-lg-5">
            <h3 class="newsletter__title">
              Subscribe for newsletter
            </h3>
          </div>
          <div class="col-lg-7">
            <div class="newsletter__form">
              <div class="input-group">
                <span class="input-group-text"> <i class="fa-solid fa-paper-plane"></i> </span>
                <input type="text" class="form-control" aria-label="Newsletter input" placeholder="Enter Your Email">
                <button class="default-btn"><span>Subscribe</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Newsletter"
}
</script>

<style scoped>

</style>