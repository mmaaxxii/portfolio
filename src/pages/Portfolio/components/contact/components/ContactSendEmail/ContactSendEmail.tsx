import emailjs from '@emailjs/browser';
import { useState } from 'react';



export default async function ContactSendEmail (form : HTMLFormElement ) : Promise <boolean> {
    const [response, setResponse] = useState<boolean>(false);
    try { 
        emailjs.sendForm(import.meta.env.VITE_BASE_YOUR_SERVICE_ID , import.meta.env.VITE_BASE_YOUR_TEMPLATE_ID, form , import.meta.env.VITE_BASE_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setResponse(true);
        });
       
    } catch (error) {
        console.log(error);
        setResponse(false);
    }
    return response
} 
