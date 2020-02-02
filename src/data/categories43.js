export default {
  uid: '4b4757e66a1912dae1a509f688f20b0f',
  children: [
    {
      name: 'Product defects',
      children: [
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50004ms',
          children: [
            {
              name: 'Administrator can add subscriber to case',
              uid: '45d9e4673d2d476a',
              parentUid: '16b863b66195c04e0f8aa13b2f9db5bf',
              status: 'failed',
              time: {
                start: 1580593794293,
                stop: 1580593856891,
                duration: 62598
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can see current estimation of an active case',
              uid: 'cd1e0adbb0cf225d',
              parentUid: '16b863b66195c04e0f8aa13b2f9db5bf',
              status: 'failed',
              time: {
                start: 1580593884276,
                stop: 1580593943977,
                duration: 59701
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can create a new case',
              uid: 'e3d1e7a9f002d29f',
              parentUid: '16b863b66195c04e0f8aa13b2f9db5bf',
              status: 'failed',
              time: {
                start: 1580595848017,
                stop: 1580595907679,
                duration: 59662
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 13',
              uid: '458845193569d160',
              parentUid: '16b863b66195c04e0f8aa13b2f9db5bf',
              status: 'failed',
              time: {
                start: 1580596592078,
                stop: 1580596648777,
                duration: 56699
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can create a case without description',
              uid: '837c1c31d59c0ffa',
              parentUid: '16b863b66195c04e0f8aa13b2f9db5bf',
              status: 'failed',
              time: {
                start: 1580596943205,
                stop: 1580597002780,
                duration: 59575
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '16b863b66195c04e0f8aa13b2f9db5bf'
        },
        {
          name:
            "javascript error: Cannot read property 'indexOf' of null\n  (Session info: headless chrome=79.0.3945.88)\n  (Driver info: chromedriver=79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform=Linux 4.14.128-112.105.amzn2.x86_64 x86_64)",
          children: [
            {
              name:
                'Administrator can enable add subscribers setting in site configuration',
              uid: '169fc70a3fac6eea',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580593856901,
                stop: 1580593864090,
                duration: 7189
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can add subscribers to an active case when add subscribers setting is enabled in the site configuration',
              uid: 'ddaeeb45b6e3826b',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580593864099,
                stop: 1580593870873,
                duration: 6774
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can disable add subscribers setting in site configuration',
              uid: 'd3b043837c9131bf',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580593870878,
                stop: 1580593877792,
                duration: 6914
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot add subscribers to an active case when add subscribers setting is disabled in the site configuration',
              uid: 'd6d18f81b9dc05bd',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580593877796,
                stop: 1580593884272,
                duration: 6476
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view subscriber of an active case',
              uid: 'f23551e0ebd69fb3',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594241310,
                stop: 1580594250807,
                duration: 9497
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can enable view subscribers in site configuration',
              uid: 'cb131416c72fea29',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594861923,
                stop: 1580594869309,
                duration: 7386
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can view subscriber of an active case when show subscribers setting is enabled in the site configuration',
              uid: '5066c47231bb2a8',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594869321,
                stop: 1580594883879,
                duration: 14558
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can disable view subscribers in site configuration',
              uid: '3e2dc23794e67868',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594883883,
                stop: 1580594890980,
                duration: 7097
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot view subscriber of an active case when show subscribers setting is disabled in the site configuration',
              uid: '7a892dbab8f32ea5',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594890984,
                stop: 1580594901273,
                duration: 10289
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can add subscribers to an active case on "Edit Active Case" page when add subscribers setting is enabled in the site configuration',
              uid: 'e7d10121d585fd6c',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594901284,
                stop: 1580594907891,
                duration: 6607
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can add subscribers to an active case on "Edit Active Case" page when add subscribers setting is enabled in the site configuration',
              uid: '28790fe4633ced1e',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594907896,
                stop: 1580594914299,
                duration: 6403
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator can add subscribers to a resolved case on "Edit Resolved Case" page when add subscribers setting is enabled in the site configuration',
              uid: 'dd16a9f67995b18f',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594914305,
                stop: 1580594920880,
                duration: 6575
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can add subscribers to a resolved case on "Edit Resolved Case" page when add subscribers setting is enabled in the site configuration',
              uid: '66e796f3c3731de0',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594920886,
                stop: 1580594928002,
                duration: 7116
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot add subscribers to a closed case on "Edit Closed Case" page when add subscribers setting is enabled in the site configuration',
              uid: '8a46e8b805aeca6d',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594928008,
                stop: 1580594934566,
                duration: 6558
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot add subscribers to a closed case on "Edit Closed Case" page when add subscribers setting is enabled in the site configuration',
              uid: '90ce9b998adf9a83',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594934571,
                stop: 1580594941190,
                duration: 6619
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot add subscribers to an active case on "Edit Active Case" page when add subscribers setting is disabled in the site configuration',
              uid: '5cf19551d329dc58',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594941196,
                stop: 1580594948575,
                duration: 7379
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot add subscribers to an active case on "Edit Active Case" page when add subscribers setting is disabled in the site configuration',
              uid: 'a2652b79fef38cb8',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594948589,
                stop: 1580594955472,
                duration: 6883
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot add subscribers to a resolved case on "Edit Resolved Case" page when add subscribers setting is disabled in the site configuration',
              uid: 'ad749dd38f8d8d0d',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594955480,
                stop: 1580594961782,
                duration: 6302
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot add subscribers to a resolved case on "Edit Resolved Case" page when add subscribers setting is disabled in the site configuration',
              uid: 'a240f346522b6418',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594961787,
                stop: 1580594968103,
                duration: 6316
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot add subscribers to a closed case on "Edit Closed Case" page when add subscribers setting is disabled in the site configuration',
              uid: 'b4bcf2735f390b91',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594968107,
                stop: 1580594976076,
                duration: 7969
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot add subscribers to a closed case on "Edit Closed Case" page when add subscribers setting is disabled in the site configuration',
              uid: 'cd3fe0178373a5f8',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594976081,
                stop: 1580594987909,
                duration: 11828
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator can view subscriber of an active case on "Edit Active Case" page when show subscribers setting is enabled in the site configuration',
              uid: '71e6e96d04389954',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580594987914,
                stop: 1580595002344,
                duration: 14430
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can view subscriber of an active case on "Edit Active Case" page when show subscribers setting is enabled in the site configuration',
              uid: 'ef18d483805b4fef',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595002364,
                stop: 1580595010082,
                duration: 7718
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator can view subscriber of a resolved case on "Edit Resolved Case" page when show subscribers setting is enabled in the site configuration',
              uid: 'c01d0bfc6dd845bb',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595010094,
                stop: 1580595017488,
                duration: 7394
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can view subscriber of a resolved case on "Edit Resolved Case" page when show subscribers setting is enabled in the site configuration',
              uid: 'fe9fd0a1a61e9975',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595017493,
                stop: 1580595023980,
                duration: 6487
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator can view subscriber of a closed case on "Edit Closed Case" page when show subscribers setting is enabled in the site configuration',
              uid: '4afd30a2bb88e84a',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595023984,
                stop: 1580595030874,
                duration: 6890
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can view subscriber of a closed case on "Edit Closed Case" page when show subscribers setting is enabled in the site configuration',
              uid: '6304481749126369',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595030879,
                stop: 1580595037575,
                duration: 6696
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot view subscriber of an active case on "Edit Active Case" page when show subscribers setting is disabled in the site configuration',
              uid: '8e073f0198e70dcb',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595037580,
                stop: 1580595044173,
                duration: 6593
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot view subscriber of an active case on "Edit Active Case" page when show subscribers setting is disabled in the site configuration',
              uid: 'fd83d5a55f6c09b4',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595044178,
                stop: 1580595051079,
                duration: 6901
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot view subscriber of a resolved case on "Edit Resolved Case" page when show subscribers setting is disabled in the site configuration',
              uid: '53f29bb04b23a15a',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595051085,
                stop: 1580595058082,
                duration: 6997
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot view subscriber of a resolved case on "Edit Resolved Case" page when show subscribers setting is disabled in the site configuration',
              uid: '25d1741a63e47ee5',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595058087,
                stop: 1580595065188,
                duration: 7101
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name:
                'Administrator cannot view subscriber of a closed case on "Edit Closed Case" page when show subscribers setting is disabled in the site configuration',
              uid: 'c06a44bf0547c5fa',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595065193,
                stop: 1580595076158,
                duration: 10965
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator cannot view subscriber of a closed case on "Edit Closed Case" page when show subscribers setting is disabled in the site configuration',
              uid: '5c78ef96dd36970e',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595076164,
                stop: 1580595084900,
                duration: 8736
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name: 'Administrator can add subscriber to a closed case',
              uid: '4fd412908a5c1484',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595279900,
                stop: 1580595291477,
                duration: 11577
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can add subscribers to a closed case when add subscribers setting is enabled in the site configuration',
              uid: '837d08676b99cb6a',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595291486,
                stop: 1580595297974,
                duration: 6488
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot add subscribers to a closed case when add subscribers setting is disabled in the site configuration',
              uid: 'dc1312f7d6225237',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595297978,
                stop: 1580595305415,
                duration: 7437
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can view subscriber of an closed case when show subscribers setting is enabled in the site configuration',
              uid: 'cfc3923d09f3e9be',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595305463,
                stop: 1580595313189,
                duration: 7726
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot view subscriber of an closed case when show subscribers setting is disabled in the site configuration',
              uid: 'b9bc4bce26e437d3',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595313199,
                stop: 1580595320816,
                duration: 7617
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view subscriber of a closed case',
              uid: 'c6dcaa518f172dbe',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595680712,
                stop: 1580595692179,
                duration: 11467
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'User can see current estimation of a closed case with subcases',
              uid: '1f1a87275c368de6',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595692183,
                stop: 1580595705583,
                duration: 13400
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'User can see remaining estimation of a closed case with subcases',
              uid: '38af95c2bc1c999',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595705587,
                stop: 1580595716912,
                duration: 11325
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'User can see original estimation of a closed case with subcases',
              uid: '9175e9c67de3d20',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580595716916,
                stop: 1580595728882,
                duration: 11966
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user is auto subscribed to any case they create when they have auto subscribed to subscription "Subscribed to ALL PROJECTS"',
              uid: 'fc2f2fb630304d8b',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580609987413,
                stop: 1580609995540,
                duration: 8127
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user is auto subscribed to a case they create when they have auto subscribed to subscription "Subscribed to ANY ITEM I CREATE"',
              uid: 'b603ea34ea4684db',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580610467646,
                stop: 1580610476343,
                duration: 8697
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user is auto subscribed to any case they create in a project area when they have auto subscribed to that project area',
              uid: 'e4856ca92723f578',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580610816485,
                stop: 1580610824208,
                duration: 7723
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user is auto subscribed to any case they create in a project when they have auto subscribed to that project',
              uid: 'ddc32c02022037b5',
              parentUid: '5acc51fa178b96143cd9cc0043ed58b3',
              status: 'failed',
              time: {
                start: 1580611078363,
                stop: 1580611091361,
                duration: 12998
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '5acc51fa178b96143cd9cc0043ed58b3'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name: 'User can see elapsed estimation of active case',
              uid: 'cc4ce184decb76be',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580593943980,
                stop: 1580594003977,
                duration: 59997
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'User can see original estimation of an active case with subcases',
              uid: 'b81791f578f76ab5',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580594372382,
                stop: 1580594434270,
                duration: 61888
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 8',
              uid: '19a2183c8ccbbd64',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580596307580,
                stop: 1580596364182,
                duration: 56602
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 12',
              uid: 'f9f9ec8a4ad1ce0c',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580596535304,
                stop: 1580596592075,
                duration: 56771
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 16',
              uid: '4435f58b36f5b17d',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580596762399,
                stop: 1580596819116,
                duration: 56717
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can edit an existing case',
              uid: 'da5fe42ef0b653be',
              parentUid: '04c5417be741d44d63d5a4980616734b',
              status: 'failed',
              time: {
                start: 1580596881093,
                stop: 1580596943199,
                duration: 62106
              },
              flaky: false,
              parameters: ['bottom']
            }
          ],
          uid: '04c5417be741d44d63d5a4980616734b'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name: 'User can see original estimation of active case',
              uid: '8ab8a7fae9d556e',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580594003981,
                stop: 1580594063475,
                duration: 59494
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can assign a case',
              uid: 'f355a8e4bb146061',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580594801482,
                stop: 1580594861912,
                duration: 60430
              },
              flaky: false,
              parameters: ['bottom']
            },
            {
              name: 'User can create an additional comment for a case',
              uid: 'a360c38f3dc722af',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580595788482,
                stop: 1580595848013,
                duration: 59531
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 2',
              uid: '44ce335cdfd3bcf9',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580595965380,
                stop: 1580596022675,
                duration: 57295
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 5',
              uid: 'ce92e8d878e07be7',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580596137508,
                stop: 1580596194494,
                duration: 56986
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 6',
              uid: '6601623fffb81bd0',
              parentUid: 'a199b0536900e949a9a51d92dc8ab35a',
              status: 'failed',
              time: {
                start: 1580596194496,
                stop: 1580596251366,
                duration: 56870
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'a199b0536900e949a9a51d92dc8ab35a'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name: 'User can see remaining estimation of active case',
              uid: '1a60e70eef180197',
              parentUid: '36d382a020f9e595dae3baea3c161cbe',
              status: 'failed',
              time: {
                start: 1580594063478,
                stop: 1580594122873,
                duration: 59395
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 10',
              uid: 'c0c30582bec5483e',
              parentUid: '36d382a020f9e595dae3baea3c161cbe',
              status: 'failed',
              time: {
                start: 1580596421491,
                stop: 1580596478308,
                duration: 56817
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can hide custom fields for editing cases',
              uid: 'e3c7ee069350326d',
              parentUid: '36d382a020f9e595dae3baea3c161cbe',
              status: 'failed',
              time: {
                start: 1580599247784,
                stop: 1580599315772,
                duration: 67988
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '36d382a020f9e595dae3baea3c161cbe'
        },
        {
          name:
            'No element found using locator: by.cssContainingText("button", "Start Work")',
          children: [
            {
              name: 'User can start working on an active case',
              uid: '29c3473b779c4ddf',
              parentUid: '47812a2200111b54fc7c74eec8ccb9b5',
              status: 'failed',
              time: {
                start: 1580594122876,
                stop: 1580594182273,
                duration: 59397
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can start working on a closed case',
              uid: 'a7c7b7aaedfd847a',
              parentUid: '47812a2200111b54fc7c74eec8ccb9b5',
              status: 'failed',
              time: {
                start: 1580595560323,
                stop: 1580595620665,
                duration: 60342
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '47812a2200111b54fc7c74eec8ccb9b5'
        },
        {
          name:
            'No element found using locator: by.cssContainingText("button", "Stop Work")',
          children: [
            {
              name: 'User can stop working on an active case',
              uid: '57665f46e46a56c8',
              parentUid: 'cc15563fa5dd9a720ab52138302fffba',
              status: 'failed',
              time: {
                start: 1580594182280,
                stop: 1580594241307,
                duration: 59027
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can stop working on a closed case',
              uid: '31fd4aaa371dc3af',
              parentUid: 'cc15563fa5dd9a720ab52138302fffba',
              status: 'failed',
              time: {
                start: 1580595620668,
                stop: 1580595680704,
                duration: 60036
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'cc15563fa5dd9a720ab52138302fffba'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'User can see current estimation of an active case with subcases',
              uid: 'e211824af6853bfe',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580594250811,
                stop: 1580594311687,
                duration: 60876
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Active cases cannot be assigned to community users',
              uid: '26b5ad17f11ec4b7',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580594434274,
                stop: 1580594495716,
                duration: 61442
              },
              flaky: false,
              parameters: ['Top']
            },
            {
              name: 'Active cases cannot be assigned to community users',
              uid: '2f36421311c3dbd7',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580594495765,
                stop: 1580594556898,
                duration: 61133
              },
              flaky: false,
              parameters: ['Bottom']
            },
            {
              name: 'System provides the default case 15',
              uid: 'fb67fe411f55196a',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580596705478,
                stop: 1580596762396,
                duration: 56918
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can edit an existing case',
              uid: 'f2159d778ece2858',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580596819165,
                stop: 1580596881086,
                duration: 61921
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Custom field can be set to be on the Top panel in the case pages',
              uid: '72b3e6a8edb4e476',
              parentUid: '4776466cd08c6982b73289754ee91ae6',
              status: 'failed',
              time: {
                start: 1580600526894,
                stop: 1580600601253,
                duration: 74359
              },
              flaky: false,
              parameters: ['17', 'View Active Case']
            }
          ],
          uid: '4776466cd08c6982b73289754ee91ae6'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'User can see elapsed estimation of an active case with subcases',
              uid: '8697a4d9427fdee2',
              parentUid: 'e0404ceed104536492052331db95cb79',
              status: 'failed',
              time: {
                start: 1580594311693,
                stop: 1580594372377,
                duration: 60684
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 9',
              uid: '65c36e1ac8861b34',
              parentUid: 'e0404ceed104536492052331db95cb79',
              status: 'failed',
              time: {
                start: 1580596364186,
                stop: 1580596421488,
                duration: 57302
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 14',
              uid: '2493a3a7b1a37818',
              parentUid: 'e0404ceed104536492052331db95cb79',
              status: 'failed',
              time: {
                start: 1580596648779,
                stop: 1580596705475,
                duration: 56696
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can configure mode of custom fields for resolving cases',
              uid: 'f1ff208a6c052c95',
              parentUid: 'e0404ceed104536492052331db95cb79',
              status: 'failed',
              time: {
                start: 1580600130612,
                stop: 1580600215273,
                duration: 84661
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'e0404ceed104536492052331db95cb79'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50004ms',
          children: [
            {
              name: 'Resolved cases cannot be assigned to community users',
              uid: 'fde3a232620b9bc1',
              parentUid: 'a634f0c34d8641d219b0936b807d499b',
              status: 'failed',
              time: {
                start: 1580594556901,
                stop: 1580594620286,
                duration: 63385
              },
              flaky: false,
              parameters: ['Top']
            }
          ],
          uid: 'a634f0c34d8641d219b0936b807d499b'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name: 'Resolved cases cannot be assigned to community users',
              uid: 'b91a8c8604297b1e',
              parentUid: '138bedda8e2c2d0d5e4fecd75921b538',
              status: 'failed',
              time: {
                start: 1580594620291,
                stop: 1580594681810,
                duration: 61519
              },
              flaky: false,
              parameters: ['Bottom']
            }
          ],
          uid: '138bedda8e2c2d0d5e4fecd75921b538'
        },
        {
          name:
            'by.cssContainingText("a", "Administrator")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name: 'New cases cannot be assigned to community users',
              uid: '40eaa21831a5ec0',
              parentUid: '398099a353df51f877c4cd13b70cbc99',
              status: 'failed',
              time: {
                start: 1580594681814,
                stop: 1580594741179,
                duration: 59365
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '398099a353df51f877c4cd13b70cbc99'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name: 'User can assign a case',
              uid: '774ce27636b79cb0',
              parentUid: 'ef55ccfbfbc3c796803394a7b61d63f1',
              status: 'failed',
              time: {
                start: 1580594741186,
                stop: 1580594801478,
                duration: 60292
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name: 'System provides the default case 1',
              uid: 'e30effe79e36bf20',
              parentUid: 'ef55ccfbfbc3c796803394a7b61d63f1',
              status: 'failed',
              time: {
                start: 1580595907705,
                stop: 1580595965377,
                duration: 57672
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 4',
              uid: '9e8f7563572a4559',
              parentUid: 'ef55ccfbfbc3c796803394a7b61d63f1',
              status: 'failed',
              time: {
                start: 1580596080883,
                stop: 1580596137505,
                duration: 56622
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 7',
              uid: '8379583e1415f3ba',
              parentUid: 'ef55ccfbfbc3c796803394a7b61d63f1',
              status: 'failed',
              time: {
                start: 1580596251369,
                stop: 1580596307577,
                duration: 56208
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ef55ccfbfbc3c796803394a7b61d63f1'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50018ms',
          children: [
            {
              name:
                'User can resolve existing active case: Category and default resolved status within the current case category are used as initial property values.',
              uid: '8433ae42c5083834',
              parentUid: '5432c377d3797f10205c897539345a8b',
              status: 'failed',
              time: {
                start: 1580595084904,
                stop: 1580595149577,
                duration: 64673
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '5432c377d3797f10205c897539345a8b'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name: 'User can close a resolved case',
              uid: '967d0b735b367153',
              parentUid: '5ed033198ded8cb752304a954fc3b3e2',
              status: 'failed',
              time: {
                start: 1580595149581,
                stop: 1580595219806,
                duration: 70225
              },
              flaky: false,
              parameters: ['top']
            },
            {
              name:
                'Administrator can hide custom fields for reactivating cases',
              uid: '90934a83769ea02f',
              parentUid: '5ed033198ded8cb752304a954fc3b3e2',
              status: 'failed',
              time: {
                start: 1580599654467,
                stop: 1580599721793,
                duration: 67326
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can hide custom fields for reopening cases',
              uid: '4d3c96e02a2812f8',
              parentUid: '5ed033198ded8cb752304a954fc3b3e2',
              status: 'failed',
              time: {
                start: 1580599721801,
                stop: 1580599795796,
                duration: 73995
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Custom field can be set to be on the left panel in the case pages',
              uid: '8159ce41889da0f6',
              parentUid: '5ed033198ded8cb752304a954fc3b3e2',
              status: 'failed',
              time: {
                start: 1580600289033,
                stop: 1580600367585,
                duration: 78552
              },
              flaky: false,
              parameters: ['18', 'View Resolved Case']
            }
          ],
          uid: '5ed033198ded8cb752304a954fc3b3e2'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50013ms',
          children: [
            {
              name: 'User can close a resolved case',
              uid: 'bbccd450295bfe7e',
              parentUid: '80ff6ad5a47ec36b1032baa8b0d03fbb',
              status: 'failed',
              time: {
                start: 1580595219818,
                stop: 1580595279892,
                duration: 60074
              },
              flaky: false,
              parameters: ['bottom']
            }
          ],
          uid: '80ff6ad5a47ec36b1032baa8b0d03fbb'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50012ms',
          children: [
            {
              name: 'User can see current estimation in a closed case',
              uid: 'c4b78673475381e8',
              parentUid: '2bb34024ac0c670333fb1475b46f54a1',
              status: 'failed',
              time: {
                start: 1580595320864,
                stop: 1580595381287,
                duration: 60423
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2bb34024ac0c670333fb1475b46f54a1'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name: 'User can see elapsed estimation of closed case',
              uid: 'd027526d1b874fa3',
              parentUid: '4fdd46d62075151d1612fffc1d2f3d74',
              status: 'failed',
              time: {
                start: 1580595381292,
                stop: 1580595441066,
                duration: 59774
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '4fdd46d62075151d1612fffc1d2f3d74'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name: 'User can see original estimation of closed case',
              uid: '5a26e77e018aa695',
              parentUid: '087ab1bc47bb02c407a798838b0d7099',
              status: 'failed',
              time: {
                start: 1580595441070,
                stop: 1580595500486,
                duration: 59416
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '087ab1bc47bb02c407a798838b0d7099'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name: 'User can see remaining estimation of closed case',
              uid: 'bc1361e64a2ed5c5',
              parentUid: '544d7b675af7c736f51f8024b818a34b',
              status: 'failed',
              time: {
                start: 1580595500489,
                stop: 1580595560320,
                duration: 59831
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '544d7b675af7c736f51f8024b818a34b'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name: 'User can create a comment for a case',
              uid: 'b820071dd006a2d7',
              parentUid: '2b047e04b657fb4ec9580cf4468728a4',
              status: 'failed',
              time: {
                start: 1580595728886,
                stop: 1580595788477,
                duration: 59591
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'System provides the default case 3',
              uid: 'd1c72149a183cd92',
              parentUid: '2b047e04b657fb4ec9580cf4468728a4',
              status: 'failed',
              time: {
                start: 1580596022678,
                stop: 1580596080880,
                duration: 58202
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2b047e04b657fb4ec9580cf4468728a4'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50007ms',
          children: [
            {
              name: 'System provides the default case 11',
              uid: 'c27437c9c38d63b5',
              parentUid: '2ac68676dfdc9ea21aefb12bab96a459',
              status: 'failed',
              time: {
                start: 1580596478311,
                stop: 1580596535299,
                duration: 56988
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2ac68676dfdc9ea21aefb12bab96a459'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50009ms',
          children: [
            {
              name: 'User can view an existing case',
              uid: '13c6636a2bc86235',
              parentUid: '5bdc7225155848262d464a53a8562647',
              status: 'failed',
              time: {
                start: 1580597002785,
                stop: 1580597061981,
                duration: 59196
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '5bdc7225155848262d464a53a8562647'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50017ms',
          children: [
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '9f2f9a2c5bed6a8a',
              parentUid: 'dbf0f561ee0c16056a7c2ba7df83544e',
              status: 'failed',
              time: {
                start: 1580597061987,
                stop: 1580597120973,
                duration: 58986
              },
              flaky: false,
              parameters: ['Bug']
            },
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'fbceada819dba402',
              parentUid: 'dbf0f561ee0c16056a7c2ba7df83544e',
              status: 'failed',
              time: {
                start: 1580620293037,
                stop: 1580620362970,
                duration: 69933
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'a983b2590e202e0',
              parentUid: 'dbf0f561ee0c16056a7c2ba7df83544e',
              status: 'failed',
              time: {
                start: 1580621959594,
                stop: 1580622027925,
                duration: 68331
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '6172baccdc521080',
              parentUid: 'dbf0f561ee0c16056a7c2ba7df83544e',
              status: 'failed',
              time: {
                start: 1580622027978,
                stop: 1580622100178,
                duration: 72200
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: 'dbf0f561ee0c16056a7c2ba7df83544e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50034ms',
          children: [
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: 'c172533156a8341b',
              parentUid: '6c49aa55f8e9a77356968029aa25db38',
              status: 'failed',
              time: {
                start: 1580597120986,
                stop: 1580597180811,
                duration: 59825
              },
              flaky: false,
              parameters: ['Feature']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'fb0a199f94021fba',
              parentUid: '6c49aa55f8e9a77356968029aa25db38',
              status: 'failed',
              time: {
                start: 1580622100210,
                stop: 1580622171302,
                duration: 71092
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '7a1af2f76eb465f3',
              parentUid: '6c49aa55f8e9a77356968029aa25db38',
              status: 'failed',
              time: {
                start: 1580623027808,
                stop: 1580623093644,
                duration: 65836
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '6c49aa55f8e9a77356968029aa25db38'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50025ms',
          children: [
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '34f7bb583f5ffce7',
              parentUid: '976f7b147aa91762fef7bf5c7f667470',
              status: 'failed',
              time: {
                start: 1580597180815,
                stop: 1580597240175,
                duration: 59360
              },
              flaky: false,
              parameters: ['Inquiry']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'a637f7dc67d94a0a',
              parentUid: '976f7b147aa91762fef7bf5c7f667470',
              status: 'failed',
              time: {
                start: 1580624284991,
                stop: 1580624349136,
                duration: 64145
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '976f7b147aa91762fef7bf5c7f667470'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(@class,"df-modal__content")]//img[@alt="undefined.png"])',
          children: [
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '43ee72cd993c157',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597240184,
                stop: 1580597298968,
                duration: 58784
              },
              flaky: false,
              parameters: ['Schedule Item']
            },
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '5b34128f7c92e5b3',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597298976,
                stop: 1580597357581,
                duration: 58605
              },
              flaky: false,
              parameters: ['Bug Error']
            },
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: 'f1ed4c43bfe9a831',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597357585,
                stop: 1580597416584,
                duration: 58999
              },
              flaky: false,
              parameters: ['Wrench']
            },
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '877611b5250c42e4',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597416588,
                stop: 1580597475376,
                duration: 58788
              },
              flaky: false,
              parameters: ['Magnifier']
            },
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: 'bb4ab704e90f060c',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597475381,
                stop: 1580597533989,
                duration: 58608
              },
              flaky: false,
              parameters: ['Key']
            },
            {
              name:
                'Administrator can create a new category: "Icon": Built-in icons',
              uid: '6ecd33aa9124bf69',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597533994,
                stop: 1580597593175,
                duration: 59181
              },
              flaky: false,
              parameters: ['Exclamation']
            },
            {
              name:
                'Administrator can edit an existing category: Display order: Move Up',
              uid: '122dc710ff13c2a8',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597769325,
                stop: 1580597832256,
                duration: 62931
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing category: Display order: Move Down',
              uid: 'aef50c7542ba56dc',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597832292,
                stop: 1580597894180,
                duration: 61888
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can undelete a category',
              uid: 'f9f8cc99f72384c0',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580597957705,
                stop: 1580598019174,
                duration: 61469
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view existing categories',
              uid: '5c4c4c7c6e15959d',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580598019181,
                stop: 1580598078880,
                duration: 59699
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new active status: "Default" is "false"',
              uid: 'a1c60ccced3a5a09',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608306009,
                stop: 1580608366874,
                duration: 60865
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new active status: "Default" is "true"',
              uid: 'a618b30a07060f55',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608366892,
                stop: 1580608426577,
                duration: 59685
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new resolved status: "Default" is "false"',
              uid: 'b4a0c9f7266e3978',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608426587,
                stop: 1580608486204,
                duration: 59617
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new resolved status: "Default" is "true"',
              uid: '3c154d4c84023b08',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608486215,
                stop: 1580608547687,
                duration: 61472
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can create a new active status',
              uid: 'b4f82357d4722e04',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608547695,
                stop: 1580608607472,
                duration: 59777
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can create a new resolved status',
              uid: 'f2d9da3e326a06c8',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608607483,
                stop: 1580608667279,
                duration: 59796
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator cannot edit a deleted active status',
              uid: '4a78221a9c563b36',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608728124,
                stop: 1580608787581,
                duration: 59457
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator cannot edit a deleted resolved status',
              uid: '541c1092eae8ade',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608787588,
                stop: 1580608847883,
                duration: 60295
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot delete last active status in a category',
              uid: 'ae9dad2fc23f4aee',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608847898,
                stop: 1580608907666,
                duration: 59768
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot delete last resolved status in a category',
              uid: 'e7414534def6118f',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608907676,
                stop: 1580608968489,
                duration: 60813
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator cannot reorder a deleted active status',
              uid: '754692a44817d6ac',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580608968493,
                stop: 1580609028111,
                duration: 59618
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator cannot reorder a deleted resolved status',
              uid: '606923f66038c387',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609028121,
                stop: 1580609087783,
                duration: 59662
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can delete an existing active status',
              uid: '73833ec40c2c7f25',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609087790,
                stop: 1580609147268,
                duration: 59478
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can delete an existing resolved status',
              uid: '900d393d183541e2',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609147276,
                stop: 1580609205990,
                duration: 58714
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing active status: "Default": "true" to "false"',
              uid: '9d806342a635cd01',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609206002,
                stop: 1580609264684,
                duration: 58682
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing active status: "Default": "false" to "true"',
              uid: 'a41dca1e8483bf5f',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609264690,
                stop: 1580609325083,
                duration: 60393
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing resolved status: "Default": "true" to "false"',
              uid: '9438d4c1822758f7',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609325093,
                stop: 1580609385687,
                duration: 60594
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing resolved status: "Default": "false" to "true"',
              uid: '228fdfda14143a5b',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609385701,
                stop: 1580609445885,
                duration: 60184
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit an existing active status',
              uid: 'a7629e3501a4ded3',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609450189,
                stop: 1580609509285,
                duration: 59096
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit an existing resolved status',
              uid: '109cdae94f361338',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609509294,
                stop: 1580609567800,
                duration: 58506
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can undelete a deleted active status',
              uid: 'b526de2c9ea27fcd',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609567805,
                stop: 1580609628145,
                duration: 60340
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can undelete a deleted resolved status',
              uid: '7292218332d224c9',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609628160,
                stop: 1580609689273,
                duration: 61113
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view all statuses',
              uid: '997a2904538b8bc6',
              parentUid: 'e9c1e2f173986057d1b4d97dbd0d5783',
              status: 'failed',
              time: {
                start: 1580609689280,
                stop: 1580609749933,
                duration: 60653
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'e9c1e2f173986057d1b4d97dbd0d5783'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50033ms',
          children: [
            {
              name: 'Administrator can create a new category',
              uid: 'c7a7cb1c497116d8',
              parentUid: 'e9cd1aa1038f9c08561e4755acc8b1a0',
              status: 'failed',
              time: {
                start: 1580597593179,
                stop: 1580597652384,
                duration: 59205
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'e9cd1aa1038f9c08561e4755acc8b1a0'
        },
        {
          name:
            'By(xpath, //span[normalize-space(text())="Schedule Item"])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name: 'System provides the default categories',
              uid: '92fd12ccd02a0dc7',
              parentUid: '1f6575542b8f42135bb18edf2195dc46',
              status: 'failed',
              time: {
                start: 1580597652389,
                stop: 1580597710768,
                duration: 58379
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1f6575542b8f42135bb18edf2195dc46'
        },
        {
          name:
            'By(xpath, //span[normalize-space(text())="Schedule Item"])Element should be visible\nWait timed out after 50015ms',
          children: [
            {
              name: 'Administrator can delete a category',
              uid: '71ae8f0e0a07c068',
              parentUid: 'db12b293fd7d95e1255640c7af2002b0',
              status: 'failed',
              time: {
                start: 1580597710772,
                stop: 1580597769320,
                duration: 58548
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'db12b293fd7d95e1255640c7af2002b0'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50028ms',
          children: [
            {
              name: 'Administrator can edit an existing category',
              uid: '697abed66a33d82c',
              parentUid: 'e48247a235e4a6ed83e23c513d28e7b9',
              status: 'failed',
              time: {
                start: 1580597894188,
                stop: 1580597957696,
                duration: 63508
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: '460522fb7a652a2b',
              parentUid: 'e48247a235e4a6ed83e23c513d28e7b9',
              status: 'failed',
              time: {
                start: 1580624742629,
                stop: 1580624808478,
                duration: 65849
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: 'e48247a235e4a6ed83e23c513d28e7b9'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option/div[normalize-space(text())="Bug"])',
          children: [
            {
              name:
                'User can use an "Unset" static value for dropdown custom fields',
              uid: '87e4c2e659476e3e',
              parentUid: '0e58e7359ff2cd57f06bb70c51a1e0b5',
              status: 'failed',
              time: {
                start: 1580598078889,
                stop: 1580598139214,
                duration: 60325
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Can define values for dropdown custom field',
              uid: '2f95e13fb1032834',
              parentUid: '0e58e7359ff2cd57f06bb70c51a1e0b5',
              status: 'failed',
              time: {
                start: 1580598139266,
                stop: 1580598199293,
                duration: 60027
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0e58e7359ff2cd57f06bb70c51a1e0b5'
        },
        {
          name: "Missing required key 'GroupName' in params",
          children: [
            {
              name:
                'Administrator can configure which types of users are available for custom fields of type Person',
              uid: 'c3f212f9e723346b',
              parentUid: 'b8f462d90c86b3d4123f959b60d473c5',
              status: 'failed',
              time: {
                start: 1580598199299,
                stop: 1580598232093,
                duration: 32794
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b8f462d90c86b3d4123f959b60d473c5'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Custom field created for a specific project is visible on a case page when the project it belongs to is selected',
              uid: '9ed2a4f79d8760bb',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580598272985,
                stop: 1580598331782,
                duration: 58797
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can create a project area for a project',
              uid: '68cf4d52799f43e3',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580602755674,
                stop: 1580602816912,
                duration: 61238
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Inbox project areas have links to the "Prediction Statistics" page',
              uid: '6e0361f7ca23695a',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580603188677,
                stop: 1580603251080,
                duration: 62403
              },
              flaky: false,
              parameters: ['Spam']
            },
            {
              name: 'Administrator can delete a milestone for the this project',
              uid: '2a1fd4e0913d2d24',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580604105981,
                stop: 1580604165805,
                duration: 59824
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can make a milestone depend on other milestones for all projects',
              uid: '3c513e7a7a3a1491',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580604344912,
                stop: 1580604407124,
                duration: 62212
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can delete milestone dependency for all projects',
              uid: '20f7ecd2a32c4e0',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580604467685,
                stop: 1580604527586,
                duration: 59901
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can view all milestones with Dependencies of a project',
              uid: 'bced1ff89bab97f9',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580604647188,
                stop: 1580604707483,
                duration: 60295
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit a milestone for all projects',
              uid: 'aa40381119619695',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580604767191,
                stop: 1580604826384,
                duration: 59193
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing project: "Primary Contact"',
              uid: 'b6758d19019bfb23',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580605125787,
                stop: 1580605187145,
                duration: 61358
              },
              flaky: false,
              parameters: ['Unassigned']
            },
            {
              name: 'Administrator can edit an existing project: "Workflow"',
              uid: 'f6c7255b7174a247',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580605258265,
                stop: 1580605326280,
                duration: 68015
              },
              flaky: false,
              parameters: ['5k Rewrite']
            },
            {
              name:
                'Administrator cannot auto subscribe to a project area multiple times by clicking on the "Add New Subscription" link',
              uid: 'd5e7680fdc2c3ace',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580610824215,
                stop: 1580610888836,
                duration: 64621
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to a project by clicking on the "Add New Subscription" link',
              uid: '8d0804ca9a94251',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580611119087,
                stop: 1580611182183,
                duration: 63096
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to a project by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '576632c7a84d3441',
              parentUid: '66ba0f8c07e45291de65446cb71b4fa3',
              status: 'failed',
              time: {
                start: 1580611182192,
                stop: 1580611243244,
                duration: 61052
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '66ba0f8c07e45291de65446cb71b4fa3'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50004ms',
          children: [
            {
              name:
                'Custom field created for a specific project is not visible on a case page when the project it does not belong is selected',
              uid: 'c5ef55031b4b135d',
              parentUid: '1dbf888c6c2cd655f1528a2dec9906c9',
              status: 'failed',
              time: {
                start: 1580598331788,
                stop: 1580598390468,
                duration: 58680
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Inbox project areas have links to the "Prediction Statistics" page',
              uid: '3763f5fdc90a0531',
              parentUid: '1dbf888c6c2cd655f1528a2dec9906c9',
              status: 'failed',
              time: {
                start: 1580603125866,
                stop: 1580603188663,
                duration: 62797
              },
              flaky: false,
              parameters: ['Not Spam']
            },
            {
              name:
                'Cases can be assigned to non-deleted assignable milestones of a selected project',
              uid: '985d12b1da6eeb61',
              parentUid: '1dbf888c6c2cd655f1528a2dec9906c9',
              status: 'failed',
              time: {
                start: 1580603504191,
                stop: 1580603564922,
                duration: 60731
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can delete milestone dependency for this project',
              uid: '8ff5a83d4abc0175',
              parentUid: '1dbf888c6c2cd655f1528a2dec9906c9',
              status: 'failed',
              time: {
                start: 1580604407173,
                stop: 1580604467680,
                duration: 60507
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit milestone dependency for this project',
              uid: '643df3465e08dae6',
              parentUid: '1dbf888c6c2cd655f1528a2dec9906c9',
              status: 'failed',
              time: {
                start: 1580604527599,
                stop: 1580604587194,
                duration: 59595
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1dbf888c6c2cd655f1528a2dec9906c9'
        },
        {
          name:
            'By(css selector, df-alert .df-alert__box__header)Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name: 'Administrator can delete a custom field',
              uid: 'f7b2df0d2debc46c',
              parentUid: '57469e6988c0837276000ecd301774ab',
              status: 'failed',
              time: {
                start: 1580598390477,
                stop: 1580598495709,
                duration: 105232
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '57469e6988c0837276000ecd301774ab'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"Add New Custom Field")])',
          children: [
            {
              name: 'Custom fields cannot be re-ordered across locations',
              uid: '432331753517be01',
              parentUid: '3771f67380602636e6602f8b99f75da2',
              status: 'failed',
              time: {
                start: 1580598495715,
                stop: 1580598559071,
                duration: 63356
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Custom fields can be ordered within Top or Left locations: Move Up',
              uid: '2079bfda9626e27',
              parentUid: '3771f67380602636e6602f8b99f75da2',
              status: 'failed',
              time: {
                start: 1580598559079,
                stop: 1580598623285,
                duration: 64206
              },
              flaky: false,
              parameters: ['Left']
            },
            {
              name:
                'Custom fields can be ordered within Top or Left locations: Move Up',
              uid: 'fa1bdfcb0828d6ea',
              parentUid: '3771f67380602636e6602f8b99f75da2',
              status: 'failed',
              time: {
                start: 1580598623307,
                stop: 1580598687179,
                duration: 63872
              },
              flaky: false,
              parameters: ['Top']
            },
            {
              name:
                'Custom fields can be ordered within Top or Left locations: Move Down',
              uid: '155616daca3fcdf9',
              parentUid: '3771f67380602636e6602f8b99f75da2',
              status: 'failed',
              time: {
                start: 1580598687185,
                stop: 1580598750272,
                duration: 63087
              },
              flaky: false,
              parameters: ['Left']
            },
            {
              name:
                'Custom fields can be ordered within Top or Left locations: Move Down',
              uid: '1340b640dc53f345',
              parentUid: '3771f67380602636e6602f8b99f75da2',
              status: 'failed',
              time: {
                start: 1580598750276,
                stop: 1580598813978,
                duration: 63702
              },
              flaky: false,
              parameters: ['Top']
            }
          ],
          uid: '3771f67380602636e6602f8b99f75da2'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option/div[normalize-space(text())="Feature"])',
          children: [
            {
              name:
                'Administrator can configure categories of custom fields for assigning cases',
              uid: 'd5a31f25b0b53074',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580598837630,
                stop: 1580598897476,
                duration: 59846
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can configure category of custom fields for editing cases',
              uid: 'c06d4afbed68eeaa',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580599187971,
                stop: 1580599247778,
                duration: 59807
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can define category for custom fields when opening cases',
              uid: '8713bbc743e40d53',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580599382776,
                stop: 1580599442277,
                duration: 59501
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can configure category of custom fields for reactivating cases',
              uid: 'f1479300fbacd8bd',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580599595505,
                stop: 1580599654465,
                duration: 58960
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can configure category for custom fields when reopening cases',
              uid: '3836526eebfe3726',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580599795803,
                stop: 1580599854980,
                duration: 59177
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can define category of custom fields for resolving cases',
              uid: 'a4598e3292028bad',
              parentUid: '27b9ead7525dc098176a22b897ac9882',
              status: 'failed',
              time: {
                start: 1580599999385,
                stop: 1580600059688,
                duration: 60303
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '27b9ead7525dc098176a22b897ac9882'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50011ms',
          children: [
            {
              name: 'Administrator can hide custom fields when assigning cases',
              uid: '481c57eca98b2e8e',
              parentUid: '3639a7e0fdf99f5fe5e254e6d818d4d5',
              status: 'failed',
              time: {
                start: 1580598897479,
                stop: 1580598969181,
                duration: 71702
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3639a7e0fdf99f5fe5e254e6d818d4d5'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50007ms',
          children: [
            {
              name: 'Administrator can hide custom fields for closing cases',
              uid: '5045df65c889f651',
              parentUid: '6129f3ee200df56ef4da15efb1bf32c8',
              status: 'failed',
              time: {
                start: 1580598969191,
                stop: 1580599039188,
                duration: 69997
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can configure mode of custom fields for closing cases',
              uid: '716bafc6623ef095',
              parentUid: '6129f3ee200df56ef4da15efb1bf32c8',
              status: 'failed',
              time: {
                start: 1580599039202,
                stop: 1580599115579,
                duration: 76377
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '6129f3ee200df56ef4da15efb1bf32c8'
        },
        {
          name: "'New Case' should be displayed: expected undefined to be true",
          children: [
            {
              name:
                'Administrator can configure mode of custom fields for creating cases',
              uid: 'b7eb8de03573a069',
              parentUid: '214e9d9669ec5f4c915df1809a1825cb',
              status: 'failed',
              time: {
                start: 1580599115584,
                stop: 1580599187968,
                duration: 72384
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '214e9d9669ec5f4c915df1809a1825cb'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-radio-group[@formcontrolname="modeEdit"]//div[normalize-space(text())="Read-only"]/preceding-sibling::div)',
          children: [
            {
              name:
                'Administrator can configure mode of custom fields for editing cases',
              uid: 'f750c40237f8028e',
              parentUid: 'c9c42abd6d14b992c0316ac103493feb',
              status: 'failed',
              time: {
                start: 1580599315779,
                stop: 1580599382717,
                duration: 66938
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'c9c42abd6d14b992c0316ac103493feb'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name: 'Administrator can hide custom fields for public cases',
              uid: 'c712742866837500',
              parentUid: '9a99c80d2470b55101adf3c70df4c860',
              status: 'failed',
              time: {
                start: 1580599457908,
                stop: 1580599522769,
                duration: 64861
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Signed out user is asked to login again, when opening "Index" page',
              uid: '3232a1464d186991',
              parentUid: '9a99c80d2470b55101adf3c70df4c860',
              status: 'failed',
              time: {
                start: 1580608247644,
                stop: 1580608306000,
                duration: 58356
              },
              flaky: false,
              parameters: ['Administrator']
            }
          ],
          uid: '9a99c80d2470b55101adf3c70df4c860'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name:
                'Administrator can configure mode of custom fields for creating public cases',
              uid: '863cc05de936f7aa',
              parentUid: 'eb9391230988574c9a459851373d90d5',
              status: 'failed',
              time: {
                start: 1580599522776,
                stop: 1580599595496,
                duration: 72720
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'eb9391230988574c9a459851373d90d5'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name: 'Administrator can hide custom fields for reopening cases',
              uid: '7450a60efeaa5722',
              parentUid: '008f61fbde35a858e191016bfb3a7b0b',
              status: 'failed',
              time: {
                start: 1580599854986,
                stop: 1580599924107,
                duration: 69121
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '008f61fbde35a858e191016bfb3a7b0b'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name: 'Administrator can configure mode for for reopening cases',
              uid: '56745d0cfda5632e',
              parentUid: '22ea536eb12dab8bc33eba96e551454d',
              status: 'failed',
              time: {
                start: 1580599924119,
                stop: 1580599999377,
                duration: 75258
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '22ea536eb12dab8bc33eba96e551454d'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50014ms',
          children: [
            {
              name: 'Administrator can hide custom fields for resolving cases',
              uid: 'a2981ff8ddf9f9a',
              parentUid: 'd4e98a6807bc136e8c96d0356374bcdd',
              status: 'failed',
              time: {
                start: 1580600059696,
                stop: 1580600130605,
                duration: 70909
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd4e98a6807bc136e8c96d0356374bcdd'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Active Case")]|//h2[contains(text(),"View Active Case")])Element should be visible\nWait timed out after 50017ms',
          children: [
            {
              name:
                'Custom field can be set to be on the left panel in the case pages',
              uid: 'b1c5f2f23122cb37',
              parentUid: 'fa25c97951a55dbb0148dc71c5545d21',
              status: 'failed',
              time: {
                start: 1580600215280,
                stop: 1580600289027,
                duration: 73747
              },
              flaky: false,
              parameters: ['17', 'View Active Case']
            }
          ],
          uid: 'fa25c97951a55dbb0148dc71c5545d21'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50015ms',
          children: [
            {
              name:
                'Custom field can be set to be on the left panel in the case pages',
              uid: '8b37d7bd4d06a15f',
              parentUid: '4ac1aa09c115989cd09fed4744bef80f',
              status: 'failed',
              time: {
                start: 1580600367596,
                stop: 1580600444273,
                duration: 76677
              },
              flaky: false,
              parameters: ['19', 'View Closed Case']
            }
          ],
          uid: '4ac1aa09c115989cd09fed4744bef80f'
        },
        {
          name:
            'No element found using locator: by.cssContainingText("span", "New Case")',
          children: [
            {
              name:
                'Custom field can be set to be on the left panel when creating a public case',
              uid: '68cb88e26122890',
              parentUid: '53ff42ac4e0f14a432d41a20b19ff8be',
              status: 'failed',
              time: {
                start: 1580600461089,
                stop: 1580600526887,
                duration: 65798
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Custom field can be set to be on the Top panel when creating a public case',
              uid: 'c2a776b913db08e7',
              parentUid: '53ff42ac4e0f14a432d41a20b19ff8be',
              status: 'failed',
              time: {
                start: 1580600766286,
                stop: 1580600832030,
                duration: 65744
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '53ff42ac4e0f14a432d41a20b19ff8be'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Resolved Case")]|//h2[contains(text(),"View Resolved Case")])Element should be visible\nWait timed out after 50009ms',
          children: [
            {
              name:
                'Custom field can be set to be on the Top panel in the case pages',
              uid: 'c0bfb56c60a7d5ed',
              parentUid: '6bdcd5b029e253d818859e74ccd33026',
              status: 'failed',
              time: {
                start: 1580600601265,
                stop: 1580600675569,
                duration: 74304
              },
              flaky: false,
              parameters: ['18', 'View Resolved Case']
            }
          ],
          uid: '6bdcd5b029e253d818859e74ccd33026'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"View Closed Case")]|//h2[contains(text(),"View Closed Case")])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Custom field can be set to be on the Top panel in the case pages',
              uid: 'ae15f71bdbde4a5c',
              parentUid: 'a20471d4a668f7d6d2fa6a5a23fd52f1',
              status: 'failed',
              time: {
                start: 1580600675572,
                stop: 1580600750010,
                duration: 74438
              },
              flaky: false,
              parameters: ['19', 'View Closed Case']
            }
          ],
          uid: 'a20471d4a668f7d6d2fa6a5a23fd52f1'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50016ms',
          children: [
            {
              name: 'Administrator can add an all-day holiday',
              uid: '239fc150f8119fae',
              parentUid: '41bd81decbb43c5089c07ecad5d6e469',
              status: 'failed',
              time: {
                start: 1580600889586,
                stop: 1580600947375,
                duration: 57789
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '41bd81decbb43c5089c07ecad5d6e469'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50011ms',
          children: [
            {
              name: 'Administrator can add an non-all-day holiday',
              uid: '32820ff39117a10f',
              parentUid: 'efc60cef4c13d264df958cc13d163f6a',
              status: 'failed',
              time: {
                start: 1580600947381,
                stop: 1580601005064,
                duration: 57683
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can select among values for lunch lasts for',
              uid: 'd2e878ed470539b1',
              parentUid: 'efc60cef4c13d264df958cc13d163f6a',
              status: 'failed',
              time: {
                start: 1580605683212,
                stop: 1580605741482,
                duration: 58270
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'efc60cef4c13d264df958cc13d163f6a'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50040ms',
          children: [
            {
              name: 'Administrator can delete an existing all-day holiday',
              uid: '6cfb013d85aa08f8',
              parentUid: '3318b5d1e4ced51543608f69d76bfed6',
              status: 'failed',
              time: {
                start: 1580601005068,
                stop: 1580601063878,
                duration: 58810
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3318b5d1e4ced51543608f69d76bfed6'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50014ms',
          children: [
            {
              name: 'Administrator can delete an existing non-all-day holiday',
              uid: 'f1ef49cb30645cbf',
              parentUid: '7e95a37f1ff5952e9bd154f2a7b1474c',
              status: 'failed',
              time: {
                start: 1580601063885,
                stop: 1580601122082,
                duration: 58197
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can define when does the lunch start',
              uid: '23cccc1a81c7d267',
              parentUid: '7e95a37f1ff5952e9bd154f2a7b1474c',
              status: 'failed',
              time: {
                start: 1580605386286,
                stop: 1580605446380,
                duration: 60094
              },
              flaky: false,
              parameters: ['30 m', '9:00 AM']
            }
          ],
          uid: '7e95a37f1ff5952e9bd154f2a7b1474c'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50059ms',
          children: [
            {
              name: 'Administrator can edit an existing all-day holiday',
              uid: '590c0952ba892f51',
              parentUid: '09ef839fc01ccae1fca40f546472e0bb',
              status: 'failed',
              time: {
                start: 1580601122091,
                stop: 1580601180840,
                duration: 58749
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '09ef839fc01ccae1fca40f546472e0bb'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50025ms',
          children: [
            {
              name:
                'Administrator can edit an existing non-all-day holiday to make it all-day',
              uid: '461387a19bf3c9e2',
              parentUid: 'be48243ae1998beb573ab2451613ad49',
              status: 'failed',
              time: {
                start: 1580601180849,
                stop: 1580601243406,
                duration: 62557
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'be48243ae1998beb573ab2451613ad49'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50048ms',
          children: [
            {
              name: 'Administrator can edit an existing non-all-day holiday',
              uid: 'da4ad78aa906b0bb',
              parentUid: 'd675240ac9f937ba435da0c635f8baa0',
              status: 'failed',
              time: {
                start: 1580601243413,
                stop: 1580601303333,
                duration: 59920
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd675240ac9f937ba435da0c635f8baa0'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50078ms',
          children: [
            {
              name:
                'Administrator can edit an existing all-day holiday to make it non-all-day',
              uid: 'b79f27fa057cdd75',
              parentUid: '8e236d486825af1db9fe9728181bda4d',
              status: 'failed',
              time: {
                start: 1580601303340,
                stop: 1580601363427,
                duration: 60087
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '8e236d486825af1db9fe9728181bda4d'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50035ms',
          children: [
            {
              name:
                'Administrator can view all existing holidays: Holidays are ordered by "Date" in ascending order',
              uid: '70d5224da315d29e',
              parentUid: '3c7f59430283589643b5502c40e395cd',
              status: 'failed',
              time: {
                start: 1580601363434,
                stop: 1580601423785,
                duration: 60351
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can define working days',
              uid: '4f03f7000718103b',
              parentUid: '3c7f59430283589643b5502c40e395cd',
              status: 'failed',
              time: {
                start: 1580605741489,
                stop: 1580605799683,
                duration: 58194
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3c7f59430283589643b5502c40e395cd'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name: 'Anonymous user should be redirected to the Login page.',
              uid: '884f164fa4d63308',
              parentUid: '3021c2c06174c3ee4add7a1197e1228d',
              status: 'failed',
              time: {
                start: 1580601423787,
                stop: 1580601477161,
                duration: 53374
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3021c2c06174c3ee4add7a1197e1228d'
        },
        {
          name:
            'No element found using locator: by.cssContainingText("div", "Create New Project Group")',
          children: [
            {
              name:
                'Administrator cannot add a project that belongs to a project group to the same project group',
              uid: 'f8eab9385fd0c6f8',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601477165,
                stop: 1580601535968,
                duration: 58803
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot add a deleted project to a project group',
              uid: 'e88f3f4c1bdd7de2',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601535971,
                stop: 1580601593386,
                duration: 57415
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can add a project to a project group',
              uid: '2573eb9ef7035e0d',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601593391,
                stop: 1580601651971,
                duration: 58580
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can create a project group',
              uid: '21bac35d05354a75',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601651982,
                stop: 1580601709985,
                duration: 58003
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can delete an existing project group and the deletion does not affect the projects that belonged to the project group',
              uid: '4a46ac5623a1c9af',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601709993,
                stop: 1580601769330,
                duration: 59337
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can delete an existing project group',
              uid: '92bf1af06a2c87d6',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601769350,
                stop: 1580601827704,
                duration: 58354
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit an existing project group',
              uid: '5f31641676d69f70',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601827714,
                stop: 1580601885680,
                duration: 57966
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can remove a project that belongs to a project group from the project group',
              uid: '1952ab6c06633b7a',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601885684,
                stop: 1580601942982,
                duration: 57298
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view all existing project groups',
              uid: 'ad37ac2e6dcc5b88',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580601942988,
                stop: 1580602001412,
                duration: 58424
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all cases using an axis Project Group',
              uid: 'c9bb2536c0b55801',
              parentUid: '5383c324b084d7700683150f6366a836',
              status: 'failed',
              time: {
                start: 1580607178403,
                stop: 1580607236202,
                duration: 57799
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '5383c324b084d7700683150f6366a836'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Create New Project")]|//h2[contains(text(),"Create New Project")])Element should be visible\nWait timed out after 50019ms',
          children: [
            {
              name:
                'Administrator can create a new project: The "Initial Permissions" property is set to the "Only Site Admins can manage cases" value',
              uid: 'dc9bc9e35dc00d61',
              parentUid: '684ff6c717c61c1066f848bda7f3f605',
              status: 'failed',
              time: {
                start: 1580602001420,
                stop: 1580602060748,
                duration: 59328
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can create a new project: "Project Name"',
              uid: '41e118ea64b8223b',
              parentUid: '684ff6c717c61c1066f848bda7f3f605',
              status: 'failed',
              time: {
                start: 1580602443495,
                stop: 1580602502912,
                duration: 59417
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '684ff6c717c61c1066f848bda7f3f605'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Create New Project")]|//h2[contains(text(),"Create New Project")])Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'Administrator can create a new project: The "Initial Permissions" property is set to the "All Normal Users can manage cases" value',
              uid: '95511eeedf6bff47',
              parentUid: '8845cc76aa88d4edddffd31b8c701f04',
              status: 'failed',
              time: {
                start: 1580602060779,
                stop: 1580602120726,
                duration: 59947
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '8845cc76aa88d4edddffd31b8c701f04'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Create New Project")]|//h2[contains(text(),"Create New Project")])Element should be visible\nWait timed out after 50027ms',
          children: [
            {
              name: 'Administrator can create a new project: "Primary Contact"',
              uid: '6ef0d963f092bffd',
              parentUid: 'eda4ec9d72f20fdd406435e9177c3316',
              status: 'failed',
              time: {
                start: 1580602120749,
                stop: 1580602181908,
                duration: 61159
              },
              flaky: false,
              parameters: ['Administrator']
            },
            {
              name: 'Administrator can create a new project: "Primary Contact"',
              uid: 'e695a3b9d6dcdc76',
              parentUid: 'eda4ec9d72f20fdd406435e9177c3316',
              status: 'failed',
              time: {
                start: 1580602181915,
                stop: 1580602241605,
                duration: 59690
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: 'eda4ec9d72f20fdd406435e9177c3316'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Create New Project")]|//h2[contains(text(),"Create New Project")])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name: 'Administrator can create a new project: "Primary Contact"',
              uid: '46079880f9e89900',
              parentUid: 'bfd545d18008623706a0d96384547f43',
              status: 'failed',
              time: {
                start: 1580602241611,
                stop: 1580602305594,
                duration: 63983
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: 'bfd545d18008623706a0d96384547f43'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Create New Project")]|//h2[contains(text(),"Create New Project")])Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name: 'Administrator can create a new project: "Workflow"',
              uid: '9dc5953ee1c51f3b',
              parentUid: '290e481265b1ca6d8acab7ea7750cdf9',
              status: 'failed',
              time: {
                start: 1580602305607,
                stop: 1580602375477,
                duration: 69870
              },
              flaky: false,
              parameters: ['Default Workflow']
            },
            {
              name: 'Administrator can create a new project: "Workflow"',
              uid: '67059925767505bd',
              parentUid: '290e481265b1ca6d8acab7ea7750cdf9',
              status: 'failed',
              time: {
                start: 1580602375485,
                stop: 1580602443481,
                duration: 67996
              },
              flaky: false,
              parameters: ['5k Rewrite']
            }
          ],
          uid: '290e481265b1ca6d8acab7ea7750cdf9'
        },
        {
          name:
            'by.cssContainingText("span", "Inbox")Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name: 'System provides the default projects',
              uid: '985bb315c7b6da2c',
              parentUid: '7f99774319fc5429e092a4290aad8cdd',
              status: 'failed',
              time: {
                start: 1580602502917,
                stop: 1580602562083,
                duration: 59166
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '7f99774319fc5429e092a4290aad8cdd'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[normalize-space(text())="Create New Workflow"])',
          children: [
            {
              name:
                'Administrator can delete an existing project that is not marked as deleted',
              uid: '74b8bd9273098e78',
              parentUid: '542ecf71160f0c912f4220aefdb764cf',
              status: 'failed',
              time: {
                start: 1580602562094,
                stop: 1580602629578,
                duration: 67484
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can undelete an existing project that is marked as deleted',
              uid: 'aac19d3345737ac7',
              parentUid: '542ecf71160f0c912f4220aefdb764cf',
              status: 'failed',
              time: {
                start: 1580602629587,
                stop: 1580602695589,
                duration: 66002
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can view all existing workflows, including the ones marked as deleted',
              uid: '7c3c491d9fe603af',
              parentUid: '542ecf71160f0c912f4220aefdb764cf',
              status: 'failed',
              time: {
                start: 1580625267131,
                stop: 1580625333602,
                duration: 66471
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '542ecf71160f0c912f4220aefdb764cf'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name:
                'Once created cases are assigned to the primary contact of the project area',
              uid: '49853fdd24993f75',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580602695596,
                stop: 1580602755637,
                duration: 60041
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit a project area for a project',
              uid: 'edadcf36242ad5c1',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580603064483,
                stop: 1580603125856,
                duration: 61373
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'All projects milestones are always available',
              uid: 'be10dea0f50c1d75',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580603564929,
                stop: 1580603624322,
                duration: 59393
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can undelete a deleted milestone for this project',
              uid: '9faf2fb641405025',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580604826393,
                stop: 1580604885885,
                duration: 59492
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can undelete a deleted milestone for all projects',
              uid: 'b5239b07cc43b348',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580604885895,
                stop: 1580604945185,
                duration: 59290
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing project: "Project Name"',
              uid: 'd93f3457159d3e83',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580605326293,
                stop: 1580605386279,
                duration: 59986
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all cases using an axis id for an exact match only',
              uid: 'ebff82cd953f1421',
              parentUid: 'ab5850976e8f86d2a6538c0b4662568e',
              status: 'failed',
              time: {
                start: 1580606490685,
                stop: 1580606553095,
                duration: 62410
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ab5850976e8f86d2a6538c0b4662568e'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50009ms',
          children: [
            {
              name: 'System provides the default project areas: New project',
              uid: 'c1640ec4cf617566',
              parentUid: 'ae406a6a69117f4a9bc50f3bed63c209',
              status: 'failed',
              time: {
                start: 1580602816920,
                stop: 1580602878553,
                duration: 61633
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ae406a6a69117f4a9bc50f3bed63c209'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(text())="Onboarding Project"]/ancestor::td/following-sibling::td//div[contains(@class,"edit-button")])',
          children: [
            {
              name:
                'System provides the default project areas: Default projects: The "Onboarding Project" project',
              uid: 'c672d93ca2251179',
              parentUid: 'c4bdea5a04fdc7c27452d89edb154a1d',
              status: 'failed',
              time: {
                start: 1580602878567,
                stop: 1580602938452,
                duration: 59885
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'System provides the default all-projects milestones: Default projects',
              uid: 'cdfd0063ec1add4c',
              parentUid: 'c4bdea5a04fdc7c27452d89edb154a1d',
              status: 'failed',
              time: {
                start: 1580603871893,
                stop: 1580603931275,
                duration: 59382
              },
              flaky: false,
              parameters: ['Onboarding Project']
            },
            {
              name:
                'System provides the default this-project milestones: Default projects: The "Onboarding Project" project',
              uid: '412a0b570cf263d0',
              parentUid: 'c4bdea5a04fdc7c27452d89edb154a1d',
              status: 'failed',
              time: {
                start: 1580603989378,
                stop: 1580604047086,
                duration: 57708
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'c4bdea5a04fdc7c27452d89edb154a1d'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(text())="Inbox"]/ancestor::td/following-sibling::td//div[contains(@class,"edit-button")])',
          children: [
            {
              name:
                'System provides the default project areas: Default projects: The "Inbox" project',
              uid: '535e7a8817b07b02',
              parentUid: 'aa4c44eb419ce3f1b7135a4482be5152',
              status: 'failed',
              time: {
                start: 1580602938478,
                stop: 1580602998485,
                duration: 60007
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'System provides the default all-projects milestones: Default projects',
              uid: 'd111e7374a2d0b91',
              parentUid: 'aa4c44eb419ce3f1b7135a4482be5152',
              status: 'failed',
              time: {
                start: 1580603931283,
                stop: 1580603989369,
                duration: 58086
              },
              flaky: false,
              parameters: ['Inbox']
            },
            {
              name:
                'System does not provide the default this-project milestones: Default projects: The "Inbox" project',
              uid: '150feff2ea08a669',
              parentUid: 'aa4c44eb419ce3f1b7135a4482be5152',
              status: 'failed',
              time: {
                start: 1580604047097,
                stop: 1580604105976,
                duration: 58879
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search cases using multiple "OrderBy" axis',
              uid: 'a08aef6d12b216de',
              parentUid: 'aa4c44eb419ce3f1b7135a4482be5152',
              status: 'failed',
              time: {
                start: 1580607000177,
                stop: 1580607058091,
                duration: 57914
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'aa4c44eb419ce3f1b7135a4482be5152'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50016ms',
          children: [
            {
              name: 'Administrator can delete a project area from a project',
              uid: '11c7bcdb4d724509',
              parentUid: '972525ba414b95b19833d38dd174a12e',
              status: 'failed',
              time: {
                start: 1580602998563,
                stop: 1580603064435,
                duration: 65872
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '972525ba414b95b19833d38dd174a12e'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name:
                'Inbox project areas have links to the "Prediction Statistics" page',
              uid: 'd410c1f6b640c8d9',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580603251092,
                stop: 1580603314499,
                duration: 63407
              },
              flaky: false,
              parameters: ['Undecided']
            },
            {
              name:
                'Administrator cannot edit a deleted milestone for all projects',
              uid: 'a24cb3a9b7fcf2b9',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580603443055,
                stop: 1580603504184,
                duration: 61129
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit a milestone for this project',
              uid: '9d37a8b0e67527cb',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580604707491,
                stop: 1580604767182,
                duration: 59691
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing project: "Primary Contact"',
              uid: '180e377d05f0d0c6',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580605005007,
                stop: 1580605066064,
                duration: 61057
              },
              flaky: false,
              parameters: ['Administrator']
            },
            {
              name: 'Administrator can edit an existing project: "Workflow"',
              uid: '5c4aebf0d04a9d5e',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580605187155,
                stop: 1580605258230,
                duration: 71075
              },
              flaky: false,
              parameters: ['Default Workflow']
            },
            {
              name:
                'Administrator can auto subscribe to a project area by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'd99b2cc93ca04ea5',
              parentUid: '565afe94cb0fa514da477bfe13503117',
              status: 'failed',
              time: {
                start: 1580611012943,
                stop: 1580611078358,
                duration: 65415
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '565afe94cb0fa514da477bfe13503117'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name: 'Administrator can view all project areas of a project',
              uid: 'a14b3ed64952de5d',
              parentUid: '46039ece6e26da717da1b182a0e72754',
              status: 'failed',
              time: {
                start: 1580603314507,
                stop: 1580603377325,
                duration: 62818
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing project: "Primary Contact"',
              uid: '4806883a8ad9a5ea',
              parentUid: '46039ece6e26da717da1b182a0e72754',
              status: 'failed',
              time: {
                start: 1580605066073,
                stop: 1580605125774,
                duration: 59701
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '46039ece6e26da717da1b182a0e72754'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50014ms',
          children: [
            {
              name:
                'Administrator cannot edit a deleted milestone for this project',
              uid: '7b9d5e99ade0ac0d',
              parentUid: 'a8f002c08c080971576793fbcdbd5a93',
              status: 'failed',
              time: {
                start: 1580603377336,
                stop: 1580603443041,
                duration: 65705
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'a8f002c08c080971576793fbcdbd5a93'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50024ms',
          children: [
            {
              name: 'Administrator can create a milestone for all projects',
              uid: 'a34985b8d0f762f7',
              parentUid: '357c77709d9e75791df79f8b376a6321',
              status: 'failed',
              time: {
                start: 1580603624367,
                stop: 1580603684114,
                duration: 59747
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '357c77709d9e75791df79f8b376a6321'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name: 'Administrator can create a milestone for a project',
              uid: 'c73275331aca2725',
              parentUid: '66ddf2232bdd74151b02663c68743f35',
              status: 'failed',
              time: {
                start: 1580603684121,
                stop: 1580603745275,
                duration: 61154
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'System provides the default all-projects milestones: New project',
              uid: '4229a5ba05aed0f9',
              parentUid: '66ddf2232bdd74151b02663c68743f35',
              status: 'failed',
              time: {
                start: 1580603808011,
                stop: 1580603871888,
                duration: 63877
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all cases using an axis Project',
              uid: '96ca24bee908360f',
              parentUid: '66ddf2232bdd74151b02663c68743f35',
              status: 'failed',
              time: {
                start: 1580607236206,
                stop: 1580607295589,
                duration: 59383
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to a project area multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'f3d719b4e8abf77',
              parentUid: '66ddf2232bdd74151b02663c68743f35',
              status: 'failed',
              time: {
                start: 1580610888851,
                stop: 1580610950539,
                duration: 61688
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '66ddf2232bdd74151b02663c68743f35'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50007ms',
          children: [
            {
              name: 'Cannot set start date higher than end date for milestones',
              uid: 'e7e34030a332d26b',
              parentUid: '298a9a6667d2046a176dea4822d38672',
              status: 'failed',
              time: {
                start: 1580603745284,
                stop: 1580603807995,
                duration: 62711
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can auto unsubscribe from a project area',
              uid: '980d3f5949c25d3',
              parentUid: '298a9a6667d2046a176dea4822d38672',
              status: 'failed',
              time: {
                start: 1580611664957,
                stop: 1580611726790,
                duration: 61833
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '298a9a6667d2046a176dea4822d38672'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50011ms',
          children: [
            {
              name:
                'Administrator cannot delete an assignable milestone for the this project',
              uid: '8b0888fc5a07f679',
              parentUid: '54e02cfcd823dfaa7185ae1f303f3694',
              status: 'failed',
              time: {
                start: 1580604165812,
                stop: 1580604225412,
                duration: 59600
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '54e02cfcd823dfaa7185ae1f303f3694'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name: 'Administrator can delete a milestone for the all projects',
              uid: '1d3f1de741298243',
              parentUid: '47202febc9e3931bddd457621ad9d1f3',
              status: 'failed',
              time: {
                start: 1580604225420,
                stop: 1580604285288,
                duration: 59868
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can make a milestone depend on other milestones for this project',
              uid: 'c8998a4cca8314b1',
              parentUid: '47202febc9e3931bddd457621ad9d1f3',
              status: 'failed',
              time: {
                start: 1580604285299,
                stop: 1580604344893,
                duration: 59594
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '47202febc9e3931bddd457621ad9d1f3'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'Administrator can edit milestone dependency for all projects',
              uid: '54c92cea475b0777',
              parentUid: '7391e13b2dc134c922d6ec85db90e599',
              status: 'failed',
              time: {
                start: 1580604587215,
                stop: 1580604647179,
                duration: 59964
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can view milestones of a project',
              uid: '7fe824cc6897eb59',
              parentUid: '7391e13b2dc134c922d6ec85db90e599',
              status: 'failed',
              time: {
                start: 1580604945193,
                stop: 1580605005001,
                duration: 59808
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '7391e13b2dc134c922d6ec85db90e599'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50033ms',
          children: [
            {
              name: 'User can define when does the lunch start',
              uid: '5b10d0ca97a0ace',
              parentUid: 'd5916e4176ac1318419493ff585ce68f',
              status: 'failed',
              time: {
                start: 1580605446387,
                stop: 1580605505291,
                duration: 58904
              },
              flaky: false,
              parameters: ['3 hours', '12:00 AM']
            }
          ],
          uid: 'd5916e4176ac1318419493ff585ce68f'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50024ms',
          children: [
            {
              name: 'User can define when does the lunch start',
              uid: 'c10a7c20945175d',
              parentUid: '723701a51e0ccfc9bf643663e5cf741e',
              status: 'failed',
              time: {
                start: 1580605505299,
                stop: 1580605564792,
                duration: 59493
              },
              flaky: false,
              parameters: ['1 hour', '11:30 PM']
            }
          ],
          uid: '723701a51e0ccfc9bf643663e5cf741e'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50001ms',
          children: [
            {
              name: 'User can define when does the lunch start',
              uid: '595e7a90cb5c1fd5',
              parentUid: 'bccdd89bc99a07beb0cc62d8f67c7ddf',
              status: 'failed',
              time: {
                start: 1580605564800,
                stop: 1580605623980,
                duration: 59180
              },
              flaky: false,
              parameters: ['2 hours 45 m', '9:00 PM']
            }
          ],
          uid: 'bccdd89bc99a07beb0cc62d8f67c7ddf'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50038ms',
          children: [
            {
              name: 'User can select among values for lunch hours',
              uid: '696e862f6f7c020f',
              parentUid: 'ca80dc095c7e31d89321a9ef331cd3c8',
              status: 'failed',
              time: {
                start: 1580605623984,
                stop: 1580605683209,
                duration: 59225
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ca80dc095c7e31d89321a9ef331cd3c8'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50004ms',
          children: [
            {
              name: 'User can define working hours',
              uid: '3ce2fc0da0616c1',
              parentUid: '637f56c7a9b4df5164c7563989d1c4b6',
              status: 'failed',
              time: {
                start: 1580605799689,
                stop: 1580605857984,
                duration: 58295
              },
              flaky: false,
              parameters: ['8:00 PM', '9:00 AM']
            }
          ],
          uid: '637f56c7a9b4df5164c7563989d1c4b6'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50019ms',
          children: [
            {
              name: 'User can define working hours',
              uid: '94894859a38b5f7',
              parentUid: '0e4dddc024d5cf26d9e72234aa3ea16d',
              status: 'failed',
              time: {
                start: 1580605857988,
                stop: 1580605916694,
                duration: 58706
              },
              flaky: false,
              parameters: ['12:30 AM', '12:00 AM']
            }
          ],
          uid: '0e4dddc024d5cf26d9e72234aa3ea16d'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50021ms',
          children: [
            {
              name: 'User can define working hours',
              uid: 'c630ba3a626ab254',
              parentUid: '8486be17a7ba8ce55be2dbb59df57142',
              status: 'failed',
              time: {
                start: 1580605916703,
                stop: 1580605975806,
                duration: 59103
              },
              flaky: false,
              parameters: ['12:00 AM', '11:30 PM']
            }
          ],
          uid: '8486be17a7ba8ce55be2dbb59df57142'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50030ms',
          children: [
            {
              name: 'User can define working hours',
              uid: '483a5076ba61f627',
              parentUid: '161c7d334abc293dde14bbb1c06ebafe',
              status: 'failed',
              time: {
                start: 1580605975817,
                stop: 1580606034070,
                duration: 58253
              },
              flaky: false,
              parameters: ['6:00 PM', '9:00 PM']
            }
          ],
          uid: '161c7d334abc293dde14bbb1c06ebafe'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50000ms',
          children: [
            {
              name: 'User cannot define working hours to be the same time',
              uid: 'c4c01c7b30f6fd59',
              parentUid: '00bd2b8c7ea0d78d0016a0e85c2835be',
              status: 'failed',
              time: {
                start: 1580606034076,
                stop: 1580606091986,
                duration: 57910
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '00bd2b8c7ea0d78d0016a0e85c2835be'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50013ms',
          children: [
            {
              name:
                'Administrator user can search all cases having both the texts entered in search field separated by "AND"',
              uid: '7d2f9da738089db5',
              parentUid: '58a26e6eb6e1881ad4e21a35ef1c5998',
              status: 'failed',
              time: {
                start: 1580606091988,
                stop: 1580606161289,
                duration: 69301
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '58a26e6eb6e1881ad4e21a35ef1c5998'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-17")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'Administrator user can search the list of all resolved cases using the search criteria with AssignedTo And ResolvedBy axes in search value',
              uid: '3a3ddd0cddff7b67',
              parentUid: 'ba20a07bb7be16e616347bd5de17e33d',
              status: 'failed',
              time: {
                start: 1580606161293,
                stop: 1580606233383,
                duration: 72090
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ba20a07bb7be16e616347bd5de17e33d'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[normalize-space(text())="Inbox"]/parent::df-option)',
          children: [
            {
              name:
                'Administrator user can search the list of all cases using custom field as axis',
              uid: '5f096acfc186c7fa',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580606233387,
                stop: 1580606301276,
                duration: 67889
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all cases using the data from the custom fields',
              uid: '40e486f93540ebf4',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580606301289,
                stop: 1580606370907,
                duration: 69618
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of cases with the search criteria using negation for due date specified using the axis value "Due"',
              uid: '98eb758cb2524a2a',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580606370911,
                stop: 1580606431381,
                duration: 60470
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all cases using the due date specified using the "Due" axis',
              uid: '506e461f47bdb400',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580606431386,
                stop: 1580606490681,
                duration: 59295
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search cases using negative value for "OrderBy" axis',
              uid: '6c92ce7481994d7c',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580607058095,
                stop: 1580607118018,
                duration: 59923
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator user can search cases using "OrderBy" axis',
              uid: 'cd4151d4a68e8435',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580607118022,
                stop: 1580607178400,
                duration: 60378
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search all cases using the axis value "Title" axis',
              uid: '5a011cff999f4a2c',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580607752002,
                stop: 1580607810564,
                duration: 58562
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all inquiry cases using custom field as axis',
              uid: '5bf55b4fb349e5c3',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580607871172,
                stop: 1580607942268,
                duration: 71096
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search the list of all inquiry cases using the data from the custom fields',
              uid: 'cf464074eb2e53bd',
              parentUid: '40a0bc931ad42f6bcd9cbac161aced5a',
              status: 'failed',
              time: {
                start: 1580607942276,
                stop: 1580608011911,
                duration: 69635
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '40a0bc931ad42f6bcd9cbac161aced5a'
        },
        {
          name:
            'By(css selector, df-modal [formcontrolname="name"])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name:
                'Administrator user can search the list of all cases with the specified milestone completion date using the "MilestoneDate" axis',
              uid: '9b47e7eb53dc8a92',
              parentUid: 'be9b39630f0a2f46273f22cbc2b7501c',
              status: 'failed',
              time: {
                start: 1580606553099,
                stop: 1580606614817,
                duration: 61718
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'be9b39630f0a2f46273f22cbc2b7501c'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Administrator user can search the list of cases with the search criteria has negation for a wild card axis value',
              uid: 'eab5b9823736d118',
              parentUid: 'd707a0552b01dad9abc9f489a9b69ffd',
              status: 'failed',
              time: {
                start: 1580606614822,
                stop: 1580606680765,
                duration: 65943
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd707a0552b01dad9abc9f489a9b69ffd'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50004ms',
          children: [
            {
              name:
                'Administrator user can search the list of cases with the search criteria has negation for a specific axis value',
              uid: '629e1bb7ac8414d6',
              parentUid: '584998b16ea965e9429dd78f44b81c25',
              status: 'failed',
              time: {
                start: 1580606680776,
                stop: 1580606747673,
                duration: 66897
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can search a closed case using the numbers the case contains',
              uid: 'a000a1ada45104fe',
              parentUid: '584998b16ea965e9429dd78f44b81c25',
              status: 'failed',
              time: {
                start: 1580606870591,
                stop: 1580606931598,
                duration: 61007
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '584998b16ea965e9429dd78f44b81c25'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name:
                'Administrator user can search an active case using the numbers the case contains',
              uid: 'b3266bb8d0ebfca4',
              parentUid: '4942a5ab91465a234791efcd02d22c5f',
              status: 'failed',
              time: {
                start: 1580606747678,
                stop: 1580606809578,
                duration: 61900
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '4942a5ab91465a234791efcd02d22c5f'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'Administrator user can search a resolved case using the numbers the case contains',
              uid: '57523a4b2479e764',
              parentUid: '657c0bc4423d9d037e1fe228c0de26cc',
              status: 'failed',
              time: {
                start: 1580606809581,
                stop: 1580606870587,
                duration: 61006
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '657c0bc4423d9d037e1fe228c0de26cc'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-1 Active")Element should be visible\nWait timed out after 50007ms',
          children: [
            {
              name:
                'Administrator user can search all cases having either of the two texts entered in search field separated by "OR"',
              uid: '97b4227ddbb5afd7',
              parentUid: '0df403c8f10643c0e7b57afd109cf9df',
              status: 'failed',
              time: {
                start: 1580606931603,
                stop: 1580607000173,
                duration: 68570
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0df403c8f10643c0e7b57afd109cf9df'
        },
        {
          name:
            'by.cssContainingText("h1", "Case-17")Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'Administrator user can search the list of all cases using the axis Tag',
              uid: '95f6cdb93265199c',
              parentUid: '0d22410bf9963ea4d14354129f323ffb',
              status: 'failed',
              time: {
                start: 1580607295593,
                stop: 1580607369548,
                duration: 73955
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0d22410bf9963ea4d14354129f323ffb'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name:
                'Administrator user can search a active case using the correspondent of the case',
              uid: '90e4fa071f65aae',
              parentUid: '612e8b61195cf221c27361dab9704698',
              status: 'failed',
              time: {
                start: 1580607369556,
                stop: 1580607432842,
                duration: 63286
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '612e8b61195cf221c27361dab9704698'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'Administrator user can search a closed case using the correspondent of the case',
              uid: '86532ecf28297180',
              parentUid: '798340b4854ac2b0ea6047ffd6e1675d',
              status: 'failed',
              time: {
                start: 1580607432848,
                stop: 1580607498045,
                duration: 65197
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '798340b4854ac2b0ea6047ffd6e1675d'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50011ms',
          children: [
            {
              name:
                'Administrator user can search a resolved case using the correspondent of the case',
              uid: '9dfd6e12f2822a6f',
              parentUid: '589905a7652c26e93d19252ab579a0ad',
              status: 'failed',
              time: {
                start: 1580607498049,
                stop: 1580607565783,
                duration: 67734
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '589905a7652c26e93d19252ab579a0ad'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name:
                'Administrator user can search a active case using the title of the case',
              uid: '42543014293f5c7f',
              parentUid: 'b01957cec4fa7f60a49e66f67c0fde4b',
              status: 'failed',
              time: {
                start: 1580607565793,
                stop: 1580607629078,
                duration: 63285
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b01957cec4fa7f60a49e66f67c0fde4b'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'Administrator user can search a closed case using the title of the case',
              uid: '57ca0acc392ea91',
              parentUid: 'f541e962773b2c53b278cb346e554071',
              status: 'failed',
              time: {
                start: 1580607629084,
                stop: 1580607691604,
                duration: 62520
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'f541e962773b2c53b278cb346e554071'
        },
        {
          name:
            'by.cssContainingText("h1", "This is a case")Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Administrator user can search a resolved case using the title of the case',
              uid: '49984867d08b0ed6',
              parentUid: '3d717f7c69c71f71e3dd72cf982f3017',
              status: 'failed',
              time: {
                start: 1580607691616,
                stop: 1580607751998,
                duration: 60382
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3d717f7c69c71f71e3dd72cf982f3017'
        },
        {
          name:
            'by.cssContainingText("h1", "This is an Inquiry")Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name:
                'Administrator user can search an inquiry case using the attachement attached to the case',
              uid: 'fab540ec9b94de27',
              parentUid: 'f02b13270042ddb8b41799242b25e6b8',
              status: 'failed',
              time: {
                start: 1580607810568,
                stop: 1580607871128,
                duration: 60560
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'f02b13270042ddb8b41799242b25e6b8'
        },
        {
          name:
            'No element found using locator: By(xpath, //button[@class="dropdown-item"][normalize-space(text())="Log In"])',
          children: [
            {
              name: 'User can log in with an email and password',
              uid: 'e8c70767c9cfe2cd',
              parentUid: '0408bbbd7a3ef681a3d65501e1e4045a',
              status: 'failed',
              time: {
                start: 1580608020806,
                stop: 1580608074576,
                duration: 53770
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0408bbbd7a3ef681a3d65501e1e4045a'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50014ms',
          children: [
            {
              name: 'User can sign out',
              uid: '3cd8f24940d243dd',
              parentUid: '9544de3cd74df6621a961fbd9b1305d2',
              status: 'failed',
              time: {
                start: 1580608074580,
                stop: 1580608132475,
                duration: 57895
              },
              flaky: false,
              parameters: ['Normal User']
            }
          ],
          uid: '9544de3cd74df6621a961fbd9b1305d2'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50009ms',
          children: [
            {
              name: 'User can sign out',
              uid: 'de2d463720cd1511',
              parentUid: '4ed478ae8371ae5a9ce193fb7706e9a7',
              status: 'failed',
              time: {
                start: 1580608132478,
                stop: 1580608190273,
                duration: 57795
              },
              flaky: false,
              parameters: ['Administrator']
            }
          ],
          uid: '4ed478ae8371ae5a9ce193fb7706e9a7'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Login")]|//h2[contains(text(),"Login")])Element should be visible\nWait timed out after 50010ms',
          children: [
            {
              name:
                'Signed out user is asked to login again, when opening "Index" page',
              uid: '6c1a51ee93a4ea62',
              parentUid: 'a10e5798b6d4c40d2e26b619534a2473',
              status: 'failed',
              time: {
                start: 1580608190275,
                stop: 1580608247639,
                duration: 57364
              },
              flaky: false,
              parameters: ['Normal User']
            }
          ],
          uid: 'a10e5798b6d4c40d2e26b619534a2473'
        },
        {
          name:
            'By(xpath, //span[@class="df-grid-table-body__cell-data"][normalize-space(text())="Active"])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name:
                'System provides the default statuses for default categories',
              uid: 'b9c002ccb5f8cd01',
              parentUid: '3f55aa4f53268e3bb84a584ada8e81e8',
              status: 'failed',
              time: {
                start: 1580608667293,
                stop: 1580608728115,
                duration: 60822
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3f55aa4f53268e3bb84a584ada8e81e8'
        },
        {
          name:
            'Error while waiting for Protractor to sync with the page: "both angularJS testability and angular testability are undefined.  This could be either because this is a non-angular page or because your test involves client-side navigation, which can interfere with Protractor\'s bootstrapping.  See http://git.io/v4gXM for details"',
          children: [
            {
              name:
                'Administrator can edit an existing active status: Display order: Move Up',
              uid: 'df7e22d2f135b5b5',
              parentUid: 'b025751ce7e5610a90d7d0c82ac94a97',
              status: 'failed',
              time: {
                start: 1580609445893,
                stop: 1580609447111,
                duration: 1218
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing active status: Display order: Move Down',
              uid: 'c838cf1c8ea94c9f',
              parentUid: 'b025751ce7e5610a90d7d0c82ac94a97',
              status: 'failed',
              time: {
                start: 1580609447116,
                stop: 1580609448118,
                duration: 1002
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing resolved status: Display order: Move Up',
              uid: '550072af8d697b5f',
              parentUid: 'b025751ce7e5610a90d7d0c82ac94a97',
              status: 'failed',
              time: {
                start: 1580609448129,
                stop: 1580609449173,
                duration: 1044
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing resolved status: Display order: Move Down',
              uid: '5d822c2081e46fcd',
              parentUid: 'b025751ce7e5610a90d7d0c82ac94a97',
              status: 'failed',
              time: {
                start: 1580609449182,
                stop: 1580609450183,
                duration: 1001
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b025751ce7e5610a90d7d0c82ac94a97'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"ALL DISCUSSION GROUPS")]/parent::df-option)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to all discussion groups multiple times by clicking on the "Add New Subscription" link',
              uid: 'cede3858cc46f41e',
              parentUid: 'd4f1c592ca80a757e1512d3152817c04',
              status: 'failed',
              time: {
                start: 1580609749939,
                stop: 1580609809899,
                duration: 59960
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to all discussion groups multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '45d7a7f7da96d32',
              parentUid: 'd4f1c592ca80a757e1512d3152817c04',
              status: 'failed',
              time: {
                start: 1580609809904,
                stop: 1580609869165,
                duration: 59261
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to all discussion groups by clicking on the "Add New Subscription" link',
              uid: '584c8a0aece06362',
              parentUid: 'd4f1c592ca80a757e1512d3152817c04',
              status: 'failed',
              time: {
                start: 1580609869171,
                stop: 1580609928308,
                duration: 59137
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to all discussion groups by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '2238ff9f18d27b3f',
              parentUid: 'd4f1c592ca80a757e1512d3152817c04',
              status: 'failed',
              time: {
                start: 1580609928312,
                stop: 1580609987406,
                duration: 59094
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto unsubscribe from all discussion groups',
              uid: '4a52ed13535317e4',
              parentUid: 'd4f1c592ca80a757e1512d3152817c04',
              status: 'failed',
              time: {
                start: 1580611401930,
                stop: 1580611461199,
                duration: 59269
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd4f1c592ca80a757e1512d3152817c04'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"ALL PROJECTS")]/parent::df-option)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to all projects multiple times by clicking on the "Add New Subscription" link',
              uid: '63be3656952ca97c',
              parentUid: 'da351bbeb8ff9423c7165ac13d307f0a',
              status: 'failed',
              time: {
                start: 1580609995547,
                stop: 1580610054674,
                duration: 59127
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to all projects multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'a0548ac54f5f6512',
              parentUid: 'da351bbeb8ff9423c7165ac13d307f0a',
              status: 'failed',
              time: {
                start: 1580610054683,
                stop: 1580610113117,
                duration: 58434
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to all projects by clicking on the "Add New Subscription" link',
              uid: '4167172d57e166f1',
              parentUid: 'da351bbeb8ff9423c7165ac13d307f0a',
              status: 'failed',
              time: {
                start: 1580610113123,
                stop: 1580610171936,
                duration: 58813
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can unsubscribe from all projects',
              uid: 'a40f6c060bf2752',
              parentUid: 'da351bbeb8ff9423c7165ac13d307f0a',
              status: 'failed',
              time: {
                start: 1580611461210,
                stop: 1580611521879,
                duration: 60669
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'da351bbeb8ff9423c7165ac13d307f0a'
        },
        {
          name:
            "No element found using locator: By(css selector, df-select[name*='subscriptionItem'])",
          children: [
            {
              name:
                'Administrator can auto subscribe to all projects by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '4f55705988ed0a9e',
              parentUid: '2c96c3aafd3aa444c8ff70442b1e748c',
              status: 'failed',
              time: {
                start: 1580610171941,
                stop: 1580610229820,
                duration: 57879
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2c96c3aafd3aa444c8ff70442b1e748c'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"ALL WIKIS")]/parent::df-option)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to all wikis multiple times by clicking on the "Add New Subscription" link',
              uid: 'a6b1f270ad5a61b0',
              parentUid: '96aa51448ff0cb4553ecf146015f63a3',
              status: 'failed',
              time: {
                start: 1580610229827,
                stop: 1580610288837,
                duration: 59010
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to all wikis multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'a6b86234186e2534',
              parentUid: '96aa51448ff0cb4553ecf146015f63a3',
              status: 'failed',
              time: {
                start: 1580610288842,
                stop: 1580610347861,
                duration: 59019
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to all wikis by clicking on the "Add New Subscription" link',
              uid: '2c1793dd259a606',
              parentUid: '96aa51448ff0cb4553ecf146015f63a3',
              status: 'failed',
              time: {
                start: 1580610347869,
                stop: 1580610408206,
                duration: 60337
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can auto subscribe to all wikis by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '80cbb2d742e0e110',
              parentUid: '96aa51448ff0cb4553ecf146015f63a3',
              status: 'failed',
              time: {
                start: 1580610408217,
                stop: 1580610467641,
                duration: 59424
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can auto unsubscribe from all wikis',
              uid: '8427cbb2865eee68',
              parentUid: '96aa51448ff0cb4553ecf146015f63a3',
              status: 'failed',
              time: {
                start: 1580611521893,
                stop: 1580611581909,
                duration: 60016
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '96aa51448ff0cb4553ecf146015f63a3'
        },
        {
          name:
            'by.cssContainingText("span", "Subscribed to ANY ITEM I EDIT")Element should be visible\nWait timed out after 50009ms',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to any item they edit multiple times by clicking on the "Add New Subscription" link',
              uid: 'd0cbbff6bede16a',
              parentUid: '4e1b04da895dd573d502ae91f5488e38',
              status: 'failed',
              time: {
                start: 1580610537406,
                stop: 1580610602317,
                duration: 64911
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '4e1b04da895dd573d502ae91f5488e38'
        },
        {
          name:
            'by.cssContainingText("span", "Subscribed to ANY ITEM I EDIT")Element should be visible\nWait timed out after 50003ms',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to any item they edit multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '25e103b1f2a752e5',
              parentUid: '0a9fac2f7a45adbc35d1690d71f3a3b1',
              status: 'failed',
              time: {
                start: 1580610602322,
                stop: 1580610666496,
                duration: 64174
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0a9fac2f7a45adbc35d1690d71f3a3b1'
        },
        {
          name:
            'by.cssContainingText("span", "Subscribed to ANY ITEM I EDIT")Element should be visible\nWait timed out after 50004ms',
          children: [
            {
              name:
                'Administrator can auto subscribe to any item they edit by clicking on the "Add New Subscription" link',
              uid: 'c61dbf1d31a79c36',
              parentUid: '296348a79bc13565c4f08f60493e8554',
              status: 'failed',
              time: {
                start: 1580610666527,
                stop: 1580610732737,
                duration: 66210
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '296348a79bc13565c4f08f60493e8554'
        },
        {
          name:
            'by.cssContainingText("span", "Subscribed to ANY ITEM I EDIT")Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name:
                'Administrator can auto subscribe to any item they edit by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'e207b16449de583',
              parentUid: '0d326acb7f1b1bdd4ba677533cf7ca57',
              status: 'failed',
              time: {
                start: 1580610732750,
                stop: 1580610796931,
                duration: 64181
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0d326acb7f1b1bdd4ba677533cf7ca57'
        },
        {
          name:
            'invalid selector: Unable to locate an element with the xpath expression //div[contains(text(),"discuss group "Discussion Group-1"")]/parent::df-option because of the following error:\nSyntaxError: Failed to execute \'evaluate\' on \'Document\': The string \'//div[contains(text(),"discuss group "Discussion Group-1"")]/parent::df-option\' is not a valid XPath expression.\n  (Session info: headless chrome=79.0.3945.88)\n  (Driver info: chromedriver=79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform=Linux 4.14.128-112.105.amzn2.x86_64 x86_64)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to the same discussion group multiple times by clicking on the "Add New Subscription" link',
              uid: '169fa1e255b96e36',
              parentUid: 'bde4ab85b60a68d4cbec1332b270ebf5',
              status: 'failed',
              time: {
                start: 1580610796947,
                stop: 1580610806596,
                duration: 9649
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to the same discussion group multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '57ccdee2102e9cd3',
              parentUid: 'bde4ab85b60a68d4cbec1332b270ebf5',
              status: 'failed',
              time: {
                start: 1580610806604,
                stop: 1580610816480,
                duration: 9876
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'bde4ab85b60a68d4cbec1332b270ebf5'
        },
        {
          name:
            'by.cssContainingText("div", "Edit "")Element should be visible\nWait timed out after 50018ms',
          children: [
            {
              name:
                'Administrator can auto subscribe to a project area by clicking on the "Add New Subscription" link',
              uid: 'a27e7e4fd495bed1',
              parentUid: '6400d04c26dede7a9dc5e62dfa25c82d',
              status: 'failed',
              time: {
                start: 1580610950549,
                stop: 1580611012936,
                duration: 62387
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '6400d04c26dede7a9dc5e62dfa25c82d'
        },
        {
          name:
            'invalid selector: Unable to locate an element with the xpath expression //div[contains(text(),"project "Inbox"")]/parent::df-option because of the following error:\nSyntaxError: Failed to execute \'evaluate\' on \'Document\': The string \'//div[contains(text(),"project "Inbox"")]/parent::df-option\' is not a valid XPath expression.\n  (Session info: headless chrome=79.0.3945.88)\n  (Driver info: chromedriver=79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform=Linux 4.14.128-112.105.amzn2.x86_64 x86_64)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to a project multiple times by clicking on the "Add New Subscription" link',
              uid: '499681d04eff8e09',
              parentUid: '3581564f4eaaeecda0421ce44acf0c4d',
              status: 'failed',
              time: {
                start: 1580611091392,
                stop: 1580611104764,
                duration: 13372
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to a project multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '67b52847bcaf54b2',
              parentUid: '3581564f4eaaeecda0421ce44acf0c4d',
              status: 'failed',
              time: {
                start: 1580611104770,
                stop: 1580611119080,
                duration: 14310
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can auto unsubscribe from a project',
              uid: '445053cf30be2036',
              parentUid: '3581564f4eaaeecda0421ce44acf0c4d',
              status: 'failed',
              time: {
                start: 1580611726805,
                stop: 1580611737452,
                duration: 10647
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3581564f4eaaeecda0421ce44acf0c4d'
        },
        {
          name:
            'invalid selector: Unable to locate an element with the xpath expression //div[contains(text(),"wiki "Wiki-W"")]/parent::df-option because of the following error:\nSyntaxError: Failed to execute \'evaluate\' on \'Document\': The string \'//div[contains(text(),"wiki "Wiki-W"")]/parent::df-option\' is not a valid XPath expression.\n  (Session info: headless chrome=79.0.3945.88)\n  (Driver info: chromedriver=79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform=Linux 4.14.128-112.105.amzn2.x86_64 x86_64)',
          children: [
            {
              name:
                'Administrator cannot auto subscribe to the same wiki multiple times by clicking on the "Add New Subscription" link',
              uid: '68c927337d6bb0ef',
              parentUid: '582ad3342ce577ecfb07775dda4bb703',
              status: 'failed',
              time: {
                start: 1580611243252,
                stop: 1580611256534,
                duration: 13282
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator cannot auto subscribe to the same wiki multiple times by clicking on the "+" button left to the "Add New Subscription" link',
              uid: '71bce78f43771cab',
              parentUid: '582ad3342ce577ecfb07775dda4bb703',
              status: 'failed',
              time: {
                start: 1580611256557,
                stop: 1580611268985,
                duration: 12428
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can auto unsubscribe from a wiki',
              uid: '5c92d787f746c7e7',
              parentUid: '582ad3342ce577ecfb07775dda4bb703',
              status: 'failed',
              time: {
                start: 1580611737469,
                stop: 1580611748661,
                duration: 11192
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '582ad3342ce577ecfb07775dda4bb703'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'undefined')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50002ms",
          children: [
            {
              name:
                'Administrator can auto subscribe to a wiki by clicking on the "Add New Subscription" link',
              uid: 'b7c9ba451f49fe94',
              parentUid: 'd4be057cf6d5819c1c39b39eda1441db',
              status: 'failed',
              time: {
                start: 1580611268991,
                stop: 1580611335038,
                duration: 66047
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd4be057cf6d5819c1c39b39eda1441db'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'undefined')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50006ms",
          children: [
            {
              name:
                'Administrator can auto subscribe to a wiki by clicking on the "+" button left to the "Add New Subscription" link',
              uid: 'c9b8d876a4624b76',
              parentUid: '87a5fd40d5c63375e561d2cf63375576',
              status: 'failed',
              time: {
                start: 1580611335077,
                stop: 1580611401911,
                duration: 66834
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '87a5fd40d5c63375e561d2cf63375576'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(text())="Subscribed to ANY ITEM I EDIT"]/ancestor::td/following-sibling::td//button[@theme="danger"])',
          children: [
            {
              name:
                'Administrator can auto unsubscribe from any item they edit',
              uid: '9d573d325f574bb9',
              parentUid: '1ae2b4fca7b62010c71e21906d9889ce',
              status: 'failed',
              time: {
                start: 1580611599085,
                stop: 1580611664948,
                duration: 65863
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1ae2b4fca7b62010c71e21906d9889ce'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Edit Community User Group")]|//h2[contains(text(),"Edit Community User Group")])Element should be visible\nWait timed out after 50019ms',
          children: [
            {
              name:
                'Administrator can add community user to a community user group',
              uid: 'bbde17990a68e363',
              parentUid: 'ff3c7dbf1cd96a44156ca5ed908dfaf9',
              status: 'failed',
              time: {
                start: 1580611763233,
                stop: 1580611825634,
                duration: 62401
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ff3c7dbf1cd96a44156ca5ed908dfaf9'
        },
        {
          name:
            'By(xpath, //h1[normalize-space(text())="Create New User Group"]|//h4[normalize-space(text())="Create New User Group"]|//div[normalize-space(text())="Create New User Group"]|//df-alert//div[contains(@class,"df-alert__box__header")])Element should not be visible\nWait timed out after 50003ms',
          children: [
            {
              name: 'Administrator can create a normal user group',
              uid: 'fa949406d857e810',
              parentUid: 'feb32ed1807085af7600ec5976783a57',
              status: 'failed',
              time: {
                start: 1580611840012,
                stop: 1580611903697,
                duration: 63685
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'feb32ed1807085af7600ec5976783a57'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Add a Member")])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name: 'Administrator can edit community user groups',
              uid: '8fdd3ecd98cc1603',
              parentUid: '6ebf0b0066b56f46f9204235e9295dca',
              status: 'failed',
              time: {
                start: 1580611938368,
                stop: 1580612000680,
                duration: 62312
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '6ebf0b0066b56f46f9204235e9295dca'
        },
        {
          name:
            'No element found using locator: By(css selector, .page-footer button.success)',
          children: [
            {
              name: 'Administrator can edit a normal user group',
              uid: '4356f9f9cdfddc69',
              parentUid: '7654df77d49db2720314ab208c329954',
              status: 'failed',
              time: {
                start: 1580612000691,
                stop: 1580612064126,
                duration: 63435
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '7654df77d49db2720314ab208c329954'
        },
        {
          name: 'Attribute value for name must not be null',
          children: [
            {
              name:
                'Administrator can remove a community user from a community user group',
              uid: 'c52933ede7a415f',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580612064152,
                stop: 1580612076632,
                duration: 12480
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can activate an inactive user: Edit user',
              uid: 'b523146540148c43',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580612164505,
                stop: 1580612172420,
                duration: 7915
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can activate an inactive user: "Activate" link',
              uid: '9d0aa3900f8f23dd',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580612172430,
                stop: 1580612181386,
                duration: 8956
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can activate Fogbugz for a user',
              uid: '6a6a595b0895da35',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580614491384,
                stop: 1580614503588,
                duration: 12204
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can deactivate Fogbugz for a user',
              uid: 'c759adb56f8c7d81',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580614503641,
                stop: 1580614516115,
                duration: 12474
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can search users by name',
              uid: 'be2d14f978dcf158',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580614516138,
                stop: 1580614527591,
                duration: 11453
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can search users by email',
              uid: '6eb53c0c260a5719',
              parentUid: 'f58804d31021864f2e3338a4037dea3f',
              status: 'failed',
              time: {
                start: 1580614527601,
                stop: 1580614536969,
                duration: 9368
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'f58804d31021864f2e3338a4037dea3f'
        },
        {
          name:
            "No element found using locator: By(xpath, //tr[td[contains(., 'Normal User')]]//i[@title='Delete'])",
          children: [
            {
              name: 'Administrator can remove a user from a normal user group',
              uid: '5077f2d8f51d5539',
              parentUid: '2c70483f0ef8a7832fc4fdcdefc9a23c',
              status: 'failed',
              time: {
                start: 1580612076642,
                stop: 1580612141114,
                duration: 64472
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2c70483f0ef8a7832fc4fdcdefc9a23c'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(.)="Administrator"]/ancestor::tr//button[contains(@span,"Edit")])',
          children: [
            {
              name: 'Password strength is shown when changing passwords',
              uid: '5f2ecdcf9bb38453',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580612273867,
                stop: 1580612332920,
                duration: 59053
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Empty',
                '1'
              ]
            },
            {
              name: 'Password strength is shown when changing passwords',
              uid: 'b05687909f55d179',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580612332929,
                stop: 1580612392901,
                duration: 59972
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Red',
                '123'
              ]
            },
            {
              name: 'Password strength is shown when changing passwords',
              uid: '595bacbb155add9d',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580612392916,
                stop: 1580612453098,
                duration: 60182
              },
              flaky: false,
              parameters: ['Passwords do not match', 'Red', '123456']
            },
            {
              name: 'Password strength is shown when changing passwords',
              uid: '987c8015cbf10500',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580612453110,
                stop: 1580612512095,
                duration: 58985
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Yellow',
                '1q~'
              ]
            },
            {
              name: 'Password strength is shown when changing passwords',
              uid: '8feeb56aabdfafd7',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580612512107,
                stop: 1580612570824,
                duration: 58717
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Green',
                '1q~Qy'
              ]
            },
            {
              name: 'Administrator can change password of themselves',
              uid: 'b36ac7d65d92afe2',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580614308443,
                stop: 1580614368536,
                duration: 60093
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can edit name of themselves',
              uid: 'bb3591f9bb2951d8',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580614368546,
                stop: 1580614429100,
                duration: 60554
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can change email of themselves',
              uid: '1c9d505f49d6e084',
              parentUid: 'e27ad1b5afe4a260a7df602d27816e4b',
              status: 'failed',
              time: {
                start: 1580614429114,
                stop: 1580614491317,
                duration: 62203
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'e27ad1b5afe4a260a7df602d27816e4b'
        },
        {
          name:
            "1 validation error detected: Value at 'temporaryPassword' failed to satisfy constraint: Member must have length greater than or equal to 6",
          children: [
            {
              name: 'Administrator can change password of themselves',
              uid: '94db60a0b13bee26',
              parentUid: 'aac4ed59e7716bb75d5cbf1f02ac9100',
              status: 'failed',
              time: {
                start: 1580612570855,
                stop: 1580612578396,
                duration: 7541
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'aac4ed59e7716bb75d5cbf1f02ac9100'
        },
        {
          name: "Missing required key 'Username' in params",
          children: [
            {
              name: 'Administrator can edit name of other users',
              uid: 'ae4bc5a4698e2985',
              parentUid: '34dd1c859a101141dd557443dcb8229e',
              status: 'failed',
              time: {
                start: 1580612578426,
                stop: 1580612586874,
                duration: 8448
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrators can edit the names of other users in legacy options',
              uid: '8bbfe092dc4aad9b',
              parentUid: '34dd1c859a101141dd557443dcb8229e',
              status: 'failed',
              time: {
                start: 1580612647746,
                stop: 1580612656482,
                duration: 8736
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '34dd1c859a101141dd557443dcb8229e'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(.)="Lion King"]/ancestor::tr//button[contains(@span,"Edit")])',
          children: [
            {
              name: 'Administrator can change email of other users',
              uid: '8b284dbafd91c1e2',
              parentUid: '508ff4d37c9ed8a61093d8ca02ee59ef',
              status: 'failed',
              time: {
                start: 1580612586894,
                stop: 1580612647730,
                duration: 60836
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '508ff4d37c9ed8a61093d8ca02ee59ef'
        },
        {
          name:
            'No element found using locator: by.cssContainingText("a", "Legacy Settings")',
          children: [
            {
              name: 'Administrators can edit their names in legacy options',
              uid: 'bfd07be3115dd92b',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612656491,
                stop: 1580612717489,
                duration: 60998
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Language - Use Browser Format',
              uid: '42b4d396d3334439',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612717493,
                stop: 1580612776473,
                duration: 58980
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Language - <English (United States)>',
              uid: '2cc56bac6e42f81e',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612776484,
                stop: 1580612835946,
                duration: 59462
              },
              flaky: false,
              parameters: ['English (United States)']
            },
            {
              name: 'Language - <French (France)>',
              uid: '734065dc72ea7c31',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612835961,
                stop: 1580612896128,
                duration: 60167
              },
              flaky: false,
              parameters: ['French (France)']
            },
            {
              name: 'Language - <German (Germany)>',
              uid: 'e2a85634f1d82095',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612896138,
                stop: 1580612955990,
                duration: 59852
              },
              flaky: false,
              parameters: ['German (Germany)']
            },
            {
              name: 'Language - <Portuguese (Brazil)>',
              uid: '6cb1db62ea1ca72b',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580612956004,
                stop: 1580613017098,
                duration: 61094
              },
              flaky: false,
              parameters: ['Portuguese (Brazil)']
            },
            {
              name: 'Language - <Spanish (Spain)>',
              uid: 'cefe9ce5b0b0461c',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613017108,
                stop: 1580613075806,
                duration: 58698
              },
              flaky: false,
              parameters: ['Spanish (Spain)']
            },
            {
              name: 'User - Edit - Legacy - Change Password',
              uid: 'e92fdf4712ae8085',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613075817,
                stop: 1580613134773,
                duration: 58956
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Change Password Strength',
              uid: '98917e271cf1adab',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613134781,
                stop: 1580613192513,
                duration: 57732
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Empty',
                '1'
              ]
            },
            {
              name: 'User - Edit - Legacy - Change Password Strength',
              uid: 'db4eb35ef4ef0b81',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613192525,
                stop: 1580613250777,
                duration: 58252
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Red',
                '123'
              ]
            },
            {
              name: 'User - Edit - Legacy - Change Password Strength',
              uid: '88199909be40bbde',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613250785,
                stop: 1580613309293,
                duration: 58508
              },
              flaky: false,
              parameters: ['', 'Red', '123456']
            },
            {
              name: 'User - Edit - Legacy - Change Password Strength',
              uid: 'a3ff26ab727924a9',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613309301,
                stop: 1580613367221,
                duration: 57920
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Yellow',
                '1q~'
              ]
            },
            {
              name: 'User - Edit - Legacy - Change Password Strength',
              uid: 'f04294770617fb5e',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613367225,
                stop: 1580613425899,
                duration: 58674
              },
              flaky: false,
              parameters: [
                'Password must be at least 6 characters long',
                'Green',
                '1q~Qy'
              ]
            },
            {
              name:
                'Administrator can see primary contact\'s phone in the "Projects" page',
              uid: 'be04f37fa11e1478',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613425913,
                stop: 1580613483678,
                duration: 57765
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can see primary contact\'s phone in the "Edit Project" page',
              uid: 'd31dbcedf60f1611',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613483690,
                stop: 1580613542281,
                duration: 58591
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can use a default profile picture',
              uid: 'bea3851386fc802',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613542288,
                stop: 1580613600864,
                duration: 58576
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can use Gravatar',
              uid: 'b08810bce4a21929',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613600868,
                stop: 1580613661895,
                duration: 61027
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User can upload a profile picture with <jpg> image',
              uid: '264dcbe0f2c7a94e',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613661902,
                stop: 1580613721681,
                duration: 59779
              },
              flaky: false,
              parameters: ['jpg']
            },
            {
              name: 'User can upload a profile picture with <jpeg> image',
              uid: '627624def2879c1b',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613721693,
                stop: 1580613780796,
                duration: 59103
              },
              flaky: false,
              parameters: ['jpeg']
            },
            {
              name: 'User can upload a profile picture with <bmp> image',
              uid: '8c5509466be9684c',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613780809,
                stop: 1580613841579,
                duration: 60770
              },
              flaky: false,
              parameters: ['bmp']
            },
            {
              name: 'User can upload a profile picture with <gif> image',
              uid: 'e4249909016b9c60',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613841589,
                stop: 1580613903789,
                duration: 62200
              },
              flaky: false,
              parameters: ['gif']
            },
            {
              name: 'User can upload a profile picture with <png> image',
              uid: '3d25a24cc18fb1b6',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613903808,
                stop: 1580613969804,
                duration: 65996
              },
              flaky: false,
              parameters: ['png']
            },
            {
              name: 'User cannot upload a profile picture larger than 50 MB',
              uid: '1fee6241da1ffcc2',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580613969866,
                stop: 1580614032269,
                duration: 62403
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Time Zone - Available options',
              uid: '18a8685e5eb7cb10',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580614175149,
                stop: 1580614234822,
                duration: 59673
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Type - View Active',
              uid: 'd173a9dff3e4babc',
              parentUid: '0e24f40cf531d4d8f9220e7b84b41983',
              status: 'failed',
              time: {
                start: 1580614246648,
                stop: 1580614308428,
                duration: 61780
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0e24f40cf531d4d8f9220e7b84b41983'
        },
        {
          name:
            'Password did not conform with password policy: Password not long enough',
          children: [
            {
              name: 'User - Edit - Legacy - Status - Edit - Active',
              uid: '5e25aeb600d7c018',
              parentUid: '71cd370d92bab942d80956a1125ed090',
              status: 'failed',
              time: {
                start: 1580614032318,
                stop: 1580614042424,
                duration: 10106
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Status - Edit - Inactive',
              uid: '4cfb82750acb5eda',
              parentUid: '71cd370d92bab942d80956a1125ed090',
              status: 'failed',
              time: {
                start: 1580614042433,
                stop: 1580614051514,
                duration: 9081
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Type - Edit other users',
              uid: 'b3130db4888aa753',
              parentUid: '71cd370d92bab942d80956a1125ed090',
              status: 'failed',
              time: {
                start: 1580614234899,
                stop: 1580614246596,
                duration: 11697
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '71cd370d92bab942d80956a1125ed090'
        },
        {
          name:
            'element not interactable\n  (Session info: headless chrome=79.0.3945.88)\n  (Driver info: chromedriver=79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}),platform=Linux 4.14.128-112.105.amzn2.x86_64 x86_64)',
          children: [
            {
              name: 'User - Edit - Legacy - Status - View Active',
              uid: '10887d5151dbe5a0',
              parentUid: 'd7f6b0deaff46cce21dcc05489437a2b',
              status: 'failed',
              time: {
                start: 1580614051529,
                stop: 1580614113563,
                duration: 62034
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'User - Edit - Legacy - Status - View Inactive',
              uid: 'f31d59ec3ba1baa3',
              parentUid: 'd7f6b0deaff46cce21dcc05489437a2b',
              status: 'failed',
              time: {
                start: 1580614113588,
                stop: 1580614175145,
                duration: 61557
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd7f6b0deaff46cce21dcc05489437a2b'
        },
        {
          name:
            'By(xpath, //df-tab-content[contains(@class,"active")]//app-users-grid[@header="Administrators"]//span[normalize-space(text())="Inactive Administrator"]/following-sibling::a[normalize-space(text())="inactive-administrator@fogbugz.com"])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'View "Manage Users" page: "Inactive" tab: All inactive users are listed.',
              uid: '62ba78775d6b4dd4',
              parentUid: '4293b116e981bfca4fdd180b4da4af7f',
              status: 'failed',
              time: {
                start: 1580614556230,
                stop: 1580614638830,
                duration: 82600
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '4293b116e981bfca4fdd180b4da4af7f'
        },
        {
          name:
            'By(xpath, //h1[normalize-space(text())="New Vacation"]|//h4[normalize-space(text())="New Vacation"]|//div[normalize-space(text())="New Vacation"]|//df-alert//div[contains(@class,"df-alert__box__header")])Element should not be visible\nWait timed out after 50023ms',
          children: [
            {
              name: 'User can add an all-day vacation',
              uid: 'f0a7d7f8d6b484f2',
              parentUid: '57d7a481a2a69d794b996915feffedd9',
              status: 'failed',
              time: {
                start: 1580614695384,
                stop: 1580614773165,
                duration: 77781
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '57d7a481a2a69d794b996915feffedd9'
        },
        {
          name:
            'By(xpath, //h1[normalize-space(text())="New Vacation"]|//h4[normalize-space(text())="New Vacation"]|//div[normalize-space(text())="New Vacation"]|//df-alert//div[contains(@class,"df-alert__box__header")])Element should not be visible\nWait timed out after 50027ms',
          children: [
            {
              name: 'User can add an non-all-day vacation',
              uid: '21f66889e7847d84',
              parentUid: '7e948b86f3d52c6c29ce62f55059dcf6',
              status: 'failed',
              time: {
                start: 1580614773181,
                stop: 1580614839645,
                duration: 66464
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '7e948b86f3d52c6c29ce62f55059dcf6'
        },
        {
          name:
            "Field name - Date of Another Vacation : 03/01/2099 should contain 03/01/2099 12:00 AM: expected '03/01/2099' to include '03/01/2099 12:00 AM'",
          children: [
            {
              name: 'User can edit an existing non-all-day vacation',
              uid: '64755595cabc86a',
              parentUid: '3d0006f7c4eb84e9ae827bf6135cfc3a',
              status: 'failed',
              time: {
                start: 1580614939716,
                stop: 1580614960914,
                duration: 21198
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3d0006f7c4eb84e9ae827bf6135cfc3a'
        },
        {
          name:
            "Field name - Date of Another Vacation : 03/01/2099 should contain 03/01/2099 1:00 AM: expected '03/01/2099' to include '03/01/2099 1:00 AM'",
          children: [
            {
              name:
                'User can edit an existing all-day vacation to make it non-all-day',
              uid: '1c4b91d4345c711',
              parentUid: 'bf70ef5b29cebbe80a058539438dd0e6',
              status: 'failed',
              time: {
                start: 1580614960923,
                stop: 1580614983298,
                duration: 22375
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'bf70ef5b29cebbe80a058539438dd0e6'
        },
        {
          name:
            'By(css selector, div.df-loader)Element should not be visible\nWait timed out after 50079ms',
          children: [
            {
              name:
                'User can view all existing holidays and vacations: Both holidays and vacations are ordered by "Date" in ascending order',
              uid: '346bd9f03d9cbb00',
              parentUid: '5b527e4b09db68056f504916eb59ab3a',
              status: 'failed',
              time: {
                start: 1580614983329,
                stop: 1580615047760,
                duration: 64431
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '5b527e4b09db68056f504916eb59ab3a'
        },
        {
          name:
            "Field name - Date of Test 3 : 01/01/2099 should contain 01/01/2099 12:30 AM: expected '01/01/2099' to include '01/01/2099 12:30 AM'",
          children: [
            {
              name:
                'User can view all existing vacations: Vacations are ordered by "Date" in ascending order',
              uid: '47e0c49ea75aefa3',
              parentUid: 'dfece2fe0be3377d422d7d6e673d2a76',
              status: 'failed',
              time: {
                start: 1580615047769,
                stop: 1580615109877,
                duration: 62108
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'dfece2fe0be3377d422d7d6e673d2a76'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50008ms",
          children: [
            {
              name:
                'Administrator user cannot move root article of a wiki using the "Info" button',
              uid: '805f23578bbde708',
              parentUid: '3cdbf124215ea1647877af1c2170cdcb',
              status: 'failed',
              time: {
                start: 1580615109965,
                stop: 1580615180435,
                duration: 70470
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '3cdbf124215ea1647877af1c2170cdcb'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50003ms",
          children: [
            {
              name:
                'Administrator user cannot set root for a root article of a Wiki using the "Info" button',
              uid: '24a830e2c5f0556b',
              parentUid: '765bdf83d0548c4cccaae15575b19fc7',
              status: 'failed',
              time: {
                start: 1580615180455,
                stop: 1580615246651,
                duration: 66196
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '765bdf83d0548c4cccaae15575b19fc7'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50000ms",
          children: [
            {
              name:
                'Administrator user cannot delete root Wiki article of a wiki using the "Info" button',
              uid: '42eeba5fe2cd5dd2',
              parentUid: '41d262e368ce18a83410344eda399125',
              status: 'failed',
              time: {
                start: 1580615246676,
                stop: 1580615313027,
                duration: 66351
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator user can set a Wiki article as a root article using the "Info" button',
              uid: 'ab9562418316ab2d',
              parentUid: '41d262e368ce18a83410344eda399125',
              status: 'failed',
              time: {
                start: 1580615380816,
                stop: 1580615446750,
                duration: 65934
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '41d262e368ce18a83410344eda399125'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50007ms",
          children: [
            {
              name:
                'Administrator user can delete an existing Wiki article using the "Info" button',
              uid: '2fcf3fb4f8e56ca9',
              parentUid: 'a29322c31fec4b2915a9956549cb47fb',
              status: 'failed',
              time: {
                start: 1580615313039,
                stop: 1580615380801,
                duration: 67762
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'a29322c31fec4b2915a9956549cb47fb'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50013ms",
          children: [
            {
              name:
                'Administrator user can subscribe to an existing wiki article using the "Info" button',
              uid: '6b01fcf6d1a7ce24',
              parentUid: '2f9aab06fcafe49251bc4ff45bd16bc3',
              status: 'failed',
              time: {
                start: 1580615446777,
                stop: 1580615513264,
                duration: 66487
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2f9aab06fcafe49251bc4ff45bd16bc3'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50019ms",
          children: [
            {
              name:
                'Administrator user create a new wiki article by clicking on the "New Article" button on the Sidebar of a Wiki',
              uid: '523450b4dd4895a3',
              parentUid: '42b37e29f968d46d8f50b048f851000a',
              status: 'failed',
              time: {
                start: 1580615513287,
                stop: 1580615584393,
                duration: 71106
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '42b37e29f968d46d8f50b048f851000a'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'Wiki-A')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50025ms",
          children: [
            {
              name:
                'Administrator user can subscribe to an existing wiki article using the "View" button',
              uid: '69a331d19f32490e',
              parentUid: 'faecdb56b2dc448767025064c2fe2884',
              status: 'failed',
              time: {
                start: 1580615584431,
                stop: 1580615655368,
                duration: 70937
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'faecdb56b2dc448767025064c2fe2884'
        },
        {
          name:
            "No element found using locator: By(xpath, //tr[td[contains(., 'Custom Wiki template')]]//i[@title='Edit'])",
          children: [
            {
              name:
                'Administrator can copy an existing Wiki template: Copy: Immediately creates copy with the " (2)" suffix',
              uid: '406d4a9d3eed44dd',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580615655448,
                stop: 1580615731116,
                duration: 75668
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: Attachments: Create: "Save" button',
              uid: '72e34bad3eb0de30',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616014123,
                stop: 1580616093442,
                duration: 79319
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: Attachments: Create: "Save and Close" button',
              uid: '5de1aae1b124bf09',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616093454,
                stop: 1580616169337,
                duration: 75883
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: Attachments: Delete: Immediately deletes attachment (without pressing "Save" or "Save and Close" button)',
              uid: '210f10d9dfe01cf3',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616169377,
                stop: 1580616245043,
                duration: 75666
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: Attachments: View all: Sorted by name',
              uid: '523ebf32de5a650',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616245060,
                stop: 1580616320713,
                duration: 75653
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "CSS": "Save" button',
              uid: '51a24aaf02b228d8',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616320726,
                stop: 1580616395772,
                duration: 75046
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "CSS": "Save and Close" button',
              uid: 'c8a22283be422d72',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616395786,
                stop: 1580616468993,
                duration: 73207
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "HTML": "Save" button',
              uid: '4654ce4ef67f4fef',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616469008,
                stop: 1580616544088,
                duration: 75080
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "HTML": "Save and Close" button',
              uid: 'bfa3e0006b3b05d',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616544109,
                stop: 1580616621242,
                duration: 77133
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "Template": "Save" button',
              uid: '89c4c6b0d2d8050b',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616621253,
                stop: 1580616699405,
                duration: 78152
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing Wiki template: "Template": "Save and Close" button',
              uid: '9b1158626636fe5',
              parentUid: 'd67b92a874d0f490444ebd3e5f5d1896',
              status: 'failed',
              time: {
                start: 1580616699418,
                stop: 1580616775092,
                duration: 75674
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd67b92a874d0f490444ebd3e5f5d1896'
        },
        {
          name:
            'By(xpath, //div[contains(text(),"Edit Template")]|//h2[contains(text(),"Edit Template")])Element should be visible\nWait timed out after 50007ms',
          children: [
            {
              name: 'Administrator can create a Wiki template: "Save" button',
              uid: '795bb4ba6a4cefe4',
              parentUid: 'ce684d85827bf3c60a83f5aa58eb8958',
              status: 'failed',
              time: {
                start: 1580615731124,
                stop: 1580615799001,
                duration: 67877
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'ce684d85827bf3c60a83f5aa58eb8958'
        },
        {
          name:
            'by.cssContainingText("h2", "Templates")Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Administrator can create a Wiki template: "Save and Close" button',
              uid: '5a7c659e4f646f5f',
              parentUid: '81b79d323035098e5484cf11dfdfca8a',
              status: 'failed',
              time: {
                start: 1580615799006,
                stop: 1580615861871,
                duration: 62865
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '81b79d323035098e5484cf11dfdfca8a'
        },
        {
          name:
            "No element found using locator: By(xpath, //tr[td[contains(., '5k Rewrite Wiki template')]]//df-radio-input)",
          children: [
            {
              name:
                'Administrator can mark an existing Wiki template as the default one',
              uid: 'a934ab653d5a05d3',
              parentUid: '0595f144099e13338fddbb8022e7ed79',
              status: 'failed',
              time: {
                start: 1580615861883,
                stop: 1580615934876,
                duration: 72993
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '0595f144099e13338fddbb8022e7ed79'
        },
        {
          name:
            "No element found using locator: By(xpath, //tr[td[contains(., 'Custom Wiki template')]]//i[@title='Delete'])",
          children: [
            {
              name: 'Administrator can delete an existing Wiki template',
              uid: 'f95c3bae7c58ce2f',
              parentUid: '7a19fc65d02bc6d9f8a3fd75c5324542',
              status: 'failed',
              time: {
                start: 1580615935007,
                stop: 1580616014112,
                duration: 79105
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '7a19fc65d02bc6d9f8a3fd75c5324542'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 8 Default Template')]]//i[@title='Delete'])Element should be visible\nWait timed out after 50001ms",
          children: [
            {
              name: 'System provides the read-only default template',
              uid: '85cbfcb987d2b460',
              parentUid: 'b239d17b275d0cac6b959b8e700a8d23',
              status: 'failed',
              time: {
                start: 1580616775095,
                stop: 1580616837652,
                duration: 62557
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b239d17b275d0cac6b959b8e700a8d23'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"First Article")])Element should be visible\nWait timed out after 50034ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$headline$" placeholder: Headline of current article',
              uid: '1b5342ccd4ca3c9f',
              parentUid: 'd892424542cd17b7faf8ac9330e9e982',
              status: 'failed',
              time: {
                start: 1580616888221,
                stop: 1580616987040,
                duration: 98819
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd892424542cd17b7faf8ac9330e9e982'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki Root Page Title!")])Element should be visible\nWait timed out after 50019ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$homeheadline$", "$home_headline$" placeholders: Headline of wiki\'s home article',
              uid: '9a83596d67726093',
              parentUid: '148b8a1a42c803c2c5b440aba7698c75',
              status: 'failed',
              time: {
                start: 1580616987049,
                stop: 1580617086414,
                duration: 99365
              },
              flaky: false,
              parameters: ['$homeheadline$']
            }
          ],
          uid: '148b8a1a42c803c2c5b440aba7698c75'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki Root Page Title!")])Element should be visible\nWait timed out after 50017ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$homeheadline$", "$home_headline$" placeholders: Headline of wiki\'s home article',
              uid: '57774ee2356b936',
              parentUid: 'ef638dea51ad1f169fa5b18c05e4af5e',
              status: 'failed',
              time: {
                start: 1580617086427,
                stop: 1580617184193,
                duration: 97766
              },
              flaky: false,
              parameters: ['$home_headline$']
            }
          ],
          uid: 'ef638dea51ad1f169fa5b18c05e4af5e'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"default.asp?W1")])Element should be visible\nWait timed out after 50020ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$homeurl$", "$home_url$" placeholders: URL of wiki\'s home article',
              uid: '405d3a05ff05da26',
              parentUid: 'ef66a53b4c5ff700995991b69c59868f',
              status: 'failed',
              time: {
                start: 1580617184205,
                stop: 1580617283580,
                duration: 99375
              },
              flaky: false,
              parameters: ['$homeurl$']
            }
          ],
          uid: 'ef66a53b4c5ff700995991b69c59868f'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"default.asp?W1")])Element should be visible\nWait timed out after 50017ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$homeurl$", "$home_url$" placeholders: URL of wiki\'s home article',
              uid: '8e274cfc6db4181d',
              parentUid: '3b2811de9149a78713b3c3e1f05d090b',
              status: 'failed',
              time: {
                start: 1580617283597,
                stop: 1580617385713,
                duration: 102116
              },
              flaky: false,
              parameters: ['$home_url$']
            }
          ],
          uid: '3b2811de9149a78713b3c3e1f05d090b'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Second Article Third Article Fourth Article Case 17: First Case Case 18: Second Case Case 19: Third Case")])Element should be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$incoming_links$" placeholder: List of incoming links from other wiki articles and cases',
              uid: '9293131d2ba7c7a0',
              parentUid: 'a00267349478f200b47f2d0a55fc8e30',
              status: 'failed',
              time: {
                start: 1580617385765,
                stop: 1580617496288,
                duration: 110523
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'a00267349478f200b47f2d0a55fc8e30'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Second Article Third Article Fourth Article Case 17: First Case Case 18: Second Case Case 19: Third Case")])Element should be visible\nWait timed out after 50006ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$outgoing_links$" placeholder: List of outgoing links to other wiki articles and cases',
              uid: '1cb61054cbb4de75',
              parentUid: '38ad21a268020029d1ffa8f27540b76d',
              status: 'failed',
              time: {
                start: 1580617496302,
                stop: 1580617601761,
                duration: 105459
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '38ad21a268020029d1ffa8f27540b76d'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"default.asp?W2")])Element should be visible\nWait timed out after 50010ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$url$" placeholder: URL of current article',
              uid: 'ae05ea9406bcb0b0',
              parentUid: 'dd4e1117d04301ad9ff42959f50d119c',
              status: 'failed',
              time: {
                start: 1580617601774,
                stop: 1580617697276,
                duration: 95502
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'dd4e1117d04301ad9ff42959f50d119c'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki")])Element should be visible\nWait timed out after 50005ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wiki_root_link$", "$wikirootlink$" placeholders: A link to the root page of a wiki',
              uid: '91fdfde398b7034e',
              parentUid: '1a9065ab5878fe5d5cbca04854143bfc',
              status: 'failed',
              time: {
                start: 1580617885883,
                stop: 1580617985994,
                duration: 100111
              },
              flaky: false,
              parameters: ['$wiki_root_link$']
            }
          ],
          uid: '1a9065ab5878fe5d5cbca04854143bfc'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki")])Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wiki_root_link$", "$wikirootlink$" placeholders: A link to the root page of a wiki',
              uid: '14f11cf9116d0c43',
              parentUid: 'ee4443348f3a37ee9c8170ab642330af',
              status: 'failed',
              time: {
                start: 1580617986006,
                stop: 1580618090316,
                duration: 104310
              },
              flaky: false,
              parameters: ['$wikirootlink$']
            }
          ],
          uid: 'ee4443348f3a37ee9c8170ab642330af'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki")])Element should be visible\nWait timed out after 50008ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wikiname$", "$wiki_name$" placeholders: Name of current article\'s wiki',
              uid: '9518af812f692a44',
              parentUid: '0c49244a9e400ac56d047fedf7f67c17',
              status: 'failed',
              time: {
                start: 1580618090326,
                stop: 1580618193580,
                duration: 103254
              },
              flaky: false,
              parameters: ['$wikiname$']
            }
          ],
          uid: '0c49244a9e400ac56d047fedf7f67c17'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"Rendering Wiki")])Element should be visible\nWait timed out after 50010ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wikiname$", "$wiki_name$" placeholders: Name of current article\'s wiki',
              uid: '270fd9e5fa878e44',
              parentUid: '01a57457298674e6b9fc664c07a44644',
              status: 'failed',
              time: {
                start: 1580618193663,
                stop: 1580618300640,
                duration: 106977
              },
              flaky: false,
              parameters: ['$wiki_name$']
            }
          ],
          uid: '01a57457298674e6b9fc664c07a44644'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"First tagline!")])Element should be visible\nWait timed out after 50016ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wikitagline$", "$wiki_tagline$" placeholders: Tagline of current article\'s wiki',
              uid: 'ce6e2927ddc1ea19',
              parentUid: '1a0a13127f1e8a7c379c953d5f2c6372',
              status: 'failed',
              time: {
                start: 1580618300676,
                stop: 1580618426656,
                duration: 125980
              },
              flaky: false,
              parameters: ['$wikitagline$']
            }
          ],
          uid: '1a0a13127f1e8a7c379c953d5f2c6372'
        },
        {
          name:
            'By(xpath, //app-dynamic-html[contains(normalize-space(.),"First tagline!")])Element should be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'User can view rendered Wiki article: "$wikitagline$", "$wiki_tagline$" placeholders: Tagline of current article\'s wiki',
              uid: '512d60ef9c978219',
              parentUid: '0d7ce082bb6054e6c260f1213a1f9707',
              status: 'failed',
              time: {
                start: 1580618426801,
                stop: 1580618535735,
                duration: 108934
              },
              flaky: false,
              parameters: ['$wiki_tagline$']
            }
          ],
          uid: '0d7ce082bb6054e6c260f1213a1f9707'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 8 Default Template')]]//i[@title='Delete'])Element should be visible\nWait timed out after 50005ms",
          children: [
            {
              name:
                'Administrator view all existing Wiki templates: "In use": Template is not used by Wiki: "In use" is false: "Can delete" is true',
              uid: '16fabba599ad50f6',
              parentUid: 'c040c4043ef77c429af9c5faa206c383',
              status: 'failed',
              time: {
                start: 1580618535743,
                stop: 1580618608925,
                duration: 73182
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'c040c4043ef77c429af9c5faa206c383'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option[normalize-space(.)="Ticket machine"])',
          children: [
            {
              name:
                'Administrator view all existing Wiki templates: "In use": Template is used by Wiki: "In use" is true: "Can delete" is false',
              uid: '7ca17f9ff24163f2',
              parentUid: '2cb1f23089cd35c2e648a0835b34d693',
              status: 'failed',
              time: {
                start: 1580618608933,
                stop: 1580618683724,
                duration: 74791
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator view all existing Wiki templates: "In use": Template has become unused by Wiki: "In use" is false: "Can delete" is true',
              uid: '9c5c0fc5fbcc3d44',
              parentUid: '2cb1f23089cd35c2e648a0835b34d693',
              status: 'failed',
              time: {
                start: 1580618683751,
                stop: 1580618758349,
                duration: 74598
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2cb1f23089cd35c2e648a0835b34d693'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option[normalize-space(.)="FogBugz 8 Default Template"])',
          children: [
            {
              name:
                'Administrator view all existing Wiki templates: "In use": Template has become used by Wiki: "In use" is true: "Can delete" is false',
              uid: '5edad9692fe2cb8c',
              parentUid: '93c1f3edde752cde18a207739277b5d6',
              status: 'failed',
              time: {
                start: 1580618758359,
                stop: 1580618834846,
                duration: 76487
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '93c1f3edde752cde18a207739277b5d6'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"Add New Template")])',
          children: [
            {
              name: 'Administrator view all existing Wiki templates',
              uid: '9adf0e231308d40c',
              parentUid: 'bceeadc62f22ff94a0211fb3d330f4c8',
              status: 'failed',
              time: {
                start: 1580618834898,
                stop: 1580618909382,
                duration: 74484
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'bceeadc62f22ff94a0211fb3d330f4c8'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki - Original')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50004ms",
          children: [
            {
              name:
                'Administrator can create a new Wiki: The "Initial Permissions" property is set to the "Clone Wiki <Another Wiki name>" value',
              uid: 'c2aaeb7412fef032',
              parentUid: 'c7787282fcd1b50c179abca77c797f9e',
              status: 'failed',
              time: {
                start: 1580618909437,
                stop: 1580619016597,
                duration: 107160
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'c7787282fcd1b50c179abca77c797f9e'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option[normalize-space(.)="Only Site Admins can edit pages"])',
          children: [
            {
              name:
                'Administrator can create a new Wiki: The "Initial Permissions" property is set to the "Only Site Admins can edit pages" value',
              uid: '28b2565a8eed9118',
              parentUid: '8d05cfdb85e771f0458973342b33f712',
              status: 'failed',
              time: {
                start: 1580619016625,
                stop: 1580619080737,
                duration: 64112
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '8d05cfdb85e771f0458973342b33f712'
        },
        {
          name:
            'No element found using locator: By(xpath, //df-option[normalize-space(.)="All Normal Users can edit pages"])',
          children: [
            {
              name:
                'Administrator can create a new Wiki: The "Initial Permissions" property is set to the "All Normal Users can edit pages" value',
              uid: '42826e5973dcf10e',
              parentUid: '2bc1f8d5933c7237b9a11aac5b7bb82b',
              status: 'failed',
              time: {
                start: 1580619080766,
                stop: 1580619145639,
                duration: 64873
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2bc1f8d5933c7237b9a11aac5b7bb82b'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50001ms",
          children: [
            {
              name: 'The created Wiki contains the root article',
              uid: 'b32d1d3eee20970d',
              parentUid: '4456301d285708df2c147847daed556c',
              status: 'failed',
              time: {
                start: 1580619145680,
                stop: 1580619215309,
                duration: 69629
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '4456301d285708df2c147847daed556c'
        },
        {
          name:
            'by.cssContainingText("h2", "Wikis")Element should be visible\nWait timed out after 50001ms',
          children: [
            {
              name: 'Administrator can create a new Wiki: "Name"',
              uid: '89b73701de2568b3',
              parentUid: '1e700b9af9838f9b6dd25c49128eebb3',
              status: 'failed',
              time: {
                start: 1580619230831,
                stop: 1580619301140,
                duration: 70309
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1e700b9af9838f9b6dd25c49128eebb3'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., '5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50020ms",
          children: [
            {
              name: 'Administrator can delete an existing Wiki: One of many',
              uid: '9f3e88bfcc3b3ccc',
              parentUid: '1c4d905fdf03ce0f5feed44ae704d389',
              status: 'failed',
              time: {
                start: 1580619301150,
                stop: 1580619372053,
                duration: 70903
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1c4d905fdf03ce0f5feed44ae704d389'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'alpha wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50014ms",
          children: [
            {
              name: 'Administrator can delete an existing Wiki: Single',
              uid: '867accb9c2df09d3',
              parentUid: 'b2430c4d852e72f98e6b69758aaeb57a',
              status: 'failed',
              time: {
                start: 1580619372068,
                stop: 1580619445357,
                duration: 73289
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b2430c4d852e72f98e6b69758aaeb57a'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50006ms",
          children: [
            {
              name:
                'Administrator can navigate back from the "Wiki Attachment List" page to the "Edit Wiki" page of the same wiki',
              uid: '2962e7ebee7f7963',
              parentUid: 'de1c9668083c8fba30a46b70510d26d8',
              status: 'failed',
              time: {
                start: 1580619445388,
                stop: 1580619517637,
                duration: 72249
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'de1c9668083c8fba30a46b70510d26d8'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50036ms",
          children: [
            {
              name: 'Administrator can edit an existing Wiki: "Name"',
              uid: '3bf1a7d3628a34aa',
              parentUid: '6033b6016a28635e9b80fe1204b31e73',
              status: 'failed',
              time: {
                start: 1580619517725,
                stop: 1580619591508,
                duration: 73783
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '6033b6016a28635e9b80fe1204b31e73'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., '5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50060ms",
          children: [
            {
              name: 'Administrator can view all deleted Wikis: None',
              uid: '7eec009b54ba506c',
              parentUid: '722c767f38a4e9b36d99d3e31897a1ca',
              status: 'failed',
              time: {
                start: 1580619591558,
                stop: 1580619665368,
                duration: 73810
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '722c767f38a4e9b36d99d3e31897a1ca'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50064ms",
          children: [
            {
              name:
                'Administrator can view all deleted Wikis: Many: Sorted by name',
              uid: '18d0d934e4fffef6',
              parentUid: 'd4da1af3ce8737170c4b4ab433f1d826',
              status: 'failed',
              time: {
                start: 1580619665415,
                stop: 1580619739673,
                duration: 74258
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'd4da1af3ce8737170c4b4ab433f1d826'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., 'FogBugz 5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50032ms",
          children: [
            {
              name: 'Administrator can undelete a deleted Wiki',
              uid: 'e9f8f7444fd360e4',
              parentUid: '9a2ebf4a79d7bb1e6c60b8edd24b6cd4',
              status: 'failed',
              time: {
                start: 1580619739774,
                stop: 1580619813909,
                duration: 74135
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '9a2ebf4a79d7bb1e6c60b8edd24b6cd4'
        },
        {
          name:
            "By(xpath, //tr[td[contains(., '5k Rewrite Wiki')]]//div[contains(@class,'edit-button')])Element should be visible\nWait timed out after 50015ms",
          children: [
            {
              name: 'Administrator can view all existing Wikis',
              uid: '3b776ab36005c198',
              parentUid: '1f778cc4d9662b78a6a825edf2076fd0',
              status: 'failed',
              time: {
                start: 1580619813928,
                stop: 1580619886879,
                duration: 72951
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '1f778cc4d9662b78a6a825edf2076fd0'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50051ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name"',
              uid: '5e354096758fe785',
              parentUid: '52630c7bdec6b80c8693ff7a987eda24',
              status: 'failed',
              time: {
                start: 1580619886965,
                stop: 1580619955225,
                duration: 68260
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '698fb298c8284836',
              parentUid: '52630c7bdec6b80c8693ff7a987eda24',
              status: 'failed',
              time: {
                start: 1580623093656,
                stop: 1580623157987,
                duration: 64331
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '52630c7bdec6b80c8693ff7a987eda24'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50020ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '4a9a5713614a6039',
              parentUid: '9ba36e0a32ca5492ad34f9bd7b2fa59e',
              status: 'failed',
              time: {
                start: 1580619955245,
                stop: 1580620023722,
                duration: 68477
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: '9ba36e0a32ca5492ad34f9bd7b2fa59e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50062ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'cfb06a3dc9bd554d',
              parentUid: 'f41f30d3c4983173eeb48f31f439c814',
              status: 'failed',
              time: {
                start: 1580620023746,
                stop: 1580620091372,
                duration: 67626
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'f41f30d3c4983173eeb48f31f439c814'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50013ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '56d697820a1d2650',
              parentUid: '3353c1e93b2ca3fb2a27f0970c9ed5a2',
              status: 'failed',
              time: {
                start: 1580620091419,
                stop: 1580620159369,
                duration: 67950
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '3353c1e93b2ca3fb2a27f0970c9ed5a2'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50056ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'e93ba4ed978102c5',
              parentUid: 'b4e782d2ec8021685f10a1ab8125f6dd',
              status: 'failed',
              time: {
                start: 1580620159403,
                stop: 1580620225141,
                duration: 65738
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: 'b4e782d2ec8021685f10a1ab8125f6dd'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50064ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'f542f9d6f7cb40b3',
              parentUid: '2a73cfb2e276409ca9202553b97bef74',
              status: 'failed',
              time: {
                start: 1580620225212,
                stop: 1580620292983,
                duration: 67771
              },
              flaky: false,
              parameters: ['Unassigned']
            },
            {
              name:
                'Administrator can copy an existing workflow: Display categories',
              uid: '56de8cd3bda1f561',
              parentUid: '2a73cfb2e276409ca9202553b97bef74',
              status: 'failed',
              time: {
                start: 1580621611544,
                stop: 1580621681985,
                duration: 70441
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '2a73cfb2e276409ca9202553b97bef74'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50041ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '1c274f834d24b98d',
              parentUid: 'fb3741a151fde500ecc82069ac5c6478',
              status: 'failed',
              time: {
                start: 1580620362985,
                stop: 1580620429615,
                duration: 66630
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'fb3741a151fde500ecc82069ac5c6478'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50066ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'fd5244ddeba0208d',
              parentUid: '44d71ca1111d82eb55631addb4b01e19',
              status: 'failed',
              time: {
                start: 1580620429660,
                stop: 1580620505658,
                duration: 75998
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '44d71ca1111d82eb55631addb4b01e19'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50131ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '3eebd87a3a901b86',
              parentUid: '1c859beef6eb7ebeafa47c64a094b94e',
              status: 'failed',
              time: {
                start: 1580620505712,
                stop: 1580620575770,
                duration: 70058
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '1c859beef6eb7ebeafa47c64a094b94e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50105ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '4792f885c9176245',
              parentUid: '526e51809e5676e33e21a6c7805f0f84',
              status: 'failed',
              time: {
                start: 1580620575815,
                stop: 1580620644469,
                duration: 68654
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: '526e51809e5676e33e21a6c7805f0f84'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50044ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: 'c838141037e564a9',
              parentUid: 'e5cc50690b365831a704654163702ab7',
              status: 'failed',
              time: {
                start: 1580620644516,
                stop: 1580620713346,
                duration: 68830
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: 'e5cc50690b365831a704654163702ab7'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50002ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: 'c326493e90eb08c1',
              parentUid: 'bcfe7ddfcb0870b1b6345e048c2820a7',
              status: 'failed',
              time: {
                start: 1580620713392,
                stop: 1580620779178,
                duration: 65786
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'af1c1e876070976d',
              parentUid: 'bcfe7ddfcb0870b1b6345e048c2820a7',
              status: 'failed',
              time: {
                start: 1580622376329,
                stop: 1580622442542,
                duration: 66213
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '4bf9359d11ef8979',
              parentUid: 'bcfe7ddfcb0870b1b6345e048c2820a7',
              status: 'failed',
              time: {
                start: 1580624152860,
                stop: 1580624219216,
                duration: 66356
              },
              flaky: false,
              parameters: ['-- Case Resolver --']
            }
          ],
          uid: 'bcfe7ddfcb0870b1b6345e048c2820a7'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50036ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: 'c00b392f23c06411',
              parentUid: '6b652ce902cda0be569c8a8e7d8fb9be',
              status: 'failed',
              time: {
                start: 1580620779209,
                stop: 1580620845708,
                duration: 66499
              },
              flaky: false,
              parameters: ['-- No Change --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'cccbd5355a80e1ae',
              parentUid: '6b652ce902cda0be569c8a8e7d8fb9be',
              status: 'failed',
              time: {
                start: 1580624087253,
                stop: 1580624152844,
                duration: 65591
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: '6b652ce902cda0be569c8a8e7d8fb9be'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50057ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: 'd83d592f743fcd85',
              parentUid: 'dad3472708de7b933611e2c06f0665c7',
              status: 'failed',
              time: {
                start: 1580620845738,
                stop: 1580620911438,
                duration: 65700
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: 'ce59c7319d25edd4',
              parentUid: 'dad3472708de7b933611e2c06f0665c7',
              status: 'failed',
              time: {
                start: 1580624479514,
                stop: 1580624543707,
                duration: 64193
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'dad3472708de7b933611e2c06f0665c7'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50069ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '3fc641d943eef065',
              parentUid: '13326674c2fda3d22dd050d704a99758',
              status: 'failed',
              time: {
                start: 1580620911450,
                stop: 1580620976730,
                duration: 65280
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: '13326674c2fda3d22dd050d704a99758'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50052ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '9b8a1c453ec7b429',
              parentUid: '7536ea3fc5e769c92f2b907faf221897',
              status: 'failed',
              time: {
                start: 1580620976749,
                stop: 1580621043505,
                duration: 66756
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: '7536ea3fc5e769c92f2b907faf221897'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50073ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '7c1e25c66073df6f',
              parentUid: 'b8768ceeb4918dbfc95ccea7aaa8d61d',
              status: 'failed',
              time: {
                start: 1580621043534,
                stop: 1580621112601,
                duration: 69067
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            },
            {
              name:
                'Administrator can edit an existing workflow: Display categories',
              uid: '5d18b8c046ae6e7f',
              parentUid: 'b8768ceeb4918dbfc95ccea7aaa8d61d',
              status: 'failed',
              time: {
                start: 1580621540464,
                stop: 1580621611529,
                duration: 71065
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b8768ceeb4918dbfc95ccea7aaa8d61d'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50081ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: 'e14e57c524f7a8f2',
              parentUid: '3be43034c5761865f61f1b126f5b955e',
              status: 'failed',
              time: {
                start: 1580621112622,
                stop: 1580621182360,
                duration: 69738
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '3be43034c5761865f61f1b126f5b955e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50001ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '3654923a9a6f4e06',
              parentUid: '35f0815990823c86c84ee8075e642a59',
              status: 'failed',
              time: {
                start: 1580621182408,
                stop: 1580621253433,
                duration: 71025
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '35f0815990823c86c84ee8075e642a59'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50021ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: 'd9b145e5ac2e75cc',
              parentUid: '39f47bc1cb6bafee0b7c81c9736a8508',
              status: 'failed',
              time: {
                start: 1580621253462,
                stop: 1580621326701,
                duration: 73239
              },
              flaky: false,
              parameters: ['Unassigned']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '48de6e97987c5352',
              parentUid: '39f47bc1cb6bafee0b7c81c9736a8508',
              status: 'failed',
              time: {
                start: 1580623953505,
                stop: 1580624021733,
                duration: 68228
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: '39f47bc1cb6bafee0b7c81c9736a8508'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50039ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Force "Assign To"" for statuses',
              uid: '411d3a01376c3ba7',
              parentUid: '47ed263fcb38ea93a58b3c3a549b46f8',
              status: 'failed',
              time: {
                start: 1580621326836,
                stop: 1580621398040,
                duration: 71204
              },
              flaky: false,
              parameters: ['false']
            }
          ],
          uid: '47ed263fcb38ea93a58b3c3a549b46f8'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50045ms',
          children: [
            {
              name:
                'Administrator can copy an existing workflow: "Workflow name" and "Force "Assign To"" for statuses',
              uid: '859d4d45e46fed7f',
              parentUid: 'd00aa4659b9e2bdae71694125b23c56d',
              status: 'failed',
              time: {
                start: 1580621398076,
                stop: 1580621466316,
                duration: 68240
              },
              flaky: false,
              parameters: ['true']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '3467408c8e14fda4',
              parentUid: 'd00aa4659b9e2bdae71694125b23c56d',
              status: 'failed',
              time: {
                start: 1580622640523,
                stop: 1580622705726,
                duration: 65203
              },
              flaky: false,
              parameters: ['-- Case Resolver --']
            }
          ],
          uid: 'd00aa4659b9e2bdae71694125b23c56d'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50011ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: Display categories',
              uid: 'b460f714db45763',
              parentUid: '4eedce0d4080952743fddd52f86afb2a',
              status: 'failed',
              time: {
                start: 1580621466343,
                stop: 1580621540452,
                duration: 74109
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'e4cefad6e3417412',
              parentUid: '4eedce0d4080952743fddd52f86afb2a',
              status: 'failed',
              time: {
                start: 1580621892073,
                stop: 1580621959566,
                duration: 67493
              },
              flaky: false,
              parameters: ['-- No Change --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: 'e2eb1f76f60718ce',
              parentUid: '4eedce0d4080952743fddd52f86afb2a',
              status: 'failed',
              time: {
                start: 1580624415978,
                stop: 1580624479495,
                duration: 63517
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: '4eedce0d4080952743fddd52f86afb2a'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50014ms',
          children: [
            {
              name: 'Administrator can create a new workflow: "Workflow name"',
              uid: '943ed89118bb1816',
              parentUid: '91192d57ba0ac83116e951a0c5da6263',
              status: 'failed',
              time: {
                start: 1580621682030,
                stop: 1580621753480,
                duration: 71450
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '91192d57ba0ac83116e951a0c5da6263'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50047ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'ced81b9339e46400',
              parentUid: 'db210ada497a2d065bbf8e77206c5c25',
              status: 'failed',
              time: {
                start: 1580621753506,
                stop: 1580621822739,
                duration: 69233
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: '6ba4a1747dadfae6',
              parentUid: 'db210ada497a2d065bbf8e77206c5c25',
              status: 'failed',
              time: {
                start: 1580624543749,
                stop: 1580624608681,
                duration: 64932
              },
              flaky: false,
              parameters: ['-- Case Resolver --']
            }
          ],
          uid: 'db210ada497a2d065bbf8e77206c5c25'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50090ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '6e7b1dfeaa4083f8',
              parentUid: 'df4f91c6490843b857fa59bd1dfdbe53',
              status: 'failed',
              time: {
                start: 1580621822749,
                stop: 1580621892060,
                duration: 69311
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'df4f91c6490843b857fa59bd1dfdbe53'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50009ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'fcef466eea429b4b',
              parentUid: 'a203797a2d8d091788573fa6d9ec5530',
              status: 'failed',
              time: {
                start: 1580622171332,
                stop: 1580622238650,
                duration: 67318
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'a203797a2d8d091788573fa6d9ec5530'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50027ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '58cb65063c0c6123',
              parentUid: '7b75b74e2281c3ceebbda2be6d689d0d',
              status: 'failed',
              time: {
                start: 1580622238733,
                stop: 1580622308321,
                duration: 69588
              },
              flaky: false,
              parameters: ['-- Case Resolver --']
            }
          ],
          uid: '7b75b74e2281c3ceebbda2be6d689d0d'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50008ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: 'd453932ebb22fe48',
              parentUid: '555411f6a07d5bf59a7a49b2fceb716b',
              status: 'failed',
              time: {
                start: 1580622308335,
                stop: 1580622376302,
                duration: 67967
              },
              flaky: false,
              parameters: ['-- No Change --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Workflow name"',
              uid: '50760921ca8371c6',
              parentUid: '555411f6a07d5bf59a7a49b2fceb716b',
              status: 'failed',
              time: {
                start: 1580623625627,
                stop: 1580623690154,
                duration: 64527
              },
              flaky: false,
              parameters: []
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Resolving a Case" status',
              uid: '8798b46cdcb803ff',
              parentUid: '555411f6a07d5bf59a7a49b2fceb716b',
              status: 'failed',
              time: {
                start: 1580624874936,
                stop: 1580624939423,
                duration: 64487
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Resolving a Case" status',
              uid: 'a0ee4e2e7425fa87',
              parentUid: '555411f6a07d5bf59a7a49b2fceb716b',
              status: 'failed',
              time: {
                start: 1580624939440,
                stop: 1580625007927,
                duration: 68487
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '555411f6a07d5bf59a7a49b2fceb716b'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50048ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '902dc89c41d85823',
              parentUid: 'd085841ef854833419de0d77ad70655b',
              status: 'failed',
              time: {
                start: 1580622442557,
                stop: 1580622509288,
                duration: 66731
              },
              flaky: false,
              parameters: ['Unassigned']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: 'd8c92111ebac73e',
              parentUid: 'd085841ef854833419de0d77ad70655b',
              status: 'failed',
              time: {
                start: 1580622962372,
                stop: 1580623027785,
                duration: 65413
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '406805f04763a1d0',
              parentUid: 'd085841ef854833419de0d77ad70655b',
              status: 'failed',
              time: {
                start: 1580624219231,
                stop: 1580624284975,
                duration: 65744
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: 'd085841ef854833419de0d77ad70655b'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50054ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '72b31a879df5f6ee',
              parentUid: '24ced9f56010687bfc49bfb05e2ea563',
              status: 'failed',
              time: {
                start: 1580622509319,
                stop: 1580622574523,
                duration: 65204
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            },
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Force "Assign To"" for statuses',
              uid: '6a04ef7ec22837b6',
              parentUid: '24ced9f56010687bfc49bfb05e2ea563',
              status: 'failed',
              time: {
                start: 1580623220846,
                stop: 1580623285018,
                duration: 64172
              },
              flaky: false,
              parameters: ['false']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Force "Assign To"" for statuses',
              uid: '66d70ebb983581da',
              parentUid: '24ced9f56010687bfc49bfb05e2ea563',
              status: 'failed',
              time: {
                start: 1580625141836,
                stop: 1580625204151,
                duration: 62315
              },
              flaky: false,
              parameters: ['false']
            }
          ],
          uid: '24ced9f56010687bfc49bfb05e2ea563'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50006ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '5b28d90aa5c1fc10',
              parentUid: '905f21c4152f4dff3e4b17522538bb3e',
              status: 'failed',
              time: {
                start: 1580622574552,
                stop: 1580622640509,
                duration: 65957
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Force "Assign To"" for statuses',
              uid: 'c2b3a271c72ffe3',
              parentUid: '905f21c4152f4dff3e4b17522538bb3e',
              status: 'failed',
              time: {
                start: 1580625204184,
                stop: 1580625267123,
                duration: 62939
              },
              flaky: false,
              parameters: ['true']
            }
          ],
          uid: '905f21c4152f4dff3e4b17522538bb3e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50000ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '186f5bac254fc7f7',
              parentUid: 'dee22e4829de42a30635582eefa711de',
              status: 'failed',
              time: {
                start: 1580622705739,
                stop: 1580622769769,
                duration: 64030
              },
              flaky: false,
              parameters: ['-- Case Closer --']
            }
          ],
          uid: 'dee22e4829de42a30635582eefa711de'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50075ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: '994158110c32352a',
              parentUid: '148450e454ced2987b28363bd08fe132',
              status: 'failed',
              time: {
                start: 1580622769784,
                stop: 1580622834023,
                duration: 64239
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: 'ae16a06ddd131496',
              parentUid: '148450e454ced2987b28363bd08fe132',
              status: 'failed',
              time: {
                start: 1580624608737,
                stop: 1580624677612,
                duration: 68875
              },
              flaky: false,
              parameters: ['-- Case Closer --']
            }
          ],
          uid: '148450e454ced2987b28363bd08fe132'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50058ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Reopening a Closed Case" status',
              uid: 'c26562e03ecce828',
              parentUid: 'bab01f405f256f2f05210a1718e2f8b8',
              status: 'failed',
              time: {
                start: 1580622834035,
                stop: 1580622897020,
                duration: 62985
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: 'bab01f405f256f2f05210a1718e2f8b8'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50038ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: 'f67d299793435575',
              parentUid: '78c697a61b42fc10cca25a35548844ae',
              status: 'failed',
              time: {
                start: 1580622897035,
                stop: 1580622962357,
                duration: 65322
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: '78c697a61b42fc10cca25a35548844ae'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50043ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Assign To" for a "Resolving a Case" status',
              uid: '3acb6ceb0ec5d882',
              parentUid: '540bc4350044a5f9f5ce495cb37290eb',
              status: 'failed',
              time: {
                start: 1580623157999,
                stop: 1580623220832,
                duration: 62833
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: '540bc4350044a5f9f5ce495cb37290eb'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50003ms',
          children: [
            {
              name:
                'Administrator can create a new workflow: "Workflow name" and "Force "Assign To"" for statuses',
              uid: '20fd47af158ba364',
              parentUid: '9f817eaa81a5e2de0a5c58f3dae52987',
              status: 'failed',
              time: {
                start: 1580623285029,
                stop: 1580623349377,
                duration: 64348
              },
              flaky: false,
              parameters: ['true']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '501c61e489a326f2',
              parentUid: '9f817eaa81a5e2de0a5c58f3dae52987',
              status: 'failed',
              time: {
                start: 1580623821939,
                stop: 1580623887412,
                duration: 65473
              },
              flaky: false,
              parameters: ['-- No Change --']
            }
          ],
          uid: '9f817eaa81a5e2de0a5c58f3dae52987'
        },
        {
          name:
            'By(xpath, //span[normalize-space(text())="Default Workflow"]/parent::td/following-sibling::td/span[normalize-space(text())="Inbox, Onboarding Project"])Element should be visible\nWait timed out after 50018ms',
          children: [
            {
              name: 'System provides the default workflows',
              uid: '5a4a9c92421a4b10',
              parentUid: 'de531e821961570d9cbede11b71f14f9',
              status: 'failed',
              time: {
                start: 1580623349434,
                stop: 1580623411377,
                duration: 61943
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'de531e821961570d9cbede11b71f14f9'
        },
        {
          name:
            'No element found using locator: By(xpath, //span[normalize-space(text())="5k Rewrite"]/parent::td/following-sibling::td//img[@title="Delete"])',
          children: [
            {
              name:
                'Administrator can delete an existing workflow that is not used by any projects',
              uid: 'de7d9fcdac3e1b52',
              parentUid: 'b01f9db87f244ac77ce7409ec269a1a1',
              status: 'failed',
              time: {
                start: 1580623411387,
                stop: 1580623481564,
                duration: 70177
              },
              flaky: false,
              parameters: []
            },
            {
              name: 'Administrator can undelete a deleted workflow',
              uid: 'c8c08779c006d24a',
              parentUid: 'b01f9db87f244ac77ce7409ec269a1a1',
              status: 'failed',
              time: {
                start: 1580623556836,
                stop: 1580623625586,
                duration: 68750
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: 'b01f9db87f244ac77ce7409ec269a1a1'
        },
        {
          name:
            'No element found using locator: By(xpath, //div[contains(text(),"5k Rewrite")]/parent::df-option)',
          children: [
            {
              name:
                'Administrator cannot delete an existing workflow that is used by a project',
              uid: '3d66c7c978da27e',
              parentUid: '89cc0523c7489bbf3caa8ad68e23f45f',
              status: 'failed',
              time: {
                start: 1580623481585,
                stop: 1580623556817,
                duration: 75232
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '89cc0523c7489bbf3caa8ad68e23f45f'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50026ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'ba561af0a37495f',
              parentUid: 'a5455cda64d02b4c459a525d6f000cc9',
              status: 'failed',
              time: {
                start: 1580623690176,
                stop: 1580623755001,
                duration: 64825
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: 'a5455cda64d02b4c459a525d6f000cc9'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50037ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: '772e6fa0e53330f7',
              parentUid: 'badebae12c826cdc892d34e2613f9928',
              status: 'failed',
              time: {
                start: 1580623755038,
                stop: 1580623821885,
                duration: 66847
              },
              flaky: false,
              parameters: ['-- Case Opener --']
            }
          ],
          uid: 'badebae12c826cdc892d34e2613f9928'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50071ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Creating or Editing the status of an Active Case" status',
              uid: 'cea375da7b87e242',
              parentUid: '6a177e16501e1b8dd83799d91efcbbe2',
              status: 'failed',
              time: {
                start: 1580623887428,
                stop: 1580623953485,
                duration: 66057
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '6a177e16501e1b8dd83799d91efcbbe2'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50046ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '10cba1a7771f6ac4',
              parentUid: '2698ec8981d336fb1bb6eff6dbc3157e',
              status: 'failed',
              time: {
                start: 1580624021750,
                stop: 1580624087196,
                duration: 65446
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            },
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reopening a Closed Case" status',
              uid: '232a5ed0422aacb0',
              parentUid: '2698ec8981d336fb1bb6eff6dbc3157e',
              status: 'failed',
              time: {
                start: 1580624677637,
                stop: 1580624742555,
                duration: 64918
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '2698ec8981d336fb1bb6eff6dbc3157e'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50022ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Reactivating a Resolved Case" status',
              uid: '41d5a7572e6fcab0',
              parentUid: '6ecd083492f9b2cd07065cad93b16a3b',
              status: 'failed',
              time: {
                start: 1580624349156,
                stop: 1580624415962,
                duration: 66806
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: '6ecd083492f9b2cd07065cad93b16a3b'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50040ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Resolving a Case" status',
              uid: '81570cfb5bb231aa',
              parentUid: '93bb10407394879e64b8b35bd4e5a41d',
              status: 'failed',
              time: {
                start: 1580624808542,
                stop: 1580624874918,
                duration: 66376
              },
              flaky: false,
              parameters: ['-- Primary Contact --']
            }
          ],
          uid: '93bb10407394879e64b8b35bd4e5a41d'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50110ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Resolving a Case" status',
              uid: '4a35d507dff1d6fc',
              parentUid: '05dc2643a00e6e6e6a6210f64621807b',
              status: 'failed',
              time: {
                start: 1580625007949,
                stop: 1580625076515,
                duration: 68566
              },
              flaky: false,
              parameters: ['Ultimate Ticket Resolver']
            }
          ],
          uid: '05dc2643a00e6e6e6a6210f64621807b'
        },
        {
          name:
            'By(xpath, //df-modal//button[normalize-space(.)="OK"]|//df-modal//button[normalize-space(.)="Ok"]|//df-alert//button[contains(@class,"info")]|//div[contains(@class,"modal-footer")]//button[contains(normalize-space(.),"Ok")])Element should not be visible\nWait timed out after 50031ms',
          children: [
            {
              name:
                'Administrator can edit an existing workflow: "Assign To" for a "Resolving a Case" status',
              uid: '4d83351c22453508',
              parentUid: 'c72e6f790ef78ddf89d89a4b1f057e97',
              status: 'failed',
              time: {
                start: 1580625076542,
                stop: 1580625141816,
                duration: 65274
              },
              flaky: false,
              parameters: ['Unassigned']
            }
          ],
          uid: 'c72e6f790ef78ddf89d89a4b1f057e97'
        }
      ],
      uid: '8fb3a91ba5aaf9de24cc8a92edc82b5d'
    },
    {
      name: 'Test defects',
      children: [
        {
          children: [
            {
              name: 'User can edit a custom field',
              uid: 'd0f9afcc7bae87dc',
              parentUid: '11b7b522685c9d35faed437d995251a2',
              status: 'broken',
              time: {
                start: 1580598813985,
                stop: 1580598837616,
                duration: 23631
              },
              flaky: false,
              parameters: []
            }
          ],
          uid: '11b7b522685c9d35faed437d995251a2'
        }
      ],
      uid: 'bdbf199525818fae7a8651db9eafe741'
    }
  ],
  name: 'categories'
};
