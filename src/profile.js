/**
 * profile.js — single source of truth for all site content.
 *
 * Edit text here; components only handle layout. Fields set to `null` or
 * empty arrays render as tasteful placeholders / empty states.
 *
 * Integrity rule: only add verified information. Never add results,
 * publications, awards, or dates that have not actually happened.
 */

export const profile = {
  name: 'Michael LaBrie',
  title: 'Biotechnology Undergraduate Researcher',
  focus: 'Structural Virology & Computational Bioinformatics',
  affiliation: 'University of Florida',
  intro:
    'I am an undergraduate scientist at the University of Florida investigating viral structure and biology through both experimental and computational approaches. My interests span molecular virology, structural biology, bioinformatics, and biotechnology innovation.',
  keywords: ['Parvovirus capsids', 'Cryo-EM', 'Sequence–structure analysis', 'Protein expression'],
}

export const about = {
  paragraphs: [
    'I am a Biotechnology undergraduate at the University of Florida, with additional studies in Bioinformatics, Business Administration, and the Innovation Academy. I conduct undergraduate research in Dr. Robert McKenna’s laboratory in the Department of Biochemistry and Molecular Biology at the UF College of Medicine, where I contribute to structural virology research.',
    'Alongside my laboratory work, I pursue independent computational structural bioinformatics research, and I am a participant in the UF College of Medicine’s University Scholars Program (2026–2027).',
    'What draws me to science is the question of how molecular structure gives rise to biological function. I am especially interested in combining hands-on experimental work with computational analysis — two perspectives that I believe are most powerful together — and in applying that understanding toward better biomedical technologies. I am still early in my training, and I approach each project as an opportunity to learn rigorous methods and ask better questions.',
  ],
  highlights: [
    { label: 'Laboratory', value: 'McKenna Lab, UF Biochemistry & Molecular Biology' },
    { label: 'Program', value: 'University Scholars Program, 2026–2027' },
    { label: 'Studies', value: 'Biotechnology · Bioinformatics · Business · Innovation Academy' },
  ],
}

export const research = [
  {
    id: 'experimental',
    label: 'A',
    title: 'Experimental Structural Virology',
    status: 'Laboratory research',
    summary:
      'Understanding viral capsid structure, the molecular interactions it supports, and how structural properties shape viral biology. My work in the McKenna laboratory involves the following areas of research and training:',
    items: [
      'Parvovirus structural biology',
      'Viral capsid proteins and virus-like particles',
      'Experimental protein expression and purification',
      'Baculovirus/Sf9 expression systems',
      'Cryo-electron microscopy and structural characterization',
      'Molecular virology and viral protein biology',
    ],
  },
  {
    id: 'computational',
    label: 'B',
    title: 'Computational Structural Bioinformatics',
    status: 'Independent research',
    summary:
      'Investigating how amino acid sequence variation relates to three-dimensional structural variation across related viral proteins. Computational approaches complement experimental structural biology by letting me compare many structures systematically, generate hypotheses about specific capsid regions, and interpret experimental data in a broader evolutionary context.',
    items: [
      'Comparative analysis of parvovirus capsid structures',
      'Protein sequence alignment and comparative structural analysis',
      'Computational examination of viral capsid regions',
      'Sequence–structure relationships',
      'Bioinformatics with Python and computational tools',
      'Protein visualization and structural interpretation',
      'Cryo-EM data analysis and three-dimensional reconstruction',
    ],
  },
  {
    id: 'emerging',
    label: 'C',
    title: 'Emerging Biotechnology & Research Innovation',
    status: 'Future research interests',
    summary:
      'Technologies that could make scientific research more efficient and accessible. These are directions I hope to explore in the future — not projects I have completed.',
    items: [
      'Cell-free protein synthesis',
      'Synthetic biology',
      'Improved protein expression and production platforms',
      'Biomedical research tool development',
      'Viral-vector technologies and gene therapy',
      'Computational methods for accelerating biological discovery',
    ],
  },
]

/**
 * Projects. statusType controls the badge color:
 *   'ongoing' | 'lab' | 'training' | 'future'
 * Optional: links: { github, poster, publication, figure }  (URLs)
 *           figure: { src, alt, caption } (place image in /public)
 */
export const projects = [
  {
    title: 'Comparative Structural Bioinformatics of Parvovirus Capsids',
    status: 'Ongoing independent undergraduate research',
    statusType: 'ongoing',
    summary:
      'Investigating relationships between protein sequence variation and structural variation across parvoviral capsids.',
    themes: ['Sequence alignment', 'Comparative structure', 'Python'],
    links: {},
  },
  {
    title: 'Structural Characterization of Parvoviral Capsids',
    status: 'Undergraduate laboratory research',
    statusType: 'lab',
    summary:
      'Experimental structural virology, including capsid protein expression, purification, and structural analysis.',
    themes: ['Protein expression', 'Purification', 'Structural virology'],
    links: {},
  },
  {
    title: 'Cryo-EM Structure Analysis',
    status: 'Ongoing research and computational training',
    statusType: 'training',
    summary:
      'Exploring the computational methods used to investigate three-dimensional viral structures.',
    themes: ['Cryo-EM', '3D reconstruction', 'Structural interpretation'],
    links: {},
  },
  {
    title: 'Next-Generation Protein Production Technologies',
    status: 'Future research interest',
    statusType: 'future',
    summary:
      'Exploring technologies such as cell-free protein synthesis and more efficient experimental systems for producing biological macromolecules.',
    themes: ['Cell-free synthesis', 'Synthetic biology', 'Research tools'],
    links: {},
  },
]

export const skills = {
  note: 'Techniques I have hands-on experience with or am actively learning as a developing researcher.',
  categories: [
    {
      title: 'Experimental Laboratory Methods',
      icon: 'flask',
      items: [
        'Mammalian and insect cell culture',
        'Baculovirus/Sf9 expression systems',
        'Protein expression and purification',
        'SDS-PAGE and gel electrophoresis',
        'PCR and molecular biology methods',
        'Plaque assays',
        'Ultracentrifugation and density-gradient purification',
        'General aseptic laboratory technique',
      ],
    },
    {
      title: 'Computational & Bioinformatics',
      icon: 'code',
      items: [
        'Python and scientific programming',
        'Biological sequence analysis',
        'Multiple sequence alignment',
        'Protein structural visualization',
        'Comparative structural bioinformatics',
        'NCBI and UniProt',
        'ChimeraX and molecular visualization',
        'Git and GitHub',
        'Scientific data analysis and visualization',
      ],
    },
    {
      title: 'Structural Biology',
      icon: 'capsid',
      items: [
        'Cryo-electron microscopy concepts and workflows',
        'Protein structure analysis',
        'Viral capsid structural biology',
        '3D reconstruction and structural interpretation',
      ],
    },
  ],
}

/**
 * Education & development. Add `dates` only when verified.
 * `milestones` is a list for future fellowships, awards, certifications, etc.
 */
export const education = {
  institutions: [
    {
      name: 'University of Florida',
      degree: 'Biotechnology (undergraduate)',
      dates: null,
      details: [
        'Additional studies in Bioinformatics',
        'Business Administration',
        'Innovation Academy',
      ],
    },
  ],
  development: [
    {
      name: 'University Scholars Program',
      org: 'University of Florida College of Medicine',
      dates: '2026–2027',
      description: 'Participant in the UF College of Medicine University Scholars Program.',
    },
    {
      name: 'Undergraduate Research',
      org: 'McKenna Laboratory, Department of Biochemistry & Molecular Biology',
      dates: null,
      description: 'Structural virology research under Dr. Robert McKenna.',
    },
  ],
  // e.g. { title: 'Fellowship name', org: '...', year: '...' }
  milestones: [],
}

export const interests = {
  intro:
    'My scientific interests are still evolving. These are the questions that currently motivate me and that I hope to pursue through doctoral research and, eventually, an independent research career.',
  themes: [
    { title: 'Structure and function', text: 'How molecular structure determines biological function, from individual proteins to assembled viral particles.' },
    { title: 'Viral capsids in context', text: 'How viral capsids are built and how they interact with the biological systems they encounter.' },
    { title: 'Experiment + computation', text: 'Integrating laboratory and computational research so each informs and strengthens the other.' },
    { title: 'Biomedical relevance', text: 'Applying structural biology to questions with direct biomedical significance.' },
    { title: 'Gene delivery', text: 'Understanding viral vectors and the technologies that use them to deliver genetic material.' },
    { title: 'Better research tools', text: 'Developing technologies that reduce experimental bottlenecks and make research more accessible.' },
  ],
  goal:
    'Long term, I plan to pursue a PhD and contribute to discoveries at the intersection of structural biology, virology, biotechnology, computational biology, and emerging technologies for biomedical research.',
}

/**
 * Publications & communication. Add only verified entries, e.g.
 * { title, authors, venue, year, url, note }
 */
export const publications = [
  { category: 'Peer-reviewed publications', entries: [] },
  { category: 'Manuscripts & review articles', entries: [] },
  { category: 'Research posters', entries: [] },
  { category: 'Conference presentations', entries: [] },
  { category: 'Scientific writing & communication', entries: [] },
]

/** Contact. Set a value to a string to activate it; `null` shows "Coming soon". */
export const contact = {
  github: 'https://github.com/michaellabrie',
  linkedin: null, // e.g. 'https://www.linkedin.com/in/your-handle'
  email: null, // e.g. 'name@ufl.edu'
  cv: null, // e.g. '/cv.pdf' (place file in /public)
}
