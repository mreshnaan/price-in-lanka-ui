import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .replace(/%20/g,' ')
        .toUpperCase();
};

const Breadcrumbs = () => {
    const router = useRouter();
    // console.log('router' , router)
    const [breadcrumbs, setBreadcrumbs] = useState(null);
    console.log('breadcrumbs', breadcrumbs)
    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ol className="breadcrumb flex flex-row">
                <li>
                    <a href="/">HOME</a>
                </li>
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={i}>
                            <span key={breadcrumb.href} className="p-1">/</span>
                            <Link href={breadcrumb.href}>
                                <a>
                                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                                </a>
                            </Link>


                        </li>

                    );
                })}
            </ol>
        </nav>
    );
};
export default Breadcrumbs;
