<template>
  <div class="vertical-menu">

    <div data-simplebar class="h-100">

      <div class="navbar-brand-box">
        <a href="" class="logo">
          <img src="../../assets/AdminLayout/images/logo-dark.png" alt="logo-dark"/>
        </a>
      </div>

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li>
            <a href="/admin" class="waves-effect"><i class='bx bx-home-smile'></i><span
                class="badge badge-pill badge-primary float-right">3</span><span>Объекты</span></a>
          </li>
          <li><a href="/users" class="waves-effect"><i class="bx bx-user-circle"></i><span>Пользователи</span></a>
          </li>

        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>

</template>

<script>
export default {
  name: "VerticalMenu"
}
</script>

<style scoped>

</style>