import React, {useState} from 'react';
import {useFormik} from 'formik';
import {Button, Card, Label, TextInput} from "flowbite-react";
import {FaRegSquarePlus} from "react-icons/fa6";
import {MdCancel} from "react-icons/md";

const EnvironmentDeploy = ({formik}) => {
    function InputEnv(item, index) {
        const handleRemoveEnv = () => {
            const data = formik.values.envs.filter((_, i) => i !== index)
            formik.setFieldValue('envs', data)
        }
        return <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 grid grid-cols-1 gap-y-2">
                <Label htmlFor="key">Key</Label>
                <TextInput
                    id="key"
                    name="key"
                    placeholder="NEXT_PUBLIC_API_URL"
                    type="text"
                    // onChange={formik.handleChange}
                    value={formik.values.envs[index].key}
                />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-y-2">
                <Label htmlFor="value">Value</Label>
                <TextInput
                    id="value"
                    name="value"
                    type="text"
                    value={formik.values.envs[index].value}
                />
            </div>
            <div className="col-span-1 flex flex-row gap-6">
                <Button onClick={handleRemoveEnv} type="button" color="red" className="h-10 mt-8 ">
                    <MdCancel className="h-4 w-4"/>
                </Button>
            </div>
        </div>;
    }

    return (
        <Card className={"bg-white dark:bg-gray-900 mt-5 py-5 border-2 border-gray-300 border-dashed  rounded-lg dark:border-cyan"}>
            <h3 className="mb-4 text-xl font-bold  text-cyan-500 dark:text-cool-blue-150">
                Environment Variables :
            </h3>
            <p className="mb-4 text-base font-medium dark:text-white">
                In order to provide your Deployment with Environment Variables at Build and Runtime,
                you may enter them right here, for the Environment of your choice.
            </p>
            {formik.values.envs.map((item, index) =>InputEnv(item, index))}
            {AddEnvItem(formik)}
        </Card>
    );
}

export default EnvironmentDeploy;
const AddEnvItem = (formik) => {
    const [env, setEnv] = useState({
        key: '',
        value: ''
    })
    const handleAddEnv = () => {
        formik.setFieldValue('envs', [...formik.values.envs, env])
        setEnv({
            key: '',
            value: ''
        })
    }
    return(
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 grid grid-cols-1 gap-y-2">
                <Label htmlFor="key">Key</Label>
                <TextInput
                    id="key"
                    name="key"
                    type="text"
                    onChange={(e) => setEnv({...env, key: e.target.value})}
                    value={env.key}
                />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-y-2">
                <Label htmlFor="value">Value</Label>
                <TextInput
                    id="value"
                    name="value"
                    type="text"
                    onChange={(e) => setEnv({...env, value: e.target.value})}
                    value={env.value}
                />
            </div>
            <div className="col-span-1 gap-6">
                <Button disabled={env.value==='' || env.key===''} onClick={handleAddEnv}  type="button" color="gray" className="h-10 mt-8 ">
                    <FaRegSquarePlus className="h-4 w-4"/>
                </Button>
            </div>
        </div>
    )
}