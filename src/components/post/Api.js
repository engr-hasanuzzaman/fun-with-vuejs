export const fetchPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (resp.ok) {
        return await resp.json();
    } else {
        return [];
    }
}

export const createPost = async (post) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(post)
    });

    if (resp.ok) {
        return await resp.json()
    } else {
        return {};
    }
}