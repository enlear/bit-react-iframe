import React from 'react';
import { render } from '@testing-library/react';
import { DefaultYoutube } from './youtube-embed.composition';

describe('youtube-embed', () => {

  it('Should render using the SRC', () => {
    const { container } = render(<DefaultYoutube />);
    const iFrame = container.querySelector('iframe');
    expect(iFrame.hasAttribute('src'));
  });

});
