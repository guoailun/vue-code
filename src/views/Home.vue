<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <el-button type="primary" @click="hideJquery">changeLoadFlag</el-button>
    <el-button type="primary" id="aaa" @click="hideJquery1">changeLoadFlag2</el-button>
    <el-button type="primary" id="aaa" @click="changeAcount">changeAcount</el-button>
    <!-- <Child1 msg="Welcome to Your Vue.js App" title="hahaha" :fotter="foot" @isChange="isChange"/> -->
    <Child1>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </Child1>
    <!-- <Child1 v-slot:footer>footer</Child1> -->
    <el-button type="primary" @click="changeChild2Props">changeChild2Props</el-button>
    <Child2 ref="usernameInput" 
    msg="Welcome to Your Vue.js App" 
    :propObj="propObj"
    :propArr="propArr"
    :propValidator="propValidator"
    propF="propF"
    title="hahaha" :fotter="foot" propA="1" :propC="propC"/>
    <p style="color: red" >{{formChild1}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Child1 from "@/components/child1";
import Child2 from "@/components/child2";

import $ from 'jquery';
export default {
  name: "home",
  created() {
    // console.log(1, this.$route)
    // console.log(2, this.$router)
    // console.log($("#aaa"))
  },
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      foot: 'ninini',
      formChild1: 'fromChild1',
      propC: '',
      propObj: {'from': 'beijing', 'to': 'dalian'},
      propArr: [
        {'appName': 'AROS', 'devTime': '2 Week'},
        {'appName': 'portal site', 'devTime': '3 Month'}
      ],
      propValidator: 'success'
    }
  },
  methods: {
    hideJquery() {
          console.log(this.$refs.usernameInput.propArr)

      this.$store.commit('test2/changeLoadFlag', 1111);
      // $("#aaa").hide();
    },
    hideJquery1() {
      this.$store.commit({type: 'test2/changeLoadFlag2', count: 10});
      // $("#aaa").hide();
    },
    changeAcount() {
      this.$store.dispatch('test2/getAcount');
    },
    isChange(value) {
      this.formChild1 = value;
    },
    changeChild2Props() {
      const thant = this;
      this.propObj.from = "shanghai";
      this.propArr[0].appName = "ARSO-change";
      setTimeout(()=>{
        thant.propC = 'propC-change';
      },3000)
    }
  },
};
</script>
