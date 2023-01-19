<?php

return [
    'ctrl' => [
        'label' => 'languageId',
        'label_userFunc' => \TYPO3\CMS\Backend\Configuration\TCA\UserFunctions::class . '->getSiteLanguageTitle',
        'title' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.ctrl.title',
        'typeicon_classes' => [
            'default' => 'mimetypes-x-content-domain',
        ],
    ],
    'columns' => [
        'languageId' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.languageId',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'itemsProcFunc' => \TYPO3\CMS\Backend\Configuration\TCA\ItemsProcessorFunctions::class . '->populateAvailableLanguagesFromSites',
            ],
        ],
        'title' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.title',
            'config' => [
                'type' => 'input',
                'size' => 15,
                'required' => true,
                'eval' => 'trim',
                'placeholder' => 'English',
            ],
        ],
        'navigationTitle' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.navigationTitle',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.navigationTitle',
            'config' => [
                'type' => 'input',
                'size' => 15,
                'eval' => 'trim',
                'placeholder' => 'English',
            ],
        ],
        'base' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.base',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.base',
            'config' => [
                'type' => 'input',
                'required' => true,
                'eval' => 'trim',
                'default' => '/',
                'placeholder' => '/',
            ],
        ],
        'websiteTitle' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.websiteTitle',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.websiteTitle',
            'config' => [
                'type' => 'input',
                'eval' => 'trim',
                'default' => '',
            ],
        ],
        'locale' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.locale',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.locale',
            'config' => [
                'type' => 'input',
                'required' => true,
                'eval' => 'trim',
                'size' => 20,
                'placeholder' => 'en_US.UTF-8',
                'valuePicker' => [
                    'mode' => '',
                    'items' =>\TYPO3\CMS\Backend\Configuration\TCA\UserFunctions::getAllSystemLocales(),
                ],
            ],
        ],
        'iso-639-1' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.iso-639-1',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.iso-639-1',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                // Fed by data provider
                'items' => [],
            ],
        ],
        'hreflang' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.hreflang',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.hreflang',
            'config' => [
                'type' => 'input',
                'eval' => 'trim',
                'size' => 6,
                'placeholder' => 'en-US',
            ],
        ],
        'enabled' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.enabled',
            'config' => [
                'type' => 'check',
                'renderType' => 'checkboxToggle',
                'default' => 1,
            ],
        ],
        'direction' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.direction',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.direction',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.direction.none', '', ''],
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.direction.leftToRight', 'ltr', ''],
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.direction.rightToLeft', 'rtl', ''],
                ],
            ],
        ],
        'typo3Language' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.typo3Language',
            'description' => 'LLL:EXT:backend/Resources/Private/Language/siteconfiguration_fieldinformation.xlf:site_language.typo3Language',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                // Fed by data provider
                'items' => [],
                'default' => 'default',
            ],
        ],
        'flag' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.flag',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['global', 'global', 'flags-multiple'],
                    ['en-us-gb', 'en-us-gb', 'flags-en-us-gb'],
                    // Countries/Regions
                    ['ad', 'ad', 'flags-ad'],
                    ['ae', 'ae', 'flags-ae'],
                    ['af', 'af', 'flags-af'],
                    ['ag', 'ag', 'flags-ag'],
                    ['ai', 'ai', 'flags-ai'],
                    ['al', 'al', 'flags-al'],
                    ['am', 'am', 'flags-am'],
                    ['ao', 'ao', 'flags-ao'],
                    ['aq', 'aq', 'flags-aq'],
                    ['ar', 'ar', 'flags-ar'],
                    ['as', 'as', 'flags-as'],
                    ['at', 'at', 'flags-at'],
                    ['au', 'au', 'flags-au'],
                    ['aw', 'aw', 'flags-aw'],
                    ['ax', 'ax', 'flags-ax'],
                    ['az', 'az', 'flags-az'],
                    ['ba', 'ba', 'flags-ba'],
                    ['bb', 'bb', 'flags-bb'],
                    ['bd', 'bd', 'flags-bd'],
                    ['be', 'be', 'flags-be'],
                    ['bf', 'bf', 'flags-bf'],
                    ['bg', 'bg', 'flags-bg'],
                    ['bh', 'bh', 'flags-bh'],
                    ['bi', 'bi', 'flags-bi'],
                    ['bj', 'bj', 'flags-bj'],
                    ['bl', 'bl', 'flags-bl'],
                    ['bm', 'bm', 'flags-bm'],
                    ['bn', 'bn', 'flags-bn'],
                    ['bo', 'bo', 'flags-bo'],
                    ['bq', 'bq', 'flags-bq'],
                    ['br', 'br', 'flags-br'],
                    ['bs', 'bs', 'flags-bs'],
                    ['bt', 'bt', 'flags-bt'],
                    ['bv', 'bv', 'flags-bv'],
                    ['bw', 'bw', 'flags-bw'],
                    ['by', 'by', 'flags-by'],
                    ['bz', 'bz', 'flags-bz'],
                    ['ca', 'ca', 'flags-ca'],
                    ['ca-qc', 'ca-qc', 'flags-ca-qc'],
                    ['cc', 'cc', 'flags-cc'],
                    ['cd', 'cd', 'flags-cd'],
                    ['cf', 'cf', 'flags-cf'],
                    ['cg', 'cg', 'flags-cg'],
                    ['ch', 'ch', 'flags-ch'],
                    ['ci', 'ci', 'flags-ci'],
                    ['ck', 'ck', 'flags-ck'],
                    ['cl', 'cl', 'flags-cl'],
                    ['cm', 'cm', 'flags-cm'],
                    ['cn', 'cn', 'flags-cn'],
                    ['co', 'co', 'flags-co'],
                    ['cr', 'cr', 'flags-cr'],
                    ['cu', 'cu', 'flags-cu'],
                    ['cv', 'cv', 'flags-cv'],
                    ['cw', 'cw', 'flags-cw'],
                    ['cx', 'cx', 'flags-cx'],
                    ['cy', 'cy', 'flags-cy'],
                    ['cz', 'cz', 'flags-cz'],
                    ['de', 'de', 'flags-de'],
                    ['dj', 'dj', 'flags-dj'],
                    ['dk', 'dk', 'flags-dk'],
                    ['dm', 'dm', 'flags-dm'],
                    ['do', 'do', 'flags-do'],
                    ['dz', 'dz', 'flags-dz'],
                    ['ec', 'ec', 'flags-ec'],
                    ['ee', 'ee', 'flags-ee'],
                    ['eg', 'eg', 'flags-eg'],
                    ['eh', 'eh', 'flags-eh'],
                    ['er', 'er', 'flags-er'],
                    ['es', 'es', 'flags-es'],
                    ['es-ct', 'es-ct', 'flags-es-ct'],
                    ['es-ga', 'es-ga', 'flags-es-ga'],
                    ['et', 'et', 'flags-et'],
                    ['eu', 'eu', 'flags-eu'],
                    ['fi', 'fi', 'flags-fi'],
                    ['fj', 'fj', 'flags-fj'],
                    ['fk', 'fk', 'flags-fk'],
                    ['fm', 'fm', 'flags-fm'],
                    ['fo', 'fo', 'flags-fo'],
                    ['fr', 'fr', 'flags-fr'],
                    ['ga', 'ga', 'flags-ga'],
                    ['gb', 'gb', 'flags-gb'],
                    ['gb-eng', 'gb-eng', 'flags-gb-eng'],
                    ['gb-nir', 'gb-nir', 'flags-gb-nir'],
                    ['gb-sct', 'gb-sct', 'flags-gb-sct'],
                    ['gb-wls', 'gb-wls', 'flags-gb-wls'],
                    ['gd', 'gd', 'flags-gd'],
                    ['ge', 'ge', 'flags-ge'],
                    ['gf', 'gf', 'flags-gf'],
                    ['gg', 'gg', 'flags-gg'],
                    ['gh', 'gh', 'flags-gh'],
                    ['gi', 'gi', 'flags-gi'],
                    ['gl', 'gl', 'flags-gl'],
                    ['gm', 'gm', 'flags-gm'],
                    ['gn', 'gn', 'flags-gn'],
                    ['gp', 'gp', 'flags-gp'],
                    ['gq', 'gq', 'flags-gq'],
                    ['gr', 'gr', 'flags-gr'],
                    ['gs', 'gs', 'flags-gs'],
                    ['gt', 'gt', 'flags-gt'],
                    ['gu', 'gu', 'flags-gu'],
                    ['gw', 'gw', 'flags-gw'],
                    ['gy', 'gy', 'flags-gy'],
                    ['hk', 'hk', 'flags-hk'],
                    ['hm', 'hm', 'flags-hm'],
                    ['hn', 'hn', 'flags-hn'],
                    ['hr', 'hr', 'flags-hr'],
                    ['ht', 'ht', 'flags-ht'],
                    ['hu', 'hu', 'flags-hu'],
                    ['id', 'id', 'flags-id'],
                    ['ie', 'ie', 'flags-ie'],
                    ['il', 'il', 'flags-il'],
                    ['im', 'im', 'flags-im'],
                    ['in', 'in', 'flags-in'],
                    ['io', 'io', 'flags-io'],
                    ['iq', 'iq', 'flags-iq'],
                    ['ir', 'ir', 'flags-ir'],
                    ['is', 'is', 'flags-is'],
                    ['it', 'it', 'flags-it'],
                    ['jm', 'jm', 'flags-jm'],
                    ['jo', 'jo', 'flags-jo'],
                    ['jp', 'jp', 'flags-jp'],
                    ['ke', 'ke', 'flags-ke'],
                    ['kg', 'kg', 'flags-kg'],
                    ['kh', 'kh', 'flags-kh'],
                    ['ki', 'ki', 'flags-ki'],
                    ['km', 'km', 'flags-km'],
                    ['kn', 'kn', 'flags-kn'],
                    ['kp', 'kp', 'flags-kp'],
                    ['kr', 'kr', 'flags-kr'],
                    ['kw', 'kw', 'flags-kw'],
                    ['ky', 'ky', 'flags-ky'],
                    ['kz', 'kz', 'flags-kz'],
                    ['la', 'la', 'flags-la'],
                    ['lb', 'lb', 'flags-lb'],
                    ['lc', 'lc', 'flags-lc'],
                    ['li', 'li', 'flags-li'],
                    ['lk', 'lk', 'flags-lk'],
                    ['lr', 'lr', 'flags-lr'],
                    ['ls', 'ls', 'flags-ls'],
                    ['lt', 'lt', 'flags-lt'],
                    ['lu', 'lu', 'flags-lu'],
                    ['lv', 'lv', 'flags-lv'],
                    ['ly', 'ly', 'flags-ly'],
                    ['ma', 'ma', 'flags-ma'],
                    ['mc', 'mc', 'flags-mc'],
                    ['md', 'md', 'flags-md'],
                    ['me', 'me', 'flags-me'],
                    ['mf', 'mf', 'flags-mf'],
                    ['mg', 'mg', 'flags-mg'],
                    ['mh', 'mh', 'flags-mh'],
                    ['mk', 'mk', 'flags-mk'],
                    ['ml', 'ml', 'flags-ml'],
                    ['mm', 'mm', 'flags-mm'],
                    ['mn', 'mn', 'flags-mn'],
                    ['mo', 'mo', 'flags-mo'],
                    ['mp', 'mp', 'flags-mp'],
                    ['mq', 'mq', 'flags-mq'],
                    ['mr', 'mr', 'flags-mr'],
                    ['ms', 'ms', 'flags-ms'],
                    ['mt', 'mt', 'flags-mt'],
                    ['mu', 'mu', 'flags-mu'],
                    ['mv', 'mv', 'flags-mv'],
                    ['mw', 'mw', 'flags-mw'],
                    ['mx', 'mx', 'flags-mx'],
                    ['my', 'my', 'flags-my'],
                    ['mz', 'mz', 'flags-mz'],
                    ['na', 'na', 'flags-na'],
                    ['nc', 'nc', 'flags-nc'],
                    ['ne', 'ne', 'flags-ne'],
                    ['nf', 'nf', 'flags-nf'],
                    ['ng', 'ng', 'flags-ng'],
                    ['ni', 'ni', 'flags-ni'],
                    ['nl', 'nl', 'flags-nl'],
                    ['no', 'no', 'flags-no'],
                    ['np', 'np', 'flags-np'],
                    ['nr', 'nr', 'flags-nr'],
                    ['nu', 'nu', 'flags-nu'],
                    ['nz', 'nz', 'flags-nz'],
                    ['om', 'om', 'flags-om'],
                    ['pa', 'pa', 'flags-pa'],
                    ['pe', 'pe', 'flags-pe'],
                    ['pf', 'pf', 'flags-pf'],
                    ['pg', 'pg', 'flags-pg'],
                    ['ph', 'ph', 'flags-ph'],
                    ['pk', 'pk', 'flags-pk'],
                    ['pl', 'pl', 'flags-pl'],
                    ['pm', 'pm', 'flags-pm'],
                    ['pn', 'pn', 'flags-pn'],
                    ['pr', 'pr', 'flags-pr'],
                    ['ps', 'ps', 'flags-ps'],
                    ['pt', 'pt', 'flags-pt'],
                    ['pw', 'pw', 'flags-pw'],
                    ['py', 'py', 'flags-py'],
                    ['qa', 'qa', 'flags-qa'],
                    ['re', 're', 'flags-re'],
                    ['ro', 'ro', 'flags-ro'],
                    ['rs', 'rs', 'flags-rs'],
                    ['ru', 'ru', 'flags-ru'],
                    ['rw', 'rw', 'flags-rw'],
                    ['sa', 'sa', 'flags-sa'],
                    ['sb', 'sb', 'flags-sb'],
                    ['sc', 'sc', 'flags-sc'],
                    ['sd', 'sd', 'flags-sd'],
                    ['se', 'se', 'flags-se'],
                    ['sg', 'sg', 'flags-sg'],
                    ['sh', 'sh', 'flags-sh'],
                    ['si', 'si', 'flags-si'],
                    ['sj', 'sj', 'flags-sj'],
                    ['sk', 'sk', 'flags-sk'],
                    ['sl', 'sl', 'flags-sl'],
                    ['sm', 'sm', 'flags-sm'],
                    ['sn', 'sn', 'flags-sn'],
                    ['so', 'so', 'flags-so'],
                    ['sr', 'sr', 'flags-sr'],
                    ['ss', 'ss', 'flags-ss'],
                    ['st', 'st', 'flags-st'],
                    ['sv', 'sv', 'flags-sv'],
                    ['sx', 'sx', 'flags-sx'],
                    ['sy', 'sy', 'flags-sy'],
                    ['sz', 'sz', 'flags-sz'],
                    ['tc', 'tc', 'flags-tc'],
                    ['td', 'td', 'flags-td'],
                    ['tf', 'tf', 'flags-tf'],
                    ['tg', 'tg', 'flags-tg'],
                    ['th', 'th', 'flags-th'],
                    ['tj', 'tj', 'flags-tj'],
                    ['tk', 'tk', 'flags-tk'],
                    ['tl', 'tl', 'flags-tl'],
                    ['tm', 'tm', 'flags-tm'],
                    ['tn', 'tn', 'flags-tn'],
                    ['to', 'to', 'flags-to'],
                    ['tr', 'tr', 'flags-tr'],
                    ['tt', 'tt', 'flags-tt'],
                    ['tv', 'tv', 'flags-tv'],
                    ['tw', 'tw', 'flags-tw'],
                    ['tz', 'tz', 'flags-tz'],
                    ['ua', 'ua', 'flags-ua'],
                    ['ug', 'ug', 'flags-ug'],
                    ['us', 'us', 'flags-us'],
                    ['uy', 'uy', 'flags-uy'],
                    ['uz', 'uz', 'flags-uz'],
                    ['va', 'va', 'flags-va'],
                    ['vc', 'vc', 'flags-vc'],
                    ['ve', 've', 'flags-ve'],
                    ['vg', 'vg', 'flags-vg'],
                    ['vi', 'vi', 'flags-vi'],
                    ['vn', 'vn', 'flags-vn'],
                    ['vu', 'vu', 'flags-vu'],
                    ['wf', 'wf', 'flags-wf'],
                    ['ws', 'ws', 'flags-ws'],
                    ['ye', 'ye', 'flags-ye'],
                    ['yt', 'yt', 'flags-yt'],
                    ['za', 'za', 'flags-za'],
                    ['zm', 'zm', 'flags-zm'],
                    ['zw', 'zw', 'flags-zw'],
                    // Colors
                    ['black', 'black', 'flags-black'],
                    ['white', 'white', 'flags-white'],
                    ['blue', 'blue', 'flags-blue'],
                    ['indigo', 'indigo', 'flags-indigo'],
                    ['purple', 'purple', 'flags-purple'],
                    ['pink', 'pink', 'flags-pink'],
                    ['orange', 'orange', 'flags-orange'],
                    ['yellow', 'yellow', 'flags-yellow'],
                    ['green', 'green', 'flags-green'],
                    ['teal', 'teal', 'flags-teal'],
                    ['cyan', 'cyan', 'flags-cyan'],
                    ['rainbow', 'rainbow', 'flags-rainbow'],
                ],
                'maxitems' => 1,
                'fieldWizard' => [
                    'selectIcons' => [
                        'disabled' => false,
                    ],
                ],
            ],
        ],
        'fallbackType' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.fallbackType',
            'displayCond' => 'FIELD:languageId:>:0',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => [
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.fallbackType.strict', 'strict'],
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.fallbackType.fallback', 'fallback'],
                    ['LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.fallbackType.free', 'free'],
                ],
            ],
        ],
        'fallbacks' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.fallbacks',
            'displayCond' => 'FIELD:languageId:>:0',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectMultipleSideBySide',
                'itemsProcFunc' => \TYPO3\CMS\Backend\Configuration\TCA\ItemsProcessorFunctions::class . '->populateFallbackLanguages',
                'size' => 5,
                'min' => 0,
            ],
        ],
    ],
    'types' => [
        '1' => [
            'showitem' => '--palette--;;default, --palette--;;locale-related, --palette--;;rendering-related, flag, --palette--;;languageIdPalette',
        ],
    ],
    'palettes' => [
        'default' => [
            'showitem' => 'title, enabled, --linebreak--, base',
        ],
        'languageIdPalette' => [
            'showitem' => 'languageId',
            'isHiddenPalette' => true,
        ],
        'locale-related' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.palette.locales',
            'showitem' => 'typo3Language, locale, iso-639-1',
        ],
        'rendering-related' => [
            'label' => 'LLL:EXT:backend/Resources/Private/Language/locallang_siteconfiguration_tca.xlf:site_language.palette.frontend',
            'showitem' => 'websiteTitle, --linebreak--, navigationTitle, hreflang, direction, --linebreak--, fallbackType, --linebreak--, fallbacks',
        ],
    ],
];
