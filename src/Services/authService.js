export async function login(authDetails){
    const requestOptions ={
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
       }
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`,requestOptions);
      const data= await response.json();    
      if(data.accessToken){
        setSession(data);
        
      }
      return data;
}

export async function logout(){
    sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        sessionStorage.removeItem("username"); 
      return "";
}

export async function register(authDetails){
    const requestOptions ={
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetails)
       }
      const response = await fetch(`${process.env.REACT_APP_HOST}/register`,requestOptions);
      
      const data= await response.json();
      if(data.accessToken){
        setSession(data);
      }
      return data;
}

export function setSession(data){
    sessionStorage.setItem("token",JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
    sessionStorage.setItem("username",data.user.name);
}