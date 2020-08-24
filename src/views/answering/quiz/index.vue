<template>
  <div class="class-centre-container">
    <h1 class="class-centre-title">{{ title }}</h1>
    <el-form
      ref="form"
      class="class-centre-form"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="标 题">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="标 签">
        <el-select
          v-model="form.region"
          placeholder="请选择标签"
        >
          <el-option
            label="标签一"
            value="shanghai"
          />
          <el-option
            label="标签二"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="正 文">
        <el-input
          v-model="form.desc"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >创 建</el-button>
        <el-button @click="onCancel">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '提 问',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
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
    .class-centre-form {
      margin-right: 90px;
    }
  }
}
</style>

