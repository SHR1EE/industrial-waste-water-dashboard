"use client";

import React from "react";

import ParameterSlider from "@/components/ui/ParameterSlider";
import { useDashboard } from "@/hooks/useDashboard";

export default function Dashboard() {
 const { selectedSubCategory, parameters, handleParameterChange } = useDashboard();

  return (
    <div className="h-full overflow-y-auto bg-background p-8 text-foreground">
      {selectedSubCategory ? (
        <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in duration-500">
          {/* Header Section */}
          <header className="border-b pb-4">
            <h1 className="mb-2 text-3xl font-bold">
              {selectedSubCategory.name}
            </h1>

            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Effluent Profile Analysis
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column: Challenges Panel */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-xl font-semibold">
                Key Challenges
              </h3>

              <div className="space-y-4 rounded-xl border bg-card p-5 text-card-foreground shadow-sm">
                {selectedSubCategory.challenges &&
                selectedSubCategory.challenges.length > 0 ? (
                  selectedSubCategory.challenges.map(
                    (challenge: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {challenge}
                        </p>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    No specific challenges documented for this
                    sub-category yet.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Parameters Panel */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-xl font-semibold">
                Parameter Modification Control
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ParameterSlider
                  label="BOD (Biochemical Oxygen Demand)"
                  value={parameters.bod}
                  min={0}
                  max={100000}
                  unit="mg/L"
                  onChange={(val) =>
                    handleParameterChange("bod", val)
                  }
                />

                <ParameterSlider
                  label="COD (Chemical Oxygen Demand)"
                  value={parameters.cod}
                  min={0}
                  max={150000}
                  unit="mg/L"
                  onChange={(val) =>
                    handleParameterChange("cod", val)
                  }
                />

                <ParameterSlider
                  label="TSS (Total Suspended Solids)"
                  value={parameters.tss}
                  min={0}
                  max={20000}
                  unit="mg/L"
                  onChange={(val) =>
                    handleParameterChange("tss", val)
                  }
                />

                <ParameterSlider
                  label="TDS (Total Dissolved Solids)"
                  value={parameters.tds}
                  min={0}
                  max={50000}
                  unit="mg/L"
                  onChange={(val) =>
                    handleParameterChange("tds", val)
                  }
                />

                <div className="md:col-span-2">
                  <ParameterSlider
                    label="pH Level"
                    value={parameters.ph}
                    min={0}
                    max={14}
                    unit="pH"
                    onChange={(val) =>
                      handleParameterChange("ph", val)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Welcome Screen */
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed">
            <span className="absolute text-2xl">⚡</span>

            <div className="absolute h-full w-full animate-ping rounded-full bg-muted" />
          </div>

          <h2 className="mb-3 text-2xl font-medium">
            System Ready
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Select an industrial sector from the left control
            panel to begin effluent parameter analysis and review
            treatment challenges.
          </p>
        </div>
      )}
    </div>
  );
}