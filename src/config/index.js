export default {
  SHORTNAME: process.env.VUE_APP_SHORTNAME || 'p2030',
  URL: process.env.VUE_APP_BACKEND_URL || 'http://localhost:5000',
  USE_ALERTS: process.env.VUE_APP_USE_ALERTS || false,
  MENU: [
    {
      route: 'scanner',
      name: 'Scanner',
      condition: true,
    },
    {
      route: 'about',
      name: 'Acerca',
      condition: true,
    },
  ],
  DISCLAIMER: {
    route: 'about-en',
    name: 'Learn more about this project in English',
  },
  LOGO: '/img/logo.png',

  DEFAULT_PAGE_TITLE: 'Parlamento 2030',
  DEFAULT_METATAGS: [
    {
      name: 'description',
      content: 'Parlamento2030 es una innovadora herramienta que rastrea, reúne y ofrece la información sobre la actividad del Congreso de los Diputados español relacionada con los Objetivos de Desarrollo Sostenible. Diseñada para superar los retos que plantea la naturaleza transversal de la Agenda 2030, Parlamento 2030 clasifica la información relacionada con los ODS gracias a un avanzado sistema automático de etiquetado masivo. Esta innovadora tecnología permite a los usuarios navegar por la actividad parlamentaria relacionada con los ODS a través de un buscador online, abierto y gratuito. La información ofrecida es esencial de cara a la monitorización y la rendición de cuentas de la implementación de la Agenda 2030 a nivel nacional.'
    },
    {
      name: 'keywords',
      content: 'transparencia, incidencia política, participación, investigación, periodismo de datos, política, españa, congreso de los diputados, monitorización parlamentaria, ods, sdg, agenda 2030, objetivos de desarrollo sostenible, sustainable development goals'
    },
    {
      itemprop: 'image',
      content: 'https://ciecode.es/assets/images/projects/parlamento2030/parlamento2030.png'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:url',
      content: 'http://parlamento2030.es'
    },
    {
      name: 'twitter:title',
      content: 'Parlamento2030'
    },
    {
      name: 'twitter:description',
      content: 'Parlamento2030 es una innovadora herramienta que rastrea, reúne y ofrece la información sobre la actividad del Congreso de los Diputados español relacionada con los Objetivos de Desarrollo Sostenible.Diseñada para superar los retos que plantea la naturaleza transversal de la Agenda 2030, Parlamento 2030 clasifica la información relacionada con los ODS gracias a un avanzado sistema automático de etiquetado masivo.Esta innovadora tecnología permite a los usuarios navegar por la actividad parlamentaria relacionada con los ODS a través de un buscador online, abierto y gratuito.La información ofrecida es esencial de cara a la monitorización y la rendición de cuentas de la implementación de la Agenda 2030 a nivel nacional.'
    },
    {
      name: 'twitter:creator',
      content: '@ciecode'
    },
    {
      name: 'twitter:image:src',
      content: 'https://ciecode.es/assets/images/projects/parlamento2030/parlamento2030.png'
    },
    {
      property: 'og:title',
      content: 'Parlamento2030'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'http://www.parlamento2030.es'
    },
    {
      property: 'og:image',
      content: 'https://ciecode.es/assets/images/projects/parlamento2030/parlamento2030.png'
    },
    {
      property: 'og:description',
      content: 'Parlamento2030 es una innovadora herramienta que rastrea, reúne y ofrece la información sobre la actividad del Congreso de los Diputados español relacionada con los Objetivos de Desarrollo Sostenible. Diseñada para superar los retos que plantea la naturaleza transversal de la Agenda 2030, Parlamento 2030 clasifica la información relacionada con los ODS gracias a un avanzado sistema automático de etiquetado masivo. Esta innovadora tecnología permite a los usuarios navegar por la actividad parlamentaria relacionada con los ODS a través de un buscador online, abierto y gratuito. La información ofrecida es esencial de cara a la monitorización y la rendición de cuentas de la implementación de la Agenda 2030 a nivel nacional.'
    },
    {
      property: 'og:site_name',
      content: 'Parlamentp2030'
    },
  ],
  STYLES: {
    defaultColor: "#cecece",
    defaultImage: "placeholder.png",
  },
}
