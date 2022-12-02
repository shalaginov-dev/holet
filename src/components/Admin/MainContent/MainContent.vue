<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0 font-size-18">Объекты</h4>
              <button
                  v-if="!addPostBlockVisible"
                  @click="addPostBlockVisible = !addPostBlockVisible"
                  class="adm-btn"
              >Добавить объект
              </button>
              <AddPostBlock
                  v-else
                  @closeAddPostBlock="closeAddPostBlock"
              />

              <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                  <li class="breadcrumb-item active">Datatables</li>
                </ol>
              </div>

            </div>
          </div>
        </div>
        <!-- end page title -->

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">База недвижимости</h4>
                <!--                <p class="card-subtitle mb-4">-->
                <!--                  Здесь вы можете редактировать объявления-->
                <!--                </p>-->
                <table id="mobile-datatable" class="table dt-responsive nowrap">
                  <thead>
                  <tr>
                    <th>Название</th>
                    <th>Название</th>
                  </tr>
                  </thead>
                  <MobileItemContent
                      v-for="post in items"
                      :id="post.id"
                      :name="post.name"
                      :description="post.description"
                      type="Жилой гараж"
                      city="Ростов"
                      rooms=" 5 "
                      :price="post.price"
                  />
                </table>
                <table id="basic-datatable" class="table dt-responsive nowrap">
                  <thead>
                  <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Тип</th>
                    <th>Город</th>
                    <th>Количество комнат</th>
                    <th>Цена</th>
                    <th></th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <ItemContent
                      v-for="post in items"
                      :id="post.id"
                      :name="post.name"
                      :description="post.description"
                      type="Жилой гараж"
                      city="Ростов"
                      rooms=" 5 "
                      :price="post.price"
                  />
                  </tbody>
                </table>
              </div> <!-- end card body-->
            </div> <!-- end card -->
          </div><!-- end col-->
        </div>

      </div> <!-- container-fluid -->
    </div>

  </div>

</template>

<script>
import ItemContent from "@/components/Admin/MainContent/ItemContent";
import AddPostBlock from "@/components/AddPostBlock";
import {postsAPI} from "@/api/posts-api";
import MobileItemContent from "@/components/Admin/MainContent/MobileItemContent";

export default {
  name: "MainContent",
  components: {MobileItemContent, AddPostBlock, ItemContent},
  data() {
    return {
      addPostBlockVisible: false,
      items: [],
    }
  },
  methods: {
    getItems() {
      postsAPI.getPosts().then(res => {
        this.$data.items = res
        console.log(res)
      })
    },
    closeAddPostBlock() {
      this.addPostBlockVisible = false
    },
  },
  async mounted() {
    await this.getItems()
  },
}
</script>

<style scoped>
.adm-btn {
  width: 278px;
  height: 38px;
  border: none;
  color: white;
  background-color: #1976d2;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)
}

.adm-btn:hover {
  background-color: #116ac0;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
}

.mobile-item-block {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
}
@media screen and (min-width: 850px) {
  #mobile-datatable{
    display: none;
  }
}
@media screen and (max-width: 850px) {
  .adm-btn {
    width: 150px;
    margin: 0 auto;
  }

  .container-fluid {
    padding: 0;
  }

  .card-body {
    padding: 2px;
  }

  .page-title-right {
    display: none;
  }

  h4 {
    display: none;
  }

  #basic-datatable {
    display: none;
  }
}
</style>