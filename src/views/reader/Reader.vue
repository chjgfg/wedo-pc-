<template>
  <div id="reader">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index/mains/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/mains/reader' }">管理图书信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="head">
      <el-table :data="user" class="user">
        <el-table-column label="id" width="120">
          <template slot-scope="scope">
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column label="用户名" width="120">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>
        <el-table-column label="密码" width="290">
          <template slot-scope="scope">
            <p>{{ scope.row.password }}</p>
          </template>
        </el-table-column>
        <el-table-column label="电话" width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.phone }}</p>
          </template>
        </el-table-column>
        <el-table-column label="头像" width="120">
          <template slot-scope="scope">
            <el-image class="images" :src="scope.row.u_photo" :fit="fit"/>
          </template>
        </el-table-column>
       <!-- <el-table-column label="盐" width="120">
          <template slot-scope="scope">
            <p>{{ scope.row.slat }}</p>
          </template>-->
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="'删除读者'+scope.row.username" placement="top-end">
              <el-button size="mini" @click="handleDelete(scope.$index, scope.row.id)" type="danger" circle><i
                  class="el-icon-delete"/></el-button>&emsp;&emsp;&emsp;&emsp;
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>

<script>
  export default {
    name: "reader",

    data() {
      return {
        fit: 'cover',
        user: [],
        addAndUpdateCategory: false,
        id: 0
      }
    },
    methods: {
      /* handleEdit(row) {
         // console.log(index, row);
         this.id = row;
         this.addAndUpdateCategory = true;
       },*/
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
      getReader() {
        const tableData = [
          {
            id: 1,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2057588226,2402156864&fm=111&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 4,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2227671074,2861155729&fm=111&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 2,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2708018419,4185141343&fm=11&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 67,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2246476953,1207680009&fm=11&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 8,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1807694557,434037998&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 5,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2844899141,12883538&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 7,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2059927486,2456161292&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 90,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194131577,2954769920&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 4,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1151143562,4115642159&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
          {
            id: 55,
            username: '天蚕土豆',
            password: '上海市普陀区金沙江路 1518 弄',
            phone: "11111112222233333",
            u_photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2669898717,1590930959&fm=26&gp=0.jpg",
            slat: "11111111111"
          },
        ];
        tableData.forEach((item, index) => {
          this.user.push(item);
        })
      }
    },
    created() {
      this.getReader();
    }


  }
</script>

<style scoped>
  .head {
    margin-top: 2%;
  }

  .user {
    width: 100%;
  }

  .images {
    width: 50px;
    height: 50px;
    border-radius: 0.5em;
  }

</style>