<template>
  <div class="main-content">
    <div class="page-content">
      <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0 font-size-18">Datatables</h4>
              <button class="adm-btn">Добавить объект</button>

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
                <p class="card-subtitle mb-4">
                  Здесь вы можете редактировать объявления
                </p>

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
                  </tr>
                  </thead>
                  <tbody>
                  <ItemContent
                      name="Гараж"
                      description="Жилье для семьи, с удобствами"
                      type="Жилой гараж"
                      city="Ростов"
                      rooms=" 5 "
                      price="$320800"
                  />
                  <ItemContent
                      name="Квартира"
                      description="В самом центре столицы"
                      type="Квартира"
                      city="Москва"
                      rooms=" 3 "
                      price="$570500"
                  />
                  <ItemContent
                      name="Загородный дом"
                      description="Живописное место"
                      type="Дом"
                      city="Сочи"
                      rooms=" 6 "
                      price="$605300"
                  />
                  </tbody>
                </table>
              </div> <!-- end card body-->
            </div> <!-- end card -->
          </div><!-- end col-->
        </div>

      </div> <!-- container-fluid -->
    </div>

    <!-- End Page-content -->

    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            2020 © Opatix.
          </div>
          <div class="col-sm-6">
            <div class="text-sm-right d-none d-sm-block">
              Design & Develop by Myra
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>

</template>

<script>
import ItemContent from "@/components/Admin/MainContent/ItemContent";
export default {
  name: "MainContent",
  components: {ItemContent}
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

.adm-btn:hover{
  background-color: #116ac0;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);;
}
</style>