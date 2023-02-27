import React from 'react';
import './DataCollection.css'

const DataCollection = ({ photo }) => {

    const { img, icon } = photo;
    return (
        <div>
            <div className=''>


                <div className="card">


                    <img src={img} alt="" />

                    <div className="card-body cardDesign -mt-[200px] border-t-[16px] border-[#FF0000]">


                        <img className='h-12 w-12' src={icon} alt="" />
                        <p className='font-Heebo font-bold text-2xl '>Cycling</p>
                        <p className='font-Heebo font-normal text-lg '>Perfect features for fitness & gym...</p>
                        <button className='btn'>View Details</button>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default DataCollection;