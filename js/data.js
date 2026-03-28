// js/data.js

const initialParastatals = [
    {
        id: 1,
        name: "Botswana Oil Limited",
        logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "National oil company of Botswana, mandated to ensure security and efficiency of supply of petroleum products.",
        mandate: "Ensure security and efficiency of supply of petroleum products for Botswana, manage state-owned petroleum assets, and facilitate meaningful citizen participation in the petroleum sector.",
        sector: "Energy",
        region: "Gaborone",
        website: "https://www.botswanaoil.co.bw",
        leadership: "Chief Executive Officer",
        liveStreamUrl: ""
    },
    {
        id: 2,
        name: "Botswana Power Corporation",
        logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "State-owned company responsible for electrical power generation, transmission and distribution in Botswana.",
        mandate: "To provide reliable, safe, and affordable electricity to the nation.",
        sector: "Energy",
        region: "Gaborone",
        website: "https://www.bpc.bw",
        leadership: "Chief Executive Officer",
        liveStreamUrl: ""
    },
    {
        id: 3,
        name: "Water Utilities Corporation",
        logo: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Parastatal organization responsible for water and wastewater management.",
        mandate: "Provide water and wastewater management services.",
        sector: "Utilities",
        region: "National",
        website: "https://www.wuc.bw",
        leadership: "Chief Executive Officer",
        liveStreamUrl: ""
    },
    {
        id: 4,
        name: "Botswana Housing Corporation",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "Provides housing needs for the government and public.",
        mandate: "To build and provide houses and office accommodation for the government, local authorities and the public.",
        sector: "Housing & Infrastructure",
        region: "National",
        website: "https://www.bhc.bw",
        leadership: "Chief Executive Officer",
        liveStreamUrl: ""
    }
];

const initialNews = [
    {
        id: 1,
        title: "Launch of the New Solar Initiative",
        date: "2026-03-20",
        summary: "Botswana Power Corporation announces the launch of a new 50MW solar plant to boost renewable energy.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        parastatal: "Botswana Power Corporation"
    },
    {
        id: 2,
        title: "Water Conservation Drive 2026",
        date: "2026-03-15",
        summary: "Water Utilities Corporation launches a nationwide campaign for water conservation during the dry season.",
        image: "https://images.unsplash.com/photo-15199981604-ee9c6ebfba7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        parastatal: "Water Utilities Corporation"
    }
];

const initialUsers = [
    {
        id: 'u1',
        email: 'admin@bwparastatal.com',
        password: 'admin',
        role: 'super_admin',
        name: 'System Administrator'
    },
    {
        id: 'u2',
        email: 'rep@botswanaoil.co.bw',
        password: 'password',
        role: 'parastatal_admin',
        parastatal_id: 1,
        name: 'B.O. Representative'
    }
];

const initialTenders = [
    {
        id: 1,
        ref: "BPC-2026-001",
        title: "Provision of Solar Plant Maintenance Services",
        parastatal_id: 2, // BPC
        closeDate: "2026-04-15",
        status: "Open",
        fileUrl: "#"
    },
    {
        id: 2,
        ref: "WUC-2026-044",
        title: "Supply of Water Treatment Chemicals",
        parastatal_id: 3, // WUC
        closeDate: "2026-04-22",
        status: "Open",
        fileUrl: "#"
    }
];

const initialDocuments = [
    {
        id: 1,
        title: "BPC Annual Report 2025",
        parastatal_id: 2,
        type: "Report",
        fileUrl: "#"
    },
    {
        id: 2,
        title: "Water Act 2024",
        parastatal_id: 3,
        type: "Act",
        fileUrl: "#"
    },
    {
        id: 3,
        title: "Strategic Plan 2026-2030",
        parastatal_id: 1, // BOL
        type: "Strategy Document",
        fileUrl: "#"
    },
    {
        id: 4,
        title: "Housing Allocation Policy",
        parastatal_id: 4, // BHC
        type: "Policy",
        fileUrl: "#"
    }
];

const initialEvents = [
    {
        id: 1,
        title: "National Energy Summit",
        date: "2026-05-10",
        location: "Gaborone International Convention Centre",
        parastatal_id: 2,
        description: "A gathering of regional stakeholders to discuss the future of renewable energy in Botswana."
    },
    {
        id: 2,
        title: "World Water Day Commemoration",
        date: "2026-03-22",
        location: "Francistown Stadium",
        parastatal_id: 3,
        description: "Official ceremony and community awareness walk."
    }
];

// Initialize localStorage if empty
if (!localStorage.getItem('bw_parastatals')) localStorage.setItem('bw_parastatals', JSON.stringify(initialParastatals));
if (!localStorage.getItem('bw_news')) localStorage.setItem('bw_news', JSON.stringify(initialNews));
if (!localStorage.getItem('bw_users')) localStorage.setItem('bw_users', JSON.stringify(initialUsers));
if (!localStorage.getItem('bw_tenders')) localStorage.setItem('bw_tenders', JSON.stringify(initialTenders));
if (!localStorage.getItem('bw_documents')) localStorage.setItem('bw_documents', JSON.stringify(initialDocuments));
if (!localStorage.getItem('bw_events')) localStorage.setItem('bw_events', JSON.stringify(initialEvents));
if (!localStorage.getItem('bw_messages')) localStorage.setItem('bw_messages', JSON.stringify([]));
if (!localStorage.getItem('bw_internal_chat')) localStorage.setItem('bw_internal_chat', JSON.stringify([]));

// Data fetching helper functions
function getParastatals() { return JSON.parse(localStorage.getItem('bw_parastatals')) || []; }
function getNews() { return JSON.parse(localStorage.getItem('bw_news')) || []; }
function getUsers() { return JSON.parse(localStorage.getItem('bw_users')) || []; }
function getTenders() { return JSON.parse(localStorage.getItem('bw_tenders')) || []; }
function getDocuments() { return JSON.parse(localStorage.getItem('bw_documents')) || []; }
function getEvents() { return JSON.parse(localStorage.getItem('bw_events')) || []; }
function getMessages() { return JSON.parse(localStorage.getItem('bw_messages')) || []; }
function getInternalChat() { return JSON.parse(localStorage.getItem('bw_internal_chat')) || []; }
