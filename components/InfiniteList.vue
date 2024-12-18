<template>
  <div>
    <!-- Toggles the sorting state(isSorted) between true and false. -->
    <div class="controls">
      <!-- A button toggles sorting with the text: Sort by Views or Unsort -->
      <button @click="toggleSort">
        {{ isSorted ? 'Unsort' : 'Sort by Views' }}
      </button>
    </div>
    <div ref="listContainer" class="list-container" @scroll.passive="handleScroll">
      <div v-for="item in sortedItems" :key="item.id" class="list-item">
        <img :src="item.avatar" alt="Avatar" class="avatar" />
        <div>
          <p>{{ item.name }}</p>
          <a :href="item.website" target="_blank">{{ item.website }}</a>
          <p>{{ formatViews(item.views) }} views</p>
        </div>
      </div>
      <p v-if="isFetchingNextPage" class="loading">Loading more...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useInfiniteData } from '@/composables/useInfiniteData';
import { useSessionStorage } from '@vueuse/core';

const { data, fetchNextPage, isFetchingNextPage } = useInfiniteData();
const scrollPosition = useSessionStorage('scrollPosition', 0);

const listContainer = ref<HTMLElement | null>(null);
const isSorted = ref(false);

const items = computed(() => data.value?.pages.flat() || []);
// Dynamically sorts items based on view when isSorted is true.
const sortedItems = computed(() => {
  if (isSorted.value) {
    return [...items.value].sort((a, b) => b.views - a.views);
  }
  return items.value;
});

const toggleSort = () => {
  isSorted.value = !isSorted.value;
};

const handleScroll = () => {
  if (!listContainer.value) return;
  scrollPosition.value = listContainer.value.scrollTop;

  const { scrollTop, clientHeight, scrollHeight } = listContainer.value;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    fetchNextPage();
  }
};

const formatViews = (views: number) => views.toLocaleString();

onMounted(() => {
  if (listContainer.value) {
    listContainer.value.scrollTop = scrollPosition.value;
  }
});
</script>

<style scoped>
.list-container {
  height: 80vh;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
}

.controls {
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  margin-top: 10px;
}
</style>
