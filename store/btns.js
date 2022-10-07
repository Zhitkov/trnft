export const state = () => ({
  tablet: {
    main: [
      {
        link: 'humanCapital',
        name: 'Человеческий капитал',
      },
      {
        link: 'samara',
        name: 'Самара',
      },
      {
        link: 'technology',
        name: 'Технологии',
      },
      {
        link: 'timeline',
        name: 'Таймлайн',
      },
    ],
    humanCapital: [
      {
        link: '-',
        name: 'Какаято кнопка',
      },
      {
        link: '-',
        name: 'Какаято кнопка',
      },
      {
        link: '-',
        name: 'Какаято кнопка',
      },
      {
        link: '-',
        name: 'Какаято кнопка',
      },
      {
        link: '-',
        name: 'Какаято кнопка',
      },
      {
        link: '-',
        name: 'Какаято кнопка',
      },
    ],
    samaraButtons: [
        {
          link: 0,
          name: 'Этап 1',
        },
        {
          link: 1,
          name: 'Этап 2',
        },
        {
          link: 2,
          name: 'Этап 3',
        },
        {
          link: 3,
          name: 'Этап 4',
        },
        {
          link: 'start',
          name: 'Пуск',
        },
      ],
    samara: [
      {
          link: 'samaraButtons',
          name: 'Кнопки Самары',
        },
      
    ],
    changeScreenPosition: [
        {
          link: 'past',
          name: 'Прошлое',
        },
        {
          link: 'present',
          name: 'Настоящее',
        },
        {
          link: 'present2',
          name: 'Настоящее 2',
        },
        {
          link: 'future',
          name: 'Будущее',
        },
      ],
    technology: [
      
        {
          link: 'changeScreenPosition',
          name: 'Перемещение Экрана',
        },
    ],
    changeYear: [
        {
          link: 0,
          name: '1936',
        },
        {
          link: 1,
          name: '1953',
        },
        {
          link: 2,
          name: '1961',
        },
        {
          link: 3,
          name: '1970',
        },
        {
          link: 4,
          name: '1974',
        },
        {
          link: 5,
          name: '1979',
        },
        {
          link: 6,
          name: '1980-е',
        },
        {
          link: 7,
          name: '1990-е',
        },
        {
          link: 8,
          name: '2000-е',
        },
        {
          link: 9,
          name: '2010-e',
        },
      ],
    timeline: [
        {
          link: 'changeYear',
          name: 'Переключение годов',
        },
      ],
      
  },
  smallTablet: {
    main: [
      {
        model: 0,
        desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
        link: 'model_controller',
        name: 'УСТРОИЙСТВО ДЛЯ БЕЗОГНЕВОЙ РЕЗКИ ТРУБ',
      },
      {
        model: 1,
        desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
        link: 'model_controller',
        name: 'УСТАНОВКА ДЛЯ <BR> ПЛОСКОСВОРАЧИВАЕМОГО РУКАВА',
      },
      {
        model: 2,
        desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
        link: 'model_controller',
        name: 'ГЕРМЕТИЗИРУЮЩЕЕ УСТРОЙСТВО ДЛЯ <BR> ВАНТУЗА ТРУБОПРОВОДА',
      },
      {
        model: 3,
        desc: 'Minim laborum ipsum ut aliquip velit. Sunt adipisicing ad sunt sit officia dolore excepteur irure voluptate fugiat laborum veniam. Consectetur tempor pariatur dolor deserunt consequat.',
        link: 'model_controller',
        name: 'УСТАНОВКА ЛЕДОРЕЗНАЯ',
      },
    ],
  },
  humanCapital: {
    main: [
      {
        link: 'humankind',
        name: 'Человеческий <br> капитал',
      },
      {
        link: 'social',
        name: 'Социальная <br> политика',
      },
      {
        link: 'person',
        name: 'Кадровая <br> политика',
      },
      {
        link: 'ecology',
        name: 'Энергоэффективность <br> экология <br> Охрана труда',
      },
      {
        link: 'charity',
        name: 'Благотворительность',
      },
    ],
    humankind: [
      {
        link: 'honor_book',
        name: 'Книга почета',
      },
      {
        link: 'veteran_book',
        name: 'Книга памяти ветеранов ВОВ',
      },
    ],
    person: [
      {
        link: 'vuz',
        name: 'Взаимодействие с вузами',
      },
    ],
    ecology: [
      {
        link: 'labour_protection',
        name: 'Охрана труда',
      },
      {
        link: 'energy_effiency',
        name: 'Энергоэффетивность',
      },
      {
        link: 'ecology_security',
        name: 'Промышленная и экологическая безопасность',
      },
    ],
    charity: [
      {
        link: 'privolga',
        name: 'проекты АО «Транснефть – Приволга» в областях благотворительности',
      },
      {
        link: 'marathone',
        name: 'благотворительный марафон "Помогаем добрым делом"',
      },
    ],
    social: [
      {
        link: 'resort',
        name: 'Санаторно-курортное и реабилитационное-восстановительное лечения',
      },
      {
        link: 'insurance',
        name: 'Добровольное медицинское страхование',
      },
      {
        link: 'mortgage',
        name: 'Жилищная ипотека',
      },
      {
        link: 'pension',
        name: 'Негосударственное пенсионное обеспечение',
      },
      {
        link: 'social-sport',
        name: 'Мероприятия, направленные на развитие физической культуры и спорта',
      },
      {
        link: 'benefits',
        name: 'социальные льготы и гарантии',
      },
    ],
  },
})

export const getters = {
  tablet(state) {
    return state.tablet
  },
  smallTablet(state) {
    return state.smallTablet
  },
  humanCapital(state) {
    return state.humanCapital
  },
}

export const mutations = {}

export const actions = {}
