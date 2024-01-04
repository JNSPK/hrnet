import '../styles/createEmployee.css';

const CreateEmployee = () => {
  return (
    <section className='createEmployee'>
      <div className='createEmployee-container'>
        <h1 className='createEmployee-title'>Create Employee</h1>
        <div className='createEmployee-form-container'>
          <form>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First name'
            />
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last name'
            />
            <input
              type='text'
              id='dateOfBirth'
              name='dateOfBirth'
              placeholder='Date of Birth'
            />
            <input
              type='text'
              id='startDate'
              name='startDate'
              placeholder='Start Date'
            />
            <fieldset className='address'>
              <legend>Adress</legend>
              <input
                type='text'
                id='street'
                name='street'
                placeholder='Street'
              />
              <input type='text' id='city' name='city' placeholder='City' />
              <input type='text' id='state' name='state' placeholder='State' />
              <input type='text' id='zip' name='zip' placeholder='Zip Code' />
            </fieldset>
            <input
              type='text'
              id='department'
              name='department'
              placeholder='Department'
            />
            <button>Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateEmployee;
