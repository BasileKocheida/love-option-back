
const button = document.querySelector('button')
const email = "test5@test.com"
const pwd = "1234"


button.addEventListener('click', (e)=>{
    fetch('http://127.0.0.1:8000/authentication_token', {
        method:'POST',
        headers: {
            'Content-Type':	'application/json'
        },
        body: JSON.stringify({email, password: pwd})
    }).then((resposne)=>{
        return resposne.json()
    }).then((data)=>{
        console.log(data);
    })
})