import React, {useState} from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  };
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) return;
    setMembers([...members, newMember]);
    setFormValues(initialFormValues)
  };

  return (
    <div className="Container">
      <header>
        <h1>Team Builder</h1>
      </header>
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />
      {
        members.map((member) => {
          return (
            <Card key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
