import React from 'react';

export type YoutubeEmbedProps = {
  /**
   * Embed URL in https://www.youtube.com/embed/xxxxxxxx format)
   */
  src: string,
  /**
   * Title of the Video
  */
  title?: string,
  /**
   * Width of the iFrame
   */
  width?: string,
  /**
   * Height of hte iFrame
   */
  height?: string,
  /**
   * Video player properties
   */
  allow?: string
};

export function YoutubeEmbed({ title, src, width, height, allow }: YoutubeEmbedProps) {
  return (
    <iframe src={src} width={width} height={height} allow={allow} />
  );
}
