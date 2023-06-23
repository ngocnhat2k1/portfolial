import { type } from 'os'
import * as React from 'react'

type PropsIcon = {
  className?: string
  onClick?: () => void
}

export const GithubIcon = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
)

export const FacebookIcon = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3.5em"
    height="3.5em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="#1877F2"
      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
    />
    <path
      fill="#FFF"
      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
    />
  </svg>
)

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
)

export const SunIcon = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        {/* <set attributeName="opacity" begin="0.5s" to="1" /> */}
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      {/* <set attributeName="opacity" begin="0.5s" to="0" /> */}
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
)

export const MoonIcon = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      {/* <set attributeName="opacity" begin="0.6s" to="0" /> */}
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      {/* <set attributeName="opacity" begin="0.6s" to="1" /> */}
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
)

export const LinkArrow = ({ className, ...rest }: PropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
)

export const CircleText = ({ className, ...rest }: PropsIcon) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="500.000000pt"
    height="500.000000pt"
    viewBox="0 0 500.000000 500.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M2536 4361 c-2 -3 -7 -66 -11 -138 l-8 -133 25 0 c24 0 25 3 31 76 9
100 22 127 70 138 29 8 37 14 37 33 0 30 -18 29 -64 -2 l-36 -25 6 24 c4 19 1
24 -20 28 -15 3 -28 3 -30 -1z"
      />
      <path
        d="M2279 4347 c-37 -17 -59 -42 -70 -79 -11 -38 -3 -104 17 -135 18 -28
69 -53 111 -53 41 0 113 35 113 55 0 19 -29 19 -54 0 -11 -8 -34 -15 -52 -15
-33 0 -84 33 -84 54 0 15 85 36 149 36 26 0 50 2 53 5 12 12 -14 91 -37 114
-27 28 -105 38 -146 18z m107 -45 c29 -24 36 -49 16 -57 -9 -3 -47 -9 -84 -12
-79 -7 -86 4 -42 56 30 36 76 41 110 13z"
      />
      <path
        d="M1995 4293 c-11 -3 -34 -19 -52 -36 -28 -26 -33 -28 -39 -14 -7 18
-39 23 -49 8 -3 -5 2 -31 10 -58 8 -26 22 -70 30 -98 60 -206 64 -215 95 -195
12 7 12 15 3 42 -6 18 -14 48 -18 67 -7 31 -5 33 11 26 41 -17 73 -16 112 4
71 36 91 108 51 190 -28 58 -83 81 -154 64z m94 -69 c29 -37 29 -106 -1 -134
-33 -30 -66 -36 -102 -16 -52 28 -69 83 -41 136 17 34 27 38 82 39 34 1 46 -4
62 -25z"
      />
      <path
        d="M3442 4173 c-159 -225 -185 -277 -145 -290 6 -2 41 41 78 97 37 55
71 102 75 105 11 7 20 -84 20 -200 0 -103 13 -145 45 -145 7 0 57 65 111 145
81 121 95 147 84 160 -7 8 -16 15 -21 15 -5 0 -38 -45 -74 -100 -36 -54 -69
-102 -74 -104 -10 -7 -19 63 -27 209 -4 61 -11 116 -17 123 -15 19 -34 14 -55
-15z"
      />
      <path
        d="M1628 4144 c-68 -44 -84 -105 -47 -181 35 -72 117 -95 189 -52 56 33
70 57 70 122 0 53 -3 60 -40 97 -36 36 -45 40 -87 39 -33 0 -60 -8 -85 -25z
m131 -45 c41 -40 48 -74 27 -114 -34 -63 -92 -71 -142 -21 -46 46 -47 96 -3
137 41 39 78 38 118 -2z"
      />
      <path
        d="M1357 4114 c-15 -15 -5 -36 51 -116 157 -224 157 -224 180 -195 8 10
-14 49 -94 162 -99 142 -120 165 -137 149z"
      />
      <path
        d="M2953 4073 c-18 -7 -16 -42 3 -50 8 -3 23 1 31 10 13 13 14 19 3 31
-13 17 -17 18 -37 9z"
      />
      <path
        d="M1270 3893 c-48 -25 -80 -76 -80 -129 0 -38 6 -50 45 -90 44 -46 44
-47 100 -42 44 4 62 11 86 34 54 51 77 114 42 114 -11 0 -25 -16 -36 -39 -9
-21 -28 -43 -41 -51 -31 -16 -74 -16 -89 0 -9 9 5 27 62 80 78 71 83 85 39
114 -39 25 -89 29 -128 9z m98 -47 c10 -10 1 -23 -48 -65 -50 -44 -63 -51 -75
-41 -46 38 28 140 90 123 11 -3 26 -11 33 -17z"
      />
      <path
        d="M3700 3843 c-48 -19 -90 -83 -90 -137 0 -43 54 -106 92 -106 36 0 41
-11 16 -37 -33 -36 -79 -31 -123 12 -19 20 -35 45 -35 55 0 13 -7 20 -20 20
-52 0 6 -112 75 -144 60 -29 95 -17 183 63 114 102 136 127 128 146 -4 12 -13
15 -30 11 -20 -5 -24 -1 -29 24 -4 16 -19 43 -34 60 -22 25 -38 33 -73 36 -25
2 -52 1 -60 -3z m102 -57 c23 -17 40 -64 32 -90 -11 -37 -55 -76 -86 -76 -38
0 -73 24 -88 59 -30 73 79 155 142 107z"
      />
      <path
        d="M1092 3728 c-17 -17 -15 -27 13 -64 14 -18 25 -35 25 -37 0 -3 16
-29 36 -58 20 -29 31 -55 26 -57 -6 -2 -54 11 -107 29 -70 23 -102 30 -113 22
-27 -16 -25 -32 5 -39 15 -3 46 -12 68 -19 151 -50 196 -54 209 -19 4 9 1 23
-6 31 -13 16 -32 47 -44 73 -11 22 -93 150 -97 150 -2 0 -8 -5 -15 -12z"
      />
      <path
        d="M3888 3569 c-50 -26 -71 -61 -72 -118 -2 -81 62 -151 137 -151 42 0
99 31 121 65 25 38 21 114 -9 158 -46 67 -108 83 -177 46z m105 -40 c28 -13
57 -58 57 -89 0 -36 -62 -90 -103 -90 -96 0 -123 137 -34 175 39 17 50 18 80
4z"
      />
      <path
        d="M887 3422 c-58 -61 -59 -151 -1 -201 97 -85 234 -22 234 108 0 34 -3
41 -20 41 -17 0 -20 -7 -20 -39 0 -55 -39 -101 -86 -101 -19 0 -34 3 -34 8 0
4 14 32 30 62 69 128 67 120 45 136 -10 8 -42 14 -70 14 -43 0 -56 -4 -78 -28z
m113 -22 c0 -12 -58 -121 -72 -135 -13 -13 -48 30 -48 59 0 11 9 36 20 54 17
27 25 32 60 32 22 0 40 -4 40 -10z"
      />
      <path
        d="M4060 3297 c-119 -55 -134 -177 -32 -255 28 -21 33 -22 38 -8 4 10
-5 29 -25 51 -75 86 -6 189 106 159 27 -7 56 -67 51 -104 -6 -40 29 -50 43
-13 19 52 -28 143 -88 168 -41 17 -59 18 -93 2z"
      />
      <path
        d="M722 3169 c-52 -26 -84 -72 -107 -154 -10 -33 -21 -68 -27 -78 -11
-23 -16 -19 57 -42 33 -10 78 -24 100 -31 63 -19 148 -43 169 -46 16 -2 23 10
42 72 27 86 30 159 10 198 -22 42 -67 79 -111 91 -58 16 -85 14 -133 -10z
m159 -60 c15 -10 34 -35 44 -55 16 -35 16 -40 0 -103 -20 -75 -29 -89 -47 -73
-7 5 -31 13 -53 17 -22 4 -44 11 -50 15 -5 4 -23 10 -40 14 -58 13 -85 28 -85
48 0 31 49 125 73 141 47 30 111 29 158 -4z"
      />
      <path
        d="M4355 2890 c-27 -5 -97 -13 -155 -19 -130 -15 -130 -15 -130 -47 0
-25 2 -26 38 -21 117 18 215 27 221 22 3 -4 -47 -57 -112 -119 -87 -82 -117
-117 -117 -135 0 -23 1 -24 78 -17 42 3 124 12 182 19 102 12 105 13 102 36
-3 34 -5 35 -59 23 -75 -17 -203 -25 -203 -14 0 6 4 12 9 14 5 2 57 49 115
105 88 86 106 108 106 133 0 18 -5 29 -12 29 -7 -1 -35 -5 -63 -9z"
      />
      <path
        d="M520 2594 l0 -26 75 4 c41 2 75 1 75 -2 0 -3 -9 -18 -20 -35 -31 -46
-27 -107 10 -148 41 -47 94 -61 153 -41 66 22 87 53 87 124 0 44 -4 61 -20 75
-21 19 -17 40 6 31 10 -4 14 2 14 19 l0 25 -190 0 -190 0 0 -26z m315 -49 c19
-18 25 -35 25 -69 0 -56 -32 -86 -92 -86 -51 0 -98 43 -98 90 0 77 110 121
165 65z"
      />
      <path
        d="M4107 2473 c-13 -13 -7 -42 11 -47 9 -2 48 -8 86 -12 83 -8 116 -33
116 -87 0 -60 -25 -72 -141 -69 -94 3 -99 2 -99 -17 0 -12 1 -21 3 -21 1 -1
47 -5 102 -10 126 -11 158 0 176 58 14 47 8 79 -21 109 -28 30 -12 36 66 22
55 -9 68 -9 75 2 19 30 5 44 -46 46 -55 3 -242 21 -291 28 -17 3 -33 2 -37 -2z"
      />
      <path
        d="M855 2301 c-11 -4 -45 -11 -75 -15 -78 -10 -120 -44 -120 -97 0 -48
13 -76 48 -106 27 -23 27 -23 5 -23 -19 0 -23 -6 -23 -31 0 -28 2 -31 23 -24
12 4 42 10 67 15 123 21 180 36 180 46 0 31 -12 43 -34 34 -40 -15 -152 -23
-173 -11 -26 13 -47 64 -39 95 6 25 54 56 87 56 10 0 41 5 69 11 44 9 51 14
48 32 -3 24 -30 31 -63 18z"
      />
      <path
        d="M4078 2141 c-30 -27 -33 -34 -32 -89 1 -46 -2 -59 -13 -55 -9 4 -13
-4 -13 -24 0 -26 4 -29 53 -42 160 -41 181 -38 217 21 26 43 29 154 4 144 -9
-3 -18 -6 -20 -6 -2 0 -4 -21 -4 -47 0 -59 -25 -96 -61 -91 -26 3 -26 7 -12
88 12 64 3 98 -31 115 -40 21 -51 19 -88 -14z m76 -34 c15 -11 17 -21 11 -60
-9 -59 -23 -78 -52 -71 -43 12 -47 102 -6 131 21 16 25 16 47 0z"
      />
      <path
        d="M930 1970 c0 -7 14 -28 30 -47 36 -41 40 -89 9 -121 -20 -22 -39 -22
-39 0 0 5 -6 24 -14 41 -8 18 -22 53 -32 79 -23 59 -40 61 -94 10 -32 -31 -40
-46 -40 -73 2 -77 68 -149 139 -149 39 0 93 28 122 63 29 35 25 113 -9 162
-27 38 -72 60 -72 35z m-65 -97 c38 -88 45 -104 45 -108 0 -3 -16 -5 -34 -5
-28 0 -40 7 -60 33 -29 38 -31 54 -14 92 17 37 44 32 63 -12z"
      />
      <path
        d="M3962 1837 c-29 -31 -30 -87 -2 -87 14 0 20 7 20 24 0 43 36 42 133
-4 41 -19 48 -26 42 -44 -17 -54 -17 -66 -2 -66 8 0 20 14 27 30 12 29 15 30
55 24 35 -5 43 -3 49 12 4 10 4 20 -1 21 -40 15 -58 31 -55 51 3 23 -21 31
-34 11 -8 -13 -41 -5 -107 26 -63 31 -97 32 -125 2z"
      />
      <path
        d="M1050 1735 c0 -8 6 -24 12 -35 17 -26 5 -45 -47 -76 -45 -27 -87 -46
-90 -42 -2 2 -11 17 -22 35 -14 24 -23 29 -33 23 -13 -8 -13 -14 3 -41 24 -42
22 -53 -13 -66 -27 -10 -28 -13 -17 -36 l12 -26 31 20 c28 17 34 18 46 5 18
-18 37 -7 35 18 -2 14 19 33 73 66 71 44 75 49 78 86 2 28 -3 46 -16 62 -22
25 -52 29 -52 7z"
      />
      <path
        d="M1157 1553 c-15 -14 -6 -31 23 -43 16 -7 36 -23 45 -36 17 -26 20
-81 5 -104 -11 -17 -4 -23 -94 89 -27 33 -51 61 -53 61 -2 0 -17 -13 -33 -30
-100 -102 31 -272 158 -206 57 30 77 63 77 126 0 52 -4 63 -30 90 -16 18 -42
38 -57 46 -31 16 -32 16 -41 7z m-2 -175 c33 -46 34 -48 15 -58 -61 -32 -143
59 -105 116 16 25 17 25 36 8 11 -10 35 -39 54 -66z"
      />
      <path
        d="M3782 1538 c-7 -7 -12 -15 -12 -19 0 -7 151 -123 216 -167 l35 -23
-32 -44 c-31 -43 -34 -75 -7 -75 16 1 168 205 168 226 0 25 -33 15 -62 -18
-15 -18 -28 -36 -28 -40 0 -11 -27 -10 -32 0 -4 10 -218 172 -228 172 -3 0
-11 -5 -18 -12z"
      />
      <path
        d="M3647 1383 c-16 -16 -13 -20 43 -79 65 -67 76 -106 45 -151 -13 -18
-12 -22 4 -37 17 -15 19 -15 32 0 7 9 12 31 12 50 -1 38 0 39 27 22 16 -10 22
-10 35 2 13 14 4 26 -83 113 -92 91 -99 96 -115 80z"
      />
      <path
        d="M1334 1338 c-66 -73 -114 -146 -114 -172 0 -18 12 -40 34 -62 28 -28
42 -34 75 -34 42 0 50 -7 29 -28 -10 -10 -8 -16 7 -31 20 -19 21 -18 107 82
81 96 85 103 70 120 -15 17 -20 15 -84 -52 -76 -80 -98 -86 -147 -45 -50 42
-44 61 56 182 31 38 32 40 14 56 -17 15 -20 14 -47 -16z"
      />
      <path
        d="M3505 1246 c-35 -16 -60 -42 -70 -74 -5 -19 -9 -21 -21 -11 -17 14
-48 -6 -40 -27 10 -27 116 -162 131 -168 63 -24 175 45 175 108 0 27 -22 18
-57 -24 -28 -32 -41 -40 -69 -40 -58 0 -55 25 9 82 48 41 57 55 57 82 0 62
-57 98 -115 72z m63 -48 c22 -22 13 -46 -32 -82 -50 -41 -61 -44 -76 -16 -30
56 65 141 108 98z"
      />
      <path
        d="M1597 1120 c-38 -12 -55 -27 -78 -71 -24 -49 -24 -86 1 -127 29 -47
76 -72 136 -72 59 0 93 21 118 74 20 43 20 79 0 122 -27 57 -113 93 -177 74z
m115 -67 c40 -38 38 -81 -7 -129 -31 -33 -39 -36 -72 -31 -51 9 -78 38 -78 87
0 86 96 131 157 73z"
      />
      <path
        d="M3288 1099 c-16 -9 -16 -12 2 -47 50 -98 60 -130 46 -157 -19 -35
-46 -54 -78 -55 -32 0 -69 45 -103 123 -15 34 -26 47 -41 47 -11 0 -23 -3 -26
-6 -3 -3 13 -45 37 -93 44 -89 81 -131 117 -131 34 0 96 41 109 72 12 30 29
38 29 13 0 -8 4 -15 9 -15 18 0 41 12 41 22 0 16 -110 238 -118 238 -4 0 -15
-5 -24 -11z"
      />
      <path
        d="M1920 968 c-48 -128 -64 -148 -126 -148 -34 0 -43 -4 -47 -21 -8 -32
29 -38 86 -14 15 6 17 4 12 -17 -6 -21 -2 -26 19 -30 21 -4 26 -1 31 23 4 16
11 31 16 34 5 4 9 13 9 22 0 8 7 31 16 51 9 21 22 52 30 71 11 25 12 36 3 47
-19 23 -36 16 -49 -18z"
      />
      <path d="M2876 935 c-7 -20 3 -45 19 -45 19 0 36 25 29 44 -8 20 -40 21 -48 1z" />
      <path
        d="M2181 865 c-17 -86 -18 -87 -77 -74 -105 23 -114 23 -114 2 0 -21 33
-35 115 -51 22 -4 40 -12 40 -17 -1 -6 -5 -32 -9 -58 -8 -46 -10 -49 -35 -43
-129 28 -152 30 -162 16 -15 -24 -11 -28 44 -38 28 -6 81 -17 117 -26 36 -8
65 -14 66 -13 1 1 9 38 19 82 9 44 23 103 30 130 7 28 15 64 18 80 3 17 8 37
12 46 5 13 -1 18 -23 21 -28 4 -29 3 -41 -57z"
      />
    </g>
  </svg>
)
