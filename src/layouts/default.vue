<template>
  <v-app>
    <v-layout>
      <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Terrafirma</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list :items="navLinks" item-value="route" item-title="name">
          <v-list-item
            v-for="link in navLinks"
            :key="link.route"
            :to="link.route"
            :title="link.name"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>


<script lang="ts" setup>
  import {useRouter} from "vue-router";

  interface NavLink {
    name: string
    route: string
  }

  const router = useRouter()


  import { ref } from 'vue'

  const drawer = ref(false)

  const navLinks: NavLink[] = [
    {
      name: 'Alloys',
      route: 'alloys',
    }
  ]
</script>
