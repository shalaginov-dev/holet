<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center min-vh-100">
          <div class="w-100 d-block my-5">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-5">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center mb-4 mt-3">
                      <a href="">
                        <span><img src="../../assets/AdminLayout/images/logo-dark.png" alt="" height="26"></span>
                      </a>
                    </div>
                    <form action="mt-3" class="p-2">
                      <div class="form-group">
                        <label for="username">Имя</label>
                        <input v-model="form.name" class="form-control" type="text" id="username" required="" placeholder="Введите ваше имя">
                      </div>
                      <div class="form-group">
                        <label for="emailaddress">Адрес электронной почты</label>
                        <input v-model="form.email" class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com">
                      </div>
                      <div class="form-group">
                        <label for="password">Пароль</label>
                        <input v-model="form.password" class="form-control" type="password" required="" id="password" placeholder="Введите ваш пароль">
                      </div>
                      <div class="form-group mb-4 pb-3">
                        <div class="custom-control custom-checkbox checkbox-primary">
<!--                          <input type="checkbox" class="custom-control-input" id="checkbox-signin">-->
<!--                          <label class="custom-control-label" for="checkbox-signin">I accept <a href="#">Terms and Conditions</a></label>-->
                        </div>
                      </div>
                      <div class="mb-3 text-center">
                        <button @click="onSubmit" class="btn btn-primary btn-block" type="submit"> Создать! </button>
                      </div>
                    </form>
                  </div>
                  <!-- end card-body -->
                </div>
                <!-- end card -->

                <div class="row mt-4">
                  <div class="col-sm-12 text-center">
                    <p class="text-white-50 mb-0">У вас уже есть аккаунт? <a href="/login" class="text-white-50 ml-1"><b>Войти</b></a></p>
                  </div>
                </div>

              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div> <!-- end .w-100 -->
        </div> <!-- end .d-flex -->
      </div> <!-- end col-->
    </div> <!-- end row -->
  </div>

</template>

<script>
import {authApi} from "@/api/auth";

export default {
  name: "Registration",
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await authApi.doRegister(this.form).then(resp => {
          console.log(resp)
        })
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>

<style scoped>

</style>