import React,{useState} from 'react';
import '../Register/RegisterForm.css';
import {loginUser, setToken} from "../../api/auth";
const LoginFrom=()=>{
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });
    const [message,setMessage]=useState('');
    const [showPassword,setShowPassword]=useState(false);

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value});
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
       if(formData.email===''||formData.password===''){
            setMessage('Please fill all the fields!');
            return;
        }
        const response=await loginUser(formData);
        const data =JSON.stringify(response.data);
        setToken(data.token);
        setMessage(data.message||"Login successful");
    }
    return(
        <div className="register-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="password-wrapper">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className="toggle-eye"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙉" : "🙈"}
                    </span>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p className="register-message">{message}</p>}
        </div>
    );
}
export default LoginFrom;