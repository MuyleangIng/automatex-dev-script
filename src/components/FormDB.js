'use client'
import {
    useBuildDeploymentDatabaseMutation,
    useCreateDeploymentDatabaseMutation
} from '@/store/features/deploy-db/deployDbApiSlice';
import {useFormik} from 'formik';
import {useRouter} from 'next/navigation';
import React from 'react';
import ToastConfig from './deploy-app/deploymentLoading/ToastConfig';
import {Button, Label, Select, TextInput} from 'flowbite-react';
import * as Yup from "yup";
import {toast} from "react-toastify";

export default function FormDB() {
    const [createDeploymentDatabase, {isLoading, error, data}] = useCreateDeploymentDatabaseMutation();
    const [buildDeploymentDatabase, {isLoading: bIsLoading, error: bError, data: bData}] = useBuildDeploymentDatabaseMutation();
    const router = useRouter();


    const validationSchema = Yup.object().shape({
      name: Yup.string().required('name is required')
          .min(6, 'minimum is 6 characters')
          .max(15, "maximum is 15 characters")
          .matches(/^[a-z0-9]*$/, 'Project name can only contain lowercase letters and numbers'),
      dbType: Yup.string().required('database Type is required'),
      dbUsername: Yup.string().required('database Username is required')
          .min(4, 'minimum is 6 characters')
          .max(15, "maximum is 15 characters")
          .matches(/^[a-z0-9]*$/, 'database Username can only contain lowercase letters and numbers'),
      dbPassword: Yup.string().required('database Password is required')
          .min(4, 'minimum is 6 characters')
          .max(15, "maximum is 15 characters")
          .matches(/^[a-z0-9]*$/, 'database Password can only contain lowercase letters and numbers'),
      dbName: Yup.string().required('database name  is required')
          .min(4, 'minimum is 6 characters')
          .max(15, "maximum is 15 characters")
          .matches(/^[a-z0-9]*$/, 'database name can only contain lowercase letters and numbers'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            dbType: 'MYSQL',
            dbUsername: '',
            dbPassword: '',
            dbName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting, resetForm}) => {
            // console.log(values)
            createDeploymentDatabase(values).unwrap()
                .then((res) => {
                    // console.log(res)
                    setSubmitting(false)
                    buildDeploymentDatabase(res.uuid).unwrap();
                    toast.success("Insert! Successfully")
                    // resetForm()
                    router.push(`/app/dashboard?appType=DATABASE`)

                })
                .catch((err) => {
                    const errors = err.data?.errors.reduce(
                        (obj, item) => Object.assign(obj, { [item.name]: item.message }), {});
                    formik.setErrors(errors)
                    setSubmitting(false)
                    // resetForm()
                })
        },
    })
    return (
        <>
            <ToastConfig/>
            {/*{formik.isSubmitting && <LoadingLogo/>}*/}
            <div  className={'mt-10 rounded-xl border-dashed border-2 border-gray-300 dark:border-gray-700 bg-white p-5 mb-5 shadow dark:bg-gray-800 overflow-hidden'}
            >
                <form className="bg-slate-200 dark:bg-gray-900 rounded-lg p-5" onSubmit={formik.handleSubmit}>
                    <div className="mb-5">
                        <h2 className="font-bold text-xl text-center mb-2">Create Database Credentials</h2>
                    </div>

                    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                        <div className="relative z-0 w-full mb-6 group">
                            <div>
                                <div className="mb-2 block ">
                                    <Label htmlFor="name" value="Your Project Name" className=''/>
                                </div>
                            </div>
                            <TextInput
                                autoComplete="off"
                                name="name"
                                label="Project Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                color={formik.errors && formik.errors.name?"failure":"gray"}
                                helperText={formik.errors && formik.errors.name && (<span className="font-medium">{formik.errors.name}</span>)}
                            />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="dbType" value="Database Type"/>
                                </div>
                            </div>
                            <Select
                                autoComplete="off"
                                name="dbType"
                                onChange={formik.handleChange}
                                value={formik.values.dbType}
                                color={formik.errors && formik.errors.dbType?"failure":"gray"}
                                helperText={formik.errors && formik.errors.dbType && (<span className="font-medium">{formik.errors.dbType}</span>)}
                            >
                                <option value={"POSTGRESQL"}>POSTGRESQL</option>
                                <option value={"MYSQL"}>MYSQL</option>
                                <option value={"MONGODB"}>MONGODB</option>
                            </Select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <div>
                                <div className="mb-2 block ">
                                    <Label htmlFor="dbUsername" value="Database Username"/>
                                </div>
                            </div>
                            <TextInput
                                autoComplete="off"
                                name="dbUsername"
                                label="Database Username"
                                value={formik.values.dbUsername}
                                onChange={formik.handleChange}
                                color={formik.errors && formik.errors.dbUsername?"failure":"gray"}
                                helperText={formik.errors && formik.errors.dbUsername && (<span className="font-medium">{formik.errors.dbUsername}</span>)}dbUsername
                            />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <div>
                                <div className="mb-2 block ">
                                    <Label htmlFor="dbPassword" value="Database Password"/>
                                </div>
                            </div>
                            <TextInput
                                autoComplete="off"
                                name="dbPassword"
                                label="Database Password"
                                value={formik.values.dbPassword}
                                onChange={formik.handleChange}
                                color={formik.errors && formik.errors.dbPassword?"failure":"gray"}
                                helperText={formik.errors && formik.errors.dbPassword && (<span className="font-medium">{formik.errors.dbPassword}</span>)}
                            />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <div>
                                <div className="mb-2 block ">
                                    <Label htmlFor="dbName" value="Database Name"/>
                                </div>
                            </div>
                            <TextInput
                                autoComplete="off"
                                name="dbName"
                                label="Database Name"
                                value={formik.values.dbName}
                                onChange={formik.handleChange}
                                color={formik.errors && formik.errors.dbName?"failure":"gray"}
                                helperText={formik.errors && formik.errors.dbName && (<span className="font-medium">{formik.errors.dbName}</span>)}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        isProcessing={formik.isSubmitting || isLoading}
                        disabled={formik.isSubmitting || isLoading}
                    >
                        Deploy
                    </Button>
                </form>
            </div>
        </>
    );
}