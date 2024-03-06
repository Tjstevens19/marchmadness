import React, { useState, useEffect } from 'react';
import './App.css';

interface TeamProperties {
  // Define the School Name, Mascot Name, and Location (City, State) properties of the team using the json file C:\Users\tdogs\OneDrive\Desktop\Mission_9_Stevens\marchmadness\src\CollegeBasketballTeams.json
  name: string;
  mascot: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Welcome to March Madness</h1>;
}

class TeamCard extends React.Component<TeamProperties> {
  render() {
    const { name, mascot, city, state } = this.props;

    return (
      <div>
        <img alt={`${name} Logo`} />
        <h2>Team Name: {name}</h2>
        <h3>Mascot: {mascot}</h3>
        <p>
          City: {city} State: {state}
        </p>
      </div>
    );
  }
}

function App() {
  const [teamData, setTeamData] = useState<TeamProperties[]>([]);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('/path/to/CollegeBasketballTeams.json');
        const data = await response.json();
        setTeamData(data.teams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Welcome />
      <div>
        {teamData.map((team, index) => (
          <TeamCard key={index} {...team} />
        ))}
      </div>
    </div>
  );
}

export default App;
