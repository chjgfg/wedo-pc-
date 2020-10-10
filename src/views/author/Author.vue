<template>
  <div id="author">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index/mains/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/mains/author' }">管理图书信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tooltip class="item" effect="dark" content="添加作者" placement="top-start">
      <el-button type="success primary" size="mini" class="btn"  @click="handleEdit()" circle><i class="el-icon-plus"/></el-button>
    </el-tooltip>
    <el-table :data="author" style="width: 100%">
      <el-table-column label="id" width="100%">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="作者名" width="100%">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="简介" width="700%">
        <template slot-scope="scope">
          <p>{{ scope.row.introduce }}</p>
        </template>
      </el-table-column>
      <el-table-column label="照片" width="100%">
        <template slot-scope="scope">
          <el-image :src="scope.row.a_photo" style="width: 50px;height: 50px;border-radius: 0.5em"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200%">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="修改作者" placement="top-end">
            <el-button size="mini" @click="handleEdit(scope.row.id)" type="primary" circle><i class="el-icon-edit"/></el-button>&emsp;&emsp;&emsp;&emsp;
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除作者" placement="top-start">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)" circle><i class="el-icon-delete"/></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <add-and-update-author :addAndUpdateVisible.sync ="addAndUpdateAuthor" :author-id="id" />
  </div>
</template>

<script>
  import AddAndUpdateAuthor from "./AddAndUpdateAuthor";
  export default {
    name: "author",
    components:{
      AddAndUpdateAuthor
    },
    data() {
      return {
        author: [],
        addAndUpdateAuthor: false,
        id: 0
      }
    },
    methods: {
      handleEdit(row) {
        // console.log(index, row);
        this.id = row;
        this.addAndUpdateAuthor = true;
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
      getAuthor() {
        const tableData = [
          {
            id: 1,
            name: '冰心',
            introduce: '冰心（1900年10月5日－1999年2月28日），女，原名谢婉莹，福建省福州市长乐区人 ，中国民主促进会（民进）成员。 [1]  中国诗人，现代作家、翻译家、儿童文学作家、社会活动家、散文家。笔名冰心取自“一片冰心在玉壶”。',
            a_photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1599007979,1484951390&fm=26&gp=0.jpg"
          },
          {
            id: 452,
            name: '三毛 ',
            introduce: '陈平 性别: 女 出生年: 1943年02月21日 卒年: 1991年01月04日 籍贯: 浙江省定海县 个人简介: 曾就读文化大学哲学系,中途辍学出国,先后在西班牙马德里大学及德国歌德书院深造。1973年在西班牙和荷西结婚,一九七九年荷西因潜水工作意外丧生,',
            a_photo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1862179545,4047926753&fm=11&gp=0.jpg"
          },
          {
            id: 7,
            name: '顾福生',
            introduce: '顾福生（1935～2017），台湾知名的油画家，1935年出生于中国上海显赫的将军家庭，就读於台湾师范大学美术系，1958年毕业，他曾是「五月画会」的一员，1961年后曾旅居法国巴黎、美国纽约、旧金山和波特兰等地。除油画外，亦有版画、彩墨等作品。2017年逝世。',
            a_photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=366871761,2360018043&fm=26&gp=0.jpg"
          },
          {
            id: 568,
            name: '沈从文',
            introduce: '沈从文（1902年12月28日—1988年5月10日），男，原名沈岳焕，乳名茂林，字崇文，笔名休芸芸、甲辰、上官碧、璇若等，湖南凤凰县人，中国著名作家、历史文物研究者。',
            a_photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3365418821,3805858423&fm=26&gp=0.jpg"
          },
          {
            id: 77,
            name: '杨绛',
            introduce: '杨绛（1911年7月17日—2016年5月25日），本名杨季康， [1]  江苏无锡人，中国女作家、文学翻译家和外国文学研究家，钱钟书夫人。通晓英语、法语、西班牙语，由她翻译的《堂吉诃德》被公认为最优秀的翻译佳作，到2014年已累计发行70多万册；她早年创作的剧本《称心如意》，被搬上舞台长达六十多年，2014年还在公演；杨绛93岁出版散文随笔《我们仨》，风靡海内外，再版达一百多万册，96岁出版哲理散文集《走到人生边上》，102岁出版250万字的《杨绛文集》八卷。',
            a_photo: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1949367945,2116375314&fm=11&gp=0.jpg"
          },
          {
            id: 7447,
            name: '南怀瑾',
            introduce: '南怀瑾（1918年3月18日—2012年9月29日），出生于中国浙江温州乐清市，中国当代诗文学家、教育家、中国正统文化传播者、学者、诗人、武术家、国学大师。 [1]  历任台湾政治大学、台湾辅仁大学及中国文化大学教授。 [2] \n' +
              '1949年中华人民共和国成立后，南怀瑾随国民党迁至台湾，并受邀到台湾地区的多所大学、机关、社会团体讲学，后曾旅居美国、香港等地，晚年定居苏州太湖大学堂。2012年9月19日，媒体传出南怀瑾病危的消息。9月29日下午4时，南怀瑾在苏州太湖大学堂逝世，享年95岁。 [3]  南怀瑾生前著作多以演讲整理为主，精通儒、释、道等多种典籍，全身心致力于中国传统文化的建设与传播。',
            a_photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2326893724,146261293&fm=26&gp=0.jpg"
          },
          {
            id: 575,
            name: '林徽因',
            introduce: '林徽因（1904年6月10日－1955年4月1日），汉族，祖籍福建闽侯（今福建福州），出生于浙江杭州，建筑学家 [1]  、诗人和作家 [2]  。原名徽音，其名出自“《诗经·大雅·思齐》：“大姒嗣徽音，则百斯男”。后因常被人误认为当时一男作家“林微音”，故改名为“徽因”。 [3]  建筑学家梁思成的第一任妻子。\n' +
              '在文学上，著有散文、诗歌、小说、剧本、译文和书信等，代表作品有《你是人间的四月天》、《莲灯》、《九十九度中》等。 [4] \n' +
              '林徽因是中华人民共和国国徽主要设计者，人民英雄纪念碑设计领导小组成员',
            a_photo: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1685998254,2851220392&fm=26&gp=0.jpg"
          },
          {
            id: 8,
            name: '林海音',
            introduce: '本名林含英 [1]  ，中国当代女作家 [2]  。\n' +
              '1918年3月18日，出生于日本大阪。1934年，考入北平新闻专科学校。1937年，从北平新闻专科学校毕业后任《世界日报》记者、编辑。1955年，出版第一本散文集《冬青树》。1956年，获得第二届扶轮社文学奖。1959年，出版第一部长篇小说《晓云》。1960年，出版小说集《城南旧事》。1972年，出版散文集《窗》。1988年，出版散文集《一家之主》。1998年，获得第三届世界华文作家大会终身成就奖。2000年，出版散文集《作客美国》《芸窗夜读》。2001年12月，因病逝世于台北 [2]  。',
            a_photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1858137112,3715794968&fm=26&gp=0.jpg"
          },
          {
            id: 7,
            name: '叶圣陶',
            introduce: '男，原名叶绍钧，字秉臣、圣陶，1894年10月28日生于江苏苏州，现代作家、教育家、文学出版家和社会活动家，有“优秀的语言艺术家”之称。 [1] \n' +
              '1907年，考入草桥中学。1916年，进上海商务印书馆附设尚公学校执教，推出第一个童话故事《稻草人》。 [2]  1918年，发表第一篇个人白话小说《春宴琐谭》。1923年，发表长篇小说《倪焕之》。',
            a_photo: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1169344797,1777768986&fm=26&gp=0.jpg"
          }, {
            id: 88,
            name: '毕淑敏',
            introduce: '1952年10月出生于新疆伊宁，中共党员，国家一级作家、内科主治医师、北京作家协会副主席，香港中文大学与北京师范大学合办心理学专业硕士和博士研究生班毕业，注册心理咨询师。中国作协第九届全委会委员。',
            a_photo: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=335857360,1626370546&fm=26&gp=0.jpg"
          }, {
            id: 45452,
            name: '徐志摩',
            introduce: '，原名章垿[xù]，字槱[yǒu]森，留学英国时改名志摩。曾用过的笔名有南湖、诗哲、海谷、谷、大兵、云中鹤、仙鹤、删我、心手、黄狗、谔谔等。浙江海宁硖石人。现代诗人、散文家，新月派代表诗人，新月诗社成员。',
            a_photo: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2221255422,1847520115&fm=26&gp=0.jpg"
          },
        ];
        tableData.forEach((item, index) => {
          this.author.push(item);
        })
      }
    },
    created() {
      this.getAuthor();
    }


  }
</script>

<style scoped>
  .btn {
    margin-left: 90%;
  }
</style>