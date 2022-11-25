<template>
  <header class="header-section">
    <div class="container">
      <div class="header-holder d-flex flex-wrap justify-content-between align-items-center">
        <div class="brand-logo d-none d-lg-inline-block">
          <div class="logo">
            <a href="/">
              <img src="../../assets/MainLayout/images/logo/logo.png" alt="logo">
            </a>
          </div>
        </div>
        <div class="header-menu-part">
          <div class="header-top">
            <div class="header-top-area">
              <ul class="left">
                <li>
                  <i class="icofont-ui-call"></i> <span>+800-123-4567 6587</span>
                </li>
                <li>
                  <i class="icofont-location-pin"></i> Beverley, New York 224 USA
                </li>
              </ul>
              <ul class="social-icons d-flex align-items-center">
                <li>
                  <a href="#" class="fb"><i class="icofont-facebook-messenger"></i></a>
                </li>
                <li>
                  <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                </li>
                <li>
                  <a href="#" class="vimeo"><i class="icofont-vimeo"></i></a>
                </li>
                <li>
                  <a href="#" class="skype"><i class="icofont-skype"></i></a>
                </li>
                <li>
                  <a href="#" class="rss"><i class="icofont-rss-feed"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="header-bottom">
            <div class="header-wrapper">
              <div class="mobile-logo d-lg-none">
                <a href="index.html"><img src="../../assets/MainLayout/images/logo/logo.png" alt="logo"></a>
              </div>
              <div class="menu-area">
                <ul class="menu">
                  <li>
                    <a href="/">Главная</a>
<!--                    <ul class="submenu">-->
<!--                      <li><a href="index.html">Home 1</a></li>-->
<!--                      <li><a href="index-2.html">Home 2</a></li>-->
<!--                      <li><a href="index-3.html">Home 3</a></li>-->
<!--                      <li><a href="index-4.html">Home 4</a></li>-->
<!--                      <li><a href="index-5.html">Home 5 (Single Property)</a></li>-->
<!--                    </ul>-->
                  </li>

                  <li>
                    <a href="/gallery">Галерея</a>
                    <!--                    <ul class="submenu">-->
<!--                      <li><a href="property-grid.html">Property Grid</a></li>-->
<!--                      <li><a href="property-grid-sidebar.html">Property Grid <small>(With Sidebar)</small> </a></li>-->
<!--                      <li><a href="property-list-sidebar.html">Property List <small>(With Sidebar)</small> </a></li>-->
<!--                      <li><a href="property-single.html">Property single</a></li>-->
<!--                      <li><a href="property-single-2.html">Property single 2</a></li>-->
<!--                    </ul>-->
                  </li>
                  <li>
                    <a href="/single">Объявление</a>
<!--                    <ul class="submenu">-->
<!--                      <li><a href="agent.html">All Agents</a></li>-->
<!--                      <li><a href="agent-single.html">Agent Details</a></li>-->
<!--                    </ul>-->
                  </li>
                  <li>
                    <a href="/contacts">Контакты</a>
<!--                    <ul class="submenu">-->
<!--                      <li><a href="about.html">About Us</a></li>-->
<!--                      <li><a href="gallery-3grid.html">Gallery 3 Col</a></li>-->
<!--                      <li><a href="gallery-4grid.html">Gallery 4 Col</a></li>-->
<!--                      <li><a href="service.html">Service</a></li>-->
<!--                      <li><a href="404.html">404 Page</a></li>-->
<!--                    </ul>-->
                  </li>
                  <li>
                    <a href="/about">О нас</a>
<!--                    <ul class="submenu">-->
<!--                      <li><a href="blog.html">Blog</a></li>-->
<!--                      <li><a href="blog-2.html">Blog 2</a></li>-->
<!--                      <li><a href="blog-single.html">Blog Single</a></li>-->
<!--                    </ul>-->
                  </li>
<!--                  <li><a href="contact.html">Contact</a></li>-->
                </ul>
                <a href="javascript:void(0);" class="search"><i class="icofont-search-1"></i></a>

                <!-- toggle icons -->
                <div class="header-bar d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="ellepsis-bar d-lg-none">
                  <i class="icofont-info-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>