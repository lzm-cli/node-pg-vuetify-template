module.exports = process.env.NODE_ENV === 'production' ? {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'vuetify/lib': 'Vuetify'
    }
  }
} : {
    "productionSourceMap": false,
    "transpileDependencies": [
      "vuetify"
    ],
  }