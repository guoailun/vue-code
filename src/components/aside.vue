import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <!-- <template slot="title">{{ item.title }}</template> -->
        <el-menu-item index="1-1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link to="/about">About</router-link></el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
    
      <i class="el-icon-menu"></i>
      <span slot="title"><router-link to="/hello">HelloWorld</router-link></span>
    </el-menu-item>
     <el-menu-item index="3">
    
      <i class="el-icon-menu"></i>
      <span slot="title"><router-link to="/a">a</router-link></span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Paside",
  props: ["asideData"],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="sass">

</style>


