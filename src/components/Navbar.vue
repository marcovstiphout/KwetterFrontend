<template>
  <v-app-bar
    app
    dark
  >
    <v-app-bar-nav-icon>
      <v-btn icon>
        <v-icon size="50">
          mdi-bird
        </v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

    <v-toolbar-title>Kwetter</v-toolbar-title>

    <v-spacer />

    <v-text-field
      label="Search"
      placeholder="e.g. Users, Hashtags, Kweets)..."
      outlined
      dense
      prepend-icon="mdi-magnify"
      style="margin-top: 1.3%"
    />

    <v-btn icon>
      <v-icon>mdi-inbox-outline</v-icon>
    </v-btn>

    <v-menu
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          v-bind="attrs"
          icon
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(setting, idx) in settings"
          :key="idx"
          link
        >
          <router-link
            style="text-decoration: none; color: inherit;"
            :to="setting.page"
            nostyle
            v-text="setting.name"
          />
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: "Navbar",
  data: () => ({
    settings: [
      { name: "Home", page: '/'},
      { name: "Profile", page: '/profile'},
      { name: "Logout", page: '/' },
    ],
  }),
};
</script>