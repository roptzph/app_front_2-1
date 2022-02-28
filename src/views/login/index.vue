  
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
      }else {
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
        }else{
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
      //登陆提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let { username,password} = this.loginForm;
            //请求登录接口------------- 
            this.axios.post("/v1/login", {
              username,password
            }).then(res=>{
              console.log('-----',res.data);
              if(res.data.status===200){
                console.log(jwt(res.data.data));
                //登录成功后：1. 存储登录信息  2. 跳转网页 3. 顶部区域显示用户信息  4. 持久化
                let obj ={
                  user:jwt(res.data.data).username,
                  token:res.data.data
                }
                //this.setUser(obj)
                //存储本地
                //localStorage.setItem('user',JSON.stringify(obj))
                //跳转
                this.$router.push('/')
                // this.info=''

              }else{
                //账号或者密码错误
                // this.info='账号或者密码错误'
                 this.$message.error('错了哦，这是一条错误消息');
              }
            })


          } else {
            console.log('error submit!!');
            return false;
          }
        })
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
    background-color: rgba(255, 255, 255, 0.452);
    background-repeat: no-repeat;
    background-size:100%;
    background-position: 100%;
    width:400px;
    height:250px;
    margin:250px  auto;
    padding: 20px;
    border-radius: 10px;
    border:1px solid rgba(224, 207, 207, 0.021);
  }
  .title{
    margin-bottom: 20px; 
    text-align: center;
  }
  .loginback{
    background-image: url(../../../public/g004.jpg);
    background-size:100%;
    background-position: 100%;
    background-color:#cccccc;
    width:auto;
    height: 1000px;
    border:1px solid #eee;
    border-radius: 20px;
    margin-top: 0px;
  }

 

</style>
