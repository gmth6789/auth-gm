import { _ as _export_sfc, u as useNuxtApp, a as useUser, b as useCookie, n as navigateTo } from "../server.mjs";
import { toRef, mergeProps, useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode } from "vue";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { defineRule, useField, Form } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { signInWithEmailAndPassword } from "firebase/auth";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "cookie-es";
import "ohash";
import "firebase-admin/auth";
import "firebase-admin/app";
import "defu";
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
const TextInput_vue_vue_type_style_index_0_scoped_cb938884_lang = "";
const _sfc_main$1 = {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    successMessage: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const name = toRef(props, "name");
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta
    } = useField(name, void 0, {
      initialValue: props.value
    });
    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["TextInput", { "has-error": !!$setup.errorMessage, success: $setup.meta.valid }]
  }, _attrs))} data-v-cb938884><label${ssrRenderAttr("for", $props.name)} data-v-cb938884>${ssrInterpolate($props.label)}</label><input${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", $props.name)}${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("value", $setup.inputValue)}${ssrRenderAttr("placeholder", $props.placeholder)} class="p-inputtext p-component" data-v-cb938884><p class="help-message" style="${ssrRenderStyle($setup.errorMessage || $setup.meta.valid ? null : { display: "none" })}" data-v-cb938884>${ssrInterpolate($setup.errorMessage || $props.successMessage)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cb938884"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { $toast, $firebaseAuth } = useNuxtApp();
    const user$ = useUser();
    const disabled = ref(false);
    const signinForm = ref({ email: "", password: "" });
    const submitBtn = ref();
    const token = useCookie("token");
    const schema = ref({
      email: "required|email",
      password: "required|min:8"
    });
    const signin = async () => {
      if (signinForm.value.email || signinForm.value.password)
        disabled.value = true;
      try {
        const { user } = await signInWithEmailAndPassword(
          $firebaseAuth,
          signinForm.value.email,
          signinForm.value.password
        );
        user$.value = user;
        token.value = user$.value.accessToken || "";
        navigateTo("/");
      } catch (error) {
        $toast.add({ severity: "error", summary: "Error Message", detail: error, life: 3e3 });
        signinForm.value = { email: "", password: "" };
        disabled.value = false;
      }
    };
    function onSubmit({ email: email2 = "", password = "" }) {
      signinForm.value = { email: email2, password };
      signin();
    }
    function onInvalidSubmit() {
      submitBtn.value.classList.add("invalid");
      setTimeout(() => {
        submitBtn.value.classList.remove("invalid");
      }, 1e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex align-items-center justify-content-center overflow-hidden" }, _attrs))}><div class="grid justify-content-center p-2 lg:p-0" style="${ssrRenderStyle({ "min-width": "80%" })}"><div class="col-12 xl:col-6" style="${ssrRenderStyle({ "border-radius": "56px", "padding": "0.3rem", "background": "linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%)" })}"><div class="h-full w-full m-0 py-7 px-4" style="${ssrRenderStyle({ "border-radius": "53px", "background": "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))" })}"><div class="w-full md:w-10 mx-auto">`);
      _push(ssrRenderComponent(unref(Form), {
        onSubmit,
        "validation-schema": unref(schema),
        onInvalidSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TextInput, {
              name: "email",
              type: "email",
              label: "E-mail",
              placeholder: "Your email address",
              "success-message": "Got it, we won't spam you!"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TextInput, {
              name: "password",
              type: "password",
              label: "Password",
              placeholder: "Your password",
              "success-message": "Nice and secure!"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              label: unref(disabled) ? "กรุณารอสักครู่..." : "Sign in",
              class: "w-full p-3 text-xl submit-btn",
              ref_key: "submitBtn",
              ref: submitBtn,
              type: "submit",
              disabled: unref(disabled)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(TextInput, {
                name: "email",
                type: "email",
                label: "E-mail",
                placeholder: "Your email address",
                "success-message": "Got it, we won't spam you!"
              }),
              createVNode(TextInput, {
                name: "password",
                type: "password",
                label: "Password",
                placeholder: "Your password",
                "success-message": "Nice and secure!"
              }),
              createVNode(_component_Button, {
                label: unref(disabled) ? "กรุณารอสักครู่..." : "Sign in",
                class: "w-full p-3 text-xl submit-btn",
                ref_key: "submitBtn",
                ref: submitBtn,
                type: "submit",
                disabled: unref(disabled)
              }, null, 8, ["label", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const login_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-e0d0e469.js.map
