import { defineCustomElement } from 'vue'
import TodoElement from './components/TodoElement.ce.vue'

const TodoCompoent = defineCustomElement(TodoElement)
customElements.define('todo-component', TodoCompoent)