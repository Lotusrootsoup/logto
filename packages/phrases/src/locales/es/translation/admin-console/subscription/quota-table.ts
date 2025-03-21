const quota_table = {
  quota: {
    title: 'Conceptos básicos',
    base_price: 'Precio base',
    mau_limit: 'Límite de MAU',
    included_tokens: 'Tokens incluidos',
  },
  application: {
    title: 'Aplicaciones',
    total: 'Total de aplicaciones',
    m2m: 'Aplicación machine-to-machine',
    third_party: 'Aplicaciones de terceros OIDC/OAuth',
    saml_app: 'Aplicaciones SAML',
  },
  resource: {
    title: 'Recursos de API',
    resource_count: 'Cantidad de recursos',
    scopes_per_resource: 'Permisos por recurso',
  },
  branding: {
    title: 'Interfaz de usuario y branding',
    custom_domain: 'Dominio personalizado',
    custom_css: 'CSS personalizado',
    logo_and_favicon: 'Logo y favicon',
    bring_your_ui: 'Trae tu UI',
    dark_mode: 'Modo oscuro',
    i18n: 'Internacionalización',
  },
  user_authn: {
    title: 'Autenticación de usuario',
    omni_sign_in: 'Inicio de sesión omnicanal',
    password: 'Contraseña',
    passwordless: 'Inicio de sesión sin contraseña - Correo electrónico y SMS',
    email_connector: 'Conector de correo electrónico',
    sms_connector: 'Conector de SMS',
    social_connectors: 'Conectores sociales',
    standard_connectors: 'Conectores estándar',
    built_in_email_connector: 'Conector de correo electrónico incorporado',
    mfa: 'Autenticación multifactor',
    sso: 'SSO empresarial',
    impersonation: 'Suplantación de identidad',
  },
  user_management: {
    title: 'Gestión de usuarios',
    user_management: 'Gestión de usuarios',
    roles: 'Roles',
    machine_to_machine_roles: 'Roles de máquina a máquina',
    scopes_per_role: 'Permisos por rol',
  },
  organizations: {
    title: 'Organización',
    organizations: 'Organizaciones',
    organization: 'Organización',
    organization_count: 'Cantidad de organizaciones',
    allowed_users_per_org: 'Usuarios por organización',
    invitation: 'Invitación (API de gestión)',
    org_roles: 'Roles de organización',
    org_permissions: 'Permisos de organización',
    just_in_time_provisioning: 'Provisión justo a tiempo',
  },
  support: {
    title: 'Soporte',
    community: 'Comunidad',
    customer_ticket: 'Ticket de soporte',
    premium: 'Premium',
    email_ticket_support: 'Soporte por ticket de correo electrónico',
    discord_private_channel: 'Canal privado de Discord',
    premium_support: 'Soporte premium',
    developer_onboarding: 'Incorporación de desarrolladores',
    solution_engineer_support: 'Soporte de ingeniero de soluciones',
    sla: 'SLA',
    dedicated_computing_resources: 'Recursos informáticos dedicados',
  },
  compliance: {
    title: 'Cumplimiento',
    soc2_compliant: 'Cumple con SOC2',
    soc2_report: 'Informe SOC2',
    hipaa_or_baa_report: 'Informe HIPAA/BAA',
  },
  developers_and_platform: {
    title: 'Desarrolladores y plataforma',
    hooks: 'Webhooks',
    audit_logs_retention: 'Retención de registros de auditoría',
    jwt_claims: 'Reclamos JWT',
    tenant_members: 'Miembros del inquilino',
  },
  unlimited: 'Ilimitado',
  contact: 'Contacto',
  monthly_price: '${{value, number}}/mes',
  days: '{{count, number}} día',
  days_other: '{{count, number}} días',
  add_on: 'Complemento',
  tier: 'Nivel{{value, number}}: ',
  million: '{{value, number}} millones',
  mau_tip:
    'MAU (usuarios activos mensuales) significa el número de usuarios únicos que han intercambiado al menos un token con Logto en un ciclo de facturación.',
  tokens_tip:
    'Todo tipo de tokens emitidos por Logto, incluyendo tokens de acceso, tokens de actualización, etc.',
  mao_tip:
    'MAO (Organización activa mensual) significa la cantidad de organizaciones únicas que tienen al menos un MAU (usuario activo mensual) en un ciclo de facturación.',
  third_party_tip:
    'Utilice Logto como su proveedor de identidades OIDC para iniciar sesión en aplicaciones de terceros y otorgar permisos.',
  included: 'incluido{{value, number}}',
  included_mao: '{{value, number}} MAO incluido',
  extra_quota_price: 'Luego ${{value, number}} por mes / cada uno después',
  extra_token_price: 'Luego ${{value, number}} por mes / {{amount, number}} después',
  per_month_each: '${{value, number}} por mes / cada uno',
  extra_mao_price: 'Luego ${{value, number}} por MAO',
  per_month: '${{value, number}} por mes',
  per_member: 'Luego ${{value, number}} por miembro',
};

export default Object.freeze(quota_table);
