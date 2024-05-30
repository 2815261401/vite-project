import { reactive } from 'vue';
import { Router } from 'vue-router';

export const variables: {
  /** 路由实例 */
  router?: Router;
  /** 顶部导航栏高度 */
  headerHeight: number;
} = reactive({
  router: void 0,
  headerHeight: 0,
});
