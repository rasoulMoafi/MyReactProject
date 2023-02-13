import React from "react";

const Dashboard = ({ user }) => {
  console.log({ user });
  //   const { name, email } = user;
  if (user) {
      return (
        <>
          <h1>داشبورد</h1>
          <h2>سلام {user.name}</h2>
        </>
      );
    
  } else {
    return;
  }
};

export default Dashboard;
