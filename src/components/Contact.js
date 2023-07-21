import {useRef, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/tiles_banner.png";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className={"header-bg"}><h1>CONTACT</h1></div>
            <div className={"contents"}>
                <img className={"at-decor"} src={contactImg} alt="Contact"/>
                <ContactUs/>
            </div>
        </section>
    )
}

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = document.querySelector('.name-input');
        const email = document.querySelector('.email-input');
        const message = document.querySelector('textarea');
        const submitButton = document.querySelector('.submit-button');
        const submitButtonText = document.querySelector('.submit-button-text');

        if (name.value === "" || email.value === "" || message.value === "") {

            console.log(name.value + " " + email.value + " " + message.value);
            submitButton.classList.add('error');
            submitButtonText.textContent = "Missing Fields!"
            setTimeout(() => {
                submitButton.classList.remove('error');
                submitButtonText.textContent = "Send";
            } , 3000);
            return;
        }

        emailjs.sendForm('service_3ghxqjd', 'template_kack8by', form.current, 'mgrQDRf9bzT-PP0KC')
            .then((result) => {
                console.log(result.text);
                submitButton.classList.add('success');
                submitButtonText.textContent = "Message Sent!"

                setTimeout(() => {
                    submitButton.classList.remove('success');
                    submitButton.classList.remove('error');
                    submitButtonText.textContent = "Send";
                } , 3000);
            }, (error) => {
                console.log(error.text);
                submitButton.classList.add('error');
                submitButtonText.textContent = "Something went wrong!"
                const temp =submitButtonText.style.fontSize
                submitButtonText.style.fontSize = "medium";

                setTimeout(() => {
                    submitButton.classList.remove('success');
                    submitButton.classList.remove('error');
                    submitButtonText.textContent = "Send";
                    submitButtonText.style.fontSize = temp;
                } , 3000);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className={"input-group"}>
                <div><input className={"name-input"} type="text" name="user_name" placeholder={"Name*"}/></div>
                <div><input className={"email-input"} type="email" name="user_email" placeholder={"Email*"}/></div>
            </div>
            <textarea name="message" placeholder={"Message*"}/>
            <button className={"submit-button"} type="submit"><span className={"submit-button-text"}>Send</span></button>
        </form>
    );
};