const createTopic = document.getElementById('createTopic');
const newTopicBtn = document.getElementById('newTopic-btn');

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

if(newTopicBtn) {
newTopicBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.location.replace('/newTopic')
});
}

if(createTopic){
createTopic.addEventListener('click', newTopic);
}