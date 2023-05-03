import emailjs from '@emailjs/browser';



export default async function ContactSendEmail (form : HTMLFormElement ) : Promise <Boolean> {

    try { 
        emailjs.sendForm(import.meta.env.VITE_BASE_YOUR_SERVICE_ID , import.meta.env.VITE_BASE_YOUR_TEMPLATE_ID, form , import.meta.env.VITE_BASE_YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        });
       return true 
    } catch (error) {
        console.log(error);
        return false
    }
} 
