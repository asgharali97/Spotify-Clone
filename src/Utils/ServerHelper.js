
export const UnPostRequest = async(route,body)=>{
  const response = await fetch("http://localhost:4000"+route,{
    method :"POST",
    headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(body)
  });
  const formatResponse = await response.json()
  return formatResponse;

}
export const AutenticatedPostRequest = async(route,body)=>{
  const token= getToken();
  const response = await fetch("http://localhost:4000"+route,{
    method :"POST",
    headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  },
  body: JSON.stringify(body)
  });
  const formatResponse = await response.json()
  return formatResponse;

}
export const AuthenticatedGetRequest = async(route)=>{
  const token= getToken();
  const response = await fetch("http://localhost:4000"+route,{
    method :"GET",
    headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  },
  });
  const formatResponse = await response.json()
  return formatResponse;

}
const getToken =()=>{
  const accessToken =document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1")
  return accessToken
  
}