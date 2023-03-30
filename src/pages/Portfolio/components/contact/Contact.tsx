
import { ContactSection } from './styled-components/Contact.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faInbox } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import contactImg from './assets/img.jpg'
import 'animate.css';


 function Contact() {

  

  useEffect( () => {
    const inputs = document.querySelectorAll('.contact-input');
  inputs.forEach( (input) => {
    input.addEventListener("focus", () => {  
      input.parentElement?.classList.add("focus");          
      input.parentElement?.classList.add("not-empty");          
      }); 
    input.addEventListener('blur', () => {
      if (input.value === '') { 
        input.parentElement?.classList.remove("not-empty");  
      }

      input.parentElement?.classList.remove("focus");
      

        });

    });
  }, [])
  
  

  return (
      <ContactSection>
        <div className='container'>
          <div className='left'>
            <div className='form-wrapper'>
              <div className='contact-heading'>
                <h1 className='animate__animated animate__bounceInDown'>Get in touch <span>.</span></h1>
                <p className='text'>Or reach us via : <a href='mailto:maximilianoespeche@gmail.com'>maximilianoespeche@gmail.com</a></p>
              </div>
              <div className='animate__animated animate__fadeIn'>
                <form action='index.html' method='post' className='contact-form'> 
                  <div className='input-wrap w-100'> 
                    <input className='contact-input' type='text' autoComplete='off' name='FirstName'  required >  
                    </input>
                    <label>First Name</label>
                    <FontAwesomeIcon icon={faAddressCard} />
                  </div>

                  <div className='input-wrap w-100'> 
                    <input className='contact-input' type='text' autoComplete='off' name='LastName'  required > 
                    </input>
                    <label>Last Name</label>
                    <FontAwesomeIcon icon={faAddressCard} />
                  </div>

                  <div className='input-wrap w-100'> 
                    <input className='contact-input' type='email' autoComplete='off' name='Email'  required > 
                    </input>
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className='input-wrap textarea w-100'> 
                    <textarea className='contact-input' autoComplete='off' name='Message'  required ></textarea> 
                    <label>Message</label>
                    <FontAwesomeIcon icon={faInbox} />
                  </div>

                  <div className='contact-buttons'>
                    <input type='submit' value='Send message' className='btn'></input>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='image-wrapper'>
              
              <img src={contactImg} className='img'/>
                <div className='wave-wrap'>
                  <svg className='wave' viewBox="0 0 783 1536" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="wave" d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"/>
                  </svg>
                </div>
              
              
                <svg className='dashed-wave' viewBox="0 0 345 877" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="dashed-wave" d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1" stroke="white"/>
                </svg>
              
            </div>
          </div>
        </div>
      </ContactSection>
  )
}

export default Contact ;