<template>
  <div class="inner-div">
    <form @submit.prevent="submit">
      <h2 class="form-title">Add User</h2>
      <label>
        First Name
        <input type="text" v-model="form.firstName" />
      </label>
      <label>
        Last Name
        <input type="text" v-model="form.lastName" />
      </label>
      <label>
        Age
        <input type="text" v-model="form.age" />
      </label>
      <label>
        Job title
        <input type="text" v-model="form.jobTitle" />
      </label>

      <button type="submit">
        <loader v-if="isLoading" small color="pink"></loader>
        <template v-else>
          Submit
        </template>
      </button>
    </form>
  </div>
</template>

<script>
const initForm = () => ({
  firstName: null,
  lastName: null,
  ageName: null,
  jobTitle: null,
});
import Loader from "./loader";

export default {
  name: "add-user-card",
  components: {
    Loader
  },
  props: {
    usersLength: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      form: initForm(),
    };
  },
  methods: {
    submit() {
      this.$emit("submit", { ...this.form, id: this.usersLength + 1 });
      this.reset();
    },
    reset() {
      this.form = initForm();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-div {
  height: 400px;
  display: inline-block;
  margin: 15px;
  width: 300px;
  position: relative;
  border-radius: 5px;
  font-weight: 400;
  color: #071011;
  font-size: 1rem;

  background: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;

  -webkit-transition: all 0.6s cubic-bezier(0.8, -0.4, 0.2, 1.7);
  transition: all 0.6s cubic-bezier(0.8, -0.4, 0.2, 1.7);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.form-title {
  text-align: center;
}
label,
button {
  width: 200px;
  display: block;
  margin: 0 auto 15px;
}
input {
  width: 100%;
  display: block;
  padding: 5px;
  margin-top: 5px;
  box-sizing: border-box;
}
button {
  padding: 10px;
}
</style>
