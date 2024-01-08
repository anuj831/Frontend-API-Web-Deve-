const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = 3000;

let users = [
  { id: 1, name: 'Rohit', email: 'rohit@example.com' },
  { id: 2, name: 'Pandey', email: 'pandey@example.com' },
  { id: 3, name: 'Anuj', email: 'anuj@example.com' },
];

app.use(bodyParser.json());
app.use(cors()); 

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;
  let found = false;

  users = users.map(user => {
    if (user.id === userId) {
      found = true;
      return { ...user, ...updateUser, id: userId };
    }
    return user;
  });

  if (!found) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ message: 'User updated successfully' });
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const initialLength = users.length;

  users = users.filter(user => user.id !== userId);

  if (users.length === initialLength) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ message: 'User deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Mock API Server running on http://localhost:${PORT}`);
});
