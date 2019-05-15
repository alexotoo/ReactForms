import React from "react";

const MembersList = ({ members, deleteMember }) => {
  const membersList = members.map(amember => {
    return (
      <div key={amember.id}>
        <div>Name: {amember.name}</div>
        <div>Age: {amember.age}</div>
        <div>Location: {amember.location}</div>
        <button
          onClick={() => {
            deleteMember(amember.id);
          }}
        >
          Delete Member
        </button>
      </div>
    );
  });
  return <div>{membersList}</div>;
};

export default MembersList;
