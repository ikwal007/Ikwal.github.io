import React from 'react';
import Welcom from './Partials/Welcom';
import LatesPost from './Partials/LatesPost';
import Recomandation from './Partials/Recomandation';

const AllPostView = ({slug}) => {
    return (
        <>
           <Welcom slug={slug} />
           <LatesPost /> 
           <Recomandation />
        </>
    );
}

export default AllPostView;
