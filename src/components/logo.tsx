import { cn } from "@/lib/utils";
import React from "react";

export const CloudKonnectLogo = ({
  className,
}: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={cn("text-primary", className)}
    aria-label="Cloud Konnect Logo"
  >
    <g fill="currentColor">
      {/* Central Blue Cloud */}
      <path
        className="animate-float"
        style={{ animationDelay: "0s" }}
        d="M168,88a52,52,0,0,0-47.1,32.3A52.1,52.1,0,0,0,128,120a52,52,0,0,0-52,52,4,4,0,0,0,4,4h84a4,4,0,0,0,4-4A52,52,0,0,0,168,88Z"
        opacity="0.8"
      />
      {/* Red Cloud */}
      <path
        className="text-[hsl(var(--chart-2))] animate-float"
        style={{ animationDelay: "0.5s" }}
        d="M100,80a44,44,0,0,0-39.6,27.2,4,4,0,0,0,3,5.1,3.8,3.8,0,0,0,5.1-3A36,36,0,0,1,100,88a35.6,35.6,0,0,1,25.4,10.6,4,4,0,0,0,5.7-5.7A43.7,43.7,0,0,0,100,80Z"
        opacity="0.9"
      />
      {/* Yellow Cloud */}
      <path
        className="text-[hsl(var(--chart-4))] animate-float"
        style={{ animationDelay: "1s" }}
        d="M200,128a44,44,0,0,0-41.5-43.9,4,4,0,0,0-3.9,4.4,4.1,4.1,0,0,0,4.4,3.9A36,36,0,0,1,192,128a35.6,35.6,0,0,1-10.6,25.4,4,4,0,1,0,5.7,5.7A44,44,0,0,0,200,128Z"
        opacity="0.9"
      />
      {/* Green Cloud */}
      <path
        className="text-[hsl(var(--chart-3))] animate-float"
        style={{ animationDelay: "1.5s" }}
        d="M188,184a44,44,0,0,0,32.4-14.7,4,4,0,0,0-5.7-5.7A36,36,0,0,1,188,176a35.6,35.6,0,0,1-25.4-10.6,4,4,0,0,0-5.7,5.7A43.7,43.7,0,0,0,188,184Z"
        opacity="0.9"
      />
    </g>
  </svg>
);
