import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Dentist = () => {

const navigate = useNavigate();


    return (
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Chamber Location</th>
              <th>Fees</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  {/* <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
                  <div>
                    <div class="font-bold">Dr. Sadia Afroz</div>
                    <div class="text-sm opacity-50">Chittagong</div>
                  </div>
                </div>
              </td>
              <td>
                Oral & Dental Surgeon
                <br />
                <span class="badge badge-ghost badge-sm">
                  CPDL AM MAJESTA, 84, Jamal Khan Road ,Above Eastern Bank
                  Limited 2nd Floor (৩য় তলা, Chattogram 4000)
                </span>
              </td>
              <td>1000</td>
              <th>
                
                <button onClick={() => navigate("/d1details")} class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            {/* row2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  {/* <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div> */}
                  <div>
                    <div class="font-bold">Dr. Md. Kamrul Hasan</div>
                    <div class="text-sm opacity-50">Chittagong</div>
                  </div>
                </div>
              </td>
              <td>
                Oral & Dental Specialist & Surgeon
                <br />
                <span class="badge badge-ghost badge-sm">
                  Qrex Diagnostic & Consultation Centre, Chittagong . Plot #
                  9/A, Road # 1, Lane # 2, Block # G, Halishahar, Chattogram
                </span>
              </td>
              <td>600</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Dentist;