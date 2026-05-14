// Complete dataset with all 17 Categories and 3+ Sub-categories each.
// Includes realistic baseline parameter values for the interactive sliders.

export const industries = [
  {
    id: 'pharma',
    name: 'Pharmaceutical Industry',
    subCategories: [
      {
        id: 'api-bulk',
        name: 'Bulk Drug (API)',
        challenges: [
          "Managing 'Refractory COD' (chemicals that won't break down biologically)",
          "Recovering expensive and complex solvents"
        ],
        typicalValues: { cod: 12000, bod: 4000, ph: 6.5, tss: 800, tds: 5000 }
      },
      {
        id: 'formulation',
        name: 'Formulation',
        challenges: [
          "Handling high variability of batches",
          "Managing erratic pH shifts (one day sugary, the next acidic)"
        ],
        typicalValues: { cod: 1500, bod: 400, ph: 7.2, tss: 300, tds: 1200 }
      },
      {
        id: 'biologics',
        name: 'Biologics',
        challenges: [
          "Maintaining sterile conditions to prevent contamination",
          "Preventing 'wild' bacteria from destroying treatment reactors"
        ],
        typicalValues: { cod: 8000, bod: 4500, ph: 6.8, tss: 1200, tds: 2500 }
      },
      {
        id: 'rd-labs',
        name: 'R&D Labs',
        challenges: [
          "Dealing with completely unknown chemical mixtures",
          "Treating very small but highly concentrated and toxic volumes"
        ],
        typicalValues: { cod: 3000, bod: 500, ph: 7.0, tss: 200, tds: 4000 }
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
          "Achieving 'Zero Liquid Discharge' (ZLD) due to extreme toxicity",
          "Spent wash is too concentrated to ever be discharged into natural waters"
        ],
        typicalValues: { cod: 100000, bod: 45000, ph: 4.2, tss: 4000, tds: 25000 }
      },
      {
        id: 'grain',
        name: 'Grain-Based',
        challenges: [
          "Efficiently separating fine suspended proteins",
          "Preventing mash waste from clogging standard biological filters"
        ],
        typicalValues: { cod: 40000, bod: 18000, ph: 4.5, tss: 6000, tds: 8000 }
      },
      {
        id: 'wineries',
        name: 'Wineries',
        challenges: [
          "Managing extreme organic 'shock loads' during the short harvest season",
          "Maintaining treatment plant biology while the plant sits idle the rest of the year"
        ],
        typicalValues: { cod: 15000, bod: 7500, ph: 3.8, tss: 2500, tds: 3000 }
      }
    ]
  },
  {
    id: 'textile',
    name: 'Textile & Dyeing',
    subCategories: [
      {
        id: 'pre-treatment',
        name: 'Pre-treatment',
        processStages: [
          'Desizing',
          'Scouring',
          'Bleaching',
          'Mercerizing'
        ],
        pollutants: [
          'Alkaline chemicals',
          'Detergents',
          'Starch',
          'Hydrogen peroxide',
          'Suspended solids'
        ],
        challenges: [
          "Neutralizing extremely high pH levels caused by caustic soda usage",
          "Reducing high TDS generated from chemical washing operations",
          "Managing fluctuating alkalinity during batch processing",
          "Minimizing sludge generation during neutralization"
        ],
        wastewaterCharacteristics: {
          nature: 'Highly alkaline with moderate organic load',
          color: 'Low to moderate',
          biodegradability: 'Medium'
        },
        typicalValues: {
          cod: 1800,
          bod: 600,
          ph: 11.5,
          tss: 300,
          tds: 3000,
          conductivity: 4200,
          temperature: 38
        },
        realisticRanges: {
          ph: [10.0, 12.5],
          bod: [300, 1200],
          cod: [1000, 3500],
          tss: [150, 800],
          tds: [2000, 6000]
        }
      },

      {
        id: 'dyeing-printing',
        name: 'Dyeing & Printing',
        processStages: [
          'Reactive Dyeing',
          'Pigment Printing',
          'Washing',
          'Color Fixing'
        ],
        pollutants: [
          'Synthetic dyes',
          'Salts',
          'Heavy metals',
          'Pigments',
          'Urea',
          'Surfactants'
        ],
        challenges: [
          "Complete color removal to meet visual discharge standards",
          "Managing extremely high salt concentrations from reactive dyes",
          "Preventing even small dye concentrations from visibly contaminating water bodies",
          "Treating non-biodegradable dye compounds resistant to biological treatment"
        ],
        wastewaterCharacteristics: {
          nature: 'Highly colored with high dissolved salts',
          color: 'Very high',
          biodegradability: 'Low to medium'
        },
        typicalValues: {
          cod: 2500,
          bod: 800,
          ph: 9.5,
          tss: 400,
          tds: 6000,
          conductivity: 8500,
          temperature: 42
        },
        realisticRanges: {
          ph: [8.0, 11.0],
          bod: [500, 2000],
          cod: [1500, 7000],
          tss: [250, 1500],
          tds: [4000, 12000]
        }
      },

      {
        id: 'finishing',
        name: 'Finishing',
        processStages: [
          'Softening',
          'Coating',
          'Waterproofing',
          'Flame Retardant Treatment'
        ],
        pollutants: [
          'Resins',
          'PFAS',
          'Formaldehyde compounds',
          'Silicones',
          'Micro-pollutants'
        ],
        challenges: [
          "Removing persistent micro-pollutants from treated water",
          "Treating PFAS and water-resistant coating chemicals",
          "Reducing toxicity from finishing auxiliaries",
          "Managing low-biodegradability wastewater streams"
        ],
        wastewaterCharacteristics: {
          nature: 'Chemically complex with persistent organics',
          color: 'Moderate',
          biodegradability: 'Low'
        },
        typicalValues: {
          cod: 3000,
          bod: 1000,
          ph: 8.0,
          tss: 500,
          tds: 4000,
          conductivity: 5200,
          temperature: 36
        },
        realisticRanges: {
          ph: [6.5, 9.0],
          bod: [700, 2500],
          cod: [2000, 9000],
          tss: [300, 1800],
          tds: [2500, 7000]
        }
      }
    ]
  },
  {
    id: 'pulp-paper',
    name: 'Pulp & Paper Mills',
    subCategories: [
      {
        id: 'chemical-pulping',
        name: 'Chemical Pulping',
        challenges: [
          "Recovering the highly toxic 'Black Liquor' for chemical reuse",
          "Preventing total aquatic ecosystem collapse from lignin discharge"
        ],
        typicalValues: { cod: 8000, bod: 2500, ph: 10.0, tss: 1500, tds: 4500 }
      },
      {
        id: 'bleaching',
        name: 'Bleaching',
        challenges: [
          "Reducing Adsorbable Organic Halides (AOX)",
          "Removing carcinogenic by-products before environmental discharge"
        ],
        typicalValues: { cod: 3000, bod: 900, ph: 3.5, tss: 500, tds: 2500 }
      },
      {
        id: 'recycled',
        name: 'Recycled Paper',
        challenges: [
          "Managing 'stickies' (glues and adhesives) from recycled products",
          "Filtering out microplastics that foul up ultra-filtration membranes"
        ],
        typicalValues: { cod: 4500, bod: 1800, ph: 7.2, tss: 3500, tds: 2500 }
      }
    ]
  },
  {
    id: 'tannery',
    name: 'Tannery (Leather)',
    subCategories: [
      {
        id: 'beamhouse',
        name: 'Beamhouse',
        challenges: [
          "Reducing extremely high Total Dissolved Solids (TDS)",
          "Managing sulfides that produce lethal 'rotten egg' odors"
        ],
        typicalValues: { cod: 6000, bod: 2500, ph: 11.0, tss: 4000, tds: 20000 }
      },
      {
        id: 'tanyard',
        name: 'Tanyard',
        challenges: [
          "High capital cost of Chrome Recovery Units",
          "Ensuring toxic Hexavalent Chromium does not leak into groundwater"
        ],
        typicalValues: { cod: 4000, bod: 1200, ph: 3.8, tss: 2000, tds: 15000 }
      },
      {
        id: 'tannery-finishing',
        name: 'Finishing',
        challenges: [
          "Treating complex wastewater matrices",
          "Handling organic animal fats and synthetic polymers simultaneously"
        ],
        typicalValues: { cod: 5500, bod: 2200, ph: 8.5, tss: 1200, tds: 8000 }
      }
    ]
  },
  {
    id: 'oil-refinery',
    name: 'Oil Refineries & Petrochemicals',
    subCategories: [
      {
        id: 'desalting',
        name: 'Desalting',
        challenges: [
          "Removing high salt content from crude oil emulsions",
          "Preventing severe corrosion in the metal pipes of the treatment plant"
        ],
        typicalValues: { cod: 2500, bod: 500, ph: 6.8, tss: 400, tds: 30000 }
      },
      {
        id: 'cracking',
        name: 'Catalytic Cracking',
        challenges: [
          "Breaking down highly stable phenolic chemical rings",
          "Removing compounds that are strictly toxic to biological treatment bacteria"
        ],
        typicalValues: { cod: 3500, bod: 800, ph: 8.5, tss: 600, tds: 4000 }
      },
      {
        id: 'polymer',
        name: 'Polymer Production',
        challenges: [
          "Filtering out 'nurdles' and microscopic plastic pellets",
          "Ensuring synthetic polymers do not reach open marine environments"
        ],
        typicalValues: { cod: 1500, bod: 300, ph: 7.2, tss: 2000, tds: 1500 }
      }
    ]
  },
  {
    id: 'dairy-food',
    name: 'Dairy & Food Processing',
    subCategories: [
      {
        id: 'milk-cheese',
        name: 'Milk & Cheese',
        challenges: [
          "Preventing 'fat caps' in holding tanks which physically block oxygen",
          "Preventing rapid anaerobic decay that causes severe plant odors"
        ],
        typicalValues: { cod: 4500, bod: 2500, ph: 5.5, tss: 1200, tds: 1500 }
      },
      {
        id: 'canning',
        name: 'Fruit/Veg Canning',
        challenges: [
          "Dealing with highly acidic fruit juices",
          "Managing rapidly fermenting sugars that drop system pH too fast"
        ],
        typicalValues: { cod: 6000, bod: 3500, ph: 4.5, tss: 1800, tds: 1200 }
      },
      {
        id: 'meat-poultry',
        name: 'Meat/Poultry',
        challenges: [
          "Eliminating massive loads of nitrogen and phosphorus (blood/proteins)",
          "Preventing downstream eutrophication and algae growth in rivers"
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
        name: 'Nitrogenous',
        challenges: [
          "High energy requirement for ammonia stripping towers",
          "Removing ammonia which is lethal to fish even in tiny amounts"
        ],
        typicalValues: { cod: 200, bod: 50, ph: 9.5, tss: 100, tds: 3500 }
      },
      {
        id: 'phosphatic',
        name: 'Phosphatic',
        challenges: [
          "Dealing with large scale 'phosphogypsum' stacks",
          "Managing severe fluoride toxicity in the wastewater"
        ],
        typicalValues: { cod: 150, bod: 30, ph: 2.5, tss: 800, tds: 8000 }
      },
      {
        id: 'potash',
        name: 'Potash',
        challenges: [
          "Handling sheer volumes of salt (brine) that cannot be biologically 'treated'",
          "Relying on energy-intensive mechanical evaporation"
        ],
        typicalValues: { cod: 100, bod: 0, ph: 7.5, tss: 500, tds: 85000 }
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
          "Keeping cyanide levels strictly below the legal 'lethal' limit",
          "Protecting downstream biological microbes from total wipeout"
        ],
        typicalValues: { cod: 4000, bod: 800, ph: 8.8, tss: 500, tds: 5000 }
      },
      {
        id: 'pickling',
        name: 'Pickling',
        challenges: [
          "Safe disposal or chemical regeneration of 'Spent Pickle Liquor'",
          "Neutralizing massive volumes of strong industrial acids"
        ],
        typicalValues: { cod: 100, bod: 0, ph: 1.5, tss: 1200, tds: 15000 }
      },
      {
        id: 'continuous-casting',
        name: 'Continuous Casting',
        challenges: [
          "Separating complex 'emulsified' oils from cooling water",
          "Breaking chemical bonds between oil and water"
        ],
        typicalValues: { cod: 800, bod: 150, ph: 8.0, tss: 1500, tds: 2500 }
      }
    ]
  },
  {
    id: 'electroplating',
    name: 'Electroplating & Metal Finishing',
    subCategories: [
      {
        id: 'cyanide-plating',
        name: 'Cyanide Plating',
        challenges: [
          "Preventing lethal 'Cyanide gas' formation during treatment",
          "Ensuring operator safety during the chemical oxidation phase"
        ],
        typicalValues: { cod: 300, bod: 50, ph: 10.5, tss: 200, tds: 8000 }
      },
      {
        id: 'acid-pickling',
        name: 'Acid Pickling',
        challenges: [
          "Maintaining precise pH control loops to precipitate heavy metals",
          "Managing the massive volumes of toxic solid sludge generated"
        ],
        typicalValues: { cod: 150, bod: 20, ph: 2.0, tss: 600, tds: 12000 }
      },
      {
        id: 'anodizing',
        name: 'Anodizing',
        challenges: [
          "Managing extremely high sludge volumes",
          "Handling continuous aluminum precipitation from acid baths"
        ],
        typicalValues: { cod: 250, bod: 50, ph: 2.5, tss: 800, tds: 9000 }
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
          "Meeting strict 'Delta-T' (temperature difference) environmental laws",
          "Preventing thermal shock that cooks local aquatic life"
        ],
        typicalValues: { cod: 50, bod: 10, ph: 7.5, tss: 50, tds: 1500 }
      },
      {
        id: 'ash-handling',
        name: 'Ash Handling',
        challenges: [
          "Preventing toxic heavy metals from leaching out of ash ponds",
          "Protecting local groundwater aquifers from contamination"
        ],
        typicalValues: { cod: 100, bod: 10, ph: 9.5, tss: 3000, tds: 2500 }
      },
      {
        id: 'fgd',
        name: 'FGD (Flue Gas Desulfurization)',
        challenges: [
          "Removing persistent 'Selenium' and 'Mercury' traces",
          "Treating metals that are notoriously difficult to strip from water"
        ],
        typicalValues: { cod: 150, bod: 0, ph: 6.0, tss: 3500, tds: 12000 }
      }
    ]
  },
  {
    id: 'sugar',
    name: 'Sugar Industry',
    subCategories: [
      {
        id: 'cane-crushing',
        name: 'Cane Crushing',
        challenges: [
          "Preventing rapid growth of 'filamentous' bacteria",
          "Stopping treatment sludge from floating instead of settling"
        ],
        typicalValues: { cod: 4500, bod: 2000, ph: 5.5, tss: 1500, tds: 2000 }
      },
      {
        id: 'clarification',
        name: 'Clarification',
        challenges: [
          "Managing 'Press Mud'",
          "Handling massive volumes of bulky, wet, solid organic waste"
        ],
        typicalValues: { cod: 3000, bod: 1500, ph: 6.0, tss: 2000, tds: 1800 }
      },
      {
        id: 'distillery-integration',
        name: 'Distillery Integration',
        challenges: [
          "Balancing heat transfer between two connected plants",
          "Managing extreme combined organic load (Sugar + Molasses waste)"
        ],
        typicalValues: { cod: 65000, bod: 28000, ph: 4.8, tss: 3500, tds: 18000 }
      }
    ]
  },
  {
    id: 'pesticide',
    name: 'Pesticide & Agrochemicals',
    subCategories: [
      {
        id: 'insecticides',
        name: 'Insecticides',
        challenges: [
          "Total destruction of neurotoxic chemical molecules",
          "Ensuring active chemicals do not enter the human water cycle"
        ],
        typicalValues: { cod: 15000, bod: 2000, ph: 6.5, tss: 500, tds: 10000 }
      },
      {
        id: 'herbicides',
        name: 'Herbicides',
        challenges: [
          "Preventing the wastewater from killing the biological film inside the WTP",
          "Treating chemicals explicitly designed to kill plant/algae life"
        ],
        typicalValues: { cod: 12000, bod: 1500, ph: 4.5, tss: 400, tds: 8000 }
      },
      {
        id: 'fungicides',
        name: 'Fungicides',
        challenges: [
          "Removing heavy metal catalysts like copper",
          "Preventing inhibition of vital bacterial growth in secondary treatment"
        ],
        typicalValues: { cod: 10000, bod: 1800, ph: 6.0, tss: 800, tds: 7500 }
      }
    ]
  },
  {
    id: 'chemical',
    name: 'Chemical & Specialty Chemicals',
    subCategories: [
      {
        id: 'chlor-alkali',
        name: 'Chlor-Alkali',
        challenges: [
          "Legacy challenge of environmental mercury remediation in older plants",
          "Balancing extreme salt loading in effluent"
        ],
        typicalValues: { cod: 200, bod: 0, ph: 12.5, tss: 100, tds: 45000 }
      },
      {
        id: 'acid-alkali',
        name: 'Acid/Alkali',
        challenges: [
          "High operational cost of continuously neutralizing chemicals",
          "Buying massive volumes of lime just to fight industrial acid"
        ],
        typicalValues: { cod: 100, bod: 0, ph: 1.5, tss: 200, tds: 25000 }
      },
      {
        id: 'dye-pigments',
        name: 'Dye/Pigments',
        challenges: [
          "Reducing Chemical Oxygen Demand (COD)",
          "Treating loads often 10x higher than standard domestic sewage"
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
        id: 'lairage',
        name: 'Lairage',
        challenges: [
          "Screening out large, destructive solids (manure/straw) that clog pumps",
          "Managing unpredictable flow surges"
        ],
        typicalValues: { cod: 8000, bod: 4000, ph: 7.2, tss: 3500, tds: 3000 }
      },
      {
        id: 'evisceration',
        name: 'Evisceration',
        challenges: [
          "Managing extreme high-protein 'grease' that coats every surface of the plant",
          "Controlling pathogenic loads"
        ],
        typicalValues: { cod: 12000, bod: 6000, ph: 6.8, tss: 4500, tds: 2800 }
      },
      {
        id: 'rendering',
        name: 'Rendering',
        challenges: [
          "Cooling and treating high-temperature, high-fat effluent",
          "Preventing the system from going anaerobic and releasing putrid odors"
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
          "Treating water indefinitely, long after the mine has closed",
          "Managing passive treatment system failures"
        ],
        typicalValues: { cod: 50, bod: 0, ph: 2.5, tss: 1200, tds: 6000 }
      },
      {
        id: 'tailings',
        name: 'Tailings Dams',
        challenges: [
          "Ensuring structural dam stability",
          "Preventing catastrophic spills of toxic, heavy metal laden sludge"
        ],
        typicalValues: { cod: 100, bod: 15, ph: 8.5, tss: 8500, tds: 4000 }
      },
      {
        id: 'cyanide-leaching',
        name: 'Cyanide Leaching',
        challenges: [
          "High operational cost of 'Alkaline Chlorination'",
          "Requirement to completely chemically destroy cyanide before release"
        ],
        typicalValues: { cod: 300, bod: 20, ph: 9.5, tss: 2000, tds: 4500 }
      }
    ]
  },
  {
    id: 'fmcg',
    name: 'FMCG (Fast Moving Consumer Goods)',
    subCategories: [
      {
        id: 'personal-care',
        name: 'Personal Care',
        challenges: [
          "Breaking down synthetic fragrances and preservatives",
          "Treating compounds chemically designed to resist bacterial decay"
        ],
        typicalValues: { cod: 5000, bod: 2500, ph: 8.5, tss: 800, tds: 2000 }
      },
      {
        id: 'home-care',
        name: 'Home Care',
        challenges: [
          "Removing high levels of phosphates",
          "Complying with regional bans to protect lakes from algal blooms"
        ],
        typicalValues: { cod: 6500, bod: 3000, ph: 9.2, tss: 1000, tds: 4500 }
      },
      {
        id: 'cosmetics',
        name: 'Cosmetics',
        challenges: [
          "Filtering out waterproof waxes and synthetic oils",
          "Handling compounds that easily bypass standard grit and oil separation chambers"
        ],
        typicalValues: { cod: 8000, bod: 3000, ph: 7.5, tss: 1200, tds: 2500 }
      }
    ]
  }
];