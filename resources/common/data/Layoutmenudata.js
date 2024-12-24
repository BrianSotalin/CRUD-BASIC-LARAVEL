const Navdata = [

  {
    label: 'Menu',
    isHeader: true
  },
  {
    "icon": "bx bx-home-circle",
    "label": "Dashboards",
    "subMenu": [
      { "link": "/Welcome", "label": "Default" },
      { "link": "/PaginaPrueba", "label": "Saas" },
      { "link": "/PaginaPrueba2", "label": "Crypto" }
    ]
  },
  {
    label: 'Pages',
    isHeader: true
  },
  {
    "label": "Authentication",
    "icon": "bx bx-user-circle",
    "subMenu": [
      { "label": "Login", "link": "/auth/login" },
      { "label": "Login 2", "link": "/auth/login-2" },
      { "label": "Register", "link": "/auth/register" },
      { "label": "Register 2", "link": "/auth/register-2" },
      { "label": "Recover Password", "link": "/auth/recoverpw" },
      { "label": "Recover Password 2", "link": "/auth/recoverpw-2" },
      { "label": "Lock Screen", "link": "/auth/lock-screen" },
      { "label": "Lock Screen 2", "link": "/auth/lock-screen-2" },
      { "label": "Confirm Email", "link": "/auth/confirm-mail" },
      { "label": "Confirm Email 2", "link": "/auth/confirm-mail-2" },
      { "label": "Email verification", "link": "/auth/email-verification" },
      { "label": "Email Verification 2", "link": "/auth/email-verification-2" },
      { "label": "Two Step Verification", "link": "/auth/two-step-verification" },
      { "label": "Two Step Verification 2", "link": "/auth/two-step-verification-2" }
    ]
  },
  {
    label: 'Components',
    isHeader: true
  },
  {
    "label": "Multi Level",
    "icon": "bx bx-share-alt",
    "subMenu": [
      { "label": "Level 1.1", "link": "javascript:void(0);" },
      {
        "label": "Level 1.2",
        "link": "javascript:void(0);",
        isChildItem: true,
        childItems: [
          { "label": "Level 2.1", "link": "javascript:void(0);" },
          { "label": "Level 2.2", "link": "javascript:void(0);" }
        ]
      }
    ]
  }
]

const MOCK_DATA = {
  Navdata
}

export default MOCK_DATA;