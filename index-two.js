const subscribeForm = document.querySelector('#subscirbe-form')
const friendName = document.querySelector('.friend-name')
const friendEmail = document.querySelector('.friend-email')
const subscribeButton = document.querySelector('.subscribe')
const showName = document.querySelector('.show-name')
const showEmail = document.querySelector('.show-email')

subscribeForm.addEventListener('submit', function(event){
    event.preventDefault()
    if(friendName.value && friendEmail.value){
        fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body:JSON.stringify({
                title: friendName.value,
                body: friendEmail.value,  
            }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
          
        })
        .then(response => response.json())
        .then(data => {
            showName.textContent = `Thaks for sharing with: "${data.title}"`
            showEmail.textContent = `An invitation email will be sent to: "${data.body}"`
        })
        setTimeout(() => {
            showName.textContent = ''
            showEmail.textContent = ''
                
            }, 6000);
    }
    
    
    subscribeForm.reset()
})




