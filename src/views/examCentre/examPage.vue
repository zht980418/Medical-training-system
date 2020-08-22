<!--  -->
<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <el-card class="class-centre-card">
      <img
        class=""
        :src="testpic1"
      >
    </el-card>
  </div>
</template>
<script>
export default {

  name: 'ExamPage',
  components: {},
  data() {
    return {
      title: 'ExamPage',
      testpic1: require('@/icons/img/testpic1.jpg')
    }
  }
}
</script>
<style lang='scss' scoped>
.class-centre {
  &-container {
    margin: 30px;
    .class-centre-title {
      font-size: 25px;
      line-height: 46px;
      color: #409eff;
      border-bottom: solid 2px #409eff;
      margin: 30px;
    }
    .class-centre-card {
      margin: 30px;
    }
  }
}
</style>
