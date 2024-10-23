export function getSession(){
    const token= JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
 
    return { token:token, id:cbid};
}
export async function getUser() {
    const browserData= getSession(); 
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.id}`,{
        method:"GET",
        headers:{
            "content-type":"application/json",
            Authorization: `Bearer ${browserData.token}`
        }
    }); 
    return await response.json();
}

export async function getUserOrders() {
    const browserData= getSession();  
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.id}`,{
        method:"GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }); 
    return await response.json();
}

export async function createOrder(order) {
    const browserData= getSession(); 
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`
        },
            body: JSON.stringify(order)
    });
    return await response.json();
    
}