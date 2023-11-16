

<template>
  <img :src="currentIcon1" >
    <img :src="currentIcon2" >
  <img :src="currentImage" @click="changeTheme($event)">
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
      images: {
        light: './src/components/icons/Group 11.png',
        dark: './src/components/icons/Group 10.png',
      },
      icons: {
        light: {
          icon1: './src/components/icons/mask_group.png',
          icon2: './src/components/icons/mask_group-1.png',
        },
        dark: {
          icon1: './src/components/icons/pngwing.com (4).png',
          icon2: './src/components/icons/pngegg.png',
        },
      },
    };
  },
  computed: {
    currentImage() {
      return this.darkTheme ? this.images.dark : this.images.light;
      
    },
    currentIcon1() {
      return this.darkTheme ? this.icons.dark.icon1 : this.icons.light.icon1;
    },
    currentIcon2() {
      return this.darkTheme ? this.icons.dark.icon2 : this.icons.light.icon2;
  },
},
  methods: {
    changeTheme(event) {
      event.preventDefault();
      this.darkTheme = !this.darkTheme;
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
    },
  },
};
</script>

<style>
:root {
  --color-background-light: #ffffff;
  --color-background-dark: #000000;
  --color-text-light: #000000;
  --color-text-dark: #ffffff;
  --color-text-light: #000000;
  --another-color-text-light: #000000;
  
  
}

body.light-theme {
  background-color: var(--color-background-light);
  color: var(--color-text-light);
}

body.dark-theme {
  background-color: var(--color-background-dark);
  color: var(--color-text-dark);
}

body.light-theme a {
  color: var(--color-text-light);
}

body.dark-theme a {
  color: var(--color-text-dark);
}

body.light-theme p {
  color: var(--color-text-light);
}

body.dark-theme p {
  color: var(--color-text-dark);
}



</style>