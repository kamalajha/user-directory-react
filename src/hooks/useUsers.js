import { useEffect,useState } from "react";
import {fetchUsers} from "../utils/api"

export const useUsers=()=>{
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const loadUser=async()=>{
            try{
                const data=await fetchUsers();
                setUsers(data);
            }catch(err){
                setError("Unable to load users");
            }finally{
                setLoading(false);
            }
        };
        loadUser();
    },[]);
    return{users,loading,error};
};