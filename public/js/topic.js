const createTopic = document.getElementById('createTopic');

const newTopic = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const user = "newUser";
    const content = document.getElementById('content').value.trim();

    if (title && user && content){
        const response = await fetch('api/topics', {
            method: 'POST',
            body: JSON.stringify({ title, user, content }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('newTopic-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.location.replace('/newTopic')
});

if(createTopic){
createTopic.addEventListener('click', newTopic);
}