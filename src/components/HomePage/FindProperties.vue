<template>
  <section class="findProp padding-top padding-bottom bg--bgColor">
    <div class="container">
      <div class="section-header">
        <div class="section-header__content">
          <h3>Find Properties</h3>
          <p>Search Yyour Properties to make your happy life</p>
        </div>
      </div>
      <div class="findProp__wrapper">
        <form class="findProp__form">
          <div class="findProp__top">
            <div class="row g-3">
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <input class="form-control" type="text" placeholder="Keyword" aria-label="Enter Keyword">
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Type Select">
                    <option selected>Property Type</option>
                    <option>Apartment</option>
                    <option>Luxury</option>
                    <option>Office Space</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Status select">
                    <option selected> Status</option>
                    <option>Available</option>
                    <option>On Development</option>
                    <option>Unavailable</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Location Select">
                    <option selected>Location</option>
                    <option>Neywork</option>
                    <option>California</option>
                    <option>Los Angels</option>
                    <option>Las Vegas</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property bedroom Select">
                    <option selected>Bedroom</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedroom</option>
                    <option>3 Bedroom</option>
                    <option>4 Bedroom</option>
                    <option>5 Bedroom</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Bathroom Select">
                    <option selected>Bathroom</option>
                    <option>2 Bath</option>
                    <option>3 bath</option>
                    <option>4 Bath Space</option>
                    <option>5 bath</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Area Select">
                    <option selected>Area (Sqft)</option>
                    <option>1500 sqft</option>
                    <option>2000 sqft</option>
                    <option>3000 sqft</option>
                    <option>5000 sqft</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="findProp__input">
                  <select class="form-select" aria-label="Property Price Select">
                    <option selected>Price ($)</option>
                    <option>$10000</option>
                    <option>$20000</option>
                    <option>$35000</option>
                    <option>$50000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="findProp__bottom">
            <div class="findProp__moreOp">
              <div class="findProp__moreToggle">
                <a class="findProp__moreBtn" href="javascript:void(0)"><span><i class="fa-solid fa-plus"></i></span>
                  More Options </a>
                <div class="findProp__moreInputs">
                  <div class="row g-3">
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption1">
                        <label class="form-check-label" for="moreOption1">
                          Air Conditioning
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption2">
                        <label class="form-check-label" for="moreOption2">
                          Computer
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption3">
                        <label class="form-check-label" for="moreOption3">
                          Toaster
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption4">
                        <label class="form-check-label" for="moreOption4">
                          Cot
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption5">
                        <label class="form-check-label" for="moreOption5">
                          Parking
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption6">
                        <label class="form-check-label" for="moreOption6">
                          Dishwasher
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption7">
                        <label class="form-check-label" for="moreOption7">
                          Central Heating
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption8">
                        <label class="form-check-label" for="moreOption8">
                          Dual Sinks
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption9">
                        <label class="form-check-label" for="moreOption9">
                          Electric Range
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption10">
                        <label class="form-check-label" for="moreOption10">
                          Emergency Exit
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption11">
                        <label class="form-check-label" for="moreOption11">
                          Fire Alarm
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption12">
                        <label class="form-check-label" for="moreOption12">
                          Fire Place
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption13">
                        <label class="form-check-label" for="moreOption13">
                          Home Theater
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption14">
                        <label class="form-check-label" for="moreOption14">
                          Laundry Room
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption15">
                        <label class="form-check-label" for="moreOption15">
                          Lawn
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption16">
                        <label class="form-check-label" for="moreOption16">
                          Marble Floors
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption17">
                        <label class="form-check-label" for="moreOption17">
                          Next to Busway
                        </label>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 col-md-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="moreOption18">
                        <label class="form-check-label" for="moreOption18">
                          Swimming Pool
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="default-btn" type="submit"><span>Search Now</span></button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FindProperties"
}
</script>

<style scoped>

</style>