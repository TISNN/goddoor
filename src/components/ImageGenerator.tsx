import React from 'react';
import Image from 'next/image';

interface ImageGeneratorProps {
  width: number;
  height: number;
  text: string;
  bgColor?: string;
  textColor?: string;
}

export const ImageGenerator: React.FC<ImageGeneratorProps> = ({
  width,
  height,
  text,
  bgColor = '#f3f4f6',
  textColor = '#374151'
}) => {
  // 创建一个 SVG 数据 URL
  const svgString = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="sans-serif"
        font-size="20"
        fill="${textColor}"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svgString).toString('base64')}`;

  return (
    <div className="relative" style={{ width, height }}>
      <Image
        src={dataUrl}
        alt={text}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-lg"
      />
    </div>
  );
}; 