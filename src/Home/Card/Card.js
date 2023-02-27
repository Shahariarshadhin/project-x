import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading';
import DataCollection from '../DataCollection/DataCollection';

const Card = () => {

    const { data: photos, isLoading } = useQuery('photos', () => fetch('https://project-x-9gpx.onrender.com/photo').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-14 '>
            <div class="  grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-14 ">
                {
                    photos.map(photo => <DataCollection

                        key={photo._key}
                        photo={photo}
                    ></DataCollection>)
                }
            </div>
        </div>
    );
};

export default Card;