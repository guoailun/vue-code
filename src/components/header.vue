<template>
  <div class="header" id="header">
    <div class="header-logo">
      <h3 class="title">zw vue-code</h3>
      <img v-bind:src="img.url" />
    </div>
    <div class="header-logout">
      {{ user.name }}
      <i class="el-icon-user"></i>
    </div>
  </div>
</template>
<script>
import avatar from "@/assets/logo.png";
export default {
  data() {
    return {
      img: {
        url: avatar
      },
      user: {
        name: "zw",
        id: 1
      }
    };
  }
};
</script>
<style lang="scss">
.el-header {
  padding: 0px !important;
}

.header {
  background-color: #409eff;
  height: 60px;
  line-height: 60px;
  padding: 0px 16px;

  &-logo {
    float: left;

    .title {
      margin: 0px;
      display: inline-block;
    }

    img {
      width: 40px;
      height: 40px;
      float: left;
      margin-top: 13px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  &-logout {
    float: right;
    color: #fff;
    font-size: 16px;

    .el-icon-user {
      cursor: pointer;
    }
  }
}
</style>

