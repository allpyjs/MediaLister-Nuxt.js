<template>
  <div>
    <!-- Global Header -->
    <header class="global-header">
      <h1>Medialister Assignment</h1>
    </header>

    <!-- Nuxt Page Content -->
    <NuxtPage />

    <!-- Global Footer -->
    <footer class="global-footer">
      <p>&copy; 2024 Medialister</p>
    </footer>
  </div>
</template>

<style>
.global-header {
  text-align: center;
  padding: 10px;
  background-color: #f3f4f6;
  border-bottom: 1px solid #ddd;
}

.global-footer {
  text-align: center;
  padding: 10px;
  background-color: #f3f4f6;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
