'use client';

import { dataDescriptions } from '../../../../../libs/data-projects'
import { useState } from 'react';
import Description from './description';
import Title from '../../3D-Globe/title/title';

export default function Descriptions() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="absolute z-10 w-full">
        <Title
            data={dataDescriptions}
            setSelectedProject={setSelected}
        />
        <Description
            data={dataDescriptions}
            selected={selected}
        />
    </div>
  );
}
