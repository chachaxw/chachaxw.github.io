/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import favicon from '../assets/images/favicon.ico';

const Seo = ({ description, lang, meta, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'Chacha - Front-end Developer',
  lang: `zh`,
  meta: [],
  description: `Hello, I'm Chacha Chou(周伟), a front-end developer with over 7 years experience, welcome to my Website!`,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
