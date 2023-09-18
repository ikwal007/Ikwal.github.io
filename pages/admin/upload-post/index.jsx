import AuthAdminLayout from '@/layouts/authAdminLayout';
import UploadPostView from '@/views/Admin/UploadPostView';
import React from 'react';

const Index = () => {
    return (
        <AuthAdminLayout>
            <UploadPostView />
        </AuthAdminLayout>
    );
}

export default Index;
