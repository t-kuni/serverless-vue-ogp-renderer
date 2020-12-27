import Vue from 'vue';
import Renderer from './renderer';

const body = Vue.observable({ body: {} });
Object.defineProperty(Vue.prototype, '$body', {
    get() { return body.body; },
    set(value) { body.body = value; }
});

Vue.component('renderer', Renderer);

window.vue = new Vue({
    el: '#app',
    template: "<renderer></renderer>",
});

