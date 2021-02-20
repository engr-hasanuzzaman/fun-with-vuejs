import {fetchPosts} from '../../components/post/Api';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {
    async fetchTodos ({commit}) {
        const posts = await fetchPosts();
        commit('setTodos', posts);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    updateTodo: (state, todo) => (state.todos = state.todos.map(o => o.id === todo.id ? todo : o))
};

export default {
    state,
    actions,
    mutations,
    getters,
};