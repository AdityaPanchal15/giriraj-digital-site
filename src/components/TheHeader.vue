<template>
  <v-navigation-drawer
    v-model="drawer"
    width="300"
    class="navigation-drawer"
    permanent
    app
  >
    <v-list class="nav-list">
      <v-list-item>
        <v-img src="/logo.png" alt="" />
        <p class="text-white mt-5 mb-8 text-center">
          Software Web Development <br />
          Company - Umbraco Gold Partner
        </p>
      </v-list-item>

      <!-- Menu -->
      <template v-for="(item, index) in menuItems" :key="item.title">
        <v-list-item
          :prepend-icon="item.icon"
          append-icon="mdi-arrow-right"
          :to="item.to"
        >
          <v-list-item-title class="text-white">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
        <v-divider
          v-if="index < menuItems.length - 1"
          class="mx-4"
          color="white"
          opacity="1"
        />
      </template>
    </v-list>
    <v-list>
      <v-list-item
        prepend-icon="mdi-logout"
        :active="false"
        to="/"
        @click="logout"
      >
        <v-list-item-title class="text-white">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- App Bar with Toggle Icon -->
  <v-app-bar class="header-items">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title :text="currentPage"></v-app-bar-title>
    <template v-slot:append>
      <v-icon icon="mdi-account-circle-outline" size="large"></v-icon>
      <v-icon icon="mdi-chevron-down" size="large"></v-icon>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { MENU_ITEMS } from '@/constants'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

/**
 * The main header component
 * @category Header
 * @component
 * @example <caption>The header usage (see code)</caption>
 * <TheHeader />
 */

// Define the MenuItem type
interface MenuItem {
  title: string
  icon: string
  to: string
}

const route = useRoute()
const currentPage = computed(() => route.name?.toString())
const drawer = ref(true) // Set to true by default to show the drawer without overlay

// Initialize the menu items with type annotation
const menuItems = ref<MenuItem[]>(MENU_ITEMS)

function toggleDrawer() {
  drawer.value = !drawer.value
}

function logout() {
  alert('Logout')
}
</script>

<style scoped lang="scss">
.navigation-drawer {
  background-color: #0c3f62;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
