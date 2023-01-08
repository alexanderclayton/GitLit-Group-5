const topicCard = document.getElementsByClassName('topic-placeholder-class-two')

if(topicCard) {
    for (i=0; i < topicCard.length; i++) {
        topicCard[i].addEventListener('click', function(e) {
            e.preventDefault()
            document.location.replace('/thankYou') //having issues getting the correct path here
        })
    }
}