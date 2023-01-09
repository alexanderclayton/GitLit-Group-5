const createTopic = document.getElementById('createTopic');
const newTopicBtn = document.getElementById('newTopic-btn');
const newCommentBtn = document.getElementById('comment-btn');
const createComment = document.getElementById('createComment');

const newTopic = async (event) => {
    event.preventDefault();

    const user = "current user" //need to use the current user for this
    console.log(user);
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    console.log(title, user, content)

    if (title && user && content){
        const response = await fetch('api/topics', {
            method: 'POST',
            body: JSON.stringify({ title, user, content }),
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
    event.preventDefault();

    const user = "test1"  //need to use the current user for this
    const content = document.getElementById('comment-content').value.trim();
    const topic_id = parseInt(1)  //need to use the current topic for this

    console.log(user, content, topic_id)

    if (user && content) {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ user, content, topic_id }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/');  //will need to change this path
        } else {
            alert(response.statusText);
        }
    }
};

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