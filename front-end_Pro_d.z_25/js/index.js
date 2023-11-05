let input = document.getElementById('postId');
let getPostButton = document.getElementById('getPost');
let getCommentsButton = document.getElementById('getComments');
let postContainer = document.getElementById('postContainer');

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

function getPost(id) {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

function getComments(id) {
    return fetchData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
}

getPostButton.addEventListener('click', async function() {
    let postId = Math.round(input.value);
    if (postId < 1 || postId > 100) {
        alert('Введіть, будь ласка, ідентифікатор від 1 до 100');
        return;
    }

    try {
        let post = await getPost(postId);
        postContainer.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        getCommentsButton.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
});

getCommentsButton.addEventListener('click', async function() {
    let postId = Math.round(input.value);
    postContainer.innerHTML = '';

    try {
        let comments = await getComments(postId);
        comments.forEach(comment => {
            let commentElement = document.createElement('div');
            commentElement.innerHTML = `<h3>${comment.name}</h3><p>${comment.body}</p>`;
            postContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error(error);
    }
});