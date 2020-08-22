<!--  -->
<template>
  <li class="exam-item">
    <img
      class="exam-img"
      :src="Icon"
    >
    <div class="item-description">
      <p class="item-title">{{ Title }}</p>
      <p class="item-office">{{ Office }}</p>
      <p class="item-time">{{ StartTime }}-{{ EndTime }}</p>
    </div>
  </li>
</template>

<script>

export default {
  name: 'ExamItem',
  functional: false,
  props: {
    icon: {
      type: String,
      default: require('@/icons/img/test2.jpg')
    },
    title: {
      type: String,
      default: '课程'
    },
    office: {
      type: String,
      default: '科室'
    },
    startTime: {
      type: String,
      default: '2020/7/29'
    },
    endTime: {
      type: String,
      default: '2020/9/9'
    }
  },
  data() {
    return {
      Title: '',
      Icon: '',
      Office: '',
      StartTime: '',
      EndTime: ''
    }
  },
  mounted() {
    this.Icon = this.icon
    this.Title = this.title
    this.Office = this.office
    this.StartTime = this.startTime
    this.EndTime = this.endTime
  }
}
</script>

<style lang='scss' scoped>
.exam-item {
  border: solid 1px lavender;
  background: ghostwhite;
  margin-right: 20px;
  margin-bottom: 30px;
  .exam-img {
    width: 200px;
    height: 100px;
    margin-left: 1px;
    margin-right: 1px;
  }
  .item-description {
    padding-left: 10px;
    .item-title {
      font-size: 16px;
      color: #283443;
      font-weight: 800;
    }
    .item-office {
      font-size: 14px;
      font-weight: 600;
      color: rgb(117, 111, 111);
    }
    .item-time {
      font-size: 12px;
      padding-right: 16px;
      color: darkgray;
      float: right;
    }
  }
}
</style>
