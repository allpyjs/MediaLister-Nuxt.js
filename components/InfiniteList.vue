<template>
    <div>
      <div ref="listContainer" class="list-container" @scroll.passive="handleScroll">
        <div v-for="item in items" :key="item.id" class="list-item">
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
  import { useInfiniteData } from '@/composables/useInfiniteData';
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteData();
  
  const items = computed(() => data.value?.pages.flat() || []);
  
  const handleScroll = (event: Event) => {
    const el = event.target as HTMLElement;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
      fetchNextPage();
    }
  };
  
  const formatViews = (views: number) => views.toLocaleString();
  </script>
  
  <style scoped>
  .list-container {
    height: 80vh;
    overflow-y: auto;
  }
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .loading {
    text-align: center;
    margin-top: 10px;
  }
  </style>
  