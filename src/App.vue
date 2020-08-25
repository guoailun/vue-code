<template>
  <div id="app">
    <el-container>
      <el-header>
        <Pheader></Pheader>
      </el-header>
      <el-container>
        <el-aside>
          <Paside asideData="asideData"></Paside>
        </el-aside>
        <el-main>
        <!-- <transition> -->

              <router-view></router-view>
        <!-- </transition> -->
          <!-- <p>{{ message }}</p>
          <input type="text" v-model="message" />
          <ul>
            <li v-for="item in items" :key="item">{{ item.message }}</li>
          </ul>
          <div v-on:click="add">点击增加</div> -->
        </el-main>
      </el-container>
    </el-container>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <!-- <router-view />-->
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
import Paside from "./components/aside.vue";

export default {
  components: {
    Pheader,
    Paside
  },
  data() {
    return {
      items: [{ message: "啦啦啦", id: 1 }, { message: "他爱她她 ", id: 2 }],
      message: "",
      asideData: [
        {
          title: "导航一",
          index: "1-1",
          disabled: false
        },
        {
          title: "导航二",
          index: "1-2",
          disabled: false
        }
      ]
    };
  },
  methods: {
    add: function() {
      this.items.push({ message: "第三个", id: 3 });
    }
  }
};
</script>

