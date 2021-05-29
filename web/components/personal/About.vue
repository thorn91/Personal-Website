<template>
  <div class="relative pt-6 pb-16 sm:pb-24 sm:pt-16">
    <div class="mt-14 mx-auto max-w-7xl px-4 sm:mt-6">
      <div class="text-center">
        <h1
          id="name"
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span
            class="block xl:inline text-personal-main-accent"
            >Thomas <span class="text-personal-dark">Horn</span></span
          >
        </h1>
        <p
          class="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl"
        >
          Associate Consultant | Software Engineer
        </p>

        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <a href="https://www.github.com/thorn91/" target="_blank" class="">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thomaswarrenhorn"
            target="_blank"
            class="pl-12"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
            />
          </a>
          <a href="mailto:thomas@thomashorn.info" target="_blank" class="pl-12">
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-personal-dark text-xl sm:text-5xl hover:text-personal-main-accent"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>