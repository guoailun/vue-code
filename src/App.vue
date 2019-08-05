<template>
  <div id="app">
    <el-container>
      <el-header>
        <Pheader></Pheader>
      </el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <ul id="example-1">
        134567
        <li v-for="item in items" :key="item.id">{{ item.message }}</li>
    </ul>-->
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <!-- <router-view /> -->
  </div>
</template>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

<script>
import Pheader from "@/components/header.vue";

export default {
  name: "pheader",
  components: {
    Pheader
  },
  data() {
    return {
      items: [{ message: "啦啦啦", id: 1 }, { message: "他爱她她 ", id: 2 }]
    };
  }
};
</script>

