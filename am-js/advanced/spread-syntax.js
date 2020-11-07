const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

const team = {
  name: 'Liberty',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

// The spread operater allows us to spread out an array into individual arguments
printTeam(team.name, team.coach, ...team.players);

const cities = ['Barcelona', 'Cape Town', 'Bordeaux']
const citiesCopy = ['Santiago', ...cities]
console.log(citiesCopy)