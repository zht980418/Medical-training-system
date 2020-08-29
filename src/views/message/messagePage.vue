<!--  -->
<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <el-card class="class-centre-card">
      <el-button
        class="exit"
        type="primary"
        @click="exit"
      >返回</el-button>
      <h1 class="message-title">{{ message.title }}</h1>
      <h3 align="center">{{ message.office }}</h3>
      <p class="message-content">{{ message.text }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '通知',
      message_id: '',
      message: { title: '一个通知', office: '一个科室', text: '正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文' }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.message_id = this.$route.params.message_id
    this.getMessage()
  },
  methods: {
    // TODO--获取通知信息
    getMessage() {
    },
    exit() {
      this.$router.push({ name: 'MessageList' })
    }
  }
}
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
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
      margin-right: 30px;
      margin-left: 30px;
      min-height: 600px;
      .exit {
        margin-left: 10px;
        margin-bottom: 10px;
      }
      .message-title {
        text-align: center;
      }
      .message-content {
        margin-left: 20px;
      }
      el-button {
        text-align: center;
      }
    }
  }
}
</style>
