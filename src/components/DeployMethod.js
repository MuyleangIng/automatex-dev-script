import React from 'react';
import {SourceType} from "@/lib/enumTypes";
import {GoArrowUpRight} from "react-icons/go";
import Image from "next/image";

function DeployMethod({formik}) {
    const onSelectedActive = (type) => {
        return formik.values.sourceType===type?"shadow-xl border-cool-blue-80":""
    }

    function methodTemplate({value,title,desc,disabled=false,logo}) {
        return (
            <label htmlFor={value}
                   className={`w-full group h-20 px-2 border-2 rounded-xl ${disabled?"":"hover:cursor-pointer hover:shadow-xl hover:border-cool-blue-80 focus:bg-yellow-50 focus:dark:bg-blue-950 active:bg-cool-blue-80 active:dark:bg-gray-800"} ${onSelectedActive(value)}`}>
                <div className="relative flex items-center space-x-4 justify-center">
                    <Image width={45} height={45} src={logo} alt="logo"/>
                    <div className="flex flex-col ml-2 leading-4 text-left md:ml-3 p-2">
                        <span className="text-base font-semibold">{title}</span>
                        <span className=" font-light mt-3">{desc}</span>
                    </div>
                </div>
                <input
                    disabled={disabled}
                    id={value}
                    name="sourceType"
                    type="radio"
                    onChange={formik.handleChange}
                    value={value}
                    className={"hidden"}
                />
            </label>
        );
    }

    return (
        <>
            <h2 className="text-xl py-8 font-bold text-cyan-500 dark:text-white">
                Deployment Method:
            </h2>
            <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">

                {methodTemplate({
                    value:SourceType.default,
                    title:"AutomateX",
                    desc:"use AutomateX Git",
                    logo:"/mainlogo.png"
                })}
                {methodTemplate({
                    value:SourceType.public,
                    title:"Source Git Url",
                    desc:"drop your public repo",
                    logo:"/giturl.png"
                })}
                {methodTemplate({
                    // disabled:true,
                    value:SourceType.github,
                    title:"GitHub",
                    desc:"connect to github",
                    logo:"/gitlogo.png"
                })}
                {methodTemplate({
                    // disabled:true,
                    value:SourceType.file,
                    title:"Source File",
                    desc:"drop your zip file",
                    logo:"/gitlap.png"
                })}

            </div>
        </>);
}

export default DeployMethod;