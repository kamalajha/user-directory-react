import {useState,useMemo} from 'react';
import {useUsers} from "../hooks/useUsers";
import UserCard from '../components/UserCard/UserCard';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/Loader/Loader';

const UsersPage=()=>{
    const{users,loading,error}=useUsers();
    const[searchTerm, setSearchTerm]=useState("");
    
    //view details handler
    const handleViewDetails=(user)=>{
        console.log("User Clicked:",user);
    };
    //filters users by name
    const filteredUsers=useMemo(()=>{
        return users.filter((user)=>user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    },[users,searchTerm]);

    if(loading) return <Loader/>;
    if(error) return <p style={{color:'red'}}>{error}</p>;
    return(
        
     <div style={styles.container}>
      <h1 style={styles.title}>User Directory</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div style={styles.grid}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) =>( <UserCard key={user.id} user={user} onViewDetails={handleViewDetails} 
          />))
        ) : (
          <p style={styles.title}>No users found...........</p>
        )}
      </div>
    </div>
  );
}
export default UsersPage;
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color:"#2563eb"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
};