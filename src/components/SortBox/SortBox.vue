<template>
  <div class="sortBoxContainer">
    <el-popover
        :visible="false"
        :width="350"
        placement="bottom-start"
        popper-class="sortPop"
        trigger="click"
    >
      <template #reference>
        <div class="sortBox" @click="toggleSortPop">
          <span>{{ props.currentTagData.name }}</span>
          <right fill="#ddd" size="24" strokeLinecap="butt" strokeLinejoin="bevel" theme="outline"/>
        </div>
      </template>
    </el-popover>
    <transition>
      <div v-if="isShowSortPop" class="sortList">
        <el-card class="sortCard" shadow="always">
          <div v-for="(item, index) in props.sortListData" :key="index" class="sortItem">
            {{ item.name }}
          </div>
        </el-card>
      </div>
    </transition>
  </div>

</template>

<script setup lang="ts">
import {Right} from '@icon-park/vue-next'
import {ref} from "vue";

const props = defineProps({
  sortListData: {
    type: Array,
    required: true
  },
  currentTagData: {
    type: Array,
    required: true
  }
});

const isShowSortPop = ref(false);

const toggleSortPop = () => {
  if (isShowSortPop.value) {
    isShowSortPop.value = false
  } else {
    isShowSortPop.value = true
  }
}
</script>

<style lang="less" scoped>
.sortBox {
  width: 13vmin;
  height: 4.5vmin;
  border: 2px solid #ddd;
  margin: 1vmin;
  border-radius: 2vmin;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #555;
  }
}

.sortList {
  :deep(.el-card__body) {
    display: flex;
    flex-wrap: wrap;

    .sortItem {
      width: 25%;
      padding: 2vmin 0;
      text-align: center;
      cursor: pointer;
      color: #555;

      &:hover {
        background: #D7DBDD;
        opacity: 0.8;
        border-radius: 2vmin;
      }
    }
  }
}

.el-card {
  position: absolute;
  top: 4.15vmin;
  left: 4vmin;
  border-radius: 2.55vmin;
  width: 64.66vmin;
  height: 25vmin;
  overflow: scroll;
}

.sortBoxContainer {
  position: relative;
  width: 17vmin;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>