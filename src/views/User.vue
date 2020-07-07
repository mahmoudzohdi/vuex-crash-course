<template>
  <div>
    <loader v-if="isLoading"></loader>
    <user-card v-else-if="user" :user="user" full-details></user-card>
  </div>
</template>

<script>

import UserCard from "@/components/user-card.vue";
import Loader from "@/components/loader";
import {createNamespacedHelpers} from 'vuex';
const { mapActions } = createNamespacedHelpers('Users'); 
export default {
  name: "User",
  components: {
    UserCard,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      user: null
    };
  },
  methods: {
    ...mapActions(['getUserAction'])
  },
  mounted() {
    this.isLoading = true;
    this.getUserAction(this.$route.params.id)
      .then((user) => {
        this.user = user;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
