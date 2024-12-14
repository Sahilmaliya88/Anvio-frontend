<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header">
    <!-- logo -->
    <img v-lazy="`/src/assets/anvio-logo-horizontal-red@3x 2.png`" id="logoimg" alt="logo" />
    <!-- firstMenus -->
    <ul class="navs">
      <li><a class="dropmenus">Entertainment</a></li>
      <li><a class="dropmenus">Holidays</a></li>
      <li><RouterLink to="/">Certificates</RouterLink></li>
      <li><RouterLink to="/">Contacts</RouterLink></li>
    </ul>
    <!-- <button></button> -->
    <button id="buyticketbtn">BUY TICKET</button>
    <!-- contact and lang menus -->
    <ul class="navs">
      <li>
        <a>+7 (495) 133-02-43</a>
      </li>
      <li>
        <a class="dropmenus"> Moscow </a>
      </li>
      <li>
        <a class="dropmenus"> VOYTI </a>
      </li>
      <li>
        <select id="langs">
          <option>Eng</option>
          <option>Rus</option>
        </select>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
