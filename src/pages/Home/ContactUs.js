import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../shared/PrimaryButton";
const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div class="card-body items-center text-center ">
        <h3 class="card-title text-primary text-2xl text-bold">Contact Us</h3>
        <h2 className="text-white text-4xl text-bold pb-10">
          Stay Connected With Us
        </h2>
        <input
          type="text"
          placeholder="Email Address"
          class="input input-bordered input-primary w-full max-w-xl  "
        />
        <input
          type="text"
          placeholder="Subject"
          class="input input-bordered input-primary w-full max-w-xl  "
        />
        <textarea
          class="textarea textarea-primary w-full max-w-xl "
          placeholder="Your Message"
        ></textarea>
        <PrimaryButton>SUBMIT</PrimaryButton>
      </div>
    </section>
  );
};

export default ContactUs;
