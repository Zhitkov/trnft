// import { keys, of } from 'core-js/core/array'
import createCache from 'vuex-cache'

export const plugins = [createCache()]

export const state = () => ({
  entryGroup: {
    right: require('/static/video/entry_group/1.mp4'),
  },
  samara: {
    video: [
      {
        src: require('/static/video/samara/1.mp4'),
        endTime: 20,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/3.mp4'),
        endTime: 23,
      },
      {
        src: require('/static/video/samara/3.mp4'),
        endTime: 23,
      },
    ]
  },
  technology: {
    fixed: [
      require('/static/video/technology/past/1.mp4'),
      require('/static/video/technology/present/1.mp4'),
      require('/static/video/technology/present/1.mp4'),
      require('/static/video/technology/future/1.mp4'),
    ],
    moving: [
      require('/static/video/technology/past/2.mp4'),
      require('/static/video/technology/present/2.mp4'),
      require('/static/video/technology/present/1.mp4'),
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
  timeline: {
    map: [
      {
        year: '1936',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1953',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1961',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1970',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1974',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1979',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1980-e',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '1990-e',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '2000-e',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        year: '2010-e',
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
    ],
    information: [
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
      {
        src: require('/static/video/samara/2.mp4'),
        endTime: 15,
      },
    ],
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
  
 
}
