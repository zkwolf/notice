<script setup lang="ts">
import useAddButton from '/@/hooks/button/useAddButton';
import PlusOutlined from '@ant-design/icons-vue/PlusOutlined';

const buttonProps = useAddButton();

const onMenuClick = ({ key }: any) => {
  console.log(key);
};

const menuList = [
  { label: '生活', value: 'life' },
  { label: '金钱', value: 'money' },
];
</script>

<template>
  <a-layout>
    <a-card></a-card>
    <a-dropdown :trigger="['click']" placement="topCenter">
      <a-button type="primary" v-bind="buttonProps">
        <template #icon>
          <plus-outlined />
        </template>
      </a-button>
      <template #overlay>
        <a-menu @click="onMenuClick">
          <template v-for="item in menuList" :key="item.value">
            <a-menu-item>{{ item.label }}</a-menu-item>
          </template>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout>
</template>
