// --- CHANGED PART START: Rebuilt entire dataset ---
// 1. Removed strict `as WaterParameters` typescript casting to fix the TS(2352) compilation error.
// 2. Added all 17 categories with proper sub-categories.
// 3. Guaranteed a `challenges` array and `typicalValues` object exist for EVERY entry to prevent crashes.
// --- CHANGED PART END -----------------------------

export const industries = [
  {
    id: 'pharma',
    name: 'Pharmaceutical',
    subCategories: [
      {
        id: 'api-bulk',
        name: 'Bulk Drug (API)',
        challenges: [
          "High Refractory COD management (non-biodegradable organics)",
          "Recovery and treatment of complex solvents (Methanol/Toluene)",
          "Treatment of biocidal antibiotic residues that kill active sludge"
        ],
        typicalValues: { cod: 12000, bod: 4000, ph: 6.5, tss: 800, tds: 5000 }
      },
      {
        id: 'formulation',
        name: 'Formulation & Fill-Finish',
        challenges: [
          "High variability in batch-wise effluent (sugars vs acids)",
          "Management of active ingredient cross-contamination",
          "High detergent and surfactant load from equipment cleaning"
        ],
        typicalValues: { cod: 1500, bod: 400, ph: 7.2, tss: 300, tds: 1200 }
      }
    ]
  },
  {
    id: 'distillery',
    name: 'Distillery & Fermentation',
    subCategories: [
      {
        id: 'molasses',
        name: 'Molasses-Based',
        challenges: [
          "Achieving Zero Liquid Discharge (ZLD) due to extreme toxicity",
          "Treatment of high-color melanoidins (dark brown effluent)",
          "Extreme BOD/COD loading from spent wash"
        ],
        typicalValues: { cod: 100000, bod: 45000, ph: 4.2, tss: 4000, tds: 25000 }
      },
      {
        id: 'grain',
        name: 'Grain-Based',
        challenges: [
          "High suspended solids and dissolved proteins (mash waste)",
          "Fouling of ultra-filtration membranes",
          "Management of yeast sludge"
        ],
        typicalValues: { cod: 40000, bod: 18000, ph: 4.5, tss: 6000, tds: 8000 }
      }
    ]
  },
  {
    id: 'textile',
    name: 'Textile & Dyeing',
    subCategories: [
      {
        id: 'dyeing',
        name: 'Dyeing & Printing',
        challenges: [
          "Complete color removal to meet strict aesthetic discharge limits",
          "Heavy metal contamination (Chromium) from specific synthetic dyes",
          "High dissolved salts from reactive dyeing processes"
        ],
        typicalValues: { cod: 2500, bod: 800, ph: 9.5, tss: 400, tds: 6000 }
      },
      {
        id: 'pretreatment',
        name: 'Pre-treatment (Scouring)',
        challenges: [
          "Neutralizing extremely high pH levels cost-effectively",
          "Removing natural waxes, pectin, and oils from raw fibers",
          "Handling high temperatures from continuous bleaching"
        ],
        typicalValues: { cod: 1800, bod: 600, ph: 11.5, tss: 300, tds: 3000 }
      }
    ]
  },
  {
    id: 'pulp-paper',
    name: 'Pulp & Paper Mills',
    subCategories: [
      {
        id: 'chemical-pulping',
        name: 'Chemical Pulping (Kraft)',
        challenges: [
          "Recovery of 'Black Liquor' to prevent ecosystem collapse",
          "High lignin content creating dark, toxic effluent",
          "Foul odor management (hydrogen sulfide and mercaptans)"
        ],
        typicalValues: { cod: 8000, bod: 2500, ph: 10.0, tss: 1500, tds: 4500 }
      },
      {
        id: 'bleaching',
        name: 'Bleaching Units',
        challenges: [
          "Reduction of Adsorbable Organic Halides (AOX) which are carcinogenic",
          "High residual chlorine toxicity",
          "Complex organochlorine compound degradation"
        ],
        typicalValues: { cod: 3000, bod: 900, ph: 3.5, tss: 500, tds: 2500 }
      }
    ]
  },
  {
    id: 'tannery',
    name: 'Tannery (Leather)',
    subCategories: [
      {
        id: 'chrome-tanning',
        name: 'Tanyard (Chrome Tanning)',
        challenges: [
          "Containment and recovery of toxic Hexavalent Chromium",
          "Extremely high heavy metal toxicity to biological treatment",
          "Acidic effluent requiring significant neutralization"
        ],
        typicalValues: { cod: 4000, bod: 1200, ph: 3.8, tss: 2000, tds: 15000 }
      },
      {
        id: 'beamhouse',
        name: 'Beamhouse Operations',
        challenges: [
          "High sulfide content producing lethal hydrogen sulfide gas (rotten egg odor)",
          "Massive Total Dissolved Solids (TDS) from hide curing salts",
          "High suspended solids (hair, flesh, lime)"
        ],
        typicalValues: { cod: 6000, bod: 2500, ph: 11.0, tss: 4000, tds: 20000 }
      }
    ]
  },
  {
    id: 'oil-refinery',
    name: 'Oil Refineries & Petrochemicals',
    subCategories: [
      {
        id: 'desalting',
        name: 'Desalting Units',
        challenges: [
          "Breaking complex oil-water emulsions",
          "Preventing extreme corrosion in treatment plant piping",
          "High dissolved salts mixed with hydrocarbons"
        ],
        typicalValues: { cod: 2500, bod: 500, ph: 6.8, tss: 400, tds: 30000 }
      },
      {
        id: 'cracking',
        name: 'Catalytic Cracking',
        challenges: [
          "Destruction of stable phenolic rings toxic to bacteria",
          "High levels of sour water (hydrogen sulfide and ammonia)",
          "Trace heavy metals from catalyst degradation"
        ],
        typicalValues: { cod: 3500, bod: 800, ph: 8.5, tss: 600, tds: 4000 }
      }
    ]
  },
  {
    id: 'dairy-food',
    name: 'Dairy & Food Processing',
    subCategories: [
      {
        id: 'dairy',
        name: 'Milk & Cheese Production',
        challenges: [
          "Prevention of 'fat caps' in reactors that block oxygen transfer",
          "High organic shock loads from whey dumps",
          "Rapid acidification if waste is left untreated (sour milk)"
        ],
        typicalValues: { cod: 4500, bod: 2500, ph: 5.5, tss: 1200, tds: 1500 }
      },
      {
        id: 'meat',
        name: 'Meat & Poultry Processing',
        challenges: [
          "High pathogenic load requiring strict disinfection",
          "Extreme nutrient loading (Nitrogen/Phosphorus) from blood and proteins",
          "Floating fat and grease management"
        ],
        typicalValues: { cod: 7000, bod: 3500, ph: 6.8, tss: 2500, tds: 2000 }
      }
    ]
  },
  {
    id: 'fertilizer',
    name: 'Fertilizer Manufacturing',
    subCategories: [
      {
        id: 'nitrogenous',
        name: 'Nitrogenous Plants (Urea)',
        challenges: [
          "High ammonia toxicity which kills aquatic life instantly",
          "Prevention of downstream eutrophication (algal blooms)",
          "High energy cost for ammonia stripping towers"
        ],
        typicalValues: { cod: 200, bod: 50, ph: 9.5, tss: 100, tds: 3500 }
      },
      {
        id: 'phosphatic',
        name: 'Phosphatic Plants (DAP)',
        challenges: [
          "Safe management of phosphogypsum stacks",
          "Fluoride toxicity in effluent",
          "High acidity and dissolved phosphate levels"
        ],
        typicalValues: { cod: 150, bod: 30, ph: 2.5, tss: 800, tds: 8000 }
      }
    ]
  },
  {
    id: 'iron-steel',
    name: 'Iron & Steel Plants',
    subCategories: [
      {
        id: 'coke-ovens',
        name: 'Coke Ovens',
        challenges: [
          "Lethal cyanide concentrations requiring alkaline chlorination",
          "High phenol and ammonia stripping requirements",
          "Presence of carcinogenic polycyclic aromatic hydrocarbons (PAHs)"
        ],
        typicalValues: { cod: 4000, bod: 800, ph: 8.8, tss: 500, tds: 5000 }
      },
      {
        id: 'pickling',
        name: 'Pickling Lines',
        challenges: [
          "Disposal or regeneration of highly acidic 'Spent Pickle Liquor'",
          "Massive concentrations of dissolved iron",
          "Heavy metal precipitation and sludge handling"
        ],
        typicalValues: { cod: 100, bod: 0, ph: 1.5, tss: 1200, tds: 15000 }
      }
    ]
  },
  {
    id: 'electroplating',
    name: 'Electroplating & Metal Finishing',
    subCategories: [
      {
        id: 'cyanide-plating',
        name: 'Cyanide Bath Plating',
        challenges: [
          "Prevention of lethal cyanide gas formation during pH adjustment",
          "Complete destruction of cyanide complexes before metal precipitation",
          "Handling extremely toxic sludges"
        ],
        typicalValues: { cod: 300, bod: 50, ph: 10.5, tss: 200, tds: 8000 }
      },
      {
        id: 'acid-plating',
        name: 'Acid Pickling & Galvanizing',
        challenges: [
          "Precise pH control to precipitate dissolved zinc/copper as solids",
          "Massive sludge generation requiring hazardous landfill disposal",
          "Highly corrosive raw effluent"
        ],
        typicalValues: { cod: 150, bod: 20, ph: 2.0, tss: 600, tds: 12000 }
      }
    ]
  },
  {
    id: 'thermal-power',
    name: 'Thermal Power Plants',
    subCategories: [
      {
        id: 'cooling',
        name: 'Cooling Systems',
        challenges: [
          "Thermal pollution (heat discharge) shocking local aquatic ecosystems",
          "Biocide and anti-scaling chemical residues from blowdown",
          "Massive volumetric flow making treatment expensive"
        ],
        typicalValues: { cod: 50, bod: 10, ph: 7.5, tss: 50, tds: 1500 }
      },
      {
        id: 'ash-pond',
        name: 'Ash Pond Effluent',
        challenges: [
          "Leaching of heavy metals (Arsenic, Mercury, Lead) into groundwater",
          "High suspended silt and fly ash",
          "Alkaline pH from ash interaction with water"
        ],
        typicalValues: { cod: 100, bod: 10, ph: 9.5, tss: 3000, tds: 2500 }
      }
    ]
  },
  {
    id: 'sugar',
    name: 'Sugar Industry',
    subCategories: [
      {
        id: 'milling',
        name: 'Cane Crushing & Extraction',
        challenges: [
          "Rapid growth of filamentous bacteria causing sludge bulking",
          "High organic spills creating sudden BOD shock loads",
          "Foul odors from stagnant sugar water fermenting"
        ],
        typicalValues: { cod: 4500, bod: 2000, ph: 5.5, tss: 1500, tds: 2000 }
      },
      {
        id: 'clarification',
        name: 'Clarification & Evaporation',
        challenges: [
          "Management of bulky 'filter press mud'",
          "Sulfur-rich condensates causing toxicity",
          "High temperature effluent from evaporators"
        ],
        typicalValues: { cod: 3000, bod: 1500, ph: 6.0, tss: 2000, tds: 1800 }
      }
    ]
  },
  {
    id: 'pesticide',
    name: 'Pesticide & Agrochemicals',
    subCategories: [
      {
        id: 'insecticide',
        name: 'Insecticide Synthesis',
        challenges: [
          "Total destruction of neurotoxic organophosphates",
          "Preventing bioaccumulation of Persistent Organic Pollutants (POPs)",
          "Extremely high toxicity to biological treatment microbes"
        ],
        typicalValues: { cod: 15000, bod: 2000, ph: 6.5, tss: 500, tds: 10000 }
      },
      {
        id: 'herbicide',
        name: 'Herbicide Production',
        challenges: [
          "Effluent specifically designed to kill plant life and algae",
          "Presence of complex chlorinated aromatic compounds",
          "Requirement for advanced oxidation processes (AOP)"
        ],
        typicalValues: { cod: 12000, bod: 1500, ph: 4.5, tss: 400, tds: 8000 }
      }
    ]
  },
  {
    id: 'chemical',
    name: 'Chemical & Specialty Chemicals',
    subCategories: [
      {
        id: 'chlor-alkali',
        name: 'Chlor-Alkali Plants',
        challenges: [
          "Legacy mercury remediation from older cell technologies",
          "Extremely high salt (brine) and chlorine concentrations",
          "High alkalinity requiring massive acid dosing for neutralization"
        ],
        typicalValues: { cod: 200, bod: 0, ph: 12.5, tss: 100, tds: 45000 }
      },
      {
        id: 'dyes-pigments',
        name: 'Dye & Pigment Manufacturing',
        challenges: [
          "Intense color pollution visible even at parts-per-billion levels",
          "High Chemical Oxygen Demand (COD) that is entirely non-biodegradable",
          "Heavy metal oxides (Titanium, Copper) in suspension"
        ],
        typicalValues: { cod: 25000, bod: 3000, ph: 7.0, tss: 1500, tds: 15000 }
      }
    ]
  },
  {
    id: 'slaughterhouse',
    name: 'Slaughterhouses & Rendering',
    subCategories: [
      {
        id: 'killing-floor',
        name: 'Lairage & Killing Floor',
        challenges: [
          "Screening out large solids (manure, straw, hooves) that break pumps",
          "Extreme organic loading from pure blood",
          "High pathogen risk requiring stringent final disinfection"
        ],
        typicalValues: { cod: 8000, bod: 4000, ph: 7.2, tss: 3500, tds: 3000 }
      },
      {
        id: 'rendering',
        name: 'Rendering Plants',
        challenges: [
          "Cooling high-temperature effluent",
          "Massive fat, oil, and grease (FOG) loading requiring DAF systems",
          "Severe odor complaints if tanks go anaerobic"
        ],
        typicalValues: { cod: 15000, bod: 8000, ph: 6.5, tss: 5000, tds: 4000 }
      }
    ]
  },
  {
    id: 'mining',
    name: 'Mining & Ore Processing',
    subCategories: [
      {
        id: 'amd',
        name: 'Acid Mine Drainage',
        challenges: [
          "Passive, perpetual treatment long after a mine closes",
          "Extreme acidity dissolving surrounding rock and soil",
          "High concentrations of dissolved iron and sulfur turning water orange"
        ],
        typicalValues: { cod: 50, bod: 0, ph: 2.5, tss: 1200, tds: 6000 }
      },
      {
        id: 'cyanide-leach',
        name: 'Cyanide Leaching (Gold)',
        challenges: [
          "Toxic cyanide runoff from tailings dams",
          "Requirement for chemical destruction (INCO process) before release",
          "Heavy metal co-contamination (Arsenic, Copper)"
        ],
        typicalValues: { cod: 300, bod: 20, ph: 9.5, tss: 2000, tds: 4500 }
      }
    ]
  },
  {
    id: 'fmcg',
    name: 'Fast Moving Consumer Goods',
    subCategories: [
      {
        id: 'personal-care',
        name: 'Personal Care (Soaps/Shampoos)',
        challenges: [
          "Massive foaming in aeration tanks due to high surfactant load",
          "Breaking down synthetic fragrances and parabens",
          "Emulsified oils bypassing standard separation"
        ],
        typicalValues: { cod: 5000, bod: 2500, ph: 8.5, tss: 800, tds: 2000 }
      },
      {
        id: 'cosmetics',
        name: 'Cosmetic Manufacturing',
        challenges: [
          "Filtering out waterproof waxes and oils",
          "Microplastic and glitter pollution",
          "Titanium dioxide and zinc oxide particulate removal"
        ],
        typicalValues: { cod: 8000, bod: 3000, ph: 7.5, tss: 1200, tds: 2500 }
      }
    ]
  }
];