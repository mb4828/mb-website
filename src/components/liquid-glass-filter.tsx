const displacementMap = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="Y" x1="0" x2="0" y1="3%" y2="97%"><stop offset="0%" stop-color="#0F0"/><stop offset="100%" stop-color="#000"/></linearGradient>
      <linearGradient id="X" x1="2%" x2="98%" y1="0" y2="0"><stop offset="0%" stop-color="#F00"/><stop offset="100%" stop-color="#000"/></linearGradient>
    </defs>
    <rect width="100" height="100" fill="#808080"/>
    <g filter="blur(2px)">
      <rect width="100" height="100" fill="#000080"/>
      <rect width="100" height="100" fill="url(#Y)" style="mix-blend-mode:screen"/>
      <rect width="100" height="100" fill="url(#X)" style="mix-blend-mode:screen"/>
      <rect x="3.33" y="5" width="93.33" height="90" rx="6.19" ry="9.29" fill="#808080" filter="blur(5px)"/>
    </g>
  </svg>
`);

export default function LiquidGlassFilter() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="liquid-glass-filter">
      <filter
        id="lg-filter"
        x="0"
        y="0"
        width="1"
        height="1"
        filterUnits="objectBoundingBox"
        primitiveUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feImage
          x="0"
          y="0"
          width="1"
          height="1"
          preserveAspectRatio="none"
          href={`data:image/svg+xml;utf8,${displacementMap}`}
          result="displacementMap"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacementMap"
          scale="0.343"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedR"
        />
        <feColorMatrix type="matrix" in="displacedR" result="red" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacementMap"
          scale="0.338"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedG"
        />
        <feColorMatrix
          type="matrix"
          in="displacedG"
          result="green"
          values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacementMap"
          scale="0.333"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedB"
        />
        <feColorMatrix
          type="matrix"
          in="displacedB"
          result="blue"
          values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
        />
        <feBlend in="red" in2="green" mode="screen" result="rg" />
        <feBlend in="rg" in2="blue" mode="screen" />
      </filter>
    </svg>
  );
}
