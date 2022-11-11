export const setAuthToken = (user) => {


    const currentUser = {
        email: user?.email
    }


    fetch('https://genius-car-jwt-token-vercel-deploy-server.vercel.app/jwt', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })

        .then(res => res.json())
        .then(data => {
            console.log("Token received from server side in social login token page", data.token)

            //local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('genius-token', data.token);
        })
}