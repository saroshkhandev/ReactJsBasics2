import styles from "./UserItem.module.css";

const UserItem = (props) => {
    return (
        <li className={`${styles["user-item"]}`}>
            {props.username}          - {props.age}
        </li>
    );
};

export default UserItem;