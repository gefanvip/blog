<template>
    <div>
        <router-link to="/about">我的个人微博项目</router-link>
        <quill-editor v-model="content"></quill-editor>
    </div>
</template>
<script>
export default {
    name:'indexpage',
    data () {
        return {
            content:''
        }
    }
}
</script>
<style lang="less" scoped>

</style>
