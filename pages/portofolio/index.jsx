import Nav from '@/components/Nav/NavGuest';
import GuestLayout from '@/layouts/guestLayout';
import PortofolioView from '@/views/portofolio/portofolioView';
import React from 'react';

const Index = () => {
    return (
        <GuestLayout children={<PortofolioView />} />
    );
}

export default Index;
