<template>
  <ul class="course-list">
    <CourseItem
      v-for="item in courselist"
      :key="item.key"
      :icon="item.icon"
      :title="item.title"
      :office="item.office"
      :sum="item.sum"
      :completed="item.completed"
      :start="item.starttime"
      :end="item.endtime"
      @click.native.prevent="handleCourse"
    />
  </ul>
</template>

<script>
import CourseItem from '../components/Item'

export default {
  name: 'CourseTabPane',
  functional: false,
  components: { CourseItem },
  props: {
    type: {
      type: String,
      default: 'Wait'
    }
  },
  data() {
    return {
      courselist: [{ title: '2323', sum: '10', completed: '2' }, { title: '14322' }],
      loading: false
    }
  },
  methods: {
    getList() {
      // TODO--获取courselist数据
    },
    handleCourse() {
      console.log('点击课程')
      this.$router.push({ name: 'CoursePage' })// TODO--传入参数
    }
  }
}
</script>

<style lang="scss" scoped>
.course-list {
  list-style-type: none;
  display: flex;
  direction: row;
  flex-wrap: wrap;
}
</style>
