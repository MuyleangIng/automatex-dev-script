'use client'
import Link from 'next/link';
import React from 'react';


function FormDB() {
    return (
<>
<div className="flex justify-between items-center py-6 px-24">
                <div className=" items-center">
                    <b className="font-bold text-xl">Database</b>
                    <p className="text-lg  mt-10 ">
                        Read and Write directly to your database and store from your project
                    </p>
                </div>

                
            </div>

            <div className=" relative flex justify-center items-center w-5/6 mx-24 my-8 h-modal bg-slate-200 dark:bg-gray-800 rounded-xl">
                
        <form className="w-5/6 p-9 my-10 bg-white rounded-lg">
        <div className="mb-5">
        <b className="font-bold text-xl ">Create Database Credentials</b>
        </div>
        <div class="mb-6">
          <label for="username" class="text-sm font-medium text-gray-900 block mb-2">Username</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required=""/>
        </div>
        <div class="mb-6">
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""/>
        </div>
        <div class="mb-6">
          <label  class="text-sm font-medium text-gray-900 block mb-2">Default Database</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""/>
        </div>
        <div class="mb-6">
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Port</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""/>
        </div>
        <div class="mb-6">
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Version</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required=""/>
        </div>
        <Link href={`/app/deploy-db/db-deployed`}>
        <button type="submit" class="w-full text-white bg-orange-100  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Deploy</button>
        </Link>
      </form>
      </div>
      </>
    );
}

export default FormDB;