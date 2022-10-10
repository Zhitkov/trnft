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
  },
  smallTablet: {
    modelIndex: null,
    modelValue: 1,
  },
  timeline: {
    counter: 0,
    pause: false,
  },
})
export const getters = {
  byPath: (state) => (some) => {
    console.log('from getter', some);
    return some.
      replace(/\[/g, '.').
      replace(/\]/g, '').
      split('.').
      reduce((o, k) => (o || {})[k], state);
  },
}
export const actions = {
  
}

export const mutations = {
  CHANGE_BY_PATH(state, [path, value]) {
    console.log(path, value);
    setByPath(state, path, value)
  },
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
  
}
