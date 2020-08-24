<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'QuestionPage',
  data() {
    return {
      title: 'questionPage'
    }
  }
}
</script>

<style lang="scss" scoped>
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
    .class-centre-table {
      margin-left: 60px;
      margin-right: 60px;
    }
  }
}
</style>
