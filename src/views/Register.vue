<template>
  <v-container
    fill-height
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col />
      <v-col
        cols="6"
        sm="8"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Register form</v-toolbar-title>
            <v-spacer />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  to="/login"
                  v-on="on"
                >
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Register</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form ref="register">
              <v-text-field
                v-model="form.name"
                label="Name"
                name="name"
                prepend-icon="mdi-account"
                type="text"
                :rules="usernameRules"
                required
              />

              <v-text-field
                v-model="form.email"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                :rules="emailRules"
                required
              />

              <v-text-field
                id="password"
                v-model="form.password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                required
              />

              <v-text-field
                id="confirmPassword"
                v-model="form.confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                prepend-icon="mdi-lock"
                type="password"
                :rules="[passwordRules, passwordConfirmRule]"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="submit">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-overlay :value="overlay">
          <i class="fa-5x fas fa-spinner fa-pulse" />
        </v-overlay>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-title
              class="headline"
              primary-title
            >
              Something went wrong!
            </v-card-title>
            <v-card-text>{{ this.dialogInfo }}</v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                I understand
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col />
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
    >
      {{ snackbarText }}
      <v-btn
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import firebase from "firebase";
import Vue from "vue";
export default Vue.extend({
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
        confirmPassword: ""
      },
      overlay: false,
      dialog: false,
      dialogInfo: null,
      snackbar: false,
      snackbarText: "",
      snackbarColor: "",
      usernameRules: [(v) => !!v || "Username is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /^(.+)@(.+)+\.(.+)$/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        (v) => !!v || "Password is required"
        // eslint-disable-next-line
      ]
    };
  },
  computed: {
    passwordConfirmRule(){
      return (
        this.form.password === this.form.confirmPassword ||
        "passwords must match"
      );
    }
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
         .then(() => {
          this.snackbarText = "Logged in";
          this.snackbarColor = "gray";
          this.snackbar = true;
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.snackbarText = err.message;
          this.snackbarColor = "red";
          this.snackbar = true;
        });
    }
  }
});
</script>