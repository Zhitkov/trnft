// import { keys, of } from 'core-js/core/array'
import createCache from 'vuex-cache'

function importAll(r) {
  r = r.keys().map((path) => r(path))
  return r
}
const setByPath = (obj, path, value) => {
  if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []; 
  path.slice(0,-1).reduce((a, c, i) => 
       Object(a[c]) === a[c] 
           ? a[c] 
           : a[c] = Math.abs(path[i+1])>>0 === +path[i+1] 
                 ? [] 
                 : {}, 
       obj)[path[path.length-1]] = value; 
  return obj; 
};

export const plugins = [createCache()]

export const state = () => ({
  entryGroup: {
    right: require('~/assets/video/entry_group/1.mp4'),
    left: require('~/assets/video/entry_group/2.mp4'),
  },
  humanCapital: {
    veterans: [
      {
        name: 'Дмитрий Грфович Абзонов',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Армен Григорьев Васильевич',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Александр Васильевич Сталинов',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Василий Примаков Антонович',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Анатолий Васильев Александрович',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Владимир Раменский Вазгенович',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Роман Калинов Романович',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
      {
        name: 'Сидр Сидорович Сидоров',
        img: require('~/assets/picture/veteran/1.jpg'),
        desc: 'Aliqua ullamco ad velit exercitation sint elit nulla aliqua irure commodo exercitation incididunt. Proident ipsum consectetur ipsum eiusmod aliqua duis veniam commodo adipisicing. Sint veniam commodo id aute labore pariatur esse ea. Magna sit tempor aliquip nulla esse do minim esse tempor duis cillum dolor consequat dolor. Veniam deserunt sint qui fugiat eiusmod anim id aute. Lorem ullamco sunt cillum ad proident proident qui magna voluptate in consequat duis magna. Ipsum incididunt incididunt consequat dolore et excepteur labore nisi magna elit aliqua nisi.',
      },
    ],
  },
  samara: {
    map: require('~/assets/picture/samara/map.png'),
    video: [
      {
        src: require('~/assets/video/samara/1.mp4'),
        endTime: 20,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/3.mp4'),
        endTime: 23,
      },
      {
        src: require('~/assets/video/samara/3.mp4'),
        endTime: 23,
      },
    ],
    counter: 0,
    start: false,
    idle: false,
  },
  technology: {
    period: 'past',
    models: [
      importAll(require.context('/static/models/GCNA_jpg/', false, /.*\.jpg$/)),
      importAll(require.context('/static/models/PM_jpg/', false, /.*\.jpg$/)),
      importAll(require.context('/static/models/PVM_jpg/', false, /.*\.jpg$/)),
      importAll(require.context('/static/models/RZM_jpg/', false, /.*\.jpg$/)),
    ],
    fixed: [
      require('~/assets/video/technology/past/1.mp4'),
      require('~/assets/video/technology/present/1.mp4'),
      require('~/assets/video/technology/present/1.mp4'),
      require('~/assets/video/technology/future/1.mp4'),
    ],
    moving: [
      require('~/assets/video/technology/past/2.mp4'),
      require('~/assets/video/technology/present/2.mp4'),
      require('~/assets/video/technology/present/1.mp4'),
      [
        {
          title: 'Do minim id quis nisi commodo esse aute proident occaecat.',
          desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
          img: require('~/assets/picture/1.jpg'),
        },
        {
          title: 'Do minim id quis nisi commodo esse aute proident occaecat.',
          desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
          img: require('~/assets/picture/2.jpg'),
        },
        {
          title: 'Do minim id quis nisi commodo esse aute proident occaecat.',
          desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
          img: require('~/assets/picture/3.jpg'),
        },
      ],
    ],
  },
  smallTablet: {
    modelIndex: null,
    modelValue: 1,
  },
  timeline: {
    counter: 0,
    pause: false,
    map: [
      {
        year: '1936',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1953',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1961',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1970',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1974',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1979',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1980-e',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1990-e',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '2000-e',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '2010-e',
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
    ],
    information: [
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('~/assets/video/samara/2.mp4'),
        endTime: 15,
      },
    ],
  },
})
export const getters = {
  entryGroup(state) {
    return state.entryGroup
  },
  veterans(state) {
    return state.humanCapital.veterans
  },
  samara(state) {
    return state.samara
  },
  technology(state) {
    return state.technology
  },
  smallTablet(state) {
    return state.smallTablet
  },
  choosenModel(state) {
    return state.smallTablet.choosenModel
  },
  coords(state) {
    return state.smallTablet.coords
  },
  timeline(state) {
    return state.timeline
  },
}
export const actions = {
  async changeTimelineVideo({ commit }) {
    const video = await this.$axios.$get('')
    commit('CHANGE_TIMELINE_VIDEO', video)
  },
}

export const mutations = {
  CHANGE_BY_PATH(state, [path, value]) {
    console.log(path, value);
    setByPath(state, path, value)
  },
  // CHANGE_STATE(state, keys, value){
  //   let a
  //   let keysArr = keys.split('.')
  //   for (let keyIndex = 0; keyIndex < keysArr.length; keyIndex++) {
  //     a = state[key]
  //     console.log(a);
  //     if(keysArr.length === keyIndex) {
  //       a =
  //     }

  //   }
  //   for(key of keysArr) {
  //     a = state[key]
  //     console.log(a);
  //     if(keysArr.length === keysArr)
  //   }
  // },
  // CHANGE_TIMELINE_VIDEO(state, video) {
  //   state.timeline.information = video
  // },
  CHANGE_SAMARA_VIDEO(state, counter) {
    if (state.samara.start && state.samara.counter === 3) {
      state.samara.counter = 0
      state.samara.start = !state.samara.start
    } else {
      state.samara.counter = counter
    }
  },
  CHANGE_TIMELINE_VIDEO(state, counter) {
    if (!state.timeline.pause) {
      state.timeline.pause = false
    }
    if (state.timeline.counter === 9) {
      state.timeline.counter = 0
    } else {
      state.timeline.counter = counter
    }
  },
  // PAUSE_TIMELINE(state) {
  //   state.timeline.pause = !state.timeline.pause
  // },
  SAMARA_START(state) {
    state.samara.counter = 0
    state.samara.start = !state.samara.start
  },
  IDLE_SAMARA(state, idle) {
    state.samara.idle = idle
  },
  CHANGE_TECHNOLOGY_PERIOD(state, period) {
    state.technology.period = period
  },
  CHANGE_TIMELINE_PERIOD(state, period) {
    state.technology.period = period
  },
  CHANGE_MODEL_INDEX(state, index) {
    state.smallTablet.modelIndex = index
  },
  CHANGE_MODEL_VALUE(state, mv) {
    state.smallTablet.modelValue = mv
  },
}
