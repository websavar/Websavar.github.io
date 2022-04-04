import React from 'react';

import { Image } from 'interfaces';

const ImageResource: React.FC<Image> = ({ src, alt, classname, width }) => {

  return (
    <img src={src} alt={alt} className={classname} width={width} />
  )
}

export default ImageResource;