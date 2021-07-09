import { wrapFunctional } from './utils'

export { default as Home } from '../../components/Home.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as PageNotFound } from '../../components/PageNotFound.vue'

export const LazyHome = import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyPageNotFound = import('../../components/PageNotFound.vue' /* webpackChunkName: "components/page-not-found" */).then(c => wrapFunctional(c.default || c))
