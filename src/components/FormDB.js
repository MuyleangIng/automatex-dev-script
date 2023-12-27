'use client'
import { useCreateDeploymentDatabaseMutation } from '@/store/features/deploy-db/deployDbApiSlice';
import { addDeploymentDatabase } from '@/store/features/deploy-db/deployDbSlice';
import { useFormik } from 'formik';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ToastConfig from './deploy-app/deploymentLoading/ToastConfig';
import LoadingLogo from './deploy-app/deploymentLoading/LoadingLogo';
import { TextInput } from 'flowbite-react';


export default function FormDB() {
  const [createDeploymentDatabase] = useCreateDeploymentDatabaseMutation();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // const validationSchema = Yup.object().shape({
  //   username: Yup.string().required('Username is required'),
  //   password: Yup.string().required('Password is required'),
  //   defaultDatabase: Yup.string().required('Default Database is required'),
  //   port: Yup.string().required('Port is required'),
  //   version: Yup.string().required('Version is required'),
  // });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      defaultDatabase: '',
      port: '',
      version: '',
    },
    // validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      // Handle form submission here
      console.log(values);
      resetForm();
      createDeploymentDatabase(values)
        .unwrap()
        .then((res) => {
          console.log(res.uuid);
          dispatch(addDeploymentDatabase(res.uuid));
          setSubmitting(false);
          toast.success('Insert! Successfully');
          resetForm();
        })
        .catch((err) => {
            console.error('Error: ' + err.message);
            setLoading(false);
        })
    },
  })


  return (
    <>
    <ToastConfig/>
    {loading && <LoadingLogo />}
    <div className="relative flex justify-center items-center w-5/6 mx-24 my-8 h-modal bg-slate-200 dark:bg-gray-800 rounded-xl">
      <form className="w-5/6 p-9 my-10 bg-white rounded-lg" onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <b className="font-bold text-xl">Create Database Credentials</b>
        </div>
        <div className="mb-6">
          <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">
            Username
          </label>
          <TextInput
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            // {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">
            Password
          </label>
          <TextInput
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            // {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-900 block mb-2">Default Database</label>
          <TextInput
            type="text"
            id="defaultDatabase"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            // {...formik.getFieldProps('defaultDatabase')}
          />
          {formik.touched.defaultDatabase && formik.errors.defaultDatabase ? (
            <div className="text-red-500">{formik.errors.defaultDatabase}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="port" className="text-sm font-medium text-gray-900 block mb-2">
            Port
          </label>
          <TextInput
            type="number"
            id="port"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            // {...formik.getFieldProps('port')}
          />
          {formik.touched.port && formik.errors.port ? (
            <div className="text-red-500">{formik.errors.port}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="version" className="text-sm font-medium text-gray-900 block mb-2">
            Version
          </label>
          <TextInput
            type="text"
            id="version"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            // {...formik.getFieldProps('version')}
          />
          {formik.touched.version && formik.errors.version ? (
            <div className="text-red-500">{formik.errors.version}</div>
          ) : null}
        </div>
        <Link href={`/app/deploy-db/db-deployed`}>
          <button
            type="submit"
            className="w-full text-white bg-orange-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Deploy
          </button>
        </Link>
      </form>
    </div>
    </>
  );
}