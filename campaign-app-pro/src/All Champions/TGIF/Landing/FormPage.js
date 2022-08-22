
import React, {useState} from 'react';
import { Axios } from 'axios';
import { Link } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');



    const submit = () =>{
        Axios.post("http://localhost:5000/tgifsFormdata/addformdata",{
            firstName: firstName,
            lastName: lastName,
            email: email,
            
        });
        console.log(firstName+lastName+email);
    };

    return <>
    <form>
        <table className='leadform' >
            <tbody>
                
                
                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>First Name</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td >
                        <input type="text" name="firstName" className='form-control' id='firstName' onChange={(event) =>{setfirstName(event.target.value);}} required/> 
                    </td>
                </tr>
                
                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Last Name</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td>
                        <input type="text" className='form-control' name="lastName" id='lastName' onChange={(event) =>{setlastName(event.target.value);}} required/> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Email</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td>
                        <input type="text" name="email" className='form-control' id='email' onChange={(event) =>{setEmail(event.target.value);}} required/> 
                    </td>
                </tr>

            </tbody>
            

        </table>
        
        <div className='opt-in-container'>
        <input type="checkbox" className='check-box' required/>
            <p className='opt-in-text'>
            
                    I accept the Terms and Conditions
                    I accept the Terms and Conditions
                    I accept the Terms and Conditions
                    
            </p>
        </div>
        <div className='btn-container'>
            <Link to="/thankyou" onClick={submit}> 
               
                <input type="submit" value="Submit"  />
            </Link>
        </div>
    </form>
  </>;
}

export default FormPage;


<>
{/*   <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Phone</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Company</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Address</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>City</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Country</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <select className='form-control select-option'>
                            <option selected disabled value="">Choose one</option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="mango">Mango</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>State</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>ZIP Code</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Company Size</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Revenue</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Job Title</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Industry</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr>

                <tr>
                    <th  width={"50%"}>
                        <span  className='label-text' title='Required Field'>Job Function</span>
                        <span className='mandatory'>*</span>
                    </th>
                    <td width={"50%"}>
                        <input type="text" className='form-control' id='validationDefault03' required /> 
                    </td>
                </tr> */}

</>