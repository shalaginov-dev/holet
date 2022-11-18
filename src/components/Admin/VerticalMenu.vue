<template>
  <div class="vertical-menu">

    <div data-simplebar class="h-100">

      <div class="navbar-brand-box">
        <a href="index.html" class="logo">
          <img src="../../assets/AdminLayout/images/logo-dark.png" alt="logo-dark"/>
        </a>
      </div>

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li>
            <a href="index.html" class="waves-effect"><i class='bx bx-home-smile'></i><span
                class="badge badge-pill badge-primary float-right">3</span><span>Объекты</span></a>
          </li>

          <li>
            <a href="javascript: void(0);" class="has-arrow waves-effect"><i class="bx bx-cookie"></i><span>UI elements</span></a>
            <ul class="sub-menu" aria-expanded="false">
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-buttons.html">Input</a></li>

            </ul>
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