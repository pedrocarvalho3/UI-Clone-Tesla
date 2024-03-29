import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model/indesx'
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';


import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model 3',
            'Model Y',
            'Model S',
            'Model X',
            'Solar Panels',
            'Solar Roof',
            'Acessories',
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label= {modelName}
                  description='Order Online for Delivery'
                />
              }
            />
          ))}      
        </div>

        <Spacer></Spacer>

        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  )
}

export default Page;
