const createTopic = document.getElementById('createTopic');
const newTopicBtn = document.getElementById('newTopic-btn');
const newCommentBtn = document.getElementById('comment-btn');
const createComment = document.getElementById('createComment');
const topicLinks = document.querySelectorAll('.topic-link');

const newTopic = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (title && content){
        const response = await fetch('api/topics', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const newComment = async (event) => {

    const content = document.getElementById('comment-content').value.trim();
    const topic_id = event.target.dataset.topic

    if (topic_id && content) {
        const response = await fetch('../api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, topic_id }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');  //will need to change this path
        } else {
            alert(response.statusText);
        }
    }
};

if(topicLinks.length) {
    topicLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(e)
            document.location.replace(`/topic/${e.target.id}`)
        })
    })
}

if(newTopicBtn) {
newTopicBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.location.replace('/newTopic')
});
}

if(createTopic){
createTopic.addEventListener('click', newTopic);
}

if(newCommentBtn) {
newCommentBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.location.replace('/comment');
});
}

if(createComment) {
    createComment.addEventListener('click', newComment);
}