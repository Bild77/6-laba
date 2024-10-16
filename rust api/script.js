const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const postContainer = document.getElementById('post-container');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

const initialPosts = [
    { title: "Технологии будущего", body: "В этом посте мы обсудим перспективные технологии, которые изменят нашу жизнь в ближайшие десятилетия, включая искусственный интеллект, квантовые вычисления и виртуальную реальность." },
    { title: "Здоровый образ жизни", body: "Понимание основ здорового образа жизни: важность сбалансированного питания, регулярной физической активности и психического здоровья для общего благополучия." },
    { title: "Экология и устойчивое развитие", body: "Обсуждение проблем экологии и путей их решения, включая использование возобновляемых источников энергии и сохранение биоразнообразия." },
    { title: "Психология успеха", body: "Исследование психологических аспектов успеха и методов, которые помогут вам добиться своих целей и справиться с трудностями." },
    { title: "История искусств", body: "Знакомство с основными направлениями в искусстве от эпохи Ренессанса до современности, а также влияние искусства на культуру." },
    { title: "Будущее образования", body: "Как новые технологии и методы обучения меняют традиционное образование, создавая возможности для гибкого и доступного обучения." },
];

function displayPosts(posts) {
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postDiv.addEventListener('click', () => openPost(post));
        postContainer.appendChild(postDiv);
    });
}

function openPost(post) {
    modalTitle.innerText = post.title;
    modalBody.innerText = post.body;
    modal.classList.add("show");
}

closeButton.addEventListener('click', () => {
    modal.classList.remove("show");
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPost = {
        title: titleInput.value,
        body: bodyInput.value
    };
    initialPosts.push(newPost);
    displayPosts(initialPosts);
    titleInput.value = '';
    bodyInput.value = '';
});

displayPosts(initialPosts);