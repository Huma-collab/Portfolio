// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Huma Saira",
  role: "ML Researcher · Healthcare AI",
  location: "Xi'an, China",
  email: "humasaira028@gmail.com",
  phone: "+86 132 5979 6183",
  linkedin: "https://www.linkedin.com/in/huma-sairaa36aaa1b4",
  github: "https://github.com/Huma-collab",
  summary:
    "Master's student in Computer Science at Northwestern Polytechnical University working on machine learning for healthcare and biomedical signals. My research spans physics-informed neural networks for ECG analysis and privacy-preserving federated learning for mental stress recognition from multimodal sensor data.",
  mission:
    "I want to build trustworthy, privacy-aware AI systems for real-world health monitoring.",
  openTo:
    "Open to research collaboration and internships in healthcare AI, federated learning, and trustworthy ML.",
};

export const highlights = [
  { value: "0.9209", label: "Macro AUC on PTB-XL (PICK-Net)" },
  { value: "87", label: "Federated clients in stress study" },
  { value: "2", label: "Journal papers under review" },
  { value: "2 yrs", label: "Industry software engineering" },
];

export const research = [
  {
    title: "PICK-Net",
    subtitle:
      "A generalization-aware, trustworthy physics-informed framework for physiological signal analysis in early anomaly detection",
    period: "2025 – Present",
    tags: ["Physics-Informed NN", "ECG", "Transformer", "Interpretability"],
    points: [
      "Designed a 1.42M-parameter architecture combining a physics-informed kernel layer, physics constraint losses, a CNN feature extractor, a Transformer encoder and a PACIM directional gating module.",
      "Trained on PTB-XL (21,792 12-lead ECG records) across Normal, MI, AVB and MI+AVB co-occurrence, reaching AUC_macro = 0.9209 and AUC_MI+AVB = 0.9430, reproducible across independent runs.",
      "Validated physiological interpretability with baselines, ablations, kernel-parameter statistics and clinical ECG correlation (17 of 18 features significant, p < 0.001).",
    ],
    note: "Advised by Prof. Ni Hongbo",
    code: "https://github.com/Huma-collab/PICK-Net",
    metrics: [
      { k: "AUC macro", v: "0.9209" },
      { k: "AUC MI+AVB", v: "0.9430" },
      { k: "Params", v: "1.42M" },
    ],
  },
  {
    title: "PREF",
    subtitle:
      "A multi-dimensional prototype reliability evaluation framework for clinical ECG classification",
    period: "2026",
    tags: ["Explainable AI", "Prototype Networks", "ECG", "Reliability"],
    points: [
      "Built a model-agnostic methodology for testing whether prototype-based neural network explanations can be trusted in clinical ECG classification.",
      "Evaluates explanations along five dimensions: intra-class consistency, perturbation robustness, patient-level reproducibility (near-duplicate tests), projection alignment and cross-dataset external validation.",
      "Instantiated on ProtoECGNet, trained on PTB-XL and validated zero-shot on CPSC-2018.",
    ],
    note: "Started during research internship at Edge Hill University",
    code: "https://github.com/Huma-collab/Prototype-Reliability-Evaluation-Framework-",
    metrics: [
      { k: "Dimensions", v: "5" },
      { k: "Datasets", v: "PTB-XL · CPSC" },
      { k: "Model", v: "ProtoECGNet" },
    ],
  },
  {
    title: "Federated Stress Recognition",
    code: "https://github.com/Huma-collab/federated-stress-sensing",
    subtitle:
      "Privacy-preserving mental stress recognition from passive smartphone sensing",
    period: "2025 – Present",
    tags: ["Federated Learning", "LSTM", "Attention", "Privacy"],
    points: [
      "Implemented FedAvg across 87 clients on the College Experience Study dataset (105 students over 4 years, Dartmouth).",
      "Designed a multi-channel LSTM over 7 feature groups (hourly activity, location, phone unlock and daily behaviour) with multi-head attention for temporal stress patterns.",
      "Found and fixed a label-leakage bug (median threshold computed before the train/validation split) and ran an ablation on class-imbalance correction.",
      "Reached 0.69 accuracy and 0.61 weighted F1 with the 7-channel federated model, outperforming the centralized baseline while keeping data on-device.",
    ],
    metrics: [
      { k: "Accuracy", v: "0.69" },
      { k: "Weighted F1", v: "0.61" },
      { k: "Clients", v: "87" },
    ],
  },
];

export const publications = [
  {
    title:
      "Federated Multi-Channel LSTM for Longitudinal Stress Monitoring via Passive Smartphone Sensing",
    venue: "Pervasive and Mobile Computing",
    year: "2026",
    status: "Under review",
    link: "https://doi.org/10.2139/ssrn.7412560",
    linkLabel: "Preprint · SSRN",
    code: "https://github.com/Huma-collab/federated-stress-sensing",
  },
  {
    title:
      "PREF: A Multi-Dimensional Prototype Reliability Evaluation Framework for Clinical ECG Classification",
    venue: "Biomedical Signal Processing and Control",
    year: "2026",
    status: "Under review",
    code: "https://github.com/Huma-collab/Prototype-Reliability-Evaluation-Framework-",
  },
];

export const experience = [
  {
    role: "Research Intern",
    org: "Edge Hill University",
    place: "Ormskirk, England",
    period: "Jan 2026 – Mar 2026",
    focus: "Medical AI & prototype-based ECG models",
    points: [
      "Worked on interpretable deep learning approaches for ECG classification.",
      "Explored the reliability and robustness of prototype-based explanation mechanisms.",
      "Supported experimental design and evaluation of intrinsically interpretable architectures.",
    ],
  },
  {
    role: "Research Intern",
    org: "Northwestern Polytechnical University",
    place: "Xi'an, China",
    period: "Dec 2024 – Feb 2025",
    focus: "Muon & meteorological temperature prediction with XGBoost",
    points: [
      "Paid research internship under Prof. Chen Nan on data-driven temperature prediction.",
      "Cleaned large meteorological and muon datasets; engineered rolling averages, change rates and outlier filtering.",
      "Tuned an XGBoost regressor (500 trees, depth 3, lr 0.05) on pressure, humidity, dew point and muon features; evaluated with MSE and R².",
      "Built scatter, error-histogram, time-series and feature-importance visualisations to analyse model behaviour.",
    ],
  },
  {
    role: "Software Engineer",
    org: "NetSol Technologies, Inc.",
    place: "Lahore, Pakistan",
    period: "Aug 2022 – Aug 2024",
    points: [
      "Developed .NET Core, microservices, Angular and WPF applications; gained depth in debugging and large-scale system design.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "GoSaaS",
    place: "Lahore, Pakistan",
    period: "Jan 2022 – Mar 2022",
    points: [
      "Built secure authentication and registration apps with JavaScript, Node.js and Git.",
    ],
  },
  {
    role: "Research Intern",
    org: "KICS, UET",
    place: "Lahore, Pakistan",
    period: "Aug 2021 – Oct 2021",
    points: ["Worked on Urdu queries, data augmentation and data collection."],
  },
];

export const projects = [
  {
    title: "COVID-19 Social-Restriction Violation Detection",
    kind: "Final Year Project · Deep Learning",
    text: "Proposed a Dyadic Interaction Localization Model for multi-person scenes, combining YOLO detection, CNN pose estimation and distance measurement to recognise distancing breaches, handshakes and hugs in real time.",
    tags: ["YOLO", "Pose Estimation", "CV"],
  },
  {
    title: "American Sign Language Recognition",
    kind: "Machine Learning",
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
  },
  {
    degree: "B.Sc. Electrical Engineering (Computer Specialization)",
    school: "University of Engineering and Technology",
    place: "Lahore, Pakistan",
    period: "2018 – 2022",
  },
];

export const skills = [
  { group: "Programming", items: ["Python", "C#", "JavaScript", "Node.js", "SQL"] },
  { group: "ML / DL", items: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "XGBoost"] },
  {
    group: "Specialization",
    items: [
      "Deep Learning",
      "Federated Learning",
      "Physics-Informed NNs",
      "Biomedical Signals (ECG, PCG)",
      "Computer Vision",
      "NLP basics",
    ],
  },
  { group: "Tools", items: ["Git / GitHub", "Linux", "Microservices", "WPF", "Angular"] },
];
