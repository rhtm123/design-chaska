import React from 'react';
import dynamicPaths from '../../functions/getDynamicPaths';
import staticPaths from '../../functions/getStaticPaths';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const allPaths =[ ...staticPaths , ...dynamicPaths ];


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;