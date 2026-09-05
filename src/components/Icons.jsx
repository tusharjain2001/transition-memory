// Thin line icons drawn to match the reference (1.5px stroke, currentColor)
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ size = 48, children, viewBox = '0 0 48 48', className = '', ...rest }) => (
  <svg width={size} height={size} viewBox={viewBox} className={className} {...base} {...rest}>
    {children}
  </svg>
)

/* ---------- Hero / mission ---------- */
export const HeadBulb = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <path d="M22 56v-8.5c-6.5-3.8-10.5-10.6-10.5-18C11.5 17.5 21 8 33 8c11.4 0 21 8.6 21 20 0 3.4-1 6.3-2.4 8.3l4.3 6.2h-6.5v6c0 3-2.4 5.5-5.4 5.5h-4v2" />
    <circle cx="31" cy="24" r="6.5" />
    <path d="M28 33h6M29 36.5h4M31 13v3M20 24h3M39 24h3M23.5 16.5l2 2M38.5 16.5l-2 2" />
  </Svg>
)

export const DottedBeam = (p) => (
  <Svg {...p} viewBox="0 0 40 40">
    <path strokeDasharray="1.5 3" d="M4 12l30 8M4 20h30M4 28l30-8" />
  </Svg>
)

export const Drawers = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <path d="M12 30h40v22H12z" />
    <path d="M16 30v-7h32v7M20 23v-6h24v6M24 17v-4h16v4" />
    <path d="M26 38h12v4H26z" />
    <path d="M46 40l6-2 6 2v6c0 4-3 7-6 8-3-1-6-4-6-8z" fill="#fff" />
    <path d="M49 46l2 2 4-4" />
  </Svg>
)

export const TwoPeople = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <circle cx="24" cy="20" r="7" />
    <path d="M8 52v-8c0-8 6-14 14-14h4c8 0 14 6 14 14v8" />
    <circle cx="44" cy="22" r="5.5" />
    <path d="M44 32c7 0 12 5 12 12v8" />
  </Svg>
)

export const TwoPeopleCheck = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <circle cx="24" cy="18" r="7" />
    <path d="M8 50v-6c0-8 6-14 14-14h4c3 0 5.5.8 7.5 2" />
    <circle cx="45" cy="19" r="5.5" />
    <path d="M32 50v-5c0-7 5-12 12-12h2c7 0 12 5 12 12v5z" />
    <path d="M40 43l3.5 3.5L52 38" />
  </Svg>
)

export const RobotBubble = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <path d="M16 10h32a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H30l-8 8v-8h-6a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z" />
    <rect x="20" y="24" width="24" height="16" rx="5" />
    <path d="M32 24v-4M30 20h4M14 30h6M44 30h6" />
    <circle cx="27" cy="31" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="37" cy="31" r="1.4" fill="currentColor" stroke="none" />
    <path d="M28 36h8" />
  </Svg>
)

export const Building = (p) => (
  <Svg {...p} viewBox="0 0 64 64">
    <path d="M18 54V12h22v42M40 24h8v30M12 54h42" />
    <path d="M24 18h4M30 18h4M24 25h4M30 25h4M24 32h4M30 32h4M24 39h4M30 39h4M44 30h1M44 37h1M44 44h1" />
    <path d="M26 54v-8h6v8" />
  </Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p} viewBox="0 0 48 24">
    <path d="M4 12h38M34 5l8 7-8 7" />
  </Svg>
)

export const DottedArrow = (p) => (
  <Svg {...p} viewBox="0 0 120 20" preserveAspectRatio="none">
    <path strokeDasharray="2.5 4" d="M2 10h108" />
    <path d="M110 5l7 5-7 5" />
  </Svg>
)

export const DashedArrow = (p) => (
  <Svg {...p} viewBox="0 0 120 20" preserveAspectRatio="none">
    <path strokeDasharray="3 4" d="M2 10h108" />
    <path d="M110 5l7 5-7 5" />
  </Svg>
)

/* ---------- Problem ---------- */
export const Eye = (p) => (
  <Svg {...p}>
    <path d="M6 24s7-11 18-11 18 11 18 11-7 11-18 11S6 24 6 24z" />
    <circle cx="24" cy="24" r="5.5" />
  </Svg>
)

export const DocLines = (p) => (
  <Svg {...p}>
    <path d="M14 8h14l8 8v24H14z" />
    <path d="M28 8v8h8M20 24h10M20 29h10M20 34h6" />
  </Svg>
)

export const DashedClock = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="24" r="15" strokeDasharray="5 4" />
    <path d="M24 15v9l6 4" />
  </Svg>
)

/* ---------- Principles ---------- */
export const Person = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="15" r="8" />
    <path d="M8 43v-3c0-8 6-14 14-14h4c8 0 14 6 14 14v3z" />
  </Svg>
)

export const ClipboardCheck = (p) => (
  <Svg {...p}>
    <rect x="10" y="10" width="28" height="34" rx="2" />
    <path d="M18 10v-2a6 6 0 0 1 12 0v2z" />
    <path d="M16 30l5 5 11-12" />
  </Svg>
)

export const Magnifier = (p) => (
  <Svg {...p}>
    <circle cx="21" cy="21" r="13" />
    <path d="M31 31l10 10" strokeWidth="2.5" />
  </Svg>
)

/* ---------- Agents ---------- */
export const SpeechBubble = (p) => (
  <Svg {...p}>
    <path d="M24 8c11 0 19 7 19 15s-8 15-19 15c-2 0-4-.2-5.8-.7L9 41l2.8-7.5C7.6 30.7 5 27.1 5 23 5 15 13 8 24 8z" />
  </Svg>
)

export const LinkIcon = (p) => (
  <Svg {...p}>
    <path d="M20 28l8-8" strokeWidth="2" />
    <path d="M17 31l-3 3a7 7 0 0 1-10-10l6-6a7 7 0 0 1 10 0" transform="translate(4 -1)" />
    <path d="M31 17l3-3a7 7 0 0 1 10 10l-6 6a7 7 0 0 1-10 0" transform="translate(-4 1)" />
  </Svg>
)

export const Folder = (p) => (
  <Svg {...p}>
    <path d="M6 14h13l4 4h19v20H6z" />
    <path d="M6 22h36" />
  </Svg>
)

export const GradCap = (p) => (
  <Svg {...p}>
    <path d="M4 19l20-8 20 8-20 8z" />
    <path d="M12 23v9c3 3 8 5 12 5s9-2 12-5v-9" />
    <path d="M8 21v14M8 35l-2 5h4z" />
  </Svg>
)

export const ShieldPerson = (p) => (
  <Svg {...p}>
    <path d="M24 5l15 5v13c0 10-7 17-15 20-8-3-15-10-15-20V10z" />
    <circle cx="24" cy="19" r="4.5" />
    <path d="M16 34c1-5 4-8 8-8s7 3 8 8" />
  </Svg>
)

/* ---------- Focus ---------- */
export const Armchair = (p) => (
  <Svg {...p}>
    <path d="M12 26v-10a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v10" />
    <path d="M8 24a4 4 0 0 1 4 4v4h24v-4a4 4 0 0 1 8 0v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a4 4 0 0 1 4-4z" />
    <path d="M12 37v5M36 37v5M16 26h16" />
  </Svg>
)

export const DocPound = (p) => (
  <Svg {...p}>
    <path d="M13 6h15l8 8v28H13z" />
    <path d="M28 6v8h8" />
    <path d="M28 20a4 4 0 0 0-7 3v10h-2M19 33h10M18 27h8" />
  </Svg>
)

/* ---------- Who ---------- */
export const Briefcase = (p) => (
  <Svg {...p}>
    <rect x="6" y="15" width="36" height="24" rx="3" />
    <path d="M17 15v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M6 25h36M21 25v4h6v-4" />
  </Svg>
)

/* ---------- CTA ---------- */
export const CalendarCheck = (p) => (
  <Svg {...p}>
    <rect x="6" y="10" width="34" height="30" rx="3" />
    <path d="M6 18h34M14 6v8M32 6v8" />
    <path d="M14 26h4M22 26h4M14 32h4" />
    <circle cx="33" cy="33" r="7" fill="#fff" />
    <path d="M30 33l2.5 2.5L37 30" />
  </Svg>
)

/* ---------- Small ---------- */
export const CheckCircle = (p) => (
  <Svg {...p} viewBox="0 0 24 24" size={p.size || 20}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 12l2.8 2.8L16.5 9" />
  </Svg>
)

export const XCircle = (p) => (
  <Svg {...p} viewBox="0 0 24 24" size={p.size || 20}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
  </Svg>
)

export const ArrowSm = (p) => (
  <Svg {...p} viewBox="0 0 20 12" size={p.size || 16} strokeWidth="1.8">
    <path d="M1 6h17M13 1l5 5-5 5" />
  </Svg>
)

/* ---------- Added for owners / advisers / pricing pages ---------- */
export const Brain = (p) => (
  <Svg {...p}>
    <path d="M24 8v32" />
    <path d="M24 10c-2-3-8-3-9 1-4 0-6 4-4 7-3 2-3 7 0 9-1 4 2 7 6 6 1 3 5 4 7 2" />
    <path d="M24 10c2-3 8-3 9 1 4 0 6 4 4 7 3 2 3 7 0 9 1 4-2 7-6 6-1 3-5 4-7 2" />
    <path d="M16 20c2 0 3 1 4 3M32 20c-2 0-3 1-4 3M15 30h4M29 30h4" />
  </Svg>
)

export const Handshake = (p) => (
  <Svg {...p}>
    <path d="M4 20l7-7 7 3 6-3 7 7 5 0" />
    <path d="M4 20l8 9 4 3c2 1 4 0 5-2l7-7" />
    <path d="M18 16l-5 5c-1 1 0 3 1 3l3-2 5 5c1 1 3 0 3-1M22 27l3 2c1 1 3 0 3-1M27 24l3 2c1 1 3 0 3-1" />
    <path d="M44 20l-7-7" />
  </Svg>
)

export const Scales = (p) => (
  <Svg {...p}>
    <path d="M24 8v32M16 40h16M24 12l-12 3M24 12l12 3" />
    <path d="M6 27l6-12 6 12a6 6 0 0 1-12 0zM30 27l6-12 6 12a6 6 0 0 1-12 0z" />
  </Svg>
)

export const Gear = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="24" r="5.5" />
    <path d="M24 6l3 4 5-1 1 5 4 3-1 5 4 3-3 4 1 5-5 1-1 5-5-1-3 4-3-4-5 1-1-5-5-1 1-5-4-3 4-3-1-5 4-3 1-5 5 1z" />
  </Svg>
)

export const Tag = (p) => (
  <Svg {...p}>
    <path d="M6 22V8h14l20 20-14 14z" />
    <circle cx="13" cy="15" r="2.5" />
  </Svg>
)

export const Stairs = (p) => (
  <Svg {...p}>
    <path d="M6 40h9v-9h9v-9h9v-9h9" />
  </Svg>
)

export const MapIcon = (p) => (
  <Svg {...p}>
    <path d="M6 12l12-4 12 4 12-4v28l-12 4-12-4-12 4z" />
    <path d="M18 8v28M30 12v28" />
  </Svg>
)

export const Database = (p) => (
  <Svg {...p}>
    <ellipse cx="24" cy="12" rx="14" ry="5" />
    <path d="M10 12v24c0 3 6 5 14 5s14-2 14-5V12" />
    <path d="M10 20c0 3 6 5 14 5s14-2 14-5M10 28c0 3 6 5 14 5s14-2 14-5" />
  </Svg>
)

export const DocSearch = (p) => (
  <Svg {...p}>
    <path d="M12 6h14l8 8v10" />
    <path d="M26 6v8h8M12 6v36h14" />
    <path d="M18 20h10M18 26h6" />
    <circle cx="33" cy="33" r="6" />
    <path d="M37.5 37.5L42 42" />
  </Svg>
)

export const Lock = (p) => (
  <Svg {...p}>
    <rect x="11" y="20" width="26" height="22" rx="3" />
    <path d="M16 20v-6a8 8 0 0 1 16 0v6" />
    <path d="M24 28v7M21 32l3-3 3 3" />
  </Svg>
)

export const Calculator = (p) => (
  <Svg {...p}>
    <rect x="11" y="5" width="26" height="38" rx="3" />
    <rect x="16" y="10" width="16" height="7" rx="1" />
    <path d="M17 24h2M23 24h2M29 24h2M17 30h2M23 30h2M29 30h2M17 36h2M23 36h2M29 36h2" strokeWidth="2.2" />
  </Svg>
)

export const ChartUp = (p) => (
  <Svg {...p}>
    <path d="M6 8v34h36" />
    <path d="M14 36v-10h5v10M23 36v-16h5v16M32 36v-22h5v22" />
    <path d="M12 20l10-8 8 4 12-10M36 6h6v6" />
  </Svg>
)

export const Signpost = (p) => (
  <Svg {...p}>
    <path d="M24 6v36M18 42h12" />
    <path d="M10 12h26l6 6-6 6H10z" />
  </Svg>
)

export const PieChart = (p) => (
  <Svg {...p}>
    <path d="M24 8a16 16 0 1 0 16 16H24z" />
    <path d="M28 4a16 16 0 0 1 16 16H28z" />
  </Svg>
)

export const PersonTie = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="13" r="7" />
    <path d="M8 43v-3c0-8 6-14 14-14h4c8 0 14 6 14 14v3z" />
    <path d="M22 26l2 4 2-4M24 30v8" />
  </Svg>
)

export const Binoculars = (p) => (
  <Svg {...p}>
    <path d="M14 10h6v12h-6zM28 10h6v12h-6zM20 16h8" />
    <circle cx="14" cy="32" r="8" />
    <circle cx="34" cy="32" r="8" />
    <path d="M22 32h4" />
  </Svg>
)

export const ChecklistDoc = (p) => (
  <Svg {...p}>
    <rect x="11" y="6" width="26" height="36" rx="3" />
    <path d="M16 15l2 2 4-4M16 24l2 2 4-4M16 33l2 2 4-4M26 15h6M26 24h6M26 33h6" />
  </Svg>
)

export const Door = (p) => (
  <Svg {...p}>
    <path d="M14 8h20v34H14z" />
    <path d="M14 8l12 4v34l-12-4z" />
    <circle cx="22" cy="27" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
)

export const ShieldCheck = (p) => (
  <Svg {...p}>
    <path d="M24 5l15 5v13c0 10-7 17-15 20-8-3-15-10-15-20V10z" />
    <path d="M17 24l5 5 10-11" />
  </Svg>
)

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="6" y="11" width="36" height="26" rx="2" />
    <path d="M6 13l18 13 18-13" />
  </Svg>
)

export const DocEdit = (p) => (
  <Svg {...p}>
    <path d="M12 6h14l8 8v28H12z" />
    <path d="M26 6v8h8M18 22h12M18 28h12M18 34h7" />
    <path d="M30 40l8-8" strokeWidth="2" />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M10 8l8-2 4 10-5 3c2 6 6 10 12 12l3-5 10 4-2 8c-16 2-32-14-30-30z" />
  </Svg>
)

export const CreditCard = (p) => (
  <Svg {...p}>
    <rect x="4" y="11" width="40" height="26" rx="3" />
    <path d="M4 19h40M10 30h8M30 30h6" />
  </Svg>
)

export const ClipboardLines = (p) => (
  <Svg {...p}>
    <rect x="10" y="10" width="28" height="34" rx="2" />
    <path d="M18 10v-2a6 6 0 0 1 12 0v2z" />
    <path d="M17 22h14M17 28h14M17 34h9" />
  </Svg>
)

export const TrendChart = (p) => (
  <Svg {...p}>
    <path d="M8 6v36h36" />
    <path d="M12 34l9-9 6 5 8-10 5-4" />
    <circle cx="21" cy="25" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="35" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="40" cy="16" r="1.5" fill="currentColor" stroke="none" />
  </Svg>
)

export const ThreePeople = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="13" r="6" />
    <circle cx="11" cy="18" r="4.5" />
    <circle cx="37" cy="18" r="4.5" />
    <path d="M12 42v-4c0-7 5-12 12-12s12 5 12 12v4z" />
    <path d="M2 40v-3c0-5 4-9 9-9M46 40v-3c0-5-4-9-9-9" />
  </Svg>
)

export const PeopleShield = (p) => (
  <Svg {...p}>
    <circle cx="20" cy="12" r="5.5" />
    <circle cx="32" cy="15" r="4" />
    <path d="M6 38v-3c0-7 6-12 14-12h1" />
    <path d="M28 27l7-2.5 7 2.5v6c0 4-3 7-7 8-4-1-7-4-7-8z" />
    <path d="M32 33l2 2 4-4" />
  </Svg>
)

export const Building2 = (p) => (
  <Svg {...p}>
    <path d="M6 42h36M10 42V16h14v26M24 42V8h14v34" />
    <path d="M14 21h2M18 21h2M14 27h2M18 27h2M14 33h2M18 33h2M28 13h2M32 13h2M28 19h2M32 19h2M28 25h2M32 25h2M28 31h2M32 31h2M29 42v-6h4v6" />
  </Svg>
)

export const DoubleBubble = (p) => (
  <Svg {...p}>
    <path d="M18 8c7 0 12 4 12 9s-5 9-12 9c-1 0-2 0-3-.2L9 29l1.5-4.5C7.5 22.8 6 20.5 6 17c0-5 5-9 12-9z" />
    <path d="M30 17c6 .5 10 4 10 8.5 0 3-1.7 5.2-4.4 6.6L37 36l-6-3c-1 .2-2 .3-3 .3-4 0-7.5-1.6-9.4-4" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p} viewBox="0 0 20 20" size={p.size || 14} strokeWidth="2.2">
    <path d="M3 10.5l4.5 4.5L17 5.5" />
  </Svg>
)

export const ChevronDown = (p) => (
  <Svg {...p} viewBox="0 0 20 20" size={p.size || 16} strokeWidth="2">
    <path d="M4 7l6 6 6-6" />
  </Svg>
)

export const Dash = (p) => (
  <Svg {...p} viewBox="0 0 20 20" size={p.size || 16} strokeWidth="2.2">
    <path d="M4 10h12" />
  </Svg>
)

/* ---------- Added for how-it-works / book-a-founder-scan ---------- */
export const ShieldSparkle = (p) => (
  <Svg {...p}>
    <path d="M24 5l15 5v13c0 10-7 17-15 20-8-3-15-10-15-20V10z" />
    <path d="M24 15v14M17 22h14M19.5 17.5l9 9M28.5 17.5l-9 9" strokeWidth="1.2" />
  </Svg>
)

export const Truck = (p) => (
  <Svg {...p}>
    <path d="M4 12h24v20H4zM28 18h9l6 7v7H28z" />
    <circle cx="12" cy="35" r="4" />
    <circle cx="36" cy="35" r="4" />
  </Svg>
)

export const Warning = (p) => (
  <Svg {...p}>
    <path d="M24 7L44 41H4z" />
    <path d="M24 18v11M24 33v2" strokeWidth="2.2" />
  </Svg>
)

export const QuestionCircle = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="24" r="17" />
    <path d="M18 19a6 6 0 1 1 8 5.5c-1.5.7-2 1.8-2 3.5M24 33v1" strokeWidth="2" />
  </Svg>
)

export const Calendar = (p) => (
  <Svg {...p}>
    <rect x="6" y="10" width="36" height="32" rx="3" />
    <path d="M6 19h36M15 6v8M33 6v8" />
  </Svg>
)

export const Clipboard = (p) => (
  <Svg {...p}>
    <rect x="10" y="10" width="28" height="34" rx="2" />
    <path d="M18 10v-2a6 6 0 0 1 12 0v2z" />
  </Svg>
)

export const DatabaseCheck = (p) => (
  <Svg {...p}>
    <ellipse cx="22" cy="11" rx="13" ry="5" />
    <path d="M9 11v22c0 3 6 5 13 5h2" />
    <path d="M9 19c0 3 6 5 13 5s13-2 13-5M9 27c0 3 6 5 13 5" />
    <path d="M35 21v6" />
    <circle cx="36" cy="36" r="7" fill="#fff" />
    <path d="M33 36l2 2 4-4" />
  </Svg>
)

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="24" cy="24" r="16" />
    <path d="M24 14v10l7 4" />
  </Svg>
)

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="21" cy="21" r="12" />
    <path d="M30 30l10 10" strokeWidth="2" />
  </Svg>
)

export const DocCheckSearch = (p) => (
  <Svg {...p}>
    <path d="M12 6h14l8 8v10M26 6v8h8M12 6v36h13" />
    <path d="M18 22h10M18 28h6" />
    <circle cx="33" cy="34" r="6" />
    <path d="M30.5 34l2 2 3.5-3.5M37.5 38.5L41 42" />
  </Svg>
)

/* ---------- Added for home / refer-an-owner ---------- */
export const OpenBook = (p) => (
  <Svg {...p}>
    <path d="M24 12c-4-3-10-4-18-3v26c8-1 14 0 18 3 4-3 10-4 18-3V9c-8-1-14 0-18 3z" />
    <path d="M24 12v26" />
  </Svg>
)

export const DocCheck = (p) => (
  <Svg {...p}>
    <path d="M12 6h14l8 8v28H12z" />
    <path d="M26 6v8h8M17 28l5 5 9-10" />
  </Svg>
)

export const DocSlash = (p) => (
  <Svg {...p}>
    <path d="M12 6h14l8 8v28H12z" />
    <path d="M26 6v8h8M14 18l22 24" />
  </Svg>
)

export const SearchCheck = (p) => (
  <Svg {...p}>
    <circle cx="21" cy="21" r="13" />
    <path d="M31 31l10 10" strokeWidth="2" />
    <path d="M15 21l4 4 8-8" />
  </Svg>
)

export const ClipboardChart = (p) => (
  <Svg {...p}>
    <rect x="10" y="10" width="28" height="34" rx="2" />
    <path d="M18 10v-2a6 6 0 0 1 12 0v2z" />
    <path d="M16 36l6-7 5 4 8-9" />
    <path d="M16 36h16" />
  </Svg>
)

export const PeopleChat = (p) => (
  <Svg {...p}>
    <circle cx="18" cy="17" r="7" />
    <path d="M4 42v-3c0-7 6-12 14-12s14 5 14 12v3" />
    <path d="M30 8h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-7l-4 3v-3a3 3 0 0 1-1-6z" />
    <path d="M34 14h1M38 14h1M42 14h.5" strokeWidth="2" />
  </Svg>
)

export const Send = (p) => (
  <Svg {...p} viewBox="0 0 24 24" size={p.size || 18} fill="currentColor" stroke="none">
    <path d="M3 3l18 9-18 9 3-9z" />
  </Svg>
)
