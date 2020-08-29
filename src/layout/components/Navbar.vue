<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb class="breadcrumb-container" />
    <div class="avatar-wrapper">
      <span class="user-name">admin</span>
      <img
        class="user-avatar"
        :src="head"
      >
      <el-button
        class="exit"
        type="danger"
        @click.native="logout"
      >
        退出系统</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  // 导入的组件
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      head: require('@/icons/img/head1.jpg')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .avatar-wrapper {
    float: right;
    margin-top: 5px;
    margin-right: 5px;
    position: relative;

    .user-name {
      font-size: 16px;
      display: inline-flex;
      float: left;
      margin-right: 5px;
      margin-top: 11px;
    }
    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 5px;
    }
    .exit {
      display: flex;
      float: right;
    }
  }
}
</style>
