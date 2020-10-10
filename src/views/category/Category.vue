<template>
  <div id="look-category">
    <div class="head">
      <div class="head-ch1">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/index/mains/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/index/mains/category' }">管理图书信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="head-ch2">
        <el-tooltip class="item" effect="dark" content="添加分类" placement="top-start">
          <el-button type="success primary" size="mini" class="btn" @click="handleEdit()" circle><i class="el-icon-plus"/>
          </el-button>
        </el-tooltip>
      </div>

    </div>

    <el-table :data="category" class="el-table">
      <el-table-column label="id" width="100%">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="类型" width="100%">
        <template slot-scope="scope">
          {{ scope.row.type_name }}
        </template>
      </el-table-column>
      <el-table-column label="简介" width="600%">
        <template slot-scope="scope">
          <p>{{ scope.row.type_info }}</p>
        </template>
      </el-table-column>
      <el-table-column label="图片地址" width="200%">
        <template slot-scope="scope">
          <el-image :src="scope.row.icon_url" class="el-image"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200%">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="修改分类" placement="top-end">
            <el-button size="mini" @click="handleEdit(scope.row.id)" type="primary" circle><i class="el-icon-edit"/>
            </el-button>&emsp;&emsp;&emsp;&emsp;
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除分类" placement="top-start">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)" circle ><i
                class="el-icon-delete" /></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <add-and-update-category :addAndUpdateVisible.sync="addAndUpdateCategory" :categoryId="id"/>
  </div>
</template>

<script>
  import AddAndUpdateCategory from './AddAndUpdateCategory'

  export default {
    name: "LookCategory",
    components: {
      AddAndUpdateCategory
    },
    data() {
      return {
        category: [],
        addAndUpdateCategory: false,
        id: 0
      }
    },
    methods: {
      handleEdit(row) {
        this.id = row;
        this.addAndUpdateCategory = true;
      },
      handleDelete(index, row) {
        this.$confirm('确认删除？').then(_ => {
          this.$notify({
            message: '操作成功',
            type: 'success'
          });
        }).catch(_ => {
          this.$notify({
            message: '已取消操作',
            type: 'success'
          });
        });
        console.log(index, row);
      },

      getCategory() {
        const tableData = [
          {
            id: 1,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 1518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 5,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 1上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 55,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 1上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 4,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 1上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 8,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路上海市普陀区金沙江路 15上海市普陀区金沙江路 15 1518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 74,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 151518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 1,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江路 1上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 1,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙江上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15路 1518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
          {
            id: 1,
            type_name: '玄幻',
            type_info: '上海市普陀区金沙上海市普陀区金沙江路 15上海市普陀区金沙江路 15上海市普陀区金沙江路 15江路 1518 弄',
            icon_url: "https://img.ivsky.com/img/tupian/slides/202004/14/yuhangyuan-018.jpg"
          },
        ];
        tableData.forEach((item, index) => {
          this.category.push(item);
        })
      }
    },
    created() {
      this.getCategory();
    }
  }
</script>

<style scoped>
  .head {
    display: flex;
    flex-direction: row;
    height: 20%;
  }

  .head-ch1 {
    width: 80%;
  }

  .head-ch2 {
    width: 20%;
  }

  .el-image {
    width: 50px;
    height: 50px;
    border-radius: 0.5cm;
  }

  .el-table {
    margin-top: 1%;
    width: 100%;
  }

  .btn {
    margin-left: 50%;
  }
</style>