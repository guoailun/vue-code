<template>
    <!-- <transition name="slide-right"> -->
      <div class="about">
        <h1>This is an about page</h1>
        <h3>loadFlag - {{loadFlag}}</h3>
        <h3>ACOUNT - {{actionCount}}</h3>
        <h3>listCount - {{listCount}}</h3>
        <h3>fullName - {{fullName}}</h3>
        <h3>name - {{firstName}} {{lastName}}</h3>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{item.name}} - {{aaa}}
          </li>
        </ul>
        name: <input v-model="name" />
        <br />
        msg: <input v-model.trim="msg" />
        {{msg}}
        <br />
        <el-button type="primary" id="aaa" @click="addSomeOne('add')">add</el-button>
        <el-button type="primary" id="aaa" @click="addSomeOne('reset')">reset</el-button>
        <el-button type="primary" id="aaa" @click="changeTest">changeTest</el-button>
        <div class="content">lalala</div>
      </div>
    <!-- </transition> -->
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      firstName: 'a',
      lastName: 'b',
      name: '',
      msg: '',
      list: [
        {
          name: 'marry',
          id: 1
        }, {
          name: 'tom',
          id: 2
        }
      ]
    }
  },
  computed: {
    loadFlag() {
      return this.$store.state.test2.loadFlag;
    },
    actionCount() {
      return this.$store.state.test2.actionCount;
    },
    listCount() {
      return this.$store.getters["test2/listCount"];
    },
    fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
    },
    aaa () {
      return 1 + 1;
    }
  },
  methods: {
    changeTest() {
      this.testSetterCount = 'c d'
      // this.$store.commit('test2/changeName', 'c d');
    },
    addSomeOne(type) {
        if (type === 'add') {
          const obj = {
            name: this.name,
            id: this.list.length
          }
          this.list.push(obj);
        } else {
          this.list[0].name = 'mmmmm'
        }
        
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  height: 1000px;
  background: yellow;
}
</style>
