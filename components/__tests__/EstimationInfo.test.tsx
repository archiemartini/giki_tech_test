import React from 'react';
import { render } from '@testing-library/react-native';

import EstimationInfo from '../EstimationInfo';

describe('EstimationInfo Component', () => {
  
  it('renders the correct end of year target and left to cut values', () => {
    const endOfYearTarget = '2,000';
    const leftToCut = '1,500';

    const { getByText, getAllByText } = render(
      <EstimationInfo endOfYearTarget={endOfYearTarget} leftToCut={leftToCut} />
    );

    expect(getByText(`End of\nyear target`)).toBeTruthy();
    expect(getByText(`${endOfYearTarget} kg`)).toBeTruthy();
    expect(getByText(`Left to cut this year`)).toBeTruthy();
    expect(getByText(`${leftToCut} kg`)).toBeTruthy();

    const carbonEmissionsElements = getAllByText('of carbon emissions');
    expect(carbonEmissionsElements.length).toBe(2);

  });
  
});

