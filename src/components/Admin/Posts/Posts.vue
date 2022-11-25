<template>
  <div class="main-content">

    <div class="page-content">
      <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0 font-size-18">Starter</h4>

              <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"><a href="javascript: void(0);">Opatix</a></li>
                  <li class="breadcrumb-item active">Team Members</li>
                </ol>
              </div>

            </div>
          </div>
        </div>
        <!-- end page title -->
        <div class="row">
          <div class="col-12">
            <div class="card card-animate">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-8">
                    <form class="form-inline">
                      <div class="form-group">
                        <label for="inputPassword2" class="mr-2">Search: </label>
                        <input type="search" class="form-control" id="inputPassword2" placeholder="Search...">
                      </div>
                      <div class="form-group mx-sm-3">
                        <label for="status-select" class="mr-2">Sort By: </label>
                        <select class="custom-select" id="status-select">
                          <option selected="">All</option>
                          <option value="1">Name</option>
                          <option value="2">Post</option>
                          <option value="3">Followers</option>
                          <option value="4">Followings</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="col-lg-4">
                    <div class="text-lg-right mt-3 mt-lg-0">
                      <button type="button" class="btn btn-success mr-1"><i class="mdi mdi-cog"></i></button>
                      <a href="#" class="btn btn-danger"><i class="mdi mdi-plus-circle mr-1"></i> Add New</a>
                    </div>
                  </div><!-- end col-->
                </div> <!-- end row -->
              </div>
            </div> <!-- end card-box -->
          </div><!-- end col-->
        </div>
        <!-- end row -->

        <div class="row">
          <PostItem
              title="Гараж"
              description="Жилье для семьи, с удобствами!"
              type="Жилой гараж"
              city="Ростов"
              rooms=" 5 "
              price="$320800"
              img="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2021/11/24151024/Rawson_Facade2_2000x1500.jpg"
          />
          <PostItem
              title="Дом"
              description="Жилье для семьи, с удобствами!"
              type="Жилой дом"
              city="Москва"
              rooms=" 2 "
              price="$460800"
              img="https://www.one-automation.com/wp-content/uploads/2022/02/Fibaro-System-in-Dubai.jpg"
          />
          <PostItem
              title="Квартира"
              description="Жилье для семьи, с удобствами!"
              type="Квартира"
              city="Ростов"
              rooms=" 2 "
              price="$223800"
              img="https://mthcdn.azureedge.net/-/media/corporate/meritage-web-photos---selected/10-homepage/mth_southcarolina_800x600.ashx?h=600&la=en&w=800&rev=2df4a404c37f49dfaf51cfc208f1661f&hash=9BB8C3EA75AC46B27E6EBF8D7F4D263D3ED6DB5D"
          />
          <PostItem
              title="Гараж"
              description="Жилье для семьи, с удобствами!"
              type="Жилой гараж"
              city="Ростов"
              rooms=" 5 "
              price="$320800"
              img="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2022/06/08163131/31A3885.png"
          />
        </div>
        <!-- end row-->


        <div class="row">
          <PostItem
              title="Гараж"
              description="Жилье для семьи, с удобствами!"
              type="Жилой гараж"
              city="Ростов"
              rooms=" 5 "
              price="$320800"
              img="https://time.com/nextadvisor/wp-content/uploads/2020/06/na-how-to-make-most-money-selling-home-1.jpg"
          />
          <PostItem
              title="Гараж"
              description="Жилье для семьи, с удобствами!"
              type="Жилой гараж"
              city="Ростов"
              rooms=" 5 "
              price="$320800"
              img="https://time.com/nextadvisor/wp-content/uploads/2020/06/na-how-to-make-most-money-selling-home-1.jpg"
          />
        </div>
        <!-- end row-->

        <div class="row">
          <div class="col-12">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="javascript: void(0);" tabindex="-1">Previous</a>
                </li>
                <li class="page-item active"><a class="page-link" href="javascript: void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="javascript: void(0);">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- end row-->

      </div> <!-- container-fluid -->
    </div>
    <!-- End Page-content -->


  </div>

</template>

<script>
import PostItem from "@/components/Admin/Posts/PostItem";

export default {
  name: "Posts",
  components: {PostItem}
}
</script>

<style scoped>

</style>