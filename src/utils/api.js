const BASE_URL='https://jsonplaceholder.typicode.com';

export const fetchUsers=async()=>{
    try{
        const response=await fetch(`${BASE_URL}/users`);
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }
        return await response.json();
    }catch(error){
        console.log("API Error:",error);
        throw error;
    }
};