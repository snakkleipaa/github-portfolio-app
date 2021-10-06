import React, {useState} from 'react';

import './App.css'
import useField from './hooks/useField';
import useUser from './hooks/useUser';
import User from './components/User';
import Repository from './components/Repository';

const App = () => {

  const usernameInput = useField('text');
  const [username, setUsername] = useState('');
  const user = useUser(username);

  const fetch = (e) => {
    e.preventDefault();  
    setUsername(usernameInput.value)
  }

  if (!user) {
    return (
      <div className="app">
        <form onSubmit={fetch}>
          <input {...usernameInput} />
          <button>Search</button>
        </form>
      </div>
    )
  }

  return (
    <div className="app">
      <form onSubmit={fetch}>
        <input {...usernameInput} />
        <button>Search</button>
      </form>

      <User user={user.data[0].owner} />

      <div className="container">
        {user.data.map(repository =>
            <div className="column">
              <Repository repository={repository} key={repository.full_name} />
            </div>
          )
        }
      </div>
    </div>
  )

}

export default App;
