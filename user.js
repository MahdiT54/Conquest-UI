const postListEl = document.querySelector('.post-list');
const id = localStorage.getItem("id");

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id);
}

async function renderPosts(userId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`);
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map((post) => postHTML(post)).join(''); // every .post child of .post-list in user.html is mapped to be replaced with postHTML(post)'s dynamic return
}

function postHTML(post) {
    return `
    <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
        `
}

renderPosts(id)