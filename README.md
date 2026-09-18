# Shree Balaji Constructions (Civil Contractor & Engineers)

Official corporate website for **Shree Balaji Constructions**, established in 2018 in Farrukhnagar, Gurugram, Haryana.

Built with **React**, **Vite**, **HTML5**, **CSS3**, and **React Icons**.

---

## 1. Quick Start Commands

Run these commands inside your project terminal in VS Code (`Ctrl + ` `):

### Start the Live Website:
```powershell
npm run dev
```
*(Or if PowerShell execution policies are restricted: `npm.cmd run dev` or `& "C:\Program Files\nodejs\npm.cmd" run dev`)*

Open your browser at:  
👉 **`http://localhost:5173`**

### Stop the Server:
Click the terminal and press **`Ctrl + C`**, then type **`y`**.

### Build Production Version:
```powershell
npm run build
```
*(Produces an optimized, minified bundle inside the `dist/` folder)*

---

## 2. Where Real Photographs Are Stored

All real company assets and equipment photography are organized inside **`public/assets/images/`**:

```
public/assets/images/
├── logo/
│   ├── logo-gold.jpg             # Embossed metallic gold brand emblem
│   └── business-card.jpg         # Official Shree Balaji Constructions business card
│
├── machinery/                    # Real site equipment & surveying instruments
│   ├── slm-flori-mixer.jpg       # SLM Flori 4m³ Self-Loading Transit Mixer
│   ├── soil-compactor.jpg        # Heavy Vibratory Soil Compactor (Roller 2420)
│   ├── jcb-3dx.jpg               # JCB 3DX Backhoe Loader
│   ├── theodolite.jpg            # Digital Optical Total Station / Theodolite
│   ├── auto-level.jpg            # Leica NA730 Auto Level Survey Instrument
│   ├── tractor-water-tanker.jpg  # Mahindra 415 DI Tractor + 2000L Water Tanker
│   ├── steel-bending-machine.jpg # JAYMAC Rebar Bending Machine
│   └── steel-cutting-machine.jpg # JAYMAC Heavy Rebar Cutting Machine
│
└── projects/                     # ★ DROP NEW PROJECT PHOTOGRAPHS HERE ★
    ├── br-logistic-park/         # Photos for BR Logistic Park (Farrukhnagar)
    ├── eera/                     # Photos for Eera Constructive Solution (Tauru)
    ├── nord-industries/          # Photos for Nord Industries (MET City Jhajjar)
    ├── rao-sher-singh/           # Photos for Rao Sher Singh School (Rewari)
    ├── swan-international/       # Photos for Swan International (Sohna)
    └── sohan-wala/               # Photos for Sohan Wala Resort
```

---

## 3. How to Update Company Information

Open **`src/data/company.js`** to change:
- **Phone Numbers**: Krishan Yadav (`+91 9991560388`), Ashok Yadav (`+91 9812672778`)
- **Email**: `shreebalajiconstructionsggn@gmail.com`
- **Address**: Fazilpur Badli, Farrukhnagar, Gurugram, Haryana - 122506
- **GST Number**: `06AYJPK1975D2ZE`
- **Instagram Link**: `https://www.instagram.com/shreebalajiconstructions1?...`

---

## 4. How to Add or Edit Projects

Open **`src/data/projects.js`**. Each project is an object with editable fields:
```javascript
{
  id: "br-logistic-park",
  title: "BR Logistic Park",
  category: "Warehouse & Logistics",
  location: "Farrukhnagar, Gurugram, Haryana",
  status: "COMPLETED", // Can be "ONGOING", "COMPLETED", or "STATUS TO BE CONFIRMED"
  featured: true,
  client: "Client / Developer Name",
  area: "Built-up area (e.g. 250,000 sq. ft.)",
  shortDescription: "...",
  fullDescription: "...",
  scopeOfWork: [
    "Sub-grade soil stabilization",
    "Reinforced concrete flooring"
  ],
  highlights: [
    "Heavy-duty pavement quality concrete (PQC)"
  ],
  image: "/assets/images/projects/br-logistic-park/main.jpg",
  gallery: [
    "/assets/images/projects/br-logistic-park/site-1.jpg",
    "/assets/images/projects/br-logistic-park/site-2.jpg"
  ]
}
```

---

## 5. Free Deployment Options

### Deploy with Vercel:
1. Go to [vercel.com](https://vercel.com/) and connect your project folder.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploys with free SSL in 1 minute.

### Deploy with Netlify:
1. Run `npm run build` in your terminal.
2. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
