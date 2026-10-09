// All portfolio content lives here. Edit this file to update the site.
// Numbers below are taken from the paper drafts (PICK-Net v2, PREF draft v6, Federated LSTM v11).

export const profile = {
  name: "Huma Saira",
  role: "ML Researcher · Trustworthy AI for Health",
  location: "Xi'an, China",
  seeking: "Seeking a PhD position · 2027 entry",
  email: "humasaira028@gmail.com",
  academicEmail: "huma.saira@mail.nwpu.edu.cn",
  linkedin: "https://www.linkedin.com/in/huma-sairaa36aaa1b4",
  github: "https://github.com/Huma-collab",
  mission:
    "I build machine learning for health that clinicians can check, so its decisions can be verified rather than taken on trust.",
  summary:
    "M.S. Computer Science student at Northwestern Polytechnical University, advised by Prof. Hongbo Ni. My work asks one question from three directions: can a model's internals be tied to physiology (PICK-Net), can its explanations be shown to be reliable (PREF), and can it learn from personal health data without collecting it (federated stress sensing)? I am applying for PhD positions to continue this research on interpretable, reliable and privacy-preserving ML for clinical and mobile health.",
  interests: [
    "Interpretable ML",
    "Reliability of explanations",
    "Physiology-guided deep learning",
    "Federated & privacy-preserving learning",
    "Biomedical signals (ECG)",
    "Mobile health sensing",
  ],
  openTo:
    "I'm looking for a PhD position starting in 2027 in trustworthy machine learning for health.",
  openToDetail:
    "If your group works on interpretable, reliable or privacy-preserving ML for clinical or mobile health data, I'd be glad to hear from you.",
};

export const highlights = [
  { value: "3", label: "First-author journal papers submitted (2026)" },
  { value: "94%", label: "of in-distribution AUC kept on an unseen hospital dataset (PICK-Net)" },
  { value: "1,085", label: "ECG prototypes audited for reliability (PREF)" },
  { value: "2", label: "Research groups: NWPU (China) and Edge Hill University (UK)" },
];

export const research = [
  {
    title: "PICK-Net",
    subtitle:
      "A physiology-guided, input-adaptive deep learning framework for interpretable multi-condition ECG classification",
    period: "2025 – Present",
    tags: ["Interpretable ML", "ECG", "Gabor kernels", "External validation"],
    figure: {
      src: "/figures/pick-net.webp",
      alt: "PICK-Net graphical abstract: unconstrained ECG models versus PICK-Net's frequency-bounded Gabor kernels, PACIM co-occurrence module, and the key finding that bounded kernels avoid frequency-scale collapse.",
      caption:
        "Graphical abstract. Without the physiological frequency bound, learned kernels collapse toward non-physiological frequencies; with it, they stay in the 0.5–40 Hz ECG range and remain interpretable.",
      w: 1736,
      h: 885,
    },
    metrics: [
      { k: "Macro AUC · 5-fold CV", v: "0.919" },
      { k: "External AUC retained", v: "94%" },
      { k: "Correlations significant", v: "14–16 / 18" },
    ],
    points: [
      "Designed a 1.42M-parameter framework: an input-adaptive Gabor kernel layer with a hard 0.5–40 Hz frequency bound, a CNN–Transformer backbone, and PACIM, a directional MI → AVB co-occurrence gating module.",
      "A locked two-seed ablation isolated the cause: removing the architectural frequency bound, not the auxiliary physics losses, costs accuracy on MI and AVB and flips 60–75% of kernel/clinical correlation signs (vs. 23–33% for the losses).",
      "Kernel parameters separate diagnostic classes (p < 0.001) and track independently computed clinical ECG measurements (14–16 of 18 correlations significant after Benjamini–Hochberg correction).",
      "With frozen weights on CPSC-2018, an independent hospital dataset, the model retains about 94% of its in-distribution AUC for first-degree AVB (0.885 vs. 0.937). The paper also reports the trade-off openly: PICK-Net trails a ResNet-1D baseline on MI and AVB accuracy.",
    ],
    note: "Advised by Prof. Hongbo Ni · NWPU",
    code: "https://github.com/Huma-collab/PICK-Net",
  },
  {
    title: "PREF",
    subtitle:
      "A multi-dimensional framework for evaluating the reliability of prototype-based explanations in clinical ECG classification",
    period: "2026",
    tags: ["Explainable AI", "Prototype networks", "ECG", "Evaluation"],
    figure: {
      src: "/figures/pref.webp",
      alt: "PREF graphical abstract: prototype matching on an ECG, bar charts for consistency, perturbation, reproducibility and alignment, and a cross-dataset generalisation gradient from AFIB 95.7% to CRBBB 2.3%.",
      caption:
        "Graphical abstract. The four reliability dimensions, and the cross-dataset gradient: rhythm prototypes transfer to a new hospital, morphology prototypes largely do not.",
      w: 1658,
      h: 694,
    },
    metrics: [
      { k: "Prototypes audited", v: "1,085" },
      { k: "Projection alignment", v: "75–84%" },
      { k: "AFIB kept cross-hospital", v: "95.7%" },
    ],
    points: [
      "Proposed the first multi-dimensional framework for prototype reliability in ECG classification. It is architecture-agnostic and uses branch-aware similarity comparisons with distribution-free statistics.",
      "Defines reliability along four dimensions: intra-class consistency, perturbation robustness (noise, time shift, baseline wander), patient-level reproducibility and projection alignment.",
      "Applied to ProtoECGNet on PTB-XL: consistency mirrors clinical diagnostic difficulty, rhythm and morphology prototypes show opposite perturbation sensitivities, and same-patient agreement persists across recordings more than a year apart.",
      "External validation on CPSC-2018 reveals a generalisation gradient: rhythm prototypes transfer almost perfectly (AFIB 95.7% retained), while amplitude-dependent morphology prototypes fail (CRBBB 2.3%).",
    ],
    note: "With Nonso Nnamoko & Amr Ahmed · Edge Hill University, UK",
    code: "https://github.com/Huma-collab/Prototype-Reliability-Evaluation-Framework-",
  },
  {
    title: "Federated Stress Sensing",
    subtitle:
      "A federated multi-channel LSTM for longitudinal stress monitoring from passive smartphone sensing",
    period: "2025 – Present",
    tags: ["Federated learning", "Privacy", "LSTM + attention", "Mobile health"],
    figure: {
      src: "/figures/federated.webp",
      alt: "Federated stress sensing pipeline: sense seven behavioural channels on-device, learn a personalised LSTM with self-attention, aggregate weights with FedAvg across 87 clients, predict stress with weighted F1 0.632.",
      caption:
        "Graphical abstract. Seven sensor channels are encoded on each phone; only model weights reach the FedAvg server.",
      w: 1431,
      h: 460,
    },
    metrics: [
      { k: "Weighted F1 · data on-device", v: "0.632" },
      { k: "Centralised LSTM (ceiling)", v: "0.640" },
      { k: "Trainable parameters", v: "112K" },
    ],
    points: [
      "Built a federated (FedAvg, Flower) model in which each of 7 behavioural channels (hourly activity, location, phone use, daily venue and sleep) has its own LSTM encoder at native resolution, fused by cross-channel self-attention. Raw data never leaves the device.",
      "Evaluated on the College Experience Study, 87 students tracked over four academic years (2017–2022), using personalised stress thresholds and per-student chronological splits to keep evaluation free of leakage.",
      "Reached weighted F1 0.632, within 0.01 of a fully centralised LSTM (0.640) and above class-weighted XGBoost (0.614) and local-only training (0.580), without pooling anyone's data.",
      "Attention weights detect a significant reconfiguration of behaviour after March 2020 (t = 10.66, p < 0.001, n = 82), and aggregation is robust to Gaussian weight noise up to σ = 0.08.",
    ],
    note: "Advised by Prof. Hongbo Ni · NWPU",
    code: "https://github.com/Huma-collab/federated-stress-sensing",
  },
];

export const publications = [
  {
    title:
      "PICK-Net: A Physiology-Guided Input-Adaptive Deep Learning Framework for Interpretable Multi-Condition ECG Classification",
    authors: ["Huma Saira", "Hongbo Ni", "Chuandong Chen", "Pin Li", "Gang Huang"],
    venue: "Artificial Intelligence in Medicine",
    year: "2026",
    status: "Submitted",
    code: "https://github.com/Huma-collab/PICK-Net",
  },
  {
    title:
      "PREF: A Multi-Dimensional Prototype Reliability Evaluation Framework for Clinical ECG Classification",
    authors: ["Huma Saira", "Nonso Nnamoko", "Amr Ahmed", "Hongbo Ni"],
    venue: "Biomedical Signal Processing and Control",
    year: "2026",
    status: "Under review",
    code: "https://github.com/Huma-collab/Prototype-Reliability-Evaluation-Framework-",
  },
  {
    title:
      "Federated Multi-Channel LSTM for Longitudinal Stress Monitoring via Passive Smartphone Sensing",
    authors: ["Huma Saira", "Hongbo Ni", "Xin Liu", "Chuandong Chen", "Ping Luo"],
    venue: "Pervasive and Mobile Computing",
    year: "2026",
    status: "Under review",
    link: "https://doi.org/10.2139/ssrn.7412560",
    linkLabel: "Preprint · SSRN",
    code: "https://github.com/Huma-collab/federated-stress-sensing",
  },
];

export const experience = [
  {
    role: "Research Intern",
    org: "Edge Hill University",
    place: "Ormskirk, United Kingdom",
    period: "Jan 2026 – Mar 2026",
    focus: "Reliability of prototype-based ECG explanations",
    points: [
      "Developed the PREF evaluation framework with Nonso Nnamoko and Amr Ahmed, auditing the explanations of a prototype-based ECG classifier.",
      "Designed perturbation, patient-level reproducibility and cross-dataset (CPSC-2018) experiments; led the resulting paper as first author.",
    ],
  },
  {
    role: "Research Intern",
    org: "Northwestern Polytechnical University",
    place: "Xi'an, China",
    period: "Dec 2024 – Feb 2025",
    focus: "Temperature prediction from muon & meteorological data",
    points: [
      "Paid research internship under Prof. Nan Chen on data-driven temperature prediction.",
      "Cleaned large meteorological and muon datasets and engineered rolling, rate-of-change and outlier-filtered features.",
      "Trained and analysed an XGBoost regressor (MSE, R², error analysis and feature importance).",
    ],
  },
  {
    role: "Software Engineer",
    org: "NetSol Technologies, Inc.",
    place: "Lahore, Pakistan",
    period: "Aug 2022 – Aug 2024",
    points: [
      "Two years building production .NET Core microservices, Angular and WPF applications for large enterprise systems.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "GoSaaS",
    place: "Lahore, Pakistan",
    period: "Jan 2022 – Mar 2022",
    points: ["Built secure authentication and registration services with Node.js."],
  },
  {
    role: "Research Intern",
    org: "KICS, UET",
    place: "Lahore, Pakistan",
    period: "Aug 2021 – Oct 2021",
    points: ["Data collection and augmentation for Urdu query understanding."],
  },
];

export const projects = [
  {
    title: "COVID-19 Social-Restriction Violation Detection",
    kind: "B.Sc. Final Year Project · Computer vision",
    text: "A Dyadic Interaction Localization Model for multi-person scenes, combining YOLO detection, CNN pose estimation and distance measurement to recognise distancing breaches, handshakes and hugs in real time.",
    tags: ["YOLO", "Pose estimation", "CV"],
  },
  {
    title: "American Sign Language Recognition",
    kind: "Machine learning",
    text: "A CNN + OpenCV system that recognises sign language to assist people with speech and hearing impairments, reaching about 90% accuracy on a custom dataset.",
    tags: ["CNN", "OpenCV", "Accessibility"],
  },
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Northwestern Polytechnical University",
    place: "Xi'an, China",
    period: "Expected 2027",
    detail: "Advisor: Prof. Hongbo Ni",
  },
  {
    degree: "B.Sc. Electrical Engineering (Computer Specialization)",
    school: "University of Engineering and Technology",
    place: "Lahore, Pakistan",
    period: "2018 – 2022",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "C#", "JavaScript", "SQL"] },
  {
    group: "ML / DL",
    items: ["PyTorch", "TensorFlow / Keras", "Flower (FL)", "scikit-learn", "XGBoost", "OpenCV"],
  },
  {
    group: "Methods",
    items: [
      "Interpretable & prototype-based models",
      "Physiology-guided deep learning",
      "Federated learning",
      "Ablation & statistical testing",
      "External validation",
    ],
  },
  { group: "Data", items: ["PTB-XL", "CPSC-2018", "College Experience Study"] },
  { group: "Engineering", items: ["Git / GitHub", "Linux", ".NET microservices", "Angular"] },
];
