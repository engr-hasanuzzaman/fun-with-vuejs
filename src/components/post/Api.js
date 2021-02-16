export const fetchPosts = async () => {
    const resp = await fetch({url: 'https://jsonplaceholder.typicode.com/posts'});
    return await resp.json();
}
