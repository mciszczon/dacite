window.BENCHMARK_DATA = {
  "lastUpdate": 1673428164335,
  "repoUrl": "https://github.com/mciszczon/dacite",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a86ef2036b60e9a008714ac9d0919f18529203fc",
          "message": "Add performance testing (#202)\n\n* Add pytest-benchmark to setup.py\r\n\r\n* Add pre-commit with black\r\n\r\n* Add pytest benchmark config to pyproject.toml\r\n\r\n* Update gitignore\r\n\r\n* Add performance tests\r\n\r\n* Add performance check to CI action\r\n\r\n* Rename publish to Publish\r\n\r\n* Remove performance Github Pages push\r\n\r\n* Set auto-push explicitly to false\r\n\r\n* Change gh-pages branch to master\r\n\r\n* Configure performance CI step further\r\n\r\n* Fix gh-pages for benchmark\r\n\r\n* Split gh-pages by Python version\r\n\r\n* Remove docs/benchmark dir\r\n\r\n* Add performance test for multiple items parsing\r\n\r\n* Update README.md with performance testing\r\n\r\n* Change GITHUB_TOKEN to BENCHMARK_TOKEN\r\n\r\n* Setup Github Actions not to publish performance on PR tests\r\n\r\n* Do not publish performance for PR runs, only compare performance to the master branch",
          "timestamp": "2022-12-22T17:04:25+01:00",
          "tree_id": "f5d80531a2bf409b0362d7802461fed1c2f9df81",
          "url": "https://github.com/konradhalas/dacite/commit/a86ef2036b60e9a008714ac9d0919f18529203fc"
        },
        "date": 1671725110685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2901.780874289612,
            "unit": "iter/sec",
            "range": "stddev: 0.000004930698550913291",
            "extra": "mean: 344.61595941313493 usec\nrounds: 2045"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 2087.281702478073,
            "unit": "iter/sec",
            "range": "stddev: 0.000009009656981522485",
            "extra": "mean: 479.0920165748471 usec\nrounds: 1810"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 190.8516403032434,
            "unit": "iter/sec",
            "range": "stddev: 0.00009219137969108451",
            "extra": "mean: 5.239672021739525 msec\nrounds: 184"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1565.3367338772755,
            "unit": "iter/sec",
            "range": "stddev: 0.00006954132032971487",
            "extra": "mean: 638.8401794692702 usec\nrounds: 1432"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 2381.180536733192,
            "unit": "iter/sec",
            "range": "stddev: 0.000023085696206779852",
            "extra": "mean: 419.9597571765507 usec\nrounds: 2125"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 21902.31486216785,
            "unit": "iter/sec",
            "range": "stddev: 0.00003970380345455919",
            "extra": "mean: 45.657274415651514 usec\nrounds: 11038"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 1794.9418323016282,
            "unit": "iter/sec",
            "range": "stddev: 0.000007027399507772742",
            "extra": "mean: 557.1211178011904 usec\nrounds: 1528"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 84.606317382691,
            "unit": "iter/sec",
            "range": "stddev: 0.000048033759402340984",
            "extra": "mean: 11.819448369047945 msec\nrounds: 84"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9e99e831b7f71fcbae21b7dca9856684a7093f7",
          "message": "Fix tests (#203)\n\n* Fix performance tests to properly create dataclass instances\r\n\r\n* Add missing tests to have 100% coverage\r\n\r\n* Disable commenting on alerts",
          "timestamp": "2022-12-23T14:16:17+01:00",
          "tree_id": "8ca9f932da5b1e2e3634a8c70240a6b17f079c3b",
          "url": "https://github.com/konradhalas/dacite/commit/e9e99e831b7f71fcbae21b7dca9856684a7093f7"
        },
        "date": 1671801424590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2875.8911653937457,
            "unit": "iter/sec",
            "range": "stddev: 0.00004364248294320432",
            "extra": "mean: 347.71830451486767 usec\nrounds: 2082"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 67.57033027824292,
            "unit": "iter/sec",
            "range": "stddev: 0.000038492079210394805",
            "extra": "mean: 14.799394880595864 msec\nrounds: 67"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 66.76375218999206,
            "unit": "iter/sec",
            "range": "stddev: 0.0012475878892558765",
            "extra": "mean: 14.978187522388847 msec\nrounds: 67"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1545.2083206857308,
            "unit": "iter/sec",
            "range": "stddev: 0.00010388154671122004",
            "extra": "mean: 647.1619306037784 usec\nrounds: 1441"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 67.20563277090149,
            "unit": "iter/sec",
            "range": "stddev: 0.00004470555353438372",
            "extra": "mean: 14.879705149253166 msec\nrounds: 67"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 22463.475445038643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014654406404094735",
            "extra": "mean: 44.51670902157144 usec\nrounds: 11262"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 66.72020869061822,
            "unit": "iter/sec",
            "range": "stddev: 0.00003262820717441885",
            "extra": "mean: 14.98796271212224 msec\nrounds: 66"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.6942137652332065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002608591572875441",
            "extra": "mean: 371.1657972000012 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "halas.konrad@gmail.com",
            "name": "Konrad Hałas",
            "username": "konradhalas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6eecf2984378523c1830fdb84ab3b4c280f71ab6",
          "message": "Fix set's casting (#206)\n\n* Fix problem with casting sets. Fix #94.\r\n\r\n* Update changelog\r\n\r\n* Check if value is None",
          "timestamp": "2023-01-04T09:33:06+01:00",
          "tree_id": "72d8b8052d0e8d0f592bb81d9becb7f57a5a9b32",
          "url": "https://github.com/konradhalas/dacite/commit/6eecf2984378523c1830fdb84ab3b4c280f71ab6"
        },
        "date": 1672821241714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3101.6261009297705,
            "unit": "iter/sec",
            "range": "stddev: 0.000011339934689147369",
            "extra": "mean: 322.41152461937025 usec\nrounds: 2234"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 72.0782694323824,
            "unit": "iter/sec",
            "range": "stddev: 0.00018223482446557405",
            "extra": "mean: 13.873807013889442 msec\nrounds: 72"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 72.3616609038071,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426390711789632",
            "extra": "mean: 13.819472736112774 msec\nrounds: 72"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1683.6365386828954,
            "unit": "iter/sec",
            "range": "stddev: 0.000005220138045690551",
            "extra": "mean: 593.952422048465 usec\nrounds: 1533"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 72.20561755738146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003213166461863985",
            "extra": "mean: 13.849337957746915 msec\nrounds: 71"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23636.821328027127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010143815089843508",
            "extra": "mean: 42.30687308256038 usec\nrounds: 11669"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 72.0304923081635,
            "unit": "iter/sec",
            "range": "stddev: 0.000025654636456298253",
            "extra": "mean: 13.88300937499862 msec\nrounds: 72"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.8444489348811377,
            "unit": "iter/sec",
            "range": "stddev: 0.0038511943150142695",
            "extra": "mean: 351.5619450000031 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c0e180a1e5295ca4b2eb023b492796939f18bf5",
          "message": "Introduce basic cache (#208)",
          "timestamp": "2023-01-04T11:28:30+01:00",
          "tree_id": "279f65374ab9c4c077c290a81fdef4feeeab3528",
          "url": "https://github.com/konradhalas/dacite/commit/3c0e180a1e5295ca4b2eb023b492796939f18bf5"
        },
        "date": 1672828160847,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3223.0580950600506,
            "unit": "iter/sec",
            "range": "stddev: 0.00025217586652950954",
            "extra": "mean: 310.2643422818503 usec\nrounds: 1937"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 76.3682673353709,
            "unit": "iter/sec",
            "range": "stddev: 0.000019534430889614933",
            "extra": "mean: 13.094443999999429 msec\nrounds: 70"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 76.73093102035143,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827901657092213",
            "extra": "mean: 13.032553974026053 msec\nrounds: 77"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1763.8814224756993,
            "unit": "iter/sec",
            "range": "stddev: 0.000004462008359983805",
            "extra": "mean: 566.9315336381558 usec\nrounds: 1531"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 76.67204330864203,
            "unit": "iter/sec",
            "range": "stddev: 0.000020460850596357642",
            "extra": "mean: 13.042563584415204 msec\nrounds: 77"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 26004.664059872393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011523578826034058",
            "extra": "mean: 38.4546402021433 usec\nrounds: 9497"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 76.17190080918243,
            "unit": "iter/sec",
            "range": "stddev: 0.0001968500343038648",
            "extra": "mean: 13.128200679999983 msec\nrounds: 75"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.029444665615424,
            "unit": "iter/sec",
            "range": "stddev: 0.0068680511108458395",
            "extra": "mean: 330.0935024000026 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c0e180a1e5295ca4b2eb023b492796939f18bf5",
          "message": "Introduce basic cache (#208)",
          "timestamp": "2023-01-04T11:28:30+01:00",
          "tree_id": "279f65374ab9c4c077c290a81fdef4feeeab3528",
          "url": "https://github.com/mciszczon/dacite/commit/3c0e180a1e5295ca4b2eb023b492796939f18bf5"
        },
        "date": 1672835255952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3340.7130460389126,
            "unit": "iter/sec",
            "range": "stddev: 0.000004379682082369893",
            "extra": "mean: 299.3372930326061 usec\nrounds: 1952"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 76.79224934334812,
            "unit": "iter/sec",
            "range": "stddev: 0.00007269150246606188",
            "extra": "mean: 13.02214752857245 msec\nrounds: 70"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 77.12373293606817,
            "unit": "iter/sec",
            "range": "stddev: 0.000022841907627025343",
            "extra": "mean: 12.966177361110768 msec\nrounds: 72"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1779.2734184331525,
            "unit": "iter/sec",
            "range": "stddev: 0.000004581073157004623",
            "extra": "mean: 562.0271677416565 usec\nrounds: 1550"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 77.4053263344855,
            "unit": "iter/sec",
            "range": "stddev: 0.00002324581235303726",
            "extra": "mean: 12.919007610390778 msec\nrounds: 77"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 26425.830388553964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011748298971208401",
            "extra": "mean: 37.84176259729337 usec\nrounds: 9625"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 76.94035891139082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000354503059497175",
            "extra": "mean: 12.99707999999923 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.054031830359643,
            "unit": "iter/sec",
            "range": "stddev: 0.006715152096038728",
            "extra": "mean: 327.4360110000032 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "halas.konrad@gmail.com",
            "name": "konradhalas",
            "username": "konradhalas"
          },
          "committer": {
            "email": "halas.konrad@gmail.com",
            "name": "konradhalas",
            "username": "konradhalas"
          },
          "distinct": true,
          "id": "cb0d943c8fa452aef02987d19bb0cd6672ab6eb4",
          "message": "Performance improvement - do not call custom is_instance if it's not necessary",
          "timestamp": "2023-01-05T15:21:23+01:00",
          "tree_id": "3b6041ad4ce165a5b256cfa6a5550c27d6d1fa3d",
          "url": "https://github.com/mciszczon/dacite/commit/cb0d943c8fa452aef02987d19bb0cd6672ab6eb4"
        },
        "date": 1673270319497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3971.5157655918206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034939805587700973",
            "extra": "mean: 251.79303294317492 usec\nrounds: 2307"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 104.47191516103958,
            "unit": "iter/sec",
            "range": "stddev: 0.000021408176641249464",
            "extra": "mean: 9.571950494623719 msec\nrounds: 93"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 104.58551494941133,
            "unit": "iter/sec",
            "range": "stddev: 0.000016090328790621885",
            "extra": "mean: 9.561553533333045 msec\nrounds: 105"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1866.0053588302185,
            "unit": "iter/sec",
            "range": "stddev: 0.000006818492828240582",
            "extra": "mean: 535.9041415759335 usec\nrounds: 1561"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 104.87934746425704,
            "unit": "iter/sec",
            "range": "stddev: 0.000017341275323993915",
            "extra": "mean: 9.534765653846204 msec\nrounds: 104"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 26356.179742557237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010976831312665816",
            "extra": "mean: 37.94176583130913 usec\nrounds: 9775"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 104.77720208809228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000168345346506624",
            "extra": "mean: 9.544060922329667 msec\nrounds: 103"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 4.1391399442370576,
            "unit": "iter/sec",
            "range": "stddev: 0.005952043916544253",
            "extra": "mean: 241.59608360000107 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bf8feae363d3708da45e69831eb9897369dc0d8",
          "message": "Improve caching (#210)\n\n* Rework cache interface\r\n\r\n* Silence pylint warnings for global\r\n\r\n* Allow providing None to set_cache_size(size: int)",
          "timestamp": "2023-01-10T11:44:52+01:00",
          "tree_id": "5acc4f964ccc3cffc988a0b91e9e72ae4d3b12ee",
          "url": "https://github.com/mciszczon/dacite/commit/9bf8feae363d3708da45e69831eb9897369dc0d8"
        },
        "date": 1673350366545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 9508.398009374587,
            "unit": "iter/sec",
            "range": "stddev: 0.000013295554087433512",
            "extra": "mean: 105.17018734534176 usec\nrounds: 2829"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 265.5890792099342,
            "unit": "iter/sec",
            "range": "stddev: 0.00027548817578988244",
            "extra": "mean: 3.7652150569397196 msec\nrounds: 281"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 268.636368375806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002910342249591118",
            "extra": "mean: 3.722504164443813 msec\nrounds: 225"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 4834.183248611798,
            "unit": "iter/sec",
            "range": "stddev: 0.00002501028193203282",
            "extra": "mean: 206.8601764914815 usec\nrounds: 2782"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 262.0759202289399,
            "unit": "iter/sec",
            "range": "stddev: 0.0002895206543626372",
            "extra": "mean: 3.8156882140352186 msec\nrounds: 285"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 77777.97259083077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029842131519950872",
            "extra": "mean: 12.857110653433127 usec\nrounds: 10194"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 264.17577681844836,
            "unit": "iter/sec",
            "range": "stddev: 0.00047904903631811654",
            "extra": "mean: 3.785358415685622 msec\nrounds: 255"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 9.61177905557937,
            "unit": "iter/sec",
            "range": "stddev: 0.0077661694021762765",
            "extra": "mean: 104.03901236364018 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "halas.konrad@gmail.com",
            "name": "konradhalas",
            "username": "konradhalas"
          },
          "committer": {
            "email": "halas.konrad@gmail.com",
            "name": "konradhalas",
            "username": "konradhalas"
          },
          "distinct": true,
          "id": "c831d5774901414543a92b8ef9312aee834d006d",
          "message": "Inline create_instance function",
          "timestamp": "2023-01-10T15:47:00+01:00",
          "tree_id": "f67226b0b4b3334491361a3b3f752fa2c5697ad8",
          "url": "https://github.com/mciszczon/dacite/commit/c831d5774901414543a92b8ef9312aee834d006d"
        },
        "date": 1673428163461,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 15608.710224885417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014954300657604925",
            "extra": "mean: 64.06679255315223 usec\nrounds: 4136"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 435.7124158873493,
            "unit": "iter/sec",
            "range": "stddev: 0.00000811945082119731",
            "extra": "mean: 2.295091816384098 msec\nrounds: 354"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 435.46008676991846,
            "unit": "iter/sec",
            "range": "stddev: 0.00000835946495701865",
            "extra": "mean: 2.2964217166666856 msec\nrounds: 420"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 5360.969196614605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002185697967566235",
            "extra": "mean: 186.53343515413025 usec\nrounds: 3277"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 424.0119986221559,
            "unit": "iter/sec",
            "range": "stddev: 0.000023215563387512543",
            "extra": "mean: 2.358423825857618 msec\nrounds: 379"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 215393.3580721836,
            "unit": "iter/sec",
            "range": "stddev: 2.5304691621784596e-7",
            "extra": "mean: 4.642668692062805 usec\nrounds: 12837"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 432.8604076542087,
            "unit": "iter/sec",
            "range": "stddev: 0.000013378604274498384",
            "extra": "mean: 2.3102135984653316 msec\nrounds: 391"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 16.781209077798156,
            "unit": "iter/sec",
            "range": "stddev: 0.0035025851271765496",
            "extra": "mean: 59.590461888888456 msec\nrounds: 18"
          }
        ]
      }
    ]
  }
}