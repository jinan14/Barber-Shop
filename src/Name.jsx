import React, { useState } from 'react';

function Name({ onSubmit, setShowForm }) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = () => {
        setErrorMessage('');

        if (!name || !lastName || !phone) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        // Validate phone number (simple check: must be numeric and at least 8 digits)
        if (!/^\d{8,}$/.test(phone)) {
            setErrorMessage('Please enter a valid phone number');
            return;
        }

        onSubmit(name, lastName, phone);
        setShowForm(false); // Hide the form after submission
    };

    return (
        <div className='absolute w-[90%] md:w-[70%] top-40 left-1/2 transform -translate-x-1/2' >
            {errorMessage && <div className='text-red-500 text-center mb-4' >{errorMessage}</div>}
            <form className='flex flex-col gap-6 p-5 md:p-11 bg-[#F4E0BB] text-[#68513a] rounded-xl' style={{ boxShadow: '8px 50px 50px 100px #68513A' }}>
                <label className='flex flex-col text-[#68513A] font-bold'>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className='p-2 border border-gray-300 rounded'
                    />
                </label>

                <label className='flex flex-col text-[#68513A] font-bold'>
                    Last Name:
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        className='p-2 border border-gray-300 rounded'
                    />
                </label>
                
                <label className='flex flex-col text-[#68513A] font-bold'>
                    Phone Number:
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className='p-2 border border-gray-300 rounded'
                    />
                </label>

                <button 
                    type='button' 
                    className='self-center w-full md:w-40 h-12 text-[#F4E0BB] bg-[#68513A] rounded-lg font-bold hover:text-[#68513A] hover:bg-[#F4E0BB] hover:border-solid border-2 border-[#68513A]'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Name;
