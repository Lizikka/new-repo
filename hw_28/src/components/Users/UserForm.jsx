import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function UserForm({ createUser }) {
  const { userId } = useParams();
  const {
    user,
    changeInput,
    createUser: create,
    changeUser: change,
  } = useUser(userId);
  const navigation = useNavigate()
  

  const changeFormInput = e => changeInput(e.target.name, e.target.value);

  const submitForm = async e => {
    e.preventDefault();
    createUser ?  await create() :  await change();
    navigation("/")
    
  };

  const cancelBtn = () => navigation("/")

  

  return (
    <form onSubmit={submitForm}>
      <label>
        Name <input type="text" name="name" defaultValue={user.name} onBlur={changeFormInput} />
      </label>

      <label>
        E-mail <input type="email" name="email" defaultValue={user.email} onBlur={changeFormInput} />
      </label>

      <label>
        Adress <input type="text" name="address" defaultValue={user.address} onBlur={changeFormInput} />
      </label>

      <label>
        Phone <input type="phone" name="phone" defaultValue={user.phone} onBlur={changeFormInput} />
      </label>

      <div>
        <button>{createUser ? "Create User" : "Save changes"}</button>
        <button type="button" onClick={cancelBtn}>Cancel</button>
      </div>
    </form>
  );
}
