const FriendRecord = (props) => {
// TODO: Delete button

async function deleteFriend() {
  const API_URL = "http://p2jahquiz-env.eba-vbcumprb.us-east-1.elasticbeanstalk.com";

    console.log("delete friend");
    let oldFriendPair = {
      "friend1": props.currentUserID,
      "friend2": props.friend.id
    }

    console.log(oldFriendPair);

    // Send the friend pair
    let data = await fetch(`${API_URL}/friends/delete`, 
    {
        method:'DELETE',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(oldFriendPair)
    }).then(response => console.log(response.json()));
  }


    return (
        <div className="friendRecord" id={`FriendNum${props.num}`}>
            <h2>Friend #{props.friendID + 1}</h2>
            <h3>Username: {props.friend.username}</h3>
            <button value="submit" id="deleteButton" onClick={deleteFriend}>Delete</button>
        </div>

    );
}

export default FriendRecord;
