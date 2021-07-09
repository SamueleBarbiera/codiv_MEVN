import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Home: () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  PageNotFound: () => import('../../components/PageNotFound.vue' /* webpackChunkName: "components/page-not-found" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
