import { createApp } from 'vue'
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less';
import './index.less';
import App from './App.vue'
createApp(App).use(Antd).mount('#app')
