<template>
  <ul class="exam-list">
    <ExamItem
      v-for="item in examlist"
      :key="item.key"
      :icon="item.icon"
      :title="item.title"
      :office="item.office"
      :start="item.start"
      :end="item.end"
      @click.native.prevent="handleExam"
    />
  </ul>
</template>

<script>
import ExamItem from '../components/Item'

export default {
  name: 'ExamTabPane',
  functional: false,
  components: { ExamItem },
  props: {
    type: {
      type: String,
      default: 'Wait'
    }
  },
  data() {
    return {
      examlist: [{ title: '2323', start: '2020', end: '2021' }, { title: '14322' }],
      loading: false
    }
  },
  methods: {
    getList() {
      // TODO--获取examlist数据
    },
    handleExam() {
      console.log('点击考试')
      this.$router.push({ name: 'ExamPage' })// TODO--传入参数
    }
  }
}
</script>

<style lang="scss" scoped>
.exam-list {
  list-style-type: none;
  display: flex;
  direction: row;
  flex-wrap: wrap;
}
</style>
