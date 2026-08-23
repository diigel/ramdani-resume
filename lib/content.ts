export const profile = {
	name: "Muhammad Ramdani",
	headline: "Mobile Developer — Android · Flutter · IoT",
	location: "Sawangan, Depok, Indonesia",
	email: "dhani.digel@gmail.com",
	github: "https://github.com/diigel",
	linkedin: "https://linkedin.com/in/muhammad-ramdani-769b891a0",
	cvUrl: "/Muhammad_Ramdani_CV_2026_En.pdf",
	summary:
		"Senior Android Developer with 6+ years building scalable, maintainable, high-performance mobile apps across fintech, telemedicine, IoT, and enterprise domains. Deep expertise in Clean Architecture, MVVM, MVI, Jetpack Compose, and reactive programming. Proven track record modernizing legacy codebases and integrating complex hardware SDKs (Bluetooth/IoT).",
};

export type Experience = {
	role: string;
	company: string;
	period: string;
	bullets: string[];
};

export const experiences: Experience[] = [
	{
		role: "Senior Android Developer",
		company: "PT Appsku Aplikasi Indonesia",
		period: "Mar 2024 – Present",
		bullets: [
			"Spearheaded migration of legacy Java codebase to Kotlin with Modular Architecture, improving build speed and team scalability.",
			"Architected new feature modules following Clean Architecture, decoupling business logic from UI and data layers.",
			"Reduced memory usage and cold-start time via profiling, lazy initialization, and coroutine-based concurrency.",
			"Primary technical liaison between product and UI/UX, translating business needs into engineering tasks.",
		],
	},
	{
		role: "Senior Android Developer",
		company: "PT Amanah Karya Indonesia",
		period: "Aug 2023 – Feb 2024",
		bullets: [
			"Designed Modular Architecture for My TMMIN Android (Toyota Manufacturing Indonesia) with shared Base Class + ViewBinding.",
			"Modernized dependency management via BuildSrc Kotlin DSL, eliminating version conflicts.",
			"Built reactive architecture using RxJava 2 + Retrofit for consistent observable data streams.",
			"Optimized third-party SDK integrations, resolving stability bottlenecks impacting internal ops.",
		],
	},
	{
		role: "Mid Android Developer",
		company: "PT Sehat Digital Nusantara (Alteacare)",
		period: "Sep 2021 – Aug 2023",
		bullets: [
			"Core development of Alteacare Telemedicine platform: e-Pharmacy, digital voucher, post-teleconsultation flows.",
			"Managed end-to-end Play Store release cycles including staged rollouts and production monitoring.",
			"Maintained high crash-free session rate via Firebase Crashlytics proactive resolution.",
			"Code reviews and branching strategy enforcement across engineering team.",
		],
	},
	{
		role: "Senior Android Developer",
		company: "PT Langitpay Digital Indonesia",
		period: "Oct 2018 – Sep 2021",
		bullets: [
			"Led design & development of Langitpay Ecosystem (Boss Bayar PPOB, Marketplace, Attendance) serving thousands of field agents.",
			"Engineered offline-first sync layer with Room + WorkManager for low-connectivity transaction continuity.",
			"Drove incremental Java → Kotlin migration and Android Architecture Components adoption.",
			"Integrated FCM push notifications for real-time agent operations.",
		],
	},
];

export type Project = {
	slug: string;
	title: string;
	tagline: string;
	tech: string[];
	highlights: string[];
	image?: string;
	playStoreUrl?: string;
	githubUrl?: string;
	liveUrl?: string;
};

export const projects: Project[] = [
	{
		slug: "aku-mpos-vending",
		title: "Aku MPOS Vending Machine",
		tagline:
			"IoT vending machine integration — hardware control, cashless payment, live inventory.",
		tech: [
			"Kotlin",
			"IoT / Vending SDK",
			"Bluetooth",
			"Coroutines",
			"Clean Architecture",
			"MVVM",
		],
		highlights: [
			"Integrated vending machine hardware SDK to control slot dispensing, sensor telemetry, and cashless payment flows.",
			"Built resilient state machine handling transaction, dispensing, and failure-recovery paths end-to-end.",
			"Real-time stock sync + remote monitoring via REST + local IP network.",
		],
	},
	{
		slug: "aku-mpos-premium",
		title: "Aku MPOS Premium",
		tagline: "Mobile Point of Sale with Telpo & iMin hardware integration.",
		tech: [
			"Kotlin",
			"Java",
			"Telpo SDK",
			"iMin SDK",
			"MVVM",
			"Clean Architecture",
		],
		highlights: [
			"Production Mobile POS integrating peripheral device SDKs for receipt printers and barcode scanners.",
			"Streamlined IoT integration via optimized RESTful APIs and local IP network sync.",
			"Hybrid architecture strategy to progressively modernize the legacy codebase.",
		],
		image:
			"https://play-lh.googleusercontent.com/GodAb2rziOwbSZolxvplh8P49gDZnC46R_eOOX2HSJDhEFlD0UdGsoUmaHHb2RNZIkB8oI_Eh_yoJjqP9Dr2pak=s256",
		playStoreUrl:
			"https://play.google.com/store/apps/details?id=application.aku.restopremium",
	},
	{
		slug: "retribusi-parkir",
		title: "Retribusi Parkir",
		tagline: "Smart parking with ML Kit LPR & Bluetooth thermal printing.",
		tech: ["Kotlin", "ML Kit", "Bluetooth", "Coroutines"],
		highlights: [
			"Real-time parking fee collection with automated License Plate Recognition (LPR).",
			"Bluetooth thermal printing for instant receipts.",
			"Live parking occupancy monitoring via data sync.",
		],
	},
	{
		slug: "my-tmmin",
		title: "My TMMIN Android",
		tagline: "Toyota Manufacturing Indonesia internal application.",
		tech: [
			"Kotlin",
			"Modular Architecture",
			"RxJava 2",
			"Retrofit",
			"ViewBinding",
			"BuildSrc",
		],
		highlights: [
			"Scalable Modular Architecture with shared Base Class + ViewBinding.",
			"BuildSrc Kotlin DSL for centralized, conflict-free dependency management.",
			"Optimized third-party SDK integrations resolving operational bottlenecks.",
		],
		image:
			"https://play-lh.googleusercontent.com/hP26ZsLcaMgtcnkWD8wpJuBSkOtSt1jXgUg_vx3Uxx9LvtZhXh3_Lj8xraimzQW90dylqLs55pa12IcuKl8W-Q=s256",
		playStoreUrl:
			"https://play.google.com/store/apps/details?id=id.co.toyota.mytmmin",
	},
	{
		slug: "alteacare",
		title: "Alteacare — Telemedicine",
		tagline: "Core features on Alteacare telemedicine platform.",
		tech: [
			"Java",
			"Kotlin",
			"RxJava",
			"AAC",
			"MoEngage",
			"GitHub Actions",
			"Firebase",
		],
		highlights: [
			"Delivered e-Pharmacy, digital voucher, and post-teleconsultation workflows.",
			"End-to-end Play Store release management.",
			"High production stability via Firebase Crashlytics.",
		],
		image:
			"https://play-lh.googleusercontent.com/52EUDa5EDMNw841-9mbYnL4szXOOc3HX85iiPIj7-KIFM0pkO1hzgqoBPfcVXgbOX5V7352npcNZRUhGVR1n=s256",
		playStoreUrl:
			"https://play.google.com/store/apps/details?id=com.dre.loyalty",
	},
	{
		slug: "aku-mpos-umkm",
		title: "Aku MPOS UMKM",
		tagline: "Lightweight POS for small food-court merchants & UMKM.",
		tech: ["Kotlin", "MVVM", "Clean Architecture", "Retrofit", "Room"],
		highlights: [
			"Streamlined POS optimized for foodcourt & UMKM operators with quick order entry and receipt printing.",
			"Shared architecture with Aku MPOS Premium via Modular design for faster feature parity.",
			"Play Store rollout with staged releases and Crashlytics-driven stability monitoring.",
		],
		image:
			"https://play-lh.googleusercontent.com/rhdbNNuJ3rm3D3l2dbzg9uqTu1DjmiZIG-GSjMn7mOrWnshM-639D35VO2RXLGOMJdR4UJDkNQVe9nvscpWWKA=s256",
		playStoreUrl:
			"https://play.google.com/store/apps/details?id=application.appsku.foodcourtfestival",
	},
	{
		slug: "langitpay",
		title: "Langitpay Ecosystem",
		tagline:
			"Boss Bayar PPOB, marketplace & attendance for thousands of field agents.",
		tech: ["Java", "Kotlin", "Room", "WorkManager", "FCM", "Retrofit"],
		highlights: [
			"Led design and Java → Kotlin modernization of high-traffic PPOB, marketplace, and attendance apps.",
			"Robust offline-first sync with Room + WorkManager for low-connectivity transaction continuity.",
			"FCM push notifications for real-time field-agent operations.",
		],
	},
	{
		slug: "ppob-uberkah",
		title: "PPOB Uberkah",
		tagline:
			"PPOB payment app with Bluetooth thermal receipt printing (freelance).",
		tech: ["Kotlin", "Bluetooth", "Retrofit", "MVVM"],
		highlights: [
			"Built end-to-end PPOB app with full payment API integration for pulsa, data, and bill payments.",
			"Bluetooth thermal printer support for on-the-spot receipt generation.",
			"Delivered as freelance engagement with PT Usaha Bersama Kami (Uberkah).",
		],
	},
	{
		slug: "hris-flutter",
		title: "HRIS Flutter App",
		tagline: "Cross-platform HRIS (attendance, reimbursement, cash advance).",
		tech: ["Flutter", "Dart", "REST API"],
		highlights: [
			"Cross-platform HRIS covering attendance, reimbursement, and cash advance flows.",
			"Consistent UI across Android & iOS from a single codebase.",
			"REST API integration with auth, validation, and real-time status.",
		],
	},
];

export const skills = {
	Languages: ["Kotlin", "Java", "Dart (Flutter)"],
	"Architecture & Patterns": [
		"Clean Architecture",
		"Modular Architecture",
		"MVVM",
		"MVI",
		"SOLID",
	],
	"Frameworks & Jetpack": [
		"Android SDK",
		"Jetpack Compose",
		"ViewModel",
		"LiveData",
		"Navigation",
		"Paging 3",
	],
	"Async & Reactive": ["Coroutines", "RxJava", "Flow"],
	"DI, Network & Storage": [
		"Dagger/Hilt",
		"Koin",
		"Retrofit",
		"OkHttp",
		"Room",
		"DataStore",
	],
	"Hardware & IoT": [
		"Bluetooth (BLE & Classic)",
		"Telpo SDK",
		"ML Kit (LPR)",
		"Vending Machine",
	],
	DevOps: [
		"Git/GitHub",
		"Firebase (Crashlytics, Analytics, FCM)",
		"Play Store",
	],
};
