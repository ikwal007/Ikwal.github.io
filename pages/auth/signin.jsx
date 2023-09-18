import GuestLayout from '@/layouts/guestLayout';
import LoginView from '@/views/auth/loginView';
import React from 'react';

const Signin = () => {
    return (
        <GuestLayout>
            <LoginView />
        </GuestLayout>
    );
}

export default Signin;
