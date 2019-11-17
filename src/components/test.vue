<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex md4 class="pr-3">
          <v-layout column justify-space-between  fill-height>
            <v-card class="green" height="360px">First Card</v-card>
            <v-card class="green" height="360px">Second Card</v-card>
          </v-layout>
        </v-flex>
        <v-flex md4 class="pr-3 ">
          <v-layout column justify-space-between  fill-height>
            <v-card class="green" height="360px">3 Card</v-card>
            <v-card class="green" height="360px">4 Card</v-card>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-card class="red" height="800px">Fixed Height Card</v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  })
};
</script>