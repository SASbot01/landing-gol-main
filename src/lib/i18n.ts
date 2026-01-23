export type Language = 'en' | 'es';

export const translations = {
    en: {
        nav: {
            status: "SYSTEM STATUS: ONLINE",
            encryption: "ENCRYPTION: AES-256",
            login: "[ LOGIN ]",
        },
        announcement: {
            text: "⚠ WARNING: BLACKWOLF HOLDINGS INTELLIGENCE DIVISION. SYSTEM STATUS: ARMAMENTO ACTIVO. FOUNDER’S ACCESS IS CLOSING. ENTER THE MATRIX OR REMAIN AN NPC.",
        },
        hero: {
            badge: ":: TARGET ACQUIRED ::",
            title1: "WITHOUT A COMMAND CENTER,",
            title2: "YOU ARE JUST COLLATERAL DAMAGE.",
            description: "Your life is fragmented. Your mind is exposed. Your assets are bleeding. <span class=\"text-white\"> GOL // SYSTEM </span> is the exoskeleton that centralizes your Health, Wealth, and Operations into one bunker. Stop playing the victim. <span class=\"text-yellow-400\">Activate God Mode.</span>",
            ctaPrimary: "[ INITIATE PROTOCOL ]",
            ctaSecondary: "I prefer to stay a pawn.",
        },
        objections: {
            title: "OBJECTIONS ELIMINATED",
            classified: "[CLASSIFIED]",
            items: [
                {
                    title: "THE COMPLEXITY TRAP",
                    question: "This looks like a military dashboard. I'm not a tech genius.",
                    answer: "Complexity is for the weak. GOL // SYSTEM is designed with Radical Centralization. If you can press a button, you can command your empire. The system handles the math; you handle the execution."
                },
                {
                    title: "THE INVESTMENT FRICTION",
                    question: "Why pay for this when I have Notion or Excel?",
                    answer: "You don't use a plastic knife to hunt a predator. Notion is a toy. GOL is a weapon. We are talking about Double-Entry Accounting and Bio-Hacking merged into one interface. The cost of staying blind to your own data is far higher than the price of this system."
                },
                {
                    title: "THE DATA PRIVACY FEAR",
                    question: "I don't trust putting my life in one app.",
                    answer: "You keep your data on public clouds like a sheep. We offer Bunker-Class Security. Your data is encrypted, independent, and exportable. You own the file. We just provide the fortress."
                }
            ]
        },
        model: {
            title: "THE ARCHITECTURE OF DOMINANCE",
            subtitle: "THE GOL // SYSTEM IS NOT A SUITE OF APPS. IT IS A UNIFIED NERVOUS SYSTEM FOR YOUR LIFE.",
            description: "You have been running your operations in the dark. Your health, your wealth, and your mission have been isolated in fragmented silos, bleeding efficiency. The GOL // SYSTEM solves this through the Trinity Protocol. We do not just track data; we fuse it.",
            bioDome: {
                title: "BIO-DOME",
                subtitle: "[ VITALITY ENGINE ]",
                desc: "Your hardware is your first constraint. If your biological machine fails, your mission fails. This module is not a \"habit tracker\"; it is a bio-monitor. We track your sleep, recovery, and energy levels to calculate your Combat Readiness."
            },
            opsCenter: {
                title: "OPS CENTER",
                subtitle: "[ INTELLIGENCE ENGINE ]",
                desc: "Mission Control. This is where your strategic will is executed. We utilize military-grade hierarchy: Areas > Projects > Missions > Tasks. No more vague to-do lists. You generate XP for every completed objective. You see your rank rise in real-time."
            },
            vault: {
                title: "THE VAULT",
                subtitle: "[ WEALTH ENGINE ]",
                desc: "The language of the elite is Double-Entry Accounting. The Vault manages your Assets and Liabilities with the precision of a multinational CFO. We track your Real Net Worth, not just your bank balance. You stop guessing and start calculating your trajectory."
            },
            synapse: {
                title: "THE SYNAPSE",
                desc: "In the Command Center, these three engines cross-reference. You will see the data correlation instantly: How does your lack of sleep (BIO-DOME) impact your productivity (OPS CENTER)? This is the difference between reacting to life and commanding it."
            }
        },
        journey: {
            title: "THE RAPID ASCENSION PROTOCOL",
            subtitle: "YOU DO NOT NEED YEARS. YOU NEED DATA. THE MOMENT YOU ENTER THE BUNKER, THE ILLUSION DISSOLVES.",
            steps: [
                {
                    title: "STAGE 1: THE ONBOARDING",
                    subtitle: "[ THE SHOCK OF TRUTH ]",
                    desc: "The instant you input your data, the system wakes up. You will stop guessing and start seeing. Order. For the first time, your life is not a mess of thoughts. It is a structured grid."
                },
                {
                    title: "STAGE 2: THE OPTIMIZATION",
                    subtitle: "[ THE DOPAMINE OF CONTROL ]",
                    desc: "The system starts working for you. You execute your first 'Missions'. You watch your XP bar fill. You realize that by simply following the HUD, you are winning."
                },
                {
                    title: "STAGE 3: SOVEREIGNTY",
                    subtitle: "[ GOD MODE ACTIVATED ]",
                    desc: "Total Omniscience. You know your liquidity, your physical readiness, and your project status in a single glance. You are the Architect. You make decisions based on math, not emotion."
                }
            ]
        },
        stacking: {
            title: "THE ARMAMENTORY",
            subtitle: "BREAK DOWN THE COST OF MEDIOCRITY. TODAY, YOU PAY TO BECOME STRONG.",
            items: [
                { name: "BIO-DOME (VITALITY ENGINE)", value: "$500/year", desc: "Biological surveillance system. Replaces guesswork with math." },
                { name: "OPS CENTER (INTELLIGENCE ENGINE)", value: "$1,200/year", desc: "Military-grade project management. Converts 'busy work' into XP." },
                { name: "THE VAULT (WEALTH ENGINE)", value: "$2,000/year", desc: "Double-entry accounting. Tracks Real Net Worth in real-time." },
                { name: "THE BUNKER SECURITY", value: "PRICELESS", desc: "Bunker-Class Encryption. You own your stats. You own your life." }
            ],
            totalValue: "TOTAL VALUE OF THE ARSENAL:",
            decisionTitle: "TODAY'S COMMAND DECISION",
            decisionDesc: "You are not buying software. You are buying a new operating system for your reality.",
            regularPrice: "REGULAR: $997",
            lockedIn: "LOCKED IN FOR LIFE",
            cta: "[ SECURE FOUNDERS ACCESS ]",
            features: {
                encrypted: "ENCRYPTED",
                oneTime: "ONE-TIME PAYMENT",
                instant: "INSTANT ACCESS"
            }
        },
        comparison: {
            title: "THE BATTLEFIELD AUDIT",
            subtitle: "CHOOSE YOUR WEAPON CAREFULLY. ONE IS FOR SURVIVAL. THE OTHERS ARE FOR DISTRACTION.",
            headers: ["CRITERIA", "THE \"TOY\" APPS", "THE \"PUBLIC\" APPS", "GOL // SYSTEM"],
            rows: [
                { title: "FUNCTIONALITY", toy: "Digital notebooks. Lists.", public: "Data entry. Harvesting.", gol: "Military Hierarchy. Gamified XP." },
                { title: "FATAL FLAW", toy: "Manual maintenance.", public: "Zero privacy. Sold data.", gol: "NONE DETECTED." },
                { title: "INTEGRATION", toy: "Fragmented", public: "Isolated", gol: "RADICAL CENTRALIZATION" },
                { title: "PHILOSOPHY", toy: "\"Planning parties\"", public: "\"Tracking spending\"", gol: "GOD MODE" }
            ]
        },
        founder: {
            title: "THE MANIFESTO OF",
            p1: "My name is Yzan PM. Like you, I have a mind that seeks optimization. But I was operating blind.",
            p2: "I was living in a fragmented world. My creativity was trapped in Notion, my finances were rotting in hostile Excel sheets, and my daily \"to-do\" lists were nothing but digital noise. I was spending my life managing the tools, not managing the mission.",
            p3: "I asked myself a question that changed everything:",
            quote: "\"If a stranger on the internet can know what I buy, where I am, and what I do... why can't I see that clearly for myself?\"",
            p4: "That was the breaking point. I realized that the tools available to us were designed for children. They were toys for the sheep.",
            p5: "I didn't need another list. I needed a weapon. So I built it. GOL // SYSTEM was born from a technical refusal to be a pawn. It is the exoskeleton I built to protect my data, centralize my focus, and see the truth of my own performance.",
            footer: "NOW, IT IS YOUR TURN TO STOP MANAGING FRAGMENTS AND START COMMANDING THE SYSTEM."
        },
        faq: {
            title: "INTELLIGENCE BRIEFING",
            subtitle: "ELIMINATE DOUBT BEFORE PULLING THE TRIGGER.",
            items: [
                { q: "Is my data actually safe? I don't trust the cloud.", a: "You shouldn't trust the public cloud. That’s for sheep. GOL // SYSTEM operates with Bunker-Class Security protocols. We use independent encryption standards. Furthermore, we believe in Data Sovereignty: your life belongs to you. You can export your entire existence (PDF/CSV) at any time. We are the custodians of your fortress; you are the owner." },
                { q: "I'm not a tech wizard. Is this going to be too complex for me?", a: "Complexity is a sign of poor engineering. GOL is designed for Radical Centralization. If you can send an email, you can command this system. The heavy lifting—the math, the accounting formulas, the project logic—is baked into the code. You provide the input; the system provides the intelligence." },
                { q: "What is the difference between the 'Founder' price and the future price?", a: "The Founder price is your reward for vision. As we integrate AI predictive features and expand the intelligence capabilities, the price for new members will rise significantly. By locking in now, you secure the Founding Member Rate for life. You pay less, you get more. That is the advantage of entering the matrix early." },
                { q: "Can I access this on my phone or just desktop?", a: "The Command Center goes where you go. GOL // SYSTEM is a PWA (Progressive Web App). It functions with native speed on your desktop, tablet, and mobile device. Your mission does not pause when you leave your chair, and neither does your access to the system." }
            ]
        },
        floatingCta: "[ JOIN THE ELITE ]",
        footer: {
            privacy: "[ PRIVACY PROTOCOL ]",
            terms: "[ TERMS OF ENGAGEMENT ]",
            refund: "[ REFUND POLICY ]"
        }
    },
    es: {
        nav: {
            status: "ESTADO DEL SISTEMA: ONLINE",
            encryption: "ENCRIPTACIÓN: AES-256",
            login: "[ INGRESAR ]",
        },
        announcement: {
            text: "⚠ ADVERTENCIA: DIVISIÓN DE INTELIGENCIA BLACKWOLF HOLDINGS. ESTADO DEL SISTEMA: ARMAMENTO ACTIVO. EL ACCESO DE FUNDADOR SE ESTÁ CERRANDO. ENTRA EN LA MATRIX O PERMANECE COMO UN NPC.",
        },
        hero: {
            badge: ":: OBJETIVO ADQUIRIDO ::",
            title1: "SIN UN CENTRO DE COMANDO,",
            title2: "ERES SOLO DAÑO COLATERAL.",
            description: "Tu vida está fragmentada. Tu mente está expuesta. Tus activos se desangran.<span class=\"text-white\"> GOL // SYSTEM </span> es el exoesqueleto que centraliza tu Salud, Riqueza y Operaciones en un solo búnker. Deja de hacerte la víctima. <span class=\"text-yellow-400\">Activa el Modo Dios.</span>",
            ctaPrimary: "[ INICIAR PROTOCOLO ]",
            ctaSecondary: "Prefiero seguir siendo un peón.",
        },
        objections: {
            title: "OBJECIONES ELIMINADAS",
            classified: "[CLASIFICADO]",
            items: [
                {
                    title: "LA TRAMPA DE LA COMPLEJIDAD",
                    question: "Parece un panel militar. No soy un genio tecnológico.",
                    answer: "La complejidad es para los débiles. GOL // SYSTEM está diseñado con Centralización Radical. Si puedes presionar un botón, puedes comandar tu imperio. El sistema maneja las matemáticas; tú manejas la ejecución."
                },
                {
                    title: "LA FRICCIÓN DE LA INVERSIÓN",
                    question: "¿Por qué pagar por esto si tengo Notion o Excel?",
                    answer: "No usas un cuchillo de plástico para cazar un depredador. Notion es un juguete. GOL es un arma. Estamos hablando de Contabilidad de Doble Entrada y Bio-Hacking fusionados en una interfaz. El costo de permanecer ciego a tus propios datos es mucho mayor que el precio de este sistema."
                },
                {
                    title: "EL MIEDO A LA PRIVACIDAD DE DATOS",
                    question: "No confío en poner mi vida en una sola app.",
                    answer: "Mantienes tus datos en nubes públicas como una oveja. Ofrecemos Seguridad Clase Búnker. Tus datos están encriptados, son independientes y exportables. Tú eres dueño del archivo. Nosotros solo proporcionamos la fortaleza."
                }
            ]
        },
        model: {
            title: "LA ARQUITECTURA DE LA DOMINANCIA",
            subtitle: "GOL // SYSTEM NO ES UNA SUITE DE APPS. ES UN SISTEMA NERVIOSO UNIFICADO PARA TU VIDA.",
            description: "Has estado operando en la oscuridad. Tu salud, tu riqueza y tu misión han estado aisladas en silos fragmentados, perdiendo eficiencia. GOL // SYSTEM resuelve esto a través del Protocolo Trinidad. No solo rastreamos datos; los fusionamos.",
            bioDome: {
                title: "BIO-DOMO",
                subtitle: "[ MOTOR DE VITALIDAD ]",
                desc: "Tu hardware es tu primera limitación. Si tu máquina biológica falla, tu misión falla. Este módulo no es un \"rastreador de hábitos\"; es un bio-monitor. Rastreamos tu sueño, recuperación y niveles de energía para calcular tu Preparación de Combate."
            },
            opsCenter: {
                title: "CENTRO DE OPS",
                subtitle: "[ MOTOR DE INTELIGENCIA ]",
                desc: "Control de Misión. Aquí es donde se ejecuta tu voluntad estratégica. Utilizamos jerarquía de grado militar: Áreas > Proyectos > Misiones > Tareas. No más listas de tareas vagas. Generas XP por cada objetivo completado. Ves tu rango subir en tiempo real."
            },
            vault: {
                title: "LA BÓVEDA",
                subtitle: "[ MOTOR DE RIQUEZA ]",
                desc: "El lenguaje de la élite es la Contabilidad de Doble Entrada. La Bóveda gestiona tus Activos y Pasivos con la precisión de un director financiero multinacional. Rastreamos tu Patrimonio Neto Real, no solo tu saldo bancario. Dejas de adivinar y comienzas a calcular tu trayectoria."
            },
            synapse: {
                title: "LA SINAPSIS",
                desc: "En el Centro de Mando, estos tres motores se cruzan. Verás la correlación de datos al instante: ¿Cómo impacta tu falta de sueño (BIO-DOMO) en tu productividad (CENTRO DE OPS)? Esta es la diferencia entre reaccionar a la vida y comandarla."
            }
        },
        journey: {
            title: "EL PROTOCOLO DE ASCENSIÓN RÁPIDA",
            subtitle: "NO NECESITAS AÑOS. NECESITAS DATOS. EN EL MOMENTO EN QUE ENTRAS AL BÚNKER, LA ILUSIÓN SE DISUELVE.",
            steps: [
                {
                    title: "ETAPA 1: EL ONBOARDING",
                    subtitle: "[ EL SHOCK DE LA VERDAD ]",
                    desc: "Al instante de ingresar tus datos, el sistema despierta. Dejarás de adivinar y comenzarás a ver. Orden. Por primera vez, tu vida no es un desorden de pensamientos. Es una cuadrícula estructurada."
                },
                {
                    title: "ETAPA 2: LA OPTIMIZACIÓN",
                    subtitle: "[ LA DOPAMINA DEL CONTROL ]",
                    desc: "El sistema comienza a trabajar para ti. Ejecutas tus primeras 'Misiones'. Ves tu barra de XP llenarse. Te das cuenta de que simplemente siguiendo el HUD, estás ganando."
                },
                {
                    title: "ETAPA 3: SOBERANÍA",
                    subtitle: "[ MODO DIOS ACTIVADO ]",
                    desc: "Omnisciencia Total. Conoces tu liquidez, tu preparación física y el estado de tus proyectos en un solo vistazo. Eres el Arquitecto. Tomas decisiones basadas en matemáticas, no en emociones."
                }
            ]
        },
        stacking: {
            title: "EL ARMAMENTO",
            subtitle: "DESGLOSA EL COSTO DE LA MEDIOCRIDAD. HOY, PAGAS PARA VOLVERTE FUERTE.",
            items: [
                { name: "BIO-DOMO (MOTOR DE VITALIDAD)", value: "$500/año", desc: "Sistema de vigilancia biológica. Reemplaza las conjeturas con matemáticas." },
                { name: "CENTRO DE OPS (MOTOR DE INTELIGENCIA)", value: "$1,200/año", desc: "Gestión de proyectos militar. Convierte el 'trabajo ocupado' en XP." },
                { name: "LA BÓVEDA (MOTOR DE RIQUEZA)", value: "$2,000/año", desc: "Contabilidad de doble entrada. Rastrea el Patrimonio Neto Real en tiempo real." },
                { name: "SEGURIDAD DEL BÚNKER", value: "INVALUABLE", desc: "Encriptación Clase Búnker. Eres dueño de tus estadísticas. Eres dueño de tu vida." }
            ],
            totalValue: "VALOR TOTAL DEL ARSENAL:",
            decisionTitle: "DECISIÓN DE COMANDO DE HOY",
            decisionDesc: "No estás comprando software. Estás comprando un nuevo sistema operativo para tu realidad.",
            regularPrice: "REGULAR: $997",
            lockedIn: "ASEGURADO DE POR VIDA",
            cta: "[ ASEGURAR ACCESO FUNDADOR ]",
            features: {
                encrypted: "ENCRIPTADO",
                oneTime: "PAGO ÚNICO",
                instant: "ACCESO INSTANTÁNEO"
            }
        },
        comparison: {
            title: "LA AUDITORÍA DEL CAMPO DE BATALLA",
            subtitle: "ELIGE TU ARMA CUIDADOSAMENTE. UNA ES PARA SOBREVIVIR. LAS OTRAS SON PARA DISTRACCIÓN.",
            headers: ["CRITERIOS", "LAS APPS DE \"JUGUETE\"", "LAS APPS \"PÚBLICAS\"", "GOL // SYSTEM"],
            rows: [
                { title: "FUNCIONALIDAD", toy: "Libretas digitales. Listas.", public: "Entrada de datos. Cosecha.", gol: "Jerarquía Militar. XP Gamificado." },
                { title: "FALLA FATAL", toy: "Mantenimiento manual.", public: "Cero privacidad. Datos vendidos.", gol: "NINGUNA DETECTADA." },
                { title: "INTEGRACIÓN", toy: "Fragmentado", public: "Aislado", gol: "CENTRALIZACIÓN RADICAL" },
                { title: "FILOSOFÍA", toy: "\"Planear fiestas\"", public: "\"Rastrear gastos\"", gol: "MODO DIOS" }
            ]
        },
        founder: {
            title: "EL MANIFIESTO DE",
            p1: "Me llamo Yzan PM. Como tú, tengo una mente que busca la optimización. Pero operaba a ciegas.",
            p2: "Vivía en un mundo fragmentado. Mi creatividad estaba atrapada en Notion, mis finanzas se pudrían en hojas de Excel hostiles, y mis listas de tareas diarias no eran más que ruido digital. Pasaba mi vida gestionando las herramientas, no gestionando la misión.",
            p3: "Me hice una pregunta que lo cambió todo:",
            quote: "\"Si un extraño en internet puede saber lo que compro, dónde estoy y lo que hago... ¿por qué no puedo ver eso claramente por mí mismo?\"",
            p4: "Ese fue el punto de quiebre. Me di cuenta de que las herramientas disponibles para nosotros estaban diseñadas para niños. Eran juguetes para las ovejas.",
            p5: "No necesitaba otra lista. Necesitaba un arma. Así que la construí. GOL // SYSTEM nació de un rechazo técnico a ser un peón. Es el exoesqueleto que construí para proteger mis datos, centralizar mi enfoque y ver la verdad de mi propio rendimiento.",
            footer: "AHORA, ES TU TURNO DE DEJAR DE GESTIONAR FRAGMENTOS Y COMENZAR A COMANDAR EL SISTEMA."
        },
        faq: {
            title: "INFORME DE INTELIGENCIA",
            subtitle: "ELIMINA LA DUDA ANTES DE APRETAR EL GATILLO.",
            items: [
                { q: "¿Están realmente seguros mis datos? No confío en la nube.", a: "No deberías confiar en la nube pública. Eso es para las ovejas. GOL // SYSTEM opera con protocolos de Seguridad Clase Búnker. Usamos estándares de encriptación independientes. Además, creemos en la Soberanía de Datos: tu vida te pertenece. Puedes exportar toda tu existencia (PDF/CSV) en cualquier momento. Somos los custodios de tu fortaleza; tú eres el dueño." },
                { q: "I'm not a tech wizard. Is this going to be too complex for me?", a: "La complejidad es un signo de mala ingeniería. GOL está diseñado para la Centralización Radical. Si puedes enviar un email, puedes comandar este sistema. El trabajo pesado—las matemáticas, las fórmulas contables, la lógica del proyecto—está integrado en el código. Tú proporcionas la entrada; el sistema proporciona la inteligencia." },
                { q: "¿Cuál es la diferencia entre el precio 'Fundador' y el precio futuro?", a: "El precio de Fundador es tu recompensa por la visión. A medida que integremos funciones predictivas de IA y expandamos las capacidades de inteligencia, el precio para nuevos miembros aumentará significativamente. By locking in now, you secure the Founding Member Rate for life. You pay less, you get more. That is the advantage of entering the matrix early." },
                { q: "¿Puedo acceder a esto en mi teléfono o solo en escritorio?", a: "El Centro de Comando va contigo. GOL // SYSTEM es una PWA (App Web Progresiva). Funciona con velocidad nativa en tu escritorio, tablet y dispositivo móvil. Tu misión no se pausa cuando dejas tu silla, y tampoco tu acceso al sistema." }
            ]
        },
        floatingCta: "[ ÚNETE A LA ÉLITE ]",
        footer: {
            privacy: "[ PROTOCOLO DE PRIVACIDAD ]",
            terms: "[ TÉRMINOS DE COMPROMISO ]",
            refund: "[ POLÍTICA DE REEMBOLSO ]"
        }
    }
};

export function getTranslation(lang: Language) {
    return translations[lang];
}
