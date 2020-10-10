<template>
  <div id="add-and-update">
    <el-dialog :title="title" :visible="addAndUpdateVisible" :close-on-click-modal="false" :before-close="handleClose">
      <el-form :model="categoryData" status-icon ref="categoryData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="id" prop="id">
          <el-input type="text" v-model="categoryData.id" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="分类名" prop="type_name">
          <el-input type="text" v-model="categoryData.type_name" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="分类信息" prop="type_info">
          <el-input type="text" v-model="categoryData.type_info" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="分类图片" prop="icon_url">
          <el-input type="text" v-model="categoryData.icon_url" auto-complete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel">取 消</el-button>
<!--          <el-button @click="resetForm('categoryData')">重置</el-button>-->
          <el-button type="primary" @click="submitForm('categoryData')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "AddAndUpdateCategory",
    props: ['addAndUpdateVisible', 'categoryId'],
    data() {
      return {
        categoryData: {},
        title:""
      };
    },
    methods: {

      handleClose(done) {
        this.$emit("update:addAndUpdateVisible", false);
       /* this.$confirm('确认关闭？').then(_ => {
          this.$notify({
            message: '操作成功',
            type: 'success'
          });
          this.$emit("update:addAndUpdateVisible", false);

        }).catch(_ => {
          this.$notify({
            message: '已取消操作',
            type: 'success'
          });
        });*/
      },
      cancel() {
        this.$emit("update:addAndUpdateVisible", false);
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.categoryData);
            this.$notify({
              message: '操作成功',
              type: 'success'
            });
            this.$emit("update:addAndUpdateVisible", false);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch: {
      categoryId(newValue, oldValue) {
        if (newValue !== undefined) {
          this.title = "修改";
          console.log(newValue);
          const categoryDatas = {
            id: newValue,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 1518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          };
          this.categoryData = categoryDatas;
        } else {
          this.title = "添加";
          this.categoryData = {};
        }
      }
    }

  }
</script>

<style scoped>

</style>