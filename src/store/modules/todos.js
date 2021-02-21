import {fetchPosts, createPost} from '../../components/post/Api';

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
    },
    async createTodo ({commit}, todo) {
        const post = await createPost(todo);
        // eslint-disable-next-line no-debugger
        debugger;
        commit('addPost', post);
    },
    async deletePost({commit}, id) {
        commit('postDelete', id);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    updateTodo: (state, todo) => (state.todos = state.todos.map(o => o.id === todo.id ? todo : o)),
    addPost: (state, todo) => (state.todos.unshift(todo)),
    postDelete: (state, id) => (state.todos = state.todos.filter(o => o.id !== id)),
};

export default {
    state,
    actions,
    mutations,
    getters,
};