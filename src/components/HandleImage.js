import React, {useState} from 'react';
import Image from "next/image";

function HandleImage({src, alt= "Thumbnail", w=8,h=8}) {
    const [imgError, setImgError] = useState(false)

    return src===null || imgError ? (
        <svg className={`w-${w} h-${h} mr-3 text-gray-200 dark:text-gray-600`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    ) : (
        <Image
            unoptimized
            width={100}
            height={100}
            onError={(event) => setImgError(true)}
            src={src}
            alt={alt}
            className={`w-${w} h-${h} mr-3 object-contain`}
        />
    )
}

export default HandleImage;