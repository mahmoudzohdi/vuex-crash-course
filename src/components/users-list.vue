<template>
  <div>
    <loader v-if="loading == LOAD_PAGE"></loader>
    <template v-else>
      <user-card v-for="user in users" :key="user.id" :user="user"></user-card>
      <add-user-card
        :users-length="users.length"
        @submit="submitUser"
        :is-loading="loading == ADDING_USER"
      ></add-user-card>
    </template>
  </div>
</template>

<script>
import UserCard from "./user-card";
import AddUserCard from "./add-user-card";
import Loader from "./loader";
import { LOAD_PAGE, ADDING_USER } from "@/utils/loading-const";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('Users');

export default {
  name: "users-list",
  components: {
    UserCard,
    AddUserCard,
    Loader,
  },
  data() {
    return {
      loading: false,
      LOAD_PAGE,
      ADDING_USER,
    };
  },
  computed: {
    ...mapState(['users'])
  },
  mounted() {
    this.loading = LOAD_PAGE;
    this.getUsersAction().finally(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions(['addUserAction', 'getUsersAction']),
    submitUser(user) {
      this.loading = ADDING_USER;
      this.addUserAction(user)
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
