import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useState } from 'react';
import { Eraser } from 'react-bootstrap-icons';



export default async function ContactSendEmail (form : HTMLFormElement ) { 
    return emailjs.sendForm(import.meta.env.VITE_BASE_YOUR_SERVICE_ID , import.meta.env.VITE_BASE_YOUR_TEMPLATE_ID, form , import.meta.env.VITE_BASE_YOUR_PUBLIC_KEY);
}