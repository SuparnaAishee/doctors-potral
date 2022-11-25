import React from "react";
import { format } from "date-fns";
const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-primary">Booking For : {name}</h3>
          <form className="grid grid-cols-1 gap-3 justify-items-center mt-3">
            <input
              type="text"
              disabled
              value={format(date, "pp")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary  text-white font-bold bg-gradient-to-r from-blue-500 w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
