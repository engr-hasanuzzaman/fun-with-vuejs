export const fetchPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (resp.ok) {
        return await resp.json();
    } else {
        return [];
    }
}
