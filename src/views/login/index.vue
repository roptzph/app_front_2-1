  
<template>
<div class="loginback">
  <div class="login-box">
            <h3 class="title">用户登陆</h3>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="60px" class="demo-ruleForm">
      <div  class="user-pass">

      <el-form-item class="user" label="用户"  prop="username">
        <el-input type="text" v-model="loginForm.username"  style="width:320px;" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item class="pass" label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" style="width:320px;" autocomplete="off"></el-input>
      </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" style="width:155px;">登陆</el-button>
        <el-button @click="resetForm('loginForm')" style="width:155px;">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
  </div>

</template>



<script>
  export default {
    data() {

      var validateusername = (rule, value, callback) => {
      if(!value) {
        return callback(new Error('请输入账号'))
      }
      if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
        callback(new Error('账号必须为6-20位字母和数字组合'))
      } else {
         callback()
      }
      };

      // var validateusername = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入用户名'));
      //   } else {
      //     if (this.loginForm.password !== '') {
      //       this.$refs.loginForm.validateField('password');
      //     }
      //     callback();
      //   }
      // };
      var validatepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value !== this.loginForm.username) {
          callback(new Error('两次输入不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateusername, trigger: 'blur' }
          ],
          password: [
            { validator: validatepassword, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-box{
    // background-image:url(../../../public/logo.png);
    background-color: rgba(238, 217, 217, 0.87);
    background-repeat: no-repeat;
    background-size:100%;
    background-position: 100%;
    width:400px;
    height:250px;
    margin:250px  auto;
    padding: 20px;
    border-radius: 10px;
    border:1px solid #eee;
  }
  .title{
    margin-bottom: 20px; 
    text-align: center;
  }
  .loginback{
    background-image: url(../../../public/g003.jpeg);
    background-size:100%;
    background-position: 100%;
    background-color:#cccccc;
    width:auto;
    height: 1000px;
    border:1px solid #eee;
    margin-top: 0px;
  }

 

</style>
