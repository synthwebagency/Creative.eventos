export type Language = 'en' | 'pt';

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    events: string;
    contact: string;
    planEvent: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaViewServices: string;
    ctaPlanEvent: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
  };
  services: {
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
      details: string;
      includes: string[];
      image: string;
    }[];
  };
  events: {
    title: string;
    description: string;
    pastEvents: {
      id: string;
      title: string;
      description: string;
      images: string[];
    }[];
  };
  whyUs: {
    title: string;
    slides: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    location: string;
    address: string;
  };
  serviceArea: string;
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      events: 'Events',
      contact: 'Contact',
      planEvent: 'Plan Your Event',
    },
    hero: {
      title: 'WE CREATE UNFORGETTABLE EVENTS',
      subtitle: 'FROM CONCEPT TO EXECUTION – WE HANDLE EVERYTHING',
      ctaViewServices: 'VIEW SERVICES',
      ctaPlanEvent: 'PLAN YOUR EVENT',
    },
    about: {
      title: 'Who We Are',
      subtitle: 'Professional, Creative, and Organized',
      description: 'Creative Eventos is a premium event planning agency dedicated to turning your vision into reality. We combine artistic flair with meticulous organization to create experiences that last a lifetime.',
      points: [
        'Professional event planners',
        'Creative setups and decor',
        'Reliable and organized team',
      ],
    },
    services: {
      title: 'Our Services',
      description: 'Sophisticated solutions for every occasion.',
      items: [
        {
          id: 'planning',
          title: 'EVENT PLANNING',
          description: 'Full-service planning from A to Z.',
          details: 'We take care of every detail, ensuring your event is seamless and stress-free. From budget management to vendor coordination.',
          includes: ['Budget Planning', 'Vendor Management', 'On-site Coordination', 'Timeline Creation'],
          image: '/images/service_planning.jpg',
        },
        {
          id: 'rental',
          title: 'TABLE & CHAIR RENTAL',
          description: 'Premium furniture for your guests.',
          details: 'High-quality tables and chairs that fit any aesthetic, from corporate minimalist to wedding elegance.',
          includes: ['Variety of styles', 'Delivery & Setup', 'High-quality materials', 'Large inventory'],
          image: '/images/service_rental.jpg',
        },
        {
          id: 'decor',
          title: 'EVENT DECOR SETUP',
          description: 'Transforming spaces into dreams.',
          details: 'Our decorators are artists who understand how to use light, fabric, and flowers to create the perfect atmosphere.',
          includes: ['Floral design', 'Lighting setup', 'Thematic decor', 'Personalized touches'],
          image: '/images/service_decor.jpg',
        },
        {
          id: 'venue',
          title: 'VENUE SETUP',
          description: 'Precision in every corner.',
          details: 'We handle the logistics of setting up your venue exactly as envisioned, maximizing space and flow.',
          includes: ['Floor planning', 'Technical setup', 'Signage installation', 'Stage management'],
          image: '/images/service_venue.jpg',
        },
        {
          id: 'corporate',
          title: 'CORPORATE EVENTS',
          description: 'Professional excellence for your brand.',
          details: 'Impress your clients and team with perfectly executed conferences, launches, and galas.',
          includes: ['Branding integration', 'Audio/Visual support', 'Professional catering', 'Smooth flow'],
          image: '/images/service_corporate.jpg',
        },
        {
          id: 'private',
          title: 'PRIVATE EVENTS',
          description: 'Intimate and grand celebrations.',
          details: 'Birthdays, anniversaries, or just because – we make your personal milestones truly special.',
          includes: ['Personalized themes', 'Intimate setups', 'Entertainment booking', 'Catering coordination'],
          image: '/images/service_private.jpg',
        },
      ],
    },
    events: {
      title: 'Our Past Events',
      description: 'A glimpse into the magic we have created.',
      pastEvents: [
        {
          id: 'wedding-crystal-silver',
          title: 'WEDDING - THEME CRYSTAL AND SILVER',
          description: 'A luxurious and shimmering wedding setup featuring crystal centerpieces and silver accents.',
          images: [
            '/images/wedding_1.jpg',
            '/images/wedding_2.jpg',
            '/images/wedding_3.jpg',
          ],
        },
        {
          id: 'anniversary-lilac',
          title: 'ANNIVERSARY - LILAC THEME',
          description: 'A soft and romantic anniversary celebration with lilac floral arrangements and gentle lighting.',
          images: [
            '/images/anniversary_lilac_1.jpg',
            '/images/anniversary_lilac_2.jpg',
            '/images/anniversary_lilac_3.jpg',
          ],
        },
        {
          id: 'corporate-womens-day',
          title: "WOMEN'S DAY CORPORATE EVENT",
          description: 'A sophisticated corporate gathering honoring Mozambican Women\'s Day with elegant decor.',
          images: [
            '/images/womens_day_1.jpg',
            '/images/womens_day_2.jpg',
            '/images/womens_day_3.jpg',
          ],
        },
        {
          id: 'anniversary-terracotta',
          title: 'ANNIVERSARY - TERRACOTTA THEME',
          description: 'Warm, earthy tones and rustic elegance for a memorable anniversary milestone.',
          images: [
            '/images/anniversary_terracotta_1.jpg',
            '/images/anniversary_terracotta_2.jpg',
            '/images/anniversary_terracotta_3.jpg',
          ],
        },
        {
          id: 'school-of-excellence',
          title: 'SCHOOL OF EXCELLENCE - INTENSIVE DECORATION COURSE',
          description: 'Educational setup for our premier decoration workshop, teaching the art of event design.',
          images: [
            '/images/school_1.jpg',
            '/images/school_2.jpg',
            '/images/school_3.jpg',
          ],
        },
        {
          id: 'labor-day-green',
          title: 'LABOR DAY - GREEN THEME',
          description: 'A fresh and vibrant celebration for Labor Day with lush green elements and natural decor.',
          images: [
            '/images/labor_day_green_1.jpg',
            '/images/labor_day_green_2.jpg',
            '/images/labor_day_green_3.jpg',
          ],
        },
      ],
    },
    whyUs: {
      title: 'Why Choose Us',
      slides: [
        { title: 'CREATIVE DESIGNS', description: 'Unique concepts tailored to your personal style.' },
        { title: 'PROFESSIONAL TEAM', description: 'Expert planners with years of industry experience.' },
        { title: 'RELIABLE SERVICE', description: 'On-time execution and dependable communication.' },
        { title: 'ATTENTION TO DETAIL', description: 'Nothing is too small for our meticulous planners.' },
        { title: 'CUSTOMIZED EVENTS', description: 'Your vision is our blueprint for success.' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      phone: '+258 82 547 6979',
      email: 'creative.eventos15@gmail.com',
      location: 'Maputo, Mozambique',
      address: 'Av. 24 de Julho, N°: 979 - 1º Andar/Flat: 3, 979',
    },
    serviceArea: 'Polana Cimento B, Boane, Matola-Rio, Costa do Sol, Sommerschield, Machava, Matola, Maputo, Zimpeto',
    socials: {
      instagram: 'https://www.instagram.com/creative.eventosmz?igsh=MXhwcGg1ZDNvZ3h5Yg==',
      facebook: 'https://www.facebook.com/share/1JVGKbQvwM/',
      whatsapp: '258825476979'
    },
    footer: {
      rights: '© 2026 Creative Eventos. All rights reserved.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      events: 'Eventos',
      contact: 'Contacto',
      planEvent: 'Planear Evento',
    },
    hero: {
      title: 'CRIAMOS EVENTOS INESQUECÍVEIS',
      subtitle: 'DO CONCEITO À EXECUÇÃO – NÓS TRATAMOS DE TUDO',
      ctaViewServices: 'VER SERVIÇOS',
      ctaPlanEvent: 'PLANEAR EVENTO',
    },
    about: {
      title: 'Quem Somos',
      subtitle: 'Profissional, Criativo e Organizado',
      description: 'Creative Eventos é uma agência premium de planeamento de eventos dedicada a transformar a sua visão em realidade. Combinamos talento artístico com organização meticulosa para criar experiências memoráveis.',
      points: [
        'Planeadores de eventos profissionais',
        'Montagens e decoração criativas',
        'Equipa fiável e organizada',
      ],
    },
    services: {
      title: 'Nossos Serviços',
      description: 'Soluções sofisticadas para todas as ocasiões.',
      items: [
        {
          id: 'planning',
          title: 'PLANEAMENTO DE EVENTOS',
          description: 'Serviço completo do A ao Z.',
          details: 'Cuidamos de cada detalhe, garantindo que o seu evento seja perfeito e sem stress. Da gestão de orçamento à coordenação de fornecedores.',
          includes: ['Planeamento de Orçamento', 'Gestão de Fornecedores', 'Coordenação no Local', 'Criação de Cronograma'],
          image: '/images/service_planning.jpg',
        },
        {
          id: 'rental',
          title: 'ALUGUER DE MESAS E CADEIRAS',
          description: 'Mobiliário premium para os seus convidados.',
          details: 'Mesas e cadeiras de alta qualidade que se adaptam a qualquer estética, do minimalista corporativo à elegância de casamentos.',
          includes: ['Variedade de estilos', 'Entrega e Montagem', 'Materiais de alta qualidade', 'Grande inventário'],
          image: '/images/service_rental.jpg',
        },
        {
          id: 'decor',
          title: 'DECORAÇÃO',
          description: 'Transformando espaços em sonhos.',
          details: 'Nossos decoradores são artistas que entendem como usar luz, tecidos e flores para criar a atmosfera perfeita.',
          includes: ['Design floral', 'Montagem de iluminação', 'Decoração temática', 'Toques personalizados'],
          image: '/images/service_decor.jpg',
        },
        {
          id: 'venue',
          title: 'MONTAGEM DE ESPAÇOS',
          description: 'Precisão em cada canto.',
          details: 'Lidamos com a logística de montar o seu espaço exatamente como imaginado, maximizando o espaço e o fluxo.',
          includes: ['Planeamento de planta', 'Montagem técnica', 'Instalação de sinalética', 'Gestão de palco'],
          image: '/images/service_venue.jpg',
        },
        {
          id: 'corporate',
          title: 'EVENTOS CORPORATIVOS',
          description: 'Excelência profissional para sua marca.',
          details: 'Impressione seus clientes e equipa com conferências, lançamentos e galas executados com perfeição.',
          includes: ['Integração de branding', 'Suporte Áudio/Visual', 'Catering profissional', 'Fluxo contínuo'],
          image: '/images/service_corporate.jpg',
        },
        {
          id: 'private',
          title: 'EVENTOS PRIVADOS',
          description: 'Celebrações íntimas e grandiosas.',
          details: 'Aniversários, bodas ou simplesmente porque sim – tornamos os seus marcos pessoais verdadeiramente especiais.',
          includes: ['Temas personalizados', 'Montagens íntimas', 'Reserva de entretenimento', 'Coordenação de catering'],
          image: '/images/service_private.jpg',
        },
      ],
    },
    events: {
      title: 'Eventos Passados',
      description: 'Um vislumbre da magia que criámos.',
      pastEvents: [
        {
          id: 'wedding-crystal-silver',
          title: 'CASAMENTO – TEMA CRISTAL E PRATA',
          description: 'Uma montagem de casamento luxuosa e cintilante com centros de mesa de cristal e detalhes em prata.',
          images: [
            '/images/wedding_1.jpg',
            '/images/wedding_2.jpg',
            '/images/wedding_3.jpg',
          ],
        },
        {
          id: 'anniversary-lilac',
          title: 'ANIVERSÁRIO – TEMA LILÁS',
          description: 'Uma celebração de aniversário suave e romântica com arranjos florais lilás e iluminação suave.',
          images: [
            '/images/anniversary_lilac_1.jpg',
            '/images/anniversary_lilac_2.jpg',
            '/images/anniversary_lilac_3.jpg',
          ],
        },
        {
          id: 'corporate-womens-day',
          title: 'EVENTO CORPORATIVO ALUSIVO AO DIA DA MULHER MOÇAMBICANA',
          description: 'Um encontro corporativo sofisticado em homenagem ao Dia da Mulher Moçambicana com decoração elegante.',
          images: [
            '/images/womens_day_1.jpg',
            '/images/womens_day_2.jpg',
            '/images/womens_day_3.jpg',
          ],
        },
        {
          id: 'anniversary-terracotta',
          title: 'ANIVERSÁRIO – TEMA TERRACOTA',
          description: 'Tons quentes e terrosos e elegância rústica para um marco de aniversário memorável.',
          images: [
            '/images/anniversary_terracotta_1.jpg',
            '/images/anniversary_terracotta_2.jpg',
            '/images/anniversary_terracotta_3.jpg',
          ],
        },
        {
          id: 'school-of-excellence',
          title: 'ESCOLA DE EXCELÊNCIA – CURSO INTENSIVO DE DECORAÇÃO',
          description: 'Montagem educativa para o nosso workshop de decoração de primeira classe, ensinando a arte do design de eventos.',
          images: [
            '/images/school_1.jpg',
            '/images/school_2.jpg',
            '/images/school_3.jpg',
          ],
        },
        {
          id: 'labor-day-green',
          title: 'DIA DO TRABALHADOR – TEMA VERDE',
          description: 'Uma celebração fresca e vibrante para o Dia do Trabalhador com elementos verdes exuberantes e decoração natural.',
          images: [
            '/images/labor_day_green_1.jpg',
            '/images/labor_day_green_2.jpg',
            '/images/labor_day_green_3.jpg',
          ],
        },
      ],
    },
    whyUs: {
      title: 'Porquê Escolher-nos',
      slides: [
        { title: 'DESIGNS CRIATIVOS', description: 'Conceitos únicos adaptados ao seu estilo pessoal.' },
        { title: 'EQUIPA PROFISSIONAL', description: 'Planeadores experientes com anos na indústria.' },
        { title: 'SERVIÇO FIÁVEL', description: 'Execução pontual e comunicação dependente.' },
        { title: 'ATENÇÃO AO DETALHE', description: 'Nada é pequeno demais para nós.' },
        { title: 'EVENTOS PERSONALIZADOS', description: 'A sua visão é o nosso guia para o sucesso.' },
      ],
    },
    contact: {
      title: 'Entre em Contacto',
      phone: '+258 82 547 6979',
      email: 'creative.eventos15@gmail.com',
      location: 'Maputo, Moçambique',
      address: 'Av. 24 de Julho, N°: 979 - 1º Andar/Flat: 3, 979',
    },
    serviceArea: 'Polana Cimento B, Boane, Matola-Rio, Costa do Sol, Sommerschield, Machava, Matola, Maputo, Zimpeto',
    socials: {
      instagram: 'https://www.instagram.com/creative.eventosmz?igsh=MXhwcGg1ZDNvZ3h5Yg==',
      facebook: 'https://www.facebook.com/share/1JVGKbQvwM/',
      whatsapp: '258825476979'
    },
    footer: {
      rights: '© 2026 Creative Eventos. Todos os direitos reservados.',
    },
  },
};
