const content = {
  terms_of_use: {
    title: 'TERMS',
    description: 'Uyumluluk gereksinimlerini karşılamak için Şartlar ve Gizlilik ekleyin.',
    terms_of_use: 'Terms of use URL',
    terms_of_use_placeholder: 'https://your.terms.of.use/',
    privacy_policy: 'Privacy policy URL',
    privacy_policy_placeholder: 'https://your.privacy.policy/',
    agree_to_terms: 'Şartları kabul et',
    agree_policies: {
      automatic: 'Şartları otomatik olarak kabul etmeye devam et',
      manual_registration_only: 'Sadece kayıt sırasında onay kutusu ile onay gerektirir',
      manual: 'Kayıt ve giriş sırasında onay kutusu ile onay gerektirir',
    },
  },
  languages: {
    title: 'LANGUAGES',
    enable_auto_detect: 'Enable auto-detect',
    description:
      "Your software detects the user's locale setting and switches to the local language. You can add new languages by translating UI from English to another language.",
    manage_language: 'Manage language',
    default_language: 'Default language',
    default_language_description_auto:
      'The default language will be used when the detected user language isn’t covered in the current language library.',
    default_language_description_fixed:
      'When auto-detect is off, the default language is the only language your software will show. Turn on auto-detect for language extension.',
  },
  support: {
    title: 'DESTEK',
    subtitle: 'Hızlı kullanıcı yardımı için hata sayfalarında destek kanallarınızı gösterin.',
    support_email: 'Destek e-posta',
    support_email_placeholder: 'support@email.com',
    support_website: 'Destek web sitesi',
    support_website_placeholder: 'https://your.website/support',
  },
  manage_language: {
    title: 'Manage language',
    subtitle:
      'Localize the product experience by adding languages and translations. Your contribution can be set as the default language.',
    add_language: 'Add Language',
    logto_provided: 'Logto provided',
    key: 'Key',
    logto_source_values: 'Logto source values',
    custom_values: 'Custom values',
    clear_all_tip: 'Clear all values',
    unsaved_description: 'Changes won’t be saved if you leave this page without saving.',
    deletion_tip: 'Delete the language',
    deletion_title: 'Do you want to delete the added language?',
    deletion_description:
      'After deletion, your users won’t be able to browse in that language again.',
    default_language_deletion_title: 'Default language can’t be deleted.',
    default_language_deletion_description:
      '{{language}} is set as your default language and can’t be deleted. ',
  },
};

export default Object.freeze(content);
