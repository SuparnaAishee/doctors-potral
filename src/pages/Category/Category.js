import React from 'react';
import { useNavigate } from "react-router-dom";
import  category1 from "../../assets/images/category-1.png";
import category2 from '../../../src/assets/images/category-2.png';
import category3 from '../../../src/assets/images/category-3.png';
import category4 from '../../../src/assets/images/category-4.png';
import category5 from '../../../src/assets/images/category-5.png';
import category6 from '../../../src/assets/images/category-6.png';
import category7 from '../../../src/assets/images/category-7.png';
import category8 from '../../../src/assets/images/category-8.png';
import category9 from '../../../src/assets/images/category-9.png';


const Category = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/home");
  };

  return (
   <div className="my-20 place-items-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            
            <button onClick={() => navigate('/dentist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category1} alt="" />
                <h1 className=' text-xl '>Dentist</h1>
            </button>

            <button onClick={() => navigate('/eyespecialist')} className="btn  m-6 selection: hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category2} alt="" />
                <h1 className=' text-xl '>Eye specialist</h1>
            </button>

            <button onClick={() => navigate('/generalsurgeons')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category3} alt="" />
                <h1 className=' text-xl '>  Surgeons</h1>
            </button>

            <button onClick={() => navigate('/neurologist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category4} alt="" />
                <h1 className=' text-xl '>Neurologists</h1>
            </button>

            <button onClick={() => navigate('/nephrologist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category5} alt="" />
                <h1 className=' text-xl '>Nephrologist</h1>
            </button>
            
            <button onClick={() => navigate('/cardiologist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category6} alt="" />
                <h1 className=' text-xl '>Cardiologist</h1>
            </button>

            <button onClick={() => navigate('/dermatologist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category7} alt="" />
                <h1 className=' text-xl '>Dermatologist</h1>
            </button>

            <button onClick={() => navigate('/gynecologists')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category8} alt="" />
                <h1 className=' text-xl '>gynecologists</h1>
            </button>

            <button onClick={() => navigate('/nutritionist')} className="btn  m-6 hover:bg-primary h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category9} alt="" />
                <h1 className=' text-xl '>Nutritionist</h1>
            </button>

</div>
  );
};

export default Category;