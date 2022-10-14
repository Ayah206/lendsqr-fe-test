import React from 'react';
import ClippedDrawer from '../../components/dashboard/drawer'
interface Props {
    children : React.ReactNode
}

function Dashboard({children}:Props) {
    return (
        <ClippedDrawer children = {children}/>
    );
}

export default Dashboard;