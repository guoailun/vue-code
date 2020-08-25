<template>
  <div>
    <div>
      <slot name="header"> header1</slot>
    </div>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    <div>
        <slot name="footer"> footer1</slot>
    </div>
    <!-- <h3>child1</h3>
    {{title}}
    <p>{{msg}}</p>
    {{fotter}}
    <br />
    <el-button type="primary"  @click="$emit('isChange', 10)">emit</el-button> -->
  </div>
</template>
<script>
export default {
  name: "Child1",
  props: ['msg', 'title', 'fotter']
}
</script>
<style lang="less" scoped>

</style>