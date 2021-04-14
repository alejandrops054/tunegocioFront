import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {

    //Hook de routing
    const router = useRouter();
    return(
        <>
            <Head>
                <title>CRM - Tu Negocio</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            {router.pathname == '/login' ? (
                <div className="bg-gray-800 min-h-screen">
                    {children}
                </div>
            ):(
                <div className="bg-gray-200 min-h-screen">
                    <div className="flex min-h-screen">
                    <Sidebar/>
                    <mian className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                        {children}
                    </mian>
                </div>
            </div>
            )}            
        </>
    );
}

export default Layout;