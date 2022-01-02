import React from 'react';

import { getSoundMetaPath } from '../../../utils/get_path';

/**
 * @typedef {object} Props
 * @property {ArrayBuffer} soundData
 */

/**
 * @type {React.VFC<Props>}
 */
const SoundWaveSVG = ({ id }) => {
  return (
    <img className="w-full h-full" src={getSoundMetaPath(id)} />
  );
};

export { SoundWaveSVG };
