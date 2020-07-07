<template>
  <div class="text-center">
    <div class="loader" :class="[`color-${color}`, { small: small }]">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: {
    small: {
      type: Boolean,
      required: false,
    },
    color: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.text-center{
  text-align: center;
}

.loader {
  display: inline-block;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  /* -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0); */
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
.loader.color-pink{
  border-top: 1.1em solid rgba(233, 30, 99, 0.5);
  border-right: 1.1em solid rgba(233, 30, 99, 0.5);
  border-bottom: 1.1em solid rgba(233, 30, 99, 0.5);
}
.loader.small,
.loader.small:after {
  width: 3em;
  height: 3em;
}
.loader.small{
  margin: 0px auto;
  font-size: 5px;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
