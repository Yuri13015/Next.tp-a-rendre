import React, { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode; 
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }: {children: React.ReactNode}) => {
    return (
        <div>
            <h2>BlogLayout</h2>
            {children}
        </div>
    );
}

export default BlogLayout;
