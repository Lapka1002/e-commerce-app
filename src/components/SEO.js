import { Helmet } from 'react-helmet-async';
import React, {useEffect} from 'react';

const SEO = ({ title, description, keywords }) => {
    const defaultTitle = "My brand";
    const defaultDescription = "Browse our wide selection of products including electronics, fashion, home goods, and more.";
    const defaultKeywords = "shop, products, online store, electronics, fashion, home goods";

    useEffect(() => {
      
    }, [title, description, keywords]);

    return (
        <Helmet>
            <title> {title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}
export default SEO; 
