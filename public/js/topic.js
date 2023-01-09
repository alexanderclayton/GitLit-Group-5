const newTopic = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const user = "newUser";
    const content = document.getElementById('content').value.trim();

    if (title && user && content){
        const response = await fetch('api/comments', {
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

document.getElementById('newComment-btn').addEventListener('click', newTopic);