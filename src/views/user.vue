<script lang="ts" setup>
import { userList } from '@/apis';

defineComponent({
  name: 'User',
});
const data=ref([])
userList()?.then((res) => {
  data.value=res
})
const columns = [
  {
    title: 'userType',
    dataIndex: 'userType',
  },
  {
    title: 'userName',
    dataIndex: 'userName',
  },
];
</script>
<template>
  <div class="User">
    <a-table
      :columns="columns"
      :data="data"
      :pagination="false"
      :bordered="{ wrapper: true, cell: true }"
      :virtual-list-props="{ height: 400, threshold: 20 }"
    >
    </a-table>
  </div>
</template>
