<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="loginData.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginData.password"></mt-field>
    <mt-button type="primary" size="large" @click.native="logins">登录</mt-button>
  </div>
</template>

<script>
  import { Field, Button } from 'mint-ui';
  import { Toast } from 'mint-ui'
  import { login } from '@/utils/api/login'
  import { Indicator } from 'mint-ui';
  import uploadImage from'../../utils/uploadFile.js';
  export default{
    name:"Login",
    data(){
      return{
          loginData:{
            username:"admin",
            password:"123456"
          }
      }
    },
    components: { Field, Button },
    methods:{
      logins() {
        console.log(uploadImage);
        if(!this.loginData.username){
          Toast({
            message: '用户名不能为空',
            duration: 2000
          });
          return;
        }else if(!this.loginData.password){
          Toast({
            message: '密码不能为空',
            duration: 2000
          });
          return;
        };
        Indicator.open({
                        text: '登录中...',
                        spinnerType: 'fading-circle'
                      });
        setTimeout(() => {
          Indicator.close();
          window.sessionStorage.setItem("token","sasacsddsewfew4334werr");
          this.$router.push("/index");
        },2000)
        // 处理登陆逻辑
        // login(this.loginData).then(res => {
        //   console.log(res);
        // })
        // .catch(msg => {
        //   console.log(msg);
        // })
        // Toast({
        //   message: '提示',
        //   duration: 2000
        // });
      }
    }
  }
</script>

<style scoped>

</style>
