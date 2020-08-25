<template>
  <div style="background: yellow">
    <h3>child2</h3>
    {{title}}
    <p>{{msg}}</p>
    {{fotter}}
    <br />
    <p>propA: {{propA}}</p>
    <p>propB: {{propB}}</p>
    <p>propC: {{propC}}</p>
    <p>propValidator: {{propValidator}}</p>
    <p>propObj: {{propObj.from}} - {{propObj.to}}</p>
    <ul>
      <p>propArr: </p>
      <li v-for="(item, index) in propArr" :key="index">
        {{item.appName}} - {{item.devTime}}
      </li>
    </ul>

    <el-button type="primary"  @click="emitParent">emit</el-button>
  </div>
</template>

<script>
export default {
  name: "Child2",
  data() {
    return {
      aaa: '1'
    }
  },
  props: {
    title: String,
    msg: String,
    fotter: String,
    propA: {
      type: String,
      required: true
    },
    propB: {
      type: String,
      required: false
    },
    propC: {
      type: String,
      default: "propC"
    },
    propObj: {
      type: Object
    },
    propArr: {
      type: Array
    },
    propValidator: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return value.indexOf('success') !== -1
      }
    }
  },
  methods: {
    emitParent() {
      console.log(this.$parent.propObj)
      this.$emit('isChange', 10)
    }
  }
}
</script>

<style lang="less" scoped>

</style>