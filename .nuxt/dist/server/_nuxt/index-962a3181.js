import { _ as __nuxt_component_0 } from "./nuxt-link-5d0b373b.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "devalue";
import "klona";
import "cookie-es";
import "ohash";
import "firebase-admin/auth";
import "firebase-admin/app";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Card = resolveComponent("Card");
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Button = resolveComponent("Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))}><div class="col-12">`);
  _push(ssrRenderComponent(_component_Card, { class: "text-center" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Welcome, anonym user. You need to sign in for access to private area. `);
      } else {
        return [
          createTextVNode(" Welcome, anonym user. You need to sign in for access to private area. ")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Button, { label: "ไปที่หน้าล็อคอิน" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Button, { label: "ไปที่หน้าล็อคอิน" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, { to: "/login" }, {
            default: withCtx(() => [
              createVNode(_component_Button, { label: "ไปที่หน้าล็อคอิน" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-962a3181.js.map
