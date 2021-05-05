import React from 'react';
import { YoutubeEmbed } from './youtube-embed';

export const DefaultYoutube = () => (
  <YoutubeEmbed src="https://www.youtube.com/embed/cWDJoK8zw58" />
);

export const SmallYoutube = () => (
  <YoutubeEmbed title="Hosting in AWS" src="https://www.youtube.com/embed/D6qB7MEFOe0" height="100" width="200"/>
);

export const YoutubeAutoplay = () => (
  <YoutubeEmbed title="React Native with AWS Amplify" src="https://www.youtube.com/embed/NqYQ0Muwf3c" allow="autoplay;" />
);