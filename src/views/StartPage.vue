<template>
  <v-row
    dense
  >
    <v-btn @click="createKweet">
      test
    </v-btn>
    <v-col cols="8" />
  </v-row>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Startpage",
  components: {},
  data: () => ({
  }),
  methods: {
    createKweet: function () {
      axios
        .post('https://localhost:5004/Profile', {
          ProfileId: '8829bbc5-f70a-4016-8728-ed72c59461ac',
          ProfileName: 'TestProfile'
        })
        .then(function (response) {
          if (response.status === 200) {
            alert('Profile has been Succesfully Created!')
            location.reload()
          } else {
            alert('Oops! Looks like one of the submitted parameters was invalid. Please try again..')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
};
</script>
