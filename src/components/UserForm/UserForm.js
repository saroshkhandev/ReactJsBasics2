import styles from "./UserForm.module.css";
import Button from "../UI/Button/Button";


const UserForm = () => {
  return (
    <form>
      <div className={`${styles['user-form']}`}>
        <label>Username</label>
        <input type="text" />

        <label>Age (Years)</label>
        <input type="text" />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
