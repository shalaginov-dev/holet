<template>
  <div class="main-content">

    <div class="page-content">
      <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-2 mt-2 font-size-18">Пользователи</h4>
            </div>
          </div>
        </div>
        <!-- end page title -->

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Таблица пользователей</h4>
                <p class="card-subtitle mb-4">
                  Здесь вы можете редактировать пользователей
                </p>

                <table id="basic-datatable" class="table dt-responsive nowrap">
                  <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Статус</th>
                    <th>Права</th>
                    <th>Город</th>
                    <th>Возраст</th>
                    <th>Продаж</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <UsersItem
                      name="Иван"
                      status="Менеджер"
                      rights="2ур."
                      city="Ростов"
                      age=" 24 "
                      price="$320800"
                  />
                  <UsersItem
                      name="Егор"
                      status="Руководитель"
                      rights="1ур."
                      city="Москва"
                      age=" 43 "
                      price="$570500"
                  />
                  <UsersItem
                      name="Александр"
                      status="Риелтор"
                      rights="3ур."
                      city="Сочи"
                      age=" 30 "
                      price="$605300"
                  />
                  </tbody>
                </table>
              </div> <!-- end card body-->
            </div> <!-- end card -->
          </div><!-- end col-->
        </div>

        <!-- end row-->

      </div> <!-- container-fluid -->
    </div>
    <!-- End Page-content -->

  </div>

</template>

<script>
import ItemContent from "@/components/Admin/MainContent/ItemContent";
import UsersItem from "@/components/Admin/Users/UsersItem";
export default {
  name: "UsersTable",
  components: {UsersItem, ItemContent}
}
</script>

<style scoped>

</style>