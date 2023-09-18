import GuestLayout from '@/layouts/guestLayout';
import RegisterView from '@/views/auth/registerView';
import React from 'react';

const Signup = () => {
    return (
        <GuestLayout>
            <RegisterView />
        </GuestLayout>
    );
}

export default Signup;
