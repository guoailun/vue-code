<template>
  <div class="hello">
    <h1>111</h1>
    <div><router-link to="/hello/profile">UserProfile</router-link></div>
    <div>
      <!--<router-link :to="{name: 'postsName', query: {a: '1', b: 2}}">UserPosts</router-link>-->
      <router-link :to="{name: 'postsName', params: {id: 1}}">UserPosts</router-link>
    </div>
  <!--<router-view name="helper"/>-->
  <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
