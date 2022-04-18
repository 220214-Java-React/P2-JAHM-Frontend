import { useEffect, useState } from "react";
import FriendRecord from "./components/FriendRecord";

export default function Profile(props) {
  const [username, setUsername] = useState('');

  var currentUser = "Sonic";
  var currentUserID = 2;
  var friends = 0;

  // This is where our friends are stored
  const [friendList, setFriendList] = useState([]);

  // Immediately get all our friends
  useEffect(() => getAllfriends(), []);

  function getAllfriends() {
    fetch(`http://localhost:8080/friends/${currentUserID}`)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => seedfriends(data));
  }

  function seedfriends(data) {
    setFriendList(friendList => data);
  }

/**
 * Make sure the username entered belongs to an existing user
 */
  async function checkFriendExists() {
    let data = await fetch(`http://localhost:8080/users/${username}`)
      .then((response) => response.json())
      .catch((error) => console.log(error))

    if (data) {
      console.log("The ID of the username submitted is: " + data.id);
      addFriend(data);
    } else {
      alert("User not found!");
      console.log("User not found!");
    }
  }

  /**
   * Add the entered friend to the database
   * @param {*} data 
   */
  async function addFriend(newFriend) {
    let newFriendPair = {
      "friend1": currentUserID,
      "friend2": newFriend.id
    }

    console.log(newFriendPair);

    // Send the friend pair
    let data = await fetch(`http://localhost:8080/friends/add`, 
    {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(newFriendPair)
    }).then(response => console.log(response.json()));
  }


  const handleChange = (e) => {
    setUsername(e.target.value);
  }


  /**
   * Populate the friends list! If the currentUser is the friend at user1, populate data of friend at user2. Otherwise, use user1.
   * CurrentUser is bound to be in user1 or user2 so we do this to prevent including them in their own list. 
   */
  return (
    <div className="profile-container">
      <h2>Hello, {currentUser}</h2>

      <label>Add new friend: </label>
      <input type="text" value={username} required onChange={handleChange} />
      <button value="submit" id="addFriendButton" onClick={checkFriendExists}>Add Friend</button>

      {friendList.length > 0 ?
        <div className="all-friends">
          {friendList.map((friend) => (
            friend.user1.username == currentUser ? <FriendRecord key={friends++} friendID={friends++} friend={friend.user2} currentUserID={currentUserID}/>
              : friend.user2.username == currentUser ? null : <FriendRecord key={friends++} friendID={friends++} friend={friend.user1} currentUserID={currentUserID}/>
          ))}
        </div>
        : <h1>You have no friends!</h1>}
    </div>

  );
}
