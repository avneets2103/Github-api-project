import {useState} from 'react'
function useGithubDetails(username){
  const[data, setData] = useState(0);
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then((data) => {setData(data);})
    .catch(error => console.error('Error:', error));
  return data;
}

export default useGithubDetails