'use client';
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import ParameterSlider from '@/components/ui/ParameterSlider';
import { useDashboard } from '@/hooks/useDashboard'; 

export default function Dashboard() {
  const { 
    selectedSubCategory, 
    setSelectedSubCategory, 
    parameters, 
    handleParameterChange 
  } = useDashboard();

  return (
    <div className="flex h-screen bg-[#0A192F] text-slate-200 overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar onSelectSubCategory={setSelectedSubCategory} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        {selectedSubCategory ? (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            
            {/* Header Section */}
            <header className="border-b border-teal-900/30 pb-4">
              <h1 className="text-3xl font-ibm-sans font-bold text-white mb-2">
                {selectedSubCategory.name}
              </h1>
              <p className="text-teal-400 text-sm tracking-wide uppercase">
                Effluent Profile Analysis
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Challenges Panel */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400 flex items-center gap-2">
                  Key Challenges
                </h3>
                <div className="bg-[#060B13] border border-slate-800 p-5 rounded-xl space-y-4">
                  
                  {/* --- CHANGED PART START: Added defensive check to prevent .map() on undefined challenges --- */}
                  {selectedSubCategory.challenges && selectedSubCategory.challenges.length > 0 ? (
                    selectedSubCategory.challenges.map((challenge: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <p className="text-sm text-slate-300 leading-relaxed">{challenge}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-500 italic">No specific challenges documented for this sub-category yet.</p>
                  )}
                  {/* --- CHANGED PART END ------------------------------------------------------------------- */}

                </div>
              </div>

              {/* Right Column: Parameters Panel */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold text-teal-400">
                  Parameter Modification Control
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ParameterSlider 
                    label="BOD (Biochemical Oxygen Demand)" 
                    value={parameters.bod} 
                    min={0} max={100000} unit="mg/L" 
                    onChange={(val) => handleParameterChange('bod', val)} 
                  />
                  <ParameterSlider 
                    label="COD (Chemical Oxygen Demand)" 
                    value={parameters.cod} 
                    min={0} max={150000} unit="mg/L" 
                    onChange={(val) => handleParameterChange('cod', val)} 
                  />
                  <ParameterSlider 
                    label="TSS (Total Suspended Solids)" 
                    value={parameters.tss} 
                    min={0} max={20000} unit="mg/L" 
                    onChange={(val) => handleParameterChange('tss', val)} 
                  />
                  <ParameterSlider 
                    label="TDS (Total Dissolved Solids)" 
                    value={parameters.tds} 
                    min={0} max={50000} unit="mg/L" 
                    onChange={(val) => handleParameterChange('tds', val)} 
                  />
                  <div className="md:col-span-2">
                    <ParameterSlider 
                      label="pH Level" 
                      value={parameters.ph} 
                      min={0} max={14} unit="pH" 
                      onChange={(val) => handleParameterChange('ph', val)} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Welcome Screen */
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-500">
            <div className="w-16 h-16 mb-6 rounded-full border-2 border-teal-900/50 flex items-center justify-center border-dashed relative">
              <span className="text-teal-500 text-2xl absolute">⚡</span>
              <div className="absolute w-full h-full rounded-full animate-ping bg-teal-500/10" />
            </div>
            <h2 className="text-2xl font-ibm-sans font-medium text-slate-300 mb-3">System Ready</h2>
            <p className="max-w-md text-sm leading-relaxed">
              Select an industrial sector from the left control panel to begin effluent parameter analysis and review treatment challenges.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}