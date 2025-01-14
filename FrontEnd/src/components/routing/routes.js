
const backendDomain = "http://localhost:3000"
console.log("This is doren",backendDomain)
const routingApi = {
    signup: {
        url: `${backendDomain}/user/signup`,
        method:"post"  
    },
    login:{
        url:`${backendDomain}/user/login`,
    }
}

export default routingApi