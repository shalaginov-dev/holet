<template>
  <div class="main-layout">
    <header class="header-section">
      <div class="container">
        <div class="header-holder d-flex flex-wrap justify-content-between align-items-center">
          <div class="brand-logo d-none d-lg-inline-block">
            <div class="logo">
              <a href="index.html">
                <img src="../assets/images/logo/logo.png" alt="logo">
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
                  <a href="index.html"><img src="../assets/images/logo/logo.png" alt="logo"></a>
                </div>
                <div class="menu-area">
                  <ul class="menu">
                    <li>
                      <a href="javascript:void(0);">Home</a>
                      <ul class="submenu">
                        <li><a href="index.html">Home 1</a></li>
                        <li><a href="index-2.html">Home 2</a></li>
                        <li><a href="index-3.html">Home 3</a></li>
                        <li><a href="index-4.html">Home 4</a></li>
                        <li><a href="index-5.html">Home 5 (Single Property)</a></li>
                      </ul>
                    </li>

                    <li>
                      <a href="javascript:void(0);">Properties</a>
                      <ul class="submenu">
                        <li><a href="property-grid.html">Property Grid</a></li>
                        <li><a href="property-grid-sidebar.html">Property Grid <small>(With Sidebar)</small> </a></li>
                        <li><a href="property-list-sidebar.html">Property List <small>(With Sidebar)</small> </a></li>
                        <li><a href="property-single.html">Property single</a></li>
                        <li><a href="property-single-2.html">Property single 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Agents</a>
                      <ul class="submenu">
                        <li><a href="agent.html">All Agents</a></li>
                        <li><a href="agent-single.html">Agent Details</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Pages</a>
                      <ul class="submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="gallery-3grid.html">Gallery 3 Col</a></li>
                        <li><a href="gallery-4grid.html">Gallery 4 Col</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Blog</a>
                      <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-2.html">Blog 2</a></li>
                        <li><a href="blog-single.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
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
    <HomePage/>
<!--    <SinglePage/>-->
<!--    <AboutUsPage/>-->
<!--    <ContactsPage/>-->
<!--    <GalleryPage/>-->
    <footer class="footer">
      <div class="footer__top padding-top padding-bottom"
           style="background-image:url(../assets/images/footer/bg.jpg)">
        <div class="container">
          <div class="footer__wrapper">
            <div class="row gy-5 gx-4">
              <div class="col-lg-4">
                <div class="footer__about">
                  <a href="index.html"><img src="../assets/images/logo/logo.png" alt="logo"></a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores saepe perspiciatis
                    iusto!
                    Repellendus, ab?</p>
                  <ul class="footer__about-info">
                    <li class="footer__about-infoItem"><span><i class="fa-solid fa-location-dot"></i></span> 22 Anzel
                      Towe,
                      Neywork , USA
                    </li>
                    <li class="footer__about-infoItem"><span><i class="fa-solid fa-phone"></i></span> +09987654321</li>
                    <li class="footer__about-infoItem"><span><i class="fa-solid fa-envelope"></i></span>
                      info@yourmail.com
                    </li>
                    <li class="footer__about-infoItem"><span><i class="fa-brands fa-skype"></i></span> skype.user</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="footer__items">
                  <div class="row gy-5 gx-4">
                    <div class="col-lg-3 col-sm-6">
                      <div class="footer__title">
                        <h4>Property</h4>
                      </div>
                      <div class="footer__content">
                        <ul class="footer__linklist">
                          <li><a class="footer__link" href="#">Apartment</a></li>
                          <li><a class="footer__link" href="#">Commercial</a></li>
                          <li><a class="footer__link" href="#">Land & Plot</a></li>
                          <li><a class="footer__link" href="#">Residental</a></li>
                          <li><a class="footer__link" href="#">Multi Family</a></li>
                          <li><a class="footer__link" href="#">Single Family</a></li>
                          <li><a class="footer__link" href="#">Villa</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-5 col-sm-6">
                      <div class="footer__title">
                        <h4>Recent Posts</h4>
                      </div>
                      <div class="footer__content">
                        <div class="footer__post">
                          <div class="footer__post-item">
                            <div class="footer__post-inner">
                              <div class="footer__post-thumb">
                                <img src="../assets/images/blog/01.jpg" alt="blog image">
                              </div>
                              <div class="footer__post-content">
                                <h6><a href="blog-single.html">Top 10 property list for our business</a></h6>
                                <p>June 22, 2022</p>
                              </div>
                            </div>
                          </div>
                          <div class="footer__post-item">
                            <div class="footer__post-inner">
                              <div class="footer__post-thumb">
                                <img src="../assets/images/blog/02.jpg" alt="blog image">
                              </div>
                              <div class="footer__post-content">
                                <h6><a href="blog-single.html">Find Your Dream house in myland</a></h6>
                                <p>Sep 22, 2022</p>
                              </div>
                            </div>
                          </div>
                          <div class="footer__post-item">
                            <div class="footer__post-inner">
                              <div class="footer__post-thumb">
                                <img src="../assets/images/blog/03.jpg" alt="blog image">
                              </div>
                              <div class="footer__post-content">
                                <h6><a href="blog-single.html">Best Property & Real Estate HTML Template</a></h6>
                                <p>June 22, 2022</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="footer__title">
                        <h4>Photo Gallery</h4>
                      </div>
                      <div class="footer__content">
                        <ul class="footer__gallery">
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/01.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/02.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/03.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/04.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/05.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/06.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/07.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/08.jpg" alt="gallery image">
                          </li>
                          <li class="footer__gallery-item">
                            <img src="../assets/images/gallery/09.jpg" alt="gallery image">
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="container">
          <div class="footer__copyright-content">
            <p class="mb-0">&copy; 2022 . All rights Reserved.</p>
            <ul class="footer__copyright-nav hstack gap-4">
              <li class="footer__copyright-navItem"><a href="#">Privacy</a></li>
              <li class="footer__copyright-navItem"><a href="#">Policy</a></li>
              <li class="footer__copyright-navItem"><a href="#">Terms & Condition</a></li>
              <li class="footer__copyright-navItem"><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HomePage from "@/pages/HomePage";
import SinglePage from "@/pages/SinglePage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactsPage from "@/pages/ContactsPage";
import GalleryPage from "@/pages/GalleryPage";

export default {
  name: "MainLayout",
  components: {GalleryPage, ContactsPage, AboutUsPage, SinglePage, HomePage},
}
</script>

<style>
@import "../styles/Layouts/MainLayout.scss";
</style>