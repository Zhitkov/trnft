<template>
  <div class="all-screen flex-center veteran-page">
    <div class="all-size veteran-page">
      <div class="searcher">
        <label for="div">Список ветеранов </label>
        <div class="filter">
          <input
            @click="
              visibleKeyboard = true
              modal = false
            "
            v-model="searchName"
            type="text"
            placeholder="Поиск по имени"
          />
        </div>
      </div>
      <div
        class="all-size flex-center chosen-veteran-container"
        style="align-items: center"
        v-show="modal && !visibleKeyboard"
        :style="'z-index: ' + (!modal&&visibleKeyboard ? 3 : 6)"
      >
        <div class="chosen-veteran">
          <div class="chosen-veteran-img">
            <img :src="modalInfo.img" alt="">
          </div>
          <div class="chosen-veteran-desc">
            <h2>{{modalInfo.name}}</h2>
            <p>{{modalInfo.desc}}</p>
            <div style="width: 100%;text-align: center;">
              <div @click="modal = false">
                <div class="btnwitharrow" style="background-size: contain; background-repeat: no-repeat; background-position: center center;">Назад</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Знаю бред, потом сверстаю нормальную модалку, пока так  -->
      </div>
      <div
        v-show="!modal"
        :style="'z-index: ' + (visibleKeyboard ? 3 : 6)"
        
      >
        <div class="v-container v-grid" :style="'z-index: ' + (visibleKeyboard ? 3 : 6)" v-show="filteredVeterans.length === 0">
          <div
            style="color: white"
            v-for="letterArr in arraysByAlphabet"
            :key="letterArr.title"
          >
            <label style="text-align: center;" for="div.itemLetter"><h4 style=" background-color: #ffffff0f;">{{ letterArr.title }}</h4></label>
            <div
              style="display: flex"
              class="itemLetter"
              v-for="letterItem in letterArr.data"
              :key="letterItem.fio"
            >
              <!-- {{letterItem}} -->
              <img style="width: 100px" :src="letterItem.photo" alt="" />
              <div
                class="modal"
                @click="
                  modal = true
                  modalInfo = {name: letterItem.fio, img: letterItem.photo, desc: letterItem.description}
                "
              >
                <h4 class="text">
                  {{ letterItem.name }}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="v-container" style="gap: 30px;">
        <div
          class="v"
          style="width: auto"
          v-for="(user, index) in filteredVeterans"
          :key="index"
        >
          <div
            class="modal"
            @click="
              modal = true
              modalInfo = {name: user.fio, img: user.photo, desc: user.description}
            "
            :style="'background-image: url(' + user.img + ')'"
          >
            <h3 class="text">
              {{ user.name }}
            </h3>
          </div>
        </div>
      </div>
      </div>
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
  async asyncData({ $axios }) {
    var veterans = await $axios.$get('/api/api/video_stand/employee_list/veterans/')
        .then((response) => {
          console.log(response, 'response.data')
          return response.employees
        });
    veterans.forEach((e) => {e.photo = 'http://localhost:8000/api/' + e.photo})
    
    return { veterans: veterans }
  },
  data() {
    return {
      input: '',
      searchName: '',
      visible: true,
      layout: 'normal',
      visibleKeyboard: false,
      modal: false,
      modalInfo: {},
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
      if (
        this.filteredVeterans.length === 1 &&
        this.visibleKeyboard === false
      ) {
        this.modal = true
        // this.modalIndex = this.filteredVeterans[0]
        this.modalIndex = 0
      }
    },
  },
  computed: {
    ...mapGetters(['byPath']),
    // veterans() {
    //   return this.byPath('humanCapital.veterans')
    // },
    arraysByAlphabet() {
      //Здесь я разбиваю пришедший массив ветеранов на массив объектов title первая буква и внутри все ветераны с этой буквы, после сортирую по возрастанию
      return Object.values(
        this.veterans.reduce((acc, word) => {
          let firstLetter = word.fio[0].toLocaleUpperCase()
          if (!acc[firstLetter]) {
            acc[firstLetter] = { title: firstLetter, data: [word] } 
          } else {
            acc[firstLetter].data.push(word)
          }
          acc = Object.keys(acc)
            .sort()
            .reduce(function (result, key) {
              result[key] = acc[key]
              return result
            }, {})
          // acc = Object.values(acc)
          console.log(acc)
          return acc
        }, {})
      )
    },
    filteredVeterans() {
      //Здесь я фильтрую согласно инфпуту
      var users_array = this.veterans,
        searchName = this.searchName
        if (!searchName) {
        return []
      }
      searchName = searchName.trim().toLowerCase()
      users_array = users_array.filter(function (user) {
        if (user.fio.toLowerCase().indexOf(searchName) !== -1) {
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
.v-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
}
.v-container {
  position: absolute;
  display: flex;
  margin: 50px;
  z-index: 3;
  flex-wrap: wrap;
  justify-content: flex-start;

}
.v-container > .v > .modal > h3.text {
  background-image: linear-gradient(180deg, #00000000, #000000ff);
  color: white;
  text-align: center;
  margin: 0;
  font-size: 100%;
}
.v-container > .v > .modal {
  justify-content: center;
  display: flex;
  align-items: flex-end;
  width: 300px;
  height: 200px;
  background-size: 100% 100%;
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

.chosen-veteran {
  display: flex;
  flex-direction: row;
  height: 59%;
  width: 80vw;
  background-image: url('~/assets/creative/chosenVeteranBg.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.chosen-veteran > .chosen-veteran-img {
  height: 100%;
  width:auto;
}
.chosen-veteran > .chosen-veteran-img > img {
  height: 100%;
  width:auto;
}
.chosen-veteran > .chosen-veteran-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px 30px 10px;
}
.chosen-veteran > .chosen-veteran-desc > h2 {
  text-align: center;
  width: 100%;
}
.chosen-veteran > .chosen-veteran-desc > p {
  text-align: left;
  width: 90%;
  margin: 0;
}

</style>

