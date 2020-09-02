<!--  -->
<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <el-card class="class-centre-card">
        <iframe src="/PDF.js/web/viewer.html?file=/2.pdf" width="100%" height="800px" id="Iframe"></iframe>
    </el-card>
  </div>
</template>
<script>// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import 'video.js/dist/video-js.css'

export default {
  name: 'CoursePage',
  components: {},
  data() {
    return {
      title: 'CoursePage',
      course_id: '',
      courseList: [require('@/icons/img/testpic1.jpg'), require('@/icons/img/testpic2.jpg'), require('@/icons/img/testpic3.jpg')]
    }
  },
  created() {
    this.course_id = this.$route.params
  }
}</script>
<style lang='scss' scoped>

  .class-centre {
    &-container

  {
    margin: 30px;
    .class-centre-title

  {
    font-size: 25px;
    line-height: 46px;
    color: #409eff;
    border-bottom: solid 2px #409eff;
    margin: 30px;
  }

  .class-centre-card {
    margin: 30px;
    min-height: 600px;
    .el-carousel__item h3

  {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 450px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  }
  }
  }
</style>
