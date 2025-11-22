import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _89a31418 = () => interopDefault(import('../pages/access-control/index.vue' /* webpackChunkName: "pages/access-control/index" */))
const _0a89cb29 = () => interopDefault(import('../pages/attendance/index.vue' /* webpackChunkName: "pages/attendance/index" */))
const _fc6a05da = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _0286418d = () => interopDefault(import('../pages/leave/index.vue' /* webpackChunkName: "pages/leave/index" */))
const _35be423c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _ae0e83e4 = () => interopDefault(import('../pages/managecompany/index.vue' /* webpackChunkName: "pages/managecompany/index" */))
const _37a2e50e = () => interopDefault(import('../pages/manageposition/index.vue' /* webpackChunkName: "pages/manageposition/index" */))
const _4a302f8f = () => interopDefault(import('../pages/claims/overtime/index.vue' /* webpackChunkName: "pages/claims/overtime/index" */))
const _4acda5ba = () => interopDefault(import('../pages/documents/approval/index.vue' /* webpackChunkName: "pages/documents/approval/index" */))
const _8796a164 = () => interopDefault(import('../pages/documents/request/index.vue' /* webpackChunkName: "pages/documents/request/index" */))
const _c4596320 = () => interopDefault(import('../pages/managecompany/create.vue' /* webpackChunkName: "pages/managecompany/create" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/access-control",
    component: _89a31418,
    name: "access-control"
  }, {
    path: "/attendance",
    component: _0a89cb29,
    name: "attendance"
  }, {
    path: "/company",
    component: _fc6a05da,
    name: "company"
  }, {
    path: "/leave",
    component: _0286418d,
    name: "leave"
  }, {
    path: "/login",
    component: _35be423c,
    name: "login"
  }, {
    path: "/managecompany",
    component: _ae0e83e4,
    name: "managecompany"
  }, {
    path: "/manageposition",
    component: _37a2e50e,
    name: "manageposition"
  }, {
    path: "/claims/overtime",
    component: _4a302f8f,
    name: "claims-overtime"
  }, {
    path: "/documents/approval",
    component: _4acda5ba,
    name: "documents-approval"
  }, {
    path: "/documents/request",
    component: _8796a164,
    name: "documents-request"
  }, {
    path: "/managecompany/create",
    component: _c4596320,
    name: "managecompany-create"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
