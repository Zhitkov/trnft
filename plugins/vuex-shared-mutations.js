import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
    window.onNuxtReady(nuxt => {
        shareMutations({
            predicate: [
                'CHANGE_SAMARA_VIDEO',
                'CHANGE_TECHNOLOGY_PERIOD',
                'SAMARA_START',
                'IDLE_SAMARA',
                'CHANGE_TIMELINE_VIDEO',
                'PAUSE_TIMELINE',
                'CHANGE_TIMELINE_PERIOD',
                'CHANGE_MODEL_VALUE',
                'CHANGE_MODEL_INDEX',
                'CHANGE_BY_PATH',
                // 'pages/ADD_NEWS_INFO',
                // 'weather/ADD_WEATHER_IMG'
            ]
        })(store)
    })
}