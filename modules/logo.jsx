import Box from "@mui/material/Box";

export default function SturmLogo({ size = 40, color = "#FFFFFF" }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        color,
        // MUI / Global CSS Fix: alles was "nf" ist darf niemals gefüllt werden
        "& .sturmLogo .nf": { fill: "none !important" },
      }}
    >
      <svg
        className="sturmLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-label="Sturm FPV Logo"
        style={{
          width: size,
          height: size,
          display: "block",
        }}
      >
        {/* Outer ring (dünner) */}
        <circle
          className="nf"
          cx="256"
          cy="256"
          r="198"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
        />

        <g transform="translate(-29.36 0)">
          <g transform="translate(256 256) scale(0.92) translate(-256 -256)">
            {/* Swirl (dünner + ohne non-scaling-stroke) */}
            <path
              className="nf"
              d="M140 250c14-74 92-126 173-112c52 9 88 44 88 86c0 45-36 78-84 78c-39 0-67-22-67-54c0-28 22-46 50-46"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.92"
            />
            <path
              className="nf"
              d="M168 318c32 56 104 84 170 68c66-16 108-72 94-128"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              className="nf"
              d="M198 180c-44 34-62 90-40 140"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.45"
            />

            {/* Eye (grün) */}
            <circle
              className="nf"
              cx="314"
              cy="256"
              r="24"
              stroke="#66BB6A"
              strokeWidth="5"
              opacity="0.98"
            />
            <circle cx="314" cy="256" r="10" fill="#66BB6A" />
            <circle cx="314" cy="256" r="4" fill="#0B1220" />
            <circle cx="307" cy="249" r="2.6" fill="#FFFFFF" opacity="0.35" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
