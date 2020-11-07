// const myAge = 27
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!';


// console.log(message)

const myAge = 20

const showPage = () => console.log('Showing the page');
const showErrorPage = () => console.log('Showing the error page');

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Tyler', 'Porter']

const message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team';
console.log(message);

