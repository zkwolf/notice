<template>
  <a-layout>
    <a-button type="primary" style="width: 100%">测试</a-button>
    <a-spin loading></a-spin>
    <user-outlined />
  </a-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    UserOutlined,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>