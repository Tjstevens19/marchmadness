import React, { useState, useEffect } from 'react';
import './App.css';

interface TeamProperties {
  school: string;
  name: string;
  mascot: string;
  city: string;
  state: string;
}

const teamData: TeamProperties[] =
  require('./CollegeBasketballTeams.json').teams;

function Welcome() {
  return (
    <div>
      <h1>Welcome to March Madness</h1>
      <p>Here are the teams participating in the tournament:</p>
    </div>
  );
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
