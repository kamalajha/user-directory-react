import './UserCard.css'
import { useState } from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <h3 className="name">{user.name}</h3>
      <p className="email"><strong>Email:</strong>{user.email}</p>
      <p className="company"><strong>Company:</strong>{user.company.name}</p>

      {/* Slide Details */}
      <div className={`details-wrapper ${showDetails ? "open" : ""}`}>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p>
          <strong>Address:</strong> 
          {user.address.street}, {user.address.city}
        </p>
      </div>

      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
};

export default UserCard;
