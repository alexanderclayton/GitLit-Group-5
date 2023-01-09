const topicCard = document.getElementsByClassName('topic-card');

if(topicCard) {
    for (i=0; i < topicCard.length; i++) {
        console.log( topicCard[i])
        const h5 = topicCard[i].children[1].childNodes[1]
        var topicId = h5.getAttribute('id')
        topicCard[i].addEventListener('click', function(e) {
            e.preventDefault()
            document.location.replace(`/topic/${topicId}`) //having issues getting the correct path here
        })
    }
}