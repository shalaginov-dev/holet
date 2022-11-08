<template>
  <section class="contact padding-top padding-bottom bg--bgColor">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h3>Get In Touch</h3>
          <p>We're Always Eger To Hear From You!</p>
        </div>
      </div>
      <div class="contact__wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form action="contact.php" class="contact__form" id="contact-form" method="POST">
              <div class="row g-4">
                <div class="col-md-6">
                  <input class="form-control form-control-lg" type="text" placeholder="Your Name*" required="">
                </div>
                <div class="col-md-6">
                  <input class="form-control form-control-lg" type="email" placeholder="Your Email*" required="">
                </div>
                <div class="col-md-6">
                  <input class="form-control form-control-lg" type="tel" placeholder="Your No*" required="">
                </div>
                <div class="col-md-6">
                  <input class="form-control form-control-lg" type="text" placeholder="Subject*" required="">
                </div>
                <div class="col-12">
                  <textarea class="form-control form-control-lg" placeholder="Your Message"></textarea>
                </div>
              </div>
              <div class="text-center mt-5">
                <button type="submit" class="default-btn"><span>Send Message</span></button>
              </div>
              <p class="form-message mt-4 text-center"></p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>