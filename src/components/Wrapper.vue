<script>
// import Myicon from "../assets/icons/election_icon.png";
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="grid md:grid-cols-2 my-6 gap-2 items-center">
    <img src="../assets/vote.png" alt="" class="" />
    <div class="p-3">
      <h1 class="text-4xl font-bold">
        Make your own polling and Share easily with
        <span class="text-[#4ad97d]">Fast Poll</span>
      </h1>
      <p class="p-3">
        ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repudiandae, quod fuga omnis corrupti molestias quisquam dolore sapiente
        pariatur, ullam rem harum id odit. Architecto sed rem inventore tempore
        eum.
      </p>
      <RouterLink to="/login">
        <button class="bg-[#4ad97d] p-2 w-full md:w-28 text-white rounded-xl">
          Create Poll
        </button>
      </RouterLink>
    </div>
  </section>
</template>
