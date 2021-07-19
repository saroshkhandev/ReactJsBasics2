import styles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
    <ul className={`${styles["user-list"]}`}>
        {props.users.map(user => (
            <UserItem key={user.id} username={user.username} age={user.age} />
        ))}
    </ul>;
};

export default UserList;