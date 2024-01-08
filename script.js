document.addEventListener('DOMContentLoaded', function() {
    const addUserForm = document.getElementById('addUserForm');
    addUserForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      addUser(name, email);
    });
  
    displayUsers();
  });
  
  function displayUsers() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
  
        users.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `<strong>${user.name}</strong> - ${user.email}
              <button onclick="editUser(${user.id})">Edit</button>
              <button onclick="deleteUser(${user.id})">Delete</button>`;
          userList.appendChild(userDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }
  
  function addUser(name, email) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
        return response.json();
      })
      .then(() => {
        displayUsers();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  }
  
  function editUser(userId) {
    const newName = prompt('Enter new name:');
    if (newName) {
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      })
        .then(response => response.json())
        .then(() => {
          displayUsers();
        })
        .catch(error => {
          console.error('Error updating user:', error);
        });
    }
  }
  
  function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          displayUsers();
        })
        .catch(error => {
          console.error('Error deleting user:', error);
        });
    }
  }
  