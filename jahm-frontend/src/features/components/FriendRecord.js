import React, { useEffect } from 'react';

const FriendRecord = (props) => {
// TODO: Delete button

    return (
        <div className="friendRecord" id={`FriendNum${props.num}`}>
            <h2>Friend #{props.friendID + 1}</h2>
            <h3>Username: {props.friend.username}</h3>
        </div>

    );
}

export default FriendRecord;
