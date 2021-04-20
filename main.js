// Connect to Moralis server
Moralis.initialize('XllQ1pjXp7FMiM37aSKUqn99JYrOZFuW0UiNeuYS'); // Application id from moralis.io
Moralis.serverURL = 'https://y3ul1lolsm7c.moralis.io:2053/server'; //Server url from moralis.io

// Click handlers for buttons
async function login() {
  try {
    user = await Moralis.User.current();
    if (!user) {
      user = await Moralis.Web3.authenticate();
    }
    console.log(user);
    // hide login button
    document.getElementById('login_button').style.display = 'none';
    // display game div
    document.getElementById('game').style.display = 'block';
  } catch (error) {
    console.log(error);
  }
}

async function flip(side) {
  let amount = document.getElementById('amount').value;
  try {
    alert(`side: ${side}, value: ${amount}`);
  } catch (error) {}
}

// Attach Clickhandlers
document.getElementById('login_button').onclick = login;
document.getElementById('heads_button').onclick = () => {
  flip('heads');
};
document.getElementById('tails_button').onclick = () => {
  flip('tails');
};
