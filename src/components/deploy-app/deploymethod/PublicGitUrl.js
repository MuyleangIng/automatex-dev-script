import React from 'react';
import {Label, TextInput} from "flowbite-react";

function PublicGitUrl({formik}) {
    return (
            <div className={"p-4"} >
                <div className="relative z-0 w-full mb-6 group">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="sourcePath" value="Public Repository Url" />
                        </div>
                    </div>
                    <TextInput
                        type="url"
                        autoComplete="off"
                        name="sourcePath"
                        label="Git Url"
                        value={formik.values.sourcePath}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="defaultBranch" value="Branch Name" />
                        </div>
                    </div>
                    <TextInput
                        autoComplete="off"
                        name="defaultBranch"
                        label="Branch Name"
                        value={formik.values.defaultBranch}
                        onChange={formik.handleChange}
                    />
                </div>
        </div>
    );
}

export default PublicGitUrl;