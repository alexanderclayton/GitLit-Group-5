const topicCard = document.getElementsByClassName('topic-placeholder-class-two');

if(topicCard) {
    for (i=0; i < topicCard.length; i++) {
        const topicId = parseInt([i]);
        console.log(typeof topicId)
        topicCard[i].setAttribute('id', topicId + 1)
        topicCard[i].addEventListener('click', function(e) {
            e.preventDefault()
            document.location.replace(`/topic/${topicId + 1}`) //having issues getting the correct path here
        })
    }
}