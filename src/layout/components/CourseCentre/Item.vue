<!--  -->
<template>
  <li class="course-item">
    <img
      class="course-img"
      :src="Icon"
    >
    <div class="item-description">
      <p class="item-title">{{ Title }}</p>
      <p class="item-office">{{ Office }}</p>
      <span class="item-progress-text">已学习{{ Completed }}/{{ Sum }}</span>
      <el-progress
        class="item-progress"
        :percentage="Percentage"
        show-text="false"
      />
      <p class="item-time">{{ StartTime }}-{{ EndTime }}</p>
    </div>
  </li>
</template>

<script>

export default {
  name: 'CourseItem',
  functional: false,
  props: {
    icon: {
      type: String,
      default: 'img1'
    },
    title: {
      type: String,
      default: '课程'
    },
    office: {
      type: String,
      default: ''
    },
    sum: {
      type: Number,
      default: 0
    },
    completed: {
      type: Number,
      default: 0
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
      Sum: 0,
      Completed: 0,
      Percentage: 0,
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
    this.Sum = this.sum
    this.Completed = this.completed
    // 当完成数量为0时，显示默认值0，否则进行百分比计算
    if (this.Completed !== 0) { this.Percentage = 100 * this.Completed / this.Sum }
  }

  // render(h, context) {
  //   const { icon, title } = context.props
  //   const vnodes = []

  //   if (icon) {
  //     if (icon.includes('el-icon')) {
  //       vnodes.push(<i class={[icon, 'sub-el-icon']} />)
  //     } else {
  //       vnodes.push(<svg-icon icon-class={icon} />)
  //     }
  //   }

  //   if (title) {
  //     vnodes.push(<span slot='title'>{(title)}</span>)
  //   }

  //   return vnodes
  // }
}
</script>

<style lang='scss' scoped>
.course-item {
  border: solid 1px lavender;
  background: ghostwhite;
  margin-right: 20px;
  margin-bottom: 30px;
  .course-img {
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
    .item-progress-text {
      font-size: 12px;
      font-weight: 600;
      color: #283443;
    }
    .item-progress {
      margin-top: 5px;
      margin-bottom: 5px;
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
