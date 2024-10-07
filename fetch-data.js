document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading" message
        dataContainer.innerHTML = '';

        // Create a list to display the users
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Display an error message in case of failure
        dataContainer.innerHTML = 'Failed to load user data.';
    }
});
