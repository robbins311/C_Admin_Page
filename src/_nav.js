export default [
  /* {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  }, */
  /* {
    component: 'CNavTitle',
    name: 'Theme',
  }, */
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'dark',
      text: 'Home',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Navigation',
  },
  {
    component: 'CNavItem',
    name: '공지사항',
    to: '/theme/colors',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: 'Test',
    to: '/theme/test',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: 'TestThumbBoard',
    to: '/testThumbBoard',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: '보도자료',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavGroup',
    name: '인증 및 수상',
    to: '/base',
    icon: 'cil-code',
    items: [
      {
        component: 'CNavItem',
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: 'CNavItem',
        name: 'Breadcrumbs',
        to: '/base/breadcrumbs',
      },
      {
        component: 'CNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: 'CNavItem',
        name: 'Carousels',
        to: '/base/carousels',
      },
      {
        component: 'CNavItem',
        name: 'Collapses',
        to: '/base/collapses',
      },
      {
        component: 'CNavItem',
        name: 'List Groups',
        to: '/base/list-groups',
      },
      {
        component: 'CNavItem',
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: 'CNavItem',
        name: 'Paginations',
        to: '/base/paginations',
      },
      {
        component: 'CNavItem',
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: 'CNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: 'CNavItem',
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: 'CNavItem',
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: 'CNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: 'CNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '브로슈어',
    to: '/buttons',
    icon: 'cil-drop',
    items: [
      {
        component: 'CNavItem',
        name: 'Buttons',
        to: '/buttons/standard-buttons',
      },
      {
        component: 'CNavItem',
        name: 'Button Groups',
        to: '/buttons/button-groups',
      },
      {
        component: 'CNavItem',
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '매뉴얼',
    to: '/forms',
    icon: 'cil-task',
    items: [
      {
        component: 'CNavItem',
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: 'CNavItem',
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: 'CNavItem',
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: 'CNavItem',
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: 'CNavItem',
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: 'CNavItem',
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: 'CNavItem',
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: 'CNavItem',
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: '업데이트',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: '제품문의',
    to: '/icons',
    icon: 'cil-speech',
    items: [
      {
        component: 'CNavItem',
        name: 'CoreUI Icons',
        to: '/icons/coreui-icons',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: 'CNavItem',
        name: 'Brands',
        to: '/icons/brands',
      },
      {
        component: 'CNavItem',
        name: 'Flags',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '이벤트관리',
    to: '/notifications',
    icon: 'cil-bell',
    items: [
      {
        component: 'CNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: 'CNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: 'CNavItem',
        name: 'Modals',
        to: '/notifications/modals',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: '프로모션 관리',
    to: '/widgets',
    icon: 'cil-laptop',
  },
  {
    component: 'CNavItem',
    name: '채용공고 관리',
    to: '/widgets',
    icon: 'cil-user-follow',
    items: [
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: '채용공고 등록',
        to: '/widgets',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: '채용공고 현황',
        to: '/widgets',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: '지원자 현황',
        to: '/widgets',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'SMTP 설정',
        to: '/widgets',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: '영문',
    to: '/pages',
    icon: 'cil-language',
    items: [
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Notice',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Press',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Award',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Brochure',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Manual',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'Update',
        to: '/pages/login',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'i24',
    to: '/pages',
    icon: 'cib-f-secure',
    items: [
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'I24 공지사항',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        icon: 'cil-arrow-right',
        name: 'I24 뉴스',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        name: 'Contact Support',
        icon: 'cil-arrow-right',
        to: '/pages/login',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: '로그아웃',
    to: '/pages',
    icon: 'cil-accountLogout',
  },
  /* {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    to: '/pages',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Login',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        name: 'Register',
        to: '/pages/register',
      },
      {
        component: 'CNavItem',
        name: 'Error 404',
        to: '/pages/404',
      },
      {
        component: 'CNavItem',
        name: 'Error 500',
        to: '/pages/500',
      },
    ],
  }, */

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
