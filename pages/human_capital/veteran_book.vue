<template>
  <div class="all-screen flex-center veteran-page">
    <div class="all-size veteran-page">
      <div class="searcher">
        <label for="div">Список ветеранов </label>
        <div class="filter">
          <input
            @click="visibleKeyboard = true; modal = false"
            v-model="searchName"
            type="text"
            placeholder="Поиск по имени"
          />
        </div>
      </div>
      <div class="all-size flex-center" style="align-items: center;" v-show="modal && !visibleKeyboard">
        <img style="width: 70%; height:50%;" :src="require('~/assets/picture/veteran/modal/'+ modalIndex +'.png')" alt="">
      </div>
      <div v-show="!modal" :style="'z-index: ' + (visibleKeyboard?3:6)" class="v-container">
        <div
          class="v"
          style="width: 32vw"
          v-for="(user, index) in filteredVeterans"
          :key="index"
        >
        <div @click="modal = true; modalIndex = index" :style="'justify-content: center; display: flex; align-items: flex-end; width: 300px; height: 200px; background-size: 100% 100%; background-image: url('+ user.img + ')'">
          <!-- <img style="width: 300px"  alt="" /> -->
          
          <h3 style="background-image: linear-gradient(180deg, #00000000, #000000ff); color: white; text-align: center; margin: 0; font-size: 100%; " >
          {{ user.name }}
        </h3>
            <!-- <p>{{ user.desc }}</p> -->
          </div>
        </div>
      </div>
      <!-- 1234567890{delete:backspace}|qwertyuiop|asdfghjkl|{shift:goto:1}zxcvbnm|{space:space}{custom:custom} -->
    </div>
    <div class="ui-keyboard-case">
      <keyboard
        v-show="visibleKeyboard"
        v-model="searchName"
        @custom="custom"
        :layouts="[
          '1234567890{delete:backspace}|йцукенгшщз|фывапролд|{shift:goto:1}ячсмить|{Space:space}{Enter:custom}',
          '1234567890{delete:backspace}|ЙЦУКЕНГШЩЗ|ФЫВАПРОЛД|{shift:goto:0}ЯЧСМИТЬ|{Space:space}{Enter:custom}',
        ]"
      ></keyboard>
    </div>
  </div>
</template>

<script>
import keyboard from 'vue-keyboard'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      input: '',
      searchName: '',
      visible: true,
      layout: 'normal',
      visibleKeyboard: false,
      modal: false,
      modalIndex: 0,
      options: {
        useKbEvents: false,
        preventClickEvent: false,
      },
    }
  },
  components: { keyboard },

  methods: {
    custom() {
      this.visibleKeyboard = false
      if((this.filteredVeterans.length === 1) && (this.visibleKeyboard === false)) {
        this.modal = true;
        // this.modalIndex = this.filteredVeterans[0]
        this.modalIndex = 0
      }
    },
  },
  computed: {
    ...mapGetters(['byPath']),
    veterans() {
      return this.byPath('humanCapital.veterans')
    },
    filteredVeterans() {
      var users_array = this.veterans,
        searchName = this.searchName
      if (!searchName) {
        return []
      }
      searchName = searchName.trim().toLowerCase()
      users_array = users_array.filter(function (user) {
        if (user.name.toLowerCase().indexOf(searchName) !== -1) {
          return user
        }
      })
      // Возвращает массив с отфильтрованными данными.
      return users_array
    },
  },
}
</script>

<style>
.veteran-page {
  background-image: url('~/assets/creative/veteranBg.png');
  background-size: 100vw 100vh;
  display: flex;
}
.v-container {
  position: absolute;
  display: flex;
  margin: 50px;
  z-index: 3;
}
.v-container > .v {
  cursor: pointer;
}
.searcher {
  position: absolute;
  bottom: 5vh;
  display: flex;
  z-index: 6;
}
.vue-keyboard-key {
  background: #1777bba0;
  color: white;
}
.ui-keyboard-case {
  border: none !important;
}

.ui-keyboard-case {
  font-size: 50px;
  text-align: center;
  /* background: #fefefe; */
  border: 1px solid #ffe3e2;
  padding: 12px;
  width: 50%;
  height: auto;
  margin-right: 5%;

  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  /* left: 25%; */
  /* top: auto;
    bottom: 0px; */
  /* position: fixed; */
}
button.vue-keyboard-key:nth-child(11),
div.vue-keyboard-row:nth-child(4) > button:nth-child(1),
div.vue-keyboard-row:nth-child(5) > button:nth-child(1),
button.action:nth-child(2) {
  background-color: red;
  color: black;
}
</style>
