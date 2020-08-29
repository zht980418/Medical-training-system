<template>
  <ul class="exam-list">
    <ExamItem
      v-for="item in examlist"
      :key="item.key"
      :examid="exam_id"
      :icon="item.icon"
      :title="item.title"
      :office="item.office"
      :start="item.start"
      :end="item.end"
      @click.native.prevent="handleExam(item.exam_id,item.title)"
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
    examlist: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    handleExam(exam_id, title) {
      console.log('点击考试')
      this.$router.push({ name: 'ExamPage', params: { exam_id: exam_id, title: title }})// 传入exam_id参数
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
