<template>
  <section class="gallery padding-top padding-bottom">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h3>Галерея</h3>
          <p>Explore our famous properties</p>
        </div>
      </div>
      <div class="gallery__wrapper">
        <div class="default__filter-btns gallery__filter-btns justify-content-center mb-5">
          <a class="default__filter-btn" href="javascript:void(0);" data-filter="*">All</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".office">Office</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".cottage">Cottage</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".flat">Flat</a>
          <a class="default__filter-btn" href="javascript:void(0);" data-filter=".com">Commercial</a>
        </div>

        <div class="gallery__grid row g-3">
          <GalleryItem
          img="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/24151024/Rawson_Facade2_2000x1500.jpg"
          />
          <GalleryItem
          img="https://www.one-automation.com/wp-content/uploads/2022/02/Fibaro-System-in-Dubai.jpg"
          />
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item  com">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/02.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item office">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/03.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item cottage flat">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/04.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item flat com">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/05.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item com">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/06.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item flat">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/07.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item cottage">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/08.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item office">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/09.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item flat">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/10.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item com">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/11.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-xl-3 col-lg-4 col-sm-6 gallery__grid-item com">-->
<!--            <div class="gallery__item">-->
<!--              <div class="gallery__item-inner">-->
<!--                <img src="../../assets/MainLayout/images/property/12.jpg" alt="Property Image">-->
<!--                <div class="gallery__item-content">-->
<!--                  <h4><a href="property-single.html">Eden Garden Plaza</a></h4>-->
<!--                  <p>-->
<!--                    <span><i class="fa-solid fa-location-dot"></i></span>-->
<!--                    277 hudson River Rd, Waterford.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GalleryItem from "@/components/GalleryPage/GalleryItem";
export default {
  name: "Gallery",
  components: {GalleryItem}
}
</script>

<style scoped>

</style>