import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const formParams = {
            from_name: 'Vishwa' ,
            to_email: email,
            to_name: name,
            message: message,
        };

        emailjs.send('service_3dx5sfc', 'template_hf0q32g', formParams, 'rghKVXzY4OY92yien')
        .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!', result);
                setName('');
                setEmail('');
                setMessage('');
            }).catch( (error) => {
                console.log(error.message);
                alert('Failed to send email.');
            });
    };

    return (
        <>
            <h3>Contact Us</h3>
            <form onSubmit={sendEmail} className='emailForm'>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Message:</label>
                <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="Send Email" />
            </form>
        </>
    );
};

export default ContactUs;
