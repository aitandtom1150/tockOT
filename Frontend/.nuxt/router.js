import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37a4e75b = () => interopDefault(import('../pages/access-control/index.vue' /* webpackChunkName: "pages/access-control/index" */))
const _5971efe0 = () => interopDefault(import('../pages/attendance/index.vue' /* webpackChunkName: "pages/attendance/index" */))
const _f5637ce8 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _68d25046 = () => interopDefault(import('../pages/leave/index.vue' /* webpackChunkName: "pages/leave/index" */))
const _e1f3e096 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3269f872 = () => interopDefault(import('../pages/managecompany/index.vue' /* webpackChunkName: "pages/managecompany/index" */))
const _97cd5316 = () => interopDefault(import('../pages/manageposition/index.vue' /* webpackChunkName: "pages/manageposition/index" */))
const _5c87eb08 = () => interopDefault(import('../pages/claims/overtime/index.vue' /* webpackChunkName: "pages/claims/overtime/index" */))
const _4b61e8be = () => interopDefault(import('../pages/documents/approval/index.vue' /* webpackChunkName: "pages/documents/approval/index" */))
const _d0e91ef2 = () => interopDefault(import('../pages/documents/request/index.vue' /* webpackChunkName: "pages/documents/request/index" */))
const _1a49bfd7 = () => interopDefault(import('../pages/managecompany/create.vue' /* webpackChunkName: "pages/managecompany/create" */))

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
    component: _37a4e75b,
    name: "access-control"
  }, {
    path: "/attendance",
    component: _5971efe0,
    name: "attendance"
  }, {
    path: "/company",
    component: _f5637ce8,
    name: "company"
  }, {
    path: "/leave",
    component: _68d25046,
    name: "leave"
  }, {
    path: "/login",
    component: _e1f3e096,
    name: "login"
  }, {
    path: "/managecompany",
    component: _3269f872,
    name: "managecompany"
  }, {
    path: "/manageposition",
    component: _97cd5316,
    name: "manageposition"
  }, {
    path: "/claims/overtime",
    component: _5c87eb08,
    name: "claims-overtime"
  }, {
    path: "/documents/approval",
    component: _4b61e8be,
    name: "documents-approval"
  }, {
    path: "/documents/request",
    component: _d0e91ef2,
    name: "documents-request"
  }, {
    path: "/managecompany/create",
    component: _1a49bfd7,
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
