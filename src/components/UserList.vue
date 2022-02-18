<template>
  
  <div>
    <h1 >用户列表资料</h1> <br>
    <el-button type="primary" @click="dialogVisible = true"   >添加用户</el-button> &nbsp
    搜索条件：
    <el-input v-model="findForm.name" clearable placeholder="输入姓名" style="width:100px" ></el-input>  &nbsp

<el-select v-model="valueSex" align="center" clearable placeholder="选择性别" style="width:140px"> 
    <el-option
      v-for="item in optionSex"
      :key="item.label"
      :label="item.valueSex"
      :value="item.label"
>
    </el-option>
  </el-select>  &nbsp
   <el-input v-model="age1" clearable placeholder="起始年龄" style="width:120px"></el-input>   -
   <el-input v-model="age2" clearable placeholder="结束年龄" style="width:120px"></el-input> &nbsp

 
      <el-select v-model="findForm.poid" clearable placeholder="选择部门" style="width:150px" >
         <el-option v-for="item in dept" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>  
 &nbsp

    <el-button type="primary" @click="findUser" plain>开始查询</el-button><br>

   <!--<label for="">显示照片开关</label>  &nbsp  
          <el-switch v-model="isPhoto"  active-color="#13ce66"  inactive-color="#ff4949">  </el-switch>  -->
          <el-checkbox v-model="isPhoto">显示隐藏照片</el-checkbox> 
  <el-table :data="userList"    stripe  border  style="width: 50%" >  

      <el-table-column prop="imgurl"  align="center"  v-if="isPhoto"  label="照片"  width="100px"> 
      <template v-slot="scope">
        <img :src="scope.row.imgurl" style="width: 35px; height: 40px" alt="照片" >
      </template>
     
      </el-table-column>

      <el-table-column prop="id"  align="center"    label="编号"  width="100">  </el-table-column>
      <el-table-column prop="name"   align="center"   label="姓名"  width="110"></el-table-column>
      <el-table-column prop="sex"   align="center"    label="姓别"  width="50"></el-table-column>

      <el-table-column prop="birthday"   align="center"    label="年龄"  width="70">
        <template v-slot="scope">{{ scope.row.birthday | dateToAge }} </template>
      </el-table-column>
      <el-table-column prop="age"   align="center"    label="年龄2"  width="70">

      </el-table-column>

      <el-table-column prop='birthday'   align="center"   label="出生日期"  width="100" >
        <template v-slot="scope">{{   dayjs(scope.row.birthday).format('YYYY-MM-DD') }} </template>
      </el-table-column>

      <el-table-column prop='poid'  align="center"    label="部门"  width="100" >  
        <template v-slot="scope">{{ scope.row.poid | idToName(dept) }} </template>
      </el-table-column>

        <el-table-column prop='putdate'   align="center"   label="修改日期"  width="160" >
        <template v-slot="scope">{{   dayjs(scope.row.putdate).format('YYYY-MM-DD HH:mm:ss') }} </template>
      </el-table-column>

      <el-table-column prop="other"  align="center"  filter-multiple label="其他"  width="80"> </el-table-column>
      <el-table-column prop="work"  align="center"  filter-multiple label="操作" width="200" >
        <template v-slot="scope">  <!--v-slot:defult or  #defult    ;   "{row}"  对应  row.id-->
          <div>
            <router-link :to="'/users/' + scope.row.id">详情</router-link>  &nbsp
            <a href="#"  @click="putShow(scope.row.id)">修改</a> &nbsp <!--prevent事件修饰符防跳转-->
            <!--<a href="#" @click.prevent="putUser(scope.row.id)">修改</a> &nbsp --> <!--prevent事件修饰符防跳转-->
            <a href="#" @click.prevent="delUser(scope.row.id)">删除</a>  <!--prevent事件修饰符防跳转-->
          </div>
        </template>
      </el-table-column>

  </el-table>

  <!--增加添加用户的对话框-->

  <el-dialog  title="添加新用户"  :visible.sync="dialogVisible"  width="25%" @close="onDialogClose" >
  
  <!--在对话框内增加表单-->
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" >
 
  <el-form-item label="用户名"  prop="name" >
    <el-input v-model="form.name"  style="width:180px"></el-input>
  </el-form-item>

  <el-form-item label="身份证" prop="idcard">
      <el-input v-model="form.idcard" placeholder="请输入身份证" style="width: 220px;"/>
  </el-form-item>



  <el-form-item label="出生日期"  prop="birthday" required >
   <div class="block">
    <el-date-picker
      v-model="form.birthday"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  </el-form-item>


<el-form-item label="年龄"  prop="age" style="width:30px" > 
  <el-input v-model="form.age" placeholder="输入年龄" style="width: 50px;"/>
   </el-form-item>
<el-form-item label="性别"  prop="sex" style="width:30px" > 
  <el-input v-model="form.sex" placeholder="性别" style="width: 50px;"/>
   </el-form-item>

 <!--  <el-form-item label="性别"  prop="sex">
    <el-radio-group v-model="form.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>  -->

   

        <el-form-item label="部门" prop="poid">
          <el-select v-model="form.poid" placeholder="请选择部门">
            <el-option v-for="item in dept" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="其他"  prop="other" style="width:300px" >
    <el-input v-model="form.other"></el-input>
  </el-form-item>

  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="NewAddUser">确 定</el-button>
  </span>
</el-dialog>
 
  <!--增加修改用户的对话框-->

  <el-dialog  title="修改用户资料"  :visible.sync="putDialogVisible"  width="20%" @close="onDialogClose" >
  
  <!--在对话框内增加表单v-for="(item,id) in putForm" :key= "id"-->
  <el-form 
      ref="putFormRef" 
      :model="putForm" 
      :rules="putRules" 
      label-width="80px" >
 
  <el-form-item label="用户编号"  prop="id" >
    <el-input v-model="putForm.id" :disabled="true"style="width:240px"  ></el-input>
  </el-form-item>
  <el-form-item label="用户名"  prop="name" style="width:240px">
    <el-input v-model="putForm.name"></el-input>
  </el-form-item>

  <el-form-item label="出生日期"  prop="birthday"  >
   <div class="block">
    <el-date-picker
      v-model="putForm.birthday"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  </el-form-item>
  


   <el-form-item label="性别"  prop="sex">
    <el-radio-group v-model="putForm.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
   </el-form-item>



 <el-form-item label="部门" prop="poid">
          <el-select v-model="putForm.poid" placeholder="请选择部门">
            <el-option v-for="item in dept" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
</el-form-item>

   <el-form-item label="其他"  prop="other" style="width:300px">
    <el-input v-model="putForm.other"></el-input>
  </el-form-item>


  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="putDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="putUser">确 定</el-button>
  </span>
</el-dialog>
 
  </div>
</template> 

<script>
import  dayjs  from  'dayjs'
import { Message } from 'element-ui';

export default {
  name: 'UserList',
  data(){
      //let birthday =  moment(birthday).format("YYYY-MM-DD")
     //声明校验年龄的函数
     let checkAge = (rule,value,callback) =>{
       if (!Number.isInteger(value)){
         return callback(new Error("请填写整数！"))
       }
       if (value > 100 || value < 1){
         return callback(new Error("年龄必须在1到100之间"))
       }
       callback()
     }
    return{
      that: this,   //只要这一步  +{{ scope.row.poid | idToName(that) }}  最优
      dept: [],
      userList: [],
      dialogVisible:false,
      putDialogVisible:false,
      isPhoto: true,
      optionSex: [{ valueSex: '男',label:'男' }, { valueSex: '女',label: '女'  }],
      valueSex: '',
      age1: '',
      age2: '',
      form : {
        id: '',
        name: '',
        idcard: '',
        sex:'',
        birthday:'',
        other:'',
        poid:''
      },
      
      findForm : {
        id: '',
        name: '',
        sex:'',
        birthday:'',
        other:'',
        poid:'',
        age: ''
      },
      //poid: '',
      putForm : {
        id: '',
        name: '',
        sex:'',
        birthday:'',
        other:'',
        poid:''
      },
    
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max:15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          idcard: [{ required: true, message: '身份证号不能为空', trigger: 'blur' },
          { validator: this.validID, trigger: 'blur' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],

      },
      putRules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max:15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          birthday: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],
          age: [
            { type: 'number', required: true, message: '请输入年龄', trigger: 'blur' },
            { validator: checkAge, trigger: 'blur'}
          ]
      }
    }
  },
  created(){
    //this.getUserList()
    this.getUserList()
    this.getDept()
  },

  methods: {
    getUserList() {  
      //因为不是在此页引入axios,所以要加this.axios  
      this.axios.get("/v1/getstaff")   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
        // 根据条件查询
    findUser() {
      let  name = this.findForm.name
      let  sex = this.valueSex
      let poid = this.findForm.poid
      let age1 = this.age1
      let age2 = this.age2
      this.axios
        .get("/v1/findstaff", {
          params: {
            name: name,
            sex: sex,
            poid: poid,
            age1: age1,
            age2: age2
          }
        })
        .then(res => {
          this.userList = res.data   //Invalid prop: type check failed for prop "model". Expected Object, got Array
          
        })
        .catch(error => {
          console.log(error)
        });
      // 展示编辑对话框
       },
    getDept() {  
      //因为不是在此页引入axios,所以要加this.axios  
      this.axios.get("/v1/getDept")   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.dept = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    onDialogClose(){
      this.$refs.form.resetFields()
      this.$refs.putFormref.resetFields()
    },
    isAddUser(){
      this.dialogVisible = false
      this.$message.success('添加用户成功！')
    },
    //新增用户
    NewAddUser() {  
      this.axios.post("/v1/poststaff",this.form   //全部就方便，用数组对象就行
      ,{})   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
           this.isAddUser()
           this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    //删除用户  
      //因为不是在此页引入axios,所以要加this.axios  
      //id, name, sex, birthday, other, age, poid
      //如何获取到删除记录的ID?要用插槽 v-slot="scope"  scope.row.id
      //后边怎么接收？三种方法都不行
    async delUser(id) { 
      const confirmResult = await this.$confirm(`此操作将永久删除编号为 "${id}" 用户的记录，是否继续？`,'提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).catch(err => err)
      if(confirmResult !== 'confirm') return this.$message.info('取消了删除！')
      this.$message.success('删除用户成功！')


      this.axios.delete("/v1/delstaff",{
        params:{
          id: id
        }
      },{})   //注意v1与后端app.use('/v1',router) 对应
        .then(res => {
           this.userList = res.data
           this.getUserList()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 展示编辑员工对话框
    putShow(id) {
      this.axios
        .get("/v1/getstaff_id", {
          params: {
            id: id
          }
        })
        .then(res => {
          this.putForm = res.data[0]   //Invalid prop: type check failed for prop "model". Expected Object, got Array
          
        })
        .catch(error => {
          console.log(error)
        });
      // 展示编辑对话框
      this.putDialogVisible = true
    },


    //提交修改用户
    putUser() { 
          this.putForm.birthday = dayjs(this.putForm.birthday).format('YYYY-MM-DD')
          this.axios.put("/v1/putstaff", this.putForm).then(res => {
          this.$message.success({ duration: 800, message: "修改用户成功！" })
          }).catch(error => {
          console.log(error)
        })
         // 关闭修改对话框
          this.putDialogVisible = false;
          // 刷新数据
          this.getUserList()
    },
    // 身份证验证
    async validID(rule,value,callback)
    {
      // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (reg.test(value)) {
        await this.go(value.length);
        callback()
      } else {
        callback(new Error('身份证号码不正确'))
      }
    },
 
    // 实现自动生成生日，性别，年龄
    go(val) {
      let iden = this.form.idcard;
      let sex = null;
      let birth = null;
      let myDate = new Date();
      let month = myDate.getMonth() + 1;
      let day = myDate.getDate();
      let age = 0;
 
      if(val===18){
        age = myDate.getFullYear() - iden.substring(6, 10) - 1;
        sex = iden.substring(16,17);
        birth = iden.substring(6,10)+"-"+iden.substring(10,12)+"-"+iden.substring(12,14);
        if (iden.substring(10, 12) < month || iden.substring(10, 12) == month && iden.substring(12, 14) <= day) age++;
 
      }
      if(val===15){
        age = myDate.getFullYear() - iden.substring(6, 8) - 1901;
        sex = iden.substring(13,14);
        birth = "19"+iden.substring(6,8)+"-"+iden.substring(8,10)+"-"+iden.substring(10,12);
        if (iden.substring(8, 10) < month || iden.substring(8, 10) == month && iden.substring(10, 12) <= day) age++;
      }
 
      if(sex%2 === 0)
        sex = '女';  //
      else
        sex = '男';
      //性别  ==> 1:男       0:女
      this.form.sex = sex;
      this.form.age = age;
      this.form.birthday = birth;
    },
  
},

  filters: {
    // 过滤生日
    dateToAge(value) {
      let birthday = new Date(value);
      let d = new Date();
      // 当前年份 - 出生年份  当前月份 < 出生月份 则 直接减 1岁  当前月份 = 出生月份 且 当前日期 < 出生日期 也减 1岁
      let age =
        d.getFullYear() -
        birthday.getFullYear() -
        (d.getMonth() < birthday.getMonth() ||
        (d.getMonth() === birthday.getMonth() &&
          d.getDate() < birthday.getDate())
          ? 1
          : 0);
      return age;
    },

    //方法一  1. {{ scope.row.poid | idToName(dept) }}  
  //idToName(deptid,dept){
      //let result = ''
      //dept.forEach(item => {
      //  if(item.id === deptid) { result = item.name }//不能直接RETURNT的
      //})
      //return result
    //}
    //方法二  容易理解 1.that:this 2.  {{ scope.row.poid | idToName(that) }}
   // idToName(id,that){
    //  let deptname = ''
    //  for (var i=0;i< that.dept.length ;i++){
    //    if(that.dept[i].id === id)  deptname = that.dept[i].name
    //}
   //  return deptname
  //  }

    //方法三 最优
    idToName(deptid,dept){
      let result = ''
      for ( let item of dept ) {
         if ( item.id === deptid )   result = item.name }
      return result
    }
  }
}


 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>