import React from "react";

const User = ({ user }) => {

    if (!user) {
        return;
    }

    return (
        <div className="user">
            <h3>
                <img src={user.avatar_url} alt="User avatar" className="user__avatar" />
            </h3>
            <h2 className="user__name">
                {user.login}
            </h2>
        </div>
    );
}

export default User;