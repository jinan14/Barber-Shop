import React, { useState } from 'react';
import { useStore } from './store'; // Import the store
import Name from './Name';

function Reserve() {
    const [selectedService, setSelectedService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [showNameForm, setShowNameForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const reservations = useStore(state => state.reservations);
    const addReservation = useStore(state => state.addReservation);

    const isTimeBooked = (date, time, service) => {
        return reservations.some(res => 
            res.date === date && 
            res.time === time && 
            res.selectedService === service
        );
    };

    const isWithinBusinessHours = (date, time) => {
        const day = new Date(date).getDay();
        const [hour, minute] = time.split(':').map(Number);
        const openHours = (day >= 1 && day <= 5) ? [10, 0, 19, 0] : [8, 0, 17, 0];

        return (
            (hour > openHours[0] || (hour === openHours[0] && minute >= openHours[1])) &&
            (hour < openHours[2] || (hour === openHours[2] && minute <= openHours[3])))
       
    };

    const handleBookNow = () => {
        setErrorMessage('');

        if (!selectedService || !date || !time) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        if (!isWithinBusinessHours(date, time)) {
            setErrorMessage('Closed. Please choose a valid time.');
            return;
        }

        if (isTimeBooked(date, time, selectedService)) {
            setErrorMessage('This service is already booked for this time. Please select another time or service.');
            return;
        }

        setShowNameForm(true);
    };

    const handleSubmit = (name, lastName, phone) => {
        const newReservation = { name, lastName, phone, selectedService, date, time };
        addReservation(newReservation);
        setShowNameForm(false);
        resetForm();
    };

    const resetForm = () => {
        setSelectedService('');
        setDate('');
        setTime('');
    };

    return (
        <div className='flex flex-col gap-7 p-5 md:p-14 justify-center bg-[#68513A] relative'>
            <h1 className='font-bold text-[#F4E0BB] text-3xl md:text-5xl text-center mb-7'>Barber Reservation</h1>
            {errorMessage && <div className='text-red-500 text-center'>{errorMessage}</div>}
            <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-11'>
                <div className='w-full md:w-3/6 flex flex-col gap-3'>
                    <h1 className='text-[#F4E0BB] font-bold text-2xl'>Already Booked Times:</h1>
                    <ul className='text-[#F4E0BB] gap-3 flex flex-col justify-center'>
                        {reservations.map((res, index) => (
                            <li key={index} className='flex gap-3 p-3 bg-[#F4E0BB] text-[#68513A] rounded-xl font-bold'>
                                {res.date} at {res.time} - {res.selectedService} For {res.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <form className='flex flex-col gap-6 p-5 md:p-11 w-full md:w-3/6 bg-[#F4E0BB] text-[#68513A] rounded-xl'>
                    <label className='flex flex-col text-[#68513A] font-bold'>
                        Services:
                        <select 
                            name="barber" 
                            className='p-2' 
                            value={selectedService} 
                            onChange={(e) => setSelectedService(e.target.value)}
                        >
                            <option value="">Select a service</option>
                            <option value="Haircuts & Trims">Haircuts & Trims</option>
                            <option value="Hair Coloring">Hair Coloring</option>
                            <option value="Bridal Hair">Bridal Hair</option>
                            <option value="Hair Treatment">Hair Treatment</option>
                            <option value="Hair Extensions">Hair Extensions</option>
                            <option value="Skincare & Facial">Skincare & Facial</option>
                        </select>
                    </label>

                    <label className='flex flex-col text-[#68513A] font-bold'>
                        Date:
                        <input 
                            type="date" 
                            name="date" 
                            className='p-2'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>

                    <label className='flex flex-col text-[#68513A] font-bold'>
                        Time:
                        <input 
                            type="time" 
                            name="time" 
                            className='p-2'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </label>

                    <button 
                        type='button' 
                        className='self-center w-40 h-12 text-[#F4E0BB] bg-[#68513A] rounded-lg font-bold hover:text-[#68513A] hover:bg-[#F4E0BB] hover:border-solid border-2 border-[#68513A]'
                        onClick={handleBookNow}
                    >
                        Book Now
                    </button>
                </form>
            </div>

            {showNameForm && <Name onSubmit={handleSubmit} />}
        </div>
    );
}

export default Reserve;