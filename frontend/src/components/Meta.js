import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Gpu-Drop',
  description: 'Get your gpu here when it drops!',
  keywords:
    'electronics, graphics cards, gpu, gfx, gaming, mining, amd, intel, nvidia',
};

export default Meta;
