<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <div class="class-centre-table">
      <el-table
        style="width: 100%;padding-top: 15px;"
        :data="list"
        @row-click="openMessage"
      >
        <el-table-column
          label="标题"
          min-width="200"
          prop="title"
        >
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column
          label="发布者"
          width="195"
          align="center"
          prop="author"
        >
          <template slot-scope="scope">
            {{ scope.row.author }}
          </template>
        </el-table-column>
        <el-table-column
          label="时间"
          width="100"
          align="center"
          prop="time"
        >
          <!-- 作用在于设置显示格式 -->
          <template slot-scope="{row}">
            <el-tag :type="row.time ">
              {{ row.time }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '通知中心',
      list: [{ title: '12313', author: 'wewqewq', time: '2332r' }, { title: '123dwrewr3', author: 'weerqqewqedfvfhdewq', time: '213432332r' }]
    }
  },
  methods: {
    openMessage() {
      this.$router.push('MessagePage')
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
