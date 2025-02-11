'use client'
import { useState } from 'react'
import "@/styles/form.css";

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({ email: "", phone: "" })

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "name") setName(value);
        if (name === "email") {
            setEmail(value);
            setErrors((prev) => ({ ...prev, email: validateEmail(value) ? "" : "Invalid email address" }));
        }
        if (name === "phone") {
            setPhone(value);
            setErrors((prev) => ({ ...prev, phone: validatePhone(value) ? "" : "Phone number must be 10 digits" }));
        }
        if (name === "message") setMessage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const isEmailValid = validateEmail(email);
        const isPhoneValid = validatePhone(phone);

        if (!isEmailValid || !isPhoneValid) {
            setErrors({
                email: isEmailValid ? "" : "Invalid email address",
                phone: isPhoneValid ? "" : "Phone number must be 10 digits"
            });
            return;
        }

        console.log({ name, email, phone, message });
        // Proceed with form submission logic
    };

    return (
        <form onSubmit={handleSubmit} className='px-6 py-4 text-white flex flex-col gap-2'>
            <h1 className='text-[42px]'>Contact Us</h1>

            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
                    className='rounded-md bg-gray-100 p-2' 
                    placeholder='Enter your name'
                />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    className='rounded-md bg-gray-100 p-2' 
                    placeholder='yourmail@gmail.com'
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}*</span>}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="phone">Phone</label>
                <input 
                    type="number" 
                    name="phone" 
                    value={phone} 
                    onChange={handleChange} 
                    className='rounded-md bg-gray-100 p-2'
                    placeholder='Enter your Phone number' 
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}*</span>}
            </div>

            <div className='flex flex-col gap-1 mt-2 w-full'>
                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" 
                    id="msg" 
                    rows={6} 
                    value={message} 
                    onChange={handleChange} 
                    className='rounded-md bg-gray-100 p-2'
                    placeholder='Enter your message'
                />
            </div>

            <button 
                type="submit" 
                className='bg-primary text-white font-semibold text-2xl rounded-full w-full p-2'
            >
                Submit
            </button>
        </form>
    )
}
