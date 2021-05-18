import React from "react";

export default function Form(props){
    const { values, update, submit } = props;
    const onChange = evt => {
        const{name, value} = evt.target;
        update(name, value);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    return(
        <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
        <label>Name
            <input 
              type = 'text'
              name = 'name'
              onChange = {onChange}
              value = {values.name}
              placeholder = 'Name'
            />
        </label>

        <label>Email
          <input 
            type = 'email' 
            name = 'email'
            onChange = {onChange} 
            value = {values.email} 
            placeholder = 'Email'
          />
        </label>

        <label>Role
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
            <option value='Developer'>IOS Developer</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.username || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
    )
}