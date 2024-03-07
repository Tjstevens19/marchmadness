import React, { useState, useEffect } from 'react';
import './App.css';

interface TeamProperties {
  // Define the School Name, Mascot Name, and Location (City, State) properties of the team using the json file
  // C:\Users\tdogs\OneDrive\Desktop\Mission_9_Stevens\marchmadness\src\CollegeBasketballTeams.json
  school: string;
  name: string;
  mascot: string;
  city: string;
  state: string;
}

// const teamData: TeamProperties[] = require('./CollegeBasketballTeams.json');
const teamData: TeamProperties[] =
  require('./CollegeBasketballTeams.json').teams;

function Welcome() {
  return <h1>Welcome to March Madness</h1>;
}

class TeamCard extends React.Component<TeamProperties> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>School Name: {school}</h2>
        <h3>Mascot: {name}</h3>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

// function TeamList() {
//   return (
//     <div>
//       {teamData.map((teamNum) => (
//         <Team {...teamNum} />
//       ))}
//     </div>
//   );
// }

function TeamList() {
  return (
    <div>
      {teamData.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
