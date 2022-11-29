import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../shared/PrimaryButton";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xaykgnkw");

  // const sendEmail = (e) =>{
  //   e.preventDefault();
  //   handleSubmit()
  //   if (state.succeeded) {
  //     alert("Thanks for your email. We will reply you shorty.");
  //      e.target.reset();
  //     // return <p>Thanks for joining!</p>;
  //   }
  // }
  if (state.succeeded) {
    alert("Thanks for your email. We will reply you shorty.")
    
    // return <p>Thanks for joining!</p>;
  }
  //  const sendEmail = (e) => {
  //    e.preventDefault();
  //    emailjs
  //      .sendForm(
  //        "service_x0gr6ph",
  //        "template_azdl1zp",
  //        e.target,
  //        "user_ipHIMZB9pDML4LhAreiIo"
  //      )
  //      .then(
  //        (result) => {
  //          console.log(result.text);
  //        },
  //        (error) => {
  //          console.log(error.text);
  //        }
  //      );
  //    e.target.reset();
  //  };
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="card-body items-center text-center ">
        <h3 className="card-title text-primary text-2xl text-bold">
          Contact Us
        </h3>
        <h2 className="text-white text-4xl text-bold pb-10">
          Stay Connected With Us
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="input input-bordered input-primary w-full max-w-xl  "
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-primary w-full max-w-xl  "
          />
          <ValidationError
            prefix="text"
            field="subject"
            errors={state.errors}
          />
          <textarea
            className="textarea textarea-primary w-full max-w-xl "
            placeholder="Your Message"
            id="message"
            name="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <PrimaryButton>SUBMIT</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
