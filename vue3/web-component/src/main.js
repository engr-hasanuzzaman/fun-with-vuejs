import { defineCustomElement } from 'vue';
import App from './App.ce.vue';

const TodoCompoent = defineCustomElement(App);
customElements.define('todo-component', TodoCompoent);