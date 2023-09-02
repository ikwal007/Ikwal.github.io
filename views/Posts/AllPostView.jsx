import React from 'react';
import Welcom from './Partials/Welcom';
import LatesPost from './Partials/LatesPost';
import Recomandation from './Partials/Recomandation';

const AllPostView = ({category}) => {
    return (
        <>
           <Welcom category={category} />
           <LatesPost /> 
           <Recomandation />
        </>
    );
}

export default AllPostView;
