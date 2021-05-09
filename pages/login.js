import React from 'react';
import Layout from '../components/lauout'

const Login = () => {
    return (
    <>
       <Layout>
            <h1 className="text-center text-2xl text-white font-light">Login</h1>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <from className="bg-white rounded-lg md:drop-shadow-xl flex-auto p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input/>
                        </div>
                    </from>
                </div>
            </div>
       </Layout>
    </>
    )
}

export default Login;