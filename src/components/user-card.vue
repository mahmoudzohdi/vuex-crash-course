<template>
  <div class="inner-div">
    <div class="front__bkg-photo"></div>
    <div
      class="front__face-photo"
      :style="{ backgroundImage: `url(${userImageUrl})` }"
    ></div>
    <div class="front__text">
      <h3 class="front__text-header">{{ userName }}</h3>
      <p class="front__text-para">
        Age: {{ user.age }}
      </p>

      <template v-if="fullDetails">
        <p class="front__text-para">
          {{ user.jobTitle }}
        </p>

      </template>
      
      <router-link v-else :to="`/users/${user.id}`" class="full-details-link">full details</router-link>


    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    user: {
      type: Object,
      required: true,
    },
    fullDetails: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    userName() {
      const { firstName, lastName } = this.user;
      return `${firstName} ${lastName}`;
    },
    userImageUrl(){
      return `http://api.adorable.io/avatar/130x130/${this.user.id}`
    }
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
  text-align: center;
  vertical-align: top;
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


.front__bkg-photo {
  position: relative;
  height: 150px;
  background-image: url("https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88672068827eaeeab540f584b883cc66&auto=format&fit=crop&w=1164&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.front__bkg-photo:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.front__face-photo {
  position: relative;
  top: -60px;
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
  border: 5px solid #fff;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-transition: all 0.6s cubic-bezier(0.8, -0.4, 0.2, 1.7);
  transition: all 0.6s cubic-bezier(0.8, -0.4, 0.2, 1.7);
  z-index: 3;
}

.front__text {
  position: relative;
  top: -55px;
  margin: 0 auto;
  font-family: "Montserrat";
  font-size: 18px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.front__text .front__text-header {
  font-weight: 700;
}
.front__text .front__text-para {
  position: relative;
  top: -5px;
  color: #000;
  font-size: 14px;
  letter-spacing: 0.4px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}
.front__text .front-icons {
  position: relative;
  top: 0;
  font-size: 14px;
  margin-right: 6px;
  color: gray;
}
.front__text .front__text-hover {
  position: relative;
  top: 10px;
  font-size: 10px;
  color: #ff434c;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #ff434c;
  padding: 8px 15px;
  border-radius: 30px;
  background: #ff434c;
  color: #fff;
  box-shadow: 0 11px 20px -12px rgba(0, 0, 0, 0.6);
}

.social-media-wrapper {
  font-size: 36px;
}
.social-media-wrapper .social-icon {
  position: relative;
  top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 0;
  color: #fff;
  -webkit-transition: all 0.4s cubic-bezier(0.3, 0.7, 0.1, 1.9);
  transition: all 0.4s cubic-bezier(0.3, 0.7, 0.1, 1.9);
}
.social-media-wrapper .social-icon:nth-child(1) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
.social-media-wrapper .social-icon:nth-child(2) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}
.social-media-wrapper .social-icon:nth-child(3) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}
.social-media-wrapper .social-icon:nth-child(4) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

.fab {
  position: relative;
  top: 0;
  left: 0;
  -webkit-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
}
.full-details-link {
  color: #E91E63;
}
</style>
