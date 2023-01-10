window.BENCHMARK_DATA = {
  "lastUpdate": 1673350401362,
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
        "date": 1671725118470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3584.575971137575,
            "unit": "iter/sec",
            "range": "stddev: 0.000006696285385901853",
            "extra": "mean: 278.97302443910746 usec\nrounds: 2496"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 2831.366139223747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031432843439089414",
            "extra": "mean: 353.18639512802895 usec\nrounds: 2422"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 242.71384852569358,
            "unit": "iter/sec",
            "range": "stddev: 0.000009027251794077782",
            "extra": "mean: 4.120078051064072 msec\nrounds: 235"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2087.7335349365812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031160255139504485",
            "extra": "mean: 478.9883302949276 usec\nrounds: 1865"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 3095.405624628232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027526409385778228",
            "extra": "mean: 323.0594375236697 usec\nrounds: 2633"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23195.858198186947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011440955030356873",
            "extra": "mean: 43.11114473350948 usec\nrounds: 11877"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 2325.564581595309,
            "unit": "iter/sec",
            "range": "stddev: 0.000005000548480684109",
            "extra": "mean: 430.00310888550433 usec\nrounds: 1947"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 114.15221558696886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000181576414784388",
            "extra": "mean: 8.760232947367829 msec\nrounds: 114"
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
        "date": 1671801439695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2714.842219821526,
            "unit": "iter/sec",
            "range": "stddev: 0.00012031160992853347",
            "extra": "mean: 368.3455313531038 usec\nrounds: 1212"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 64.11060881955825,
            "unit": "iter/sec",
            "range": "stddev: 0.0014688173203776195",
            "extra": "mean: 15.598042483335917 msec\nrounds: 60"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 65.27193235533889,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728686575066078",
            "extra": "mean: 15.320520841270994 msec\nrounds: 63"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1566.7055653151258,
            "unit": "iter/sec",
            "range": "stddev: 0.00043506306787573744",
            "extra": "mean: 638.2820244841989 usec\nrounds: 1307"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 64.44202486121853,
            "unit": "iter/sec",
            "range": "stddev: 0.0014276099976825631",
            "extra": "mean: 15.517823999999791 msec\nrounds: 65"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 16962.450638291186,
            "unit": "iter/sec",
            "range": "stddev: 0.00005009293642218399",
            "extra": "mean: 58.95374561872511 usec\nrounds: 9757"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 64.69479456259327,
            "unit": "iter/sec",
            "range": "stddev: 0.0016925314551242824",
            "extra": "mean: 15.457194149252357 msec\nrounds: 67"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.471698746568637,
            "unit": "iter/sec",
            "range": "stddev: 0.020068648690281868",
            "extra": "mean: 404.580049000009 msec\nrounds: 5"
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
        "date": 1672821241348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3786.8794330011383,
            "unit": "iter/sec",
            "range": "stddev: 0.000013720620056826743",
            "extra": "mean: 264.0696694184136 usec\nrounds: 2423"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 90.06231217087335,
            "unit": "iter/sec",
            "range": "stddev: 0.00002326636020153",
            "extra": "mean: 11.103423573033753 msec\nrounds: 89"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 90.10325848619728,
            "unit": "iter/sec",
            "range": "stddev: 0.000021978542321735292",
            "extra": "mean: 11.098377759037293 msec\nrounds: 83"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2267.059672179144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036766044823218116",
            "extra": "mean: 441.0999905612452 usec\nrounds: 2013"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 89.77544763841243,
            "unit": "iter/sec",
            "range": "stddev: 0.000022657600342669155",
            "extra": "mean: 11.138902966295293 msec\nrounds: 89"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 25598.50315005193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013359529258305635",
            "extra": "mean: 39.06478414531716 usec\nrounds: 11656"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 89.77490429584371,
            "unit": "iter/sec",
            "range": "stddev: 0.000031009903844523315",
            "extra": "mean: 11.138970382019075 msec\nrounds: 89"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.5807664686484615,
            "unit": "iter/sec",
            "range": "stddev: 0.0012957377585973695",
            "extra": "mean: 279.2698180000116 msec\nrounds: 5"
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
        "date": 1672828171145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3633.5762464272743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000800140395999618",
            "extra": "mean: 275.21095807009783 usec\nrounds: 1741"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 86.00589037141947,
            "unit": "iter/sec",
            "range": "stddev: 0.0003629930675515066",
            "extra": "mean: 11.627110604651202 msec\nrounds: 86"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 85.84925746503633,
            "unit": "iter/sec",
            "range": "stddev: 0.00039230644280471817",
            "extra": "mean: 11.648324394736532 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2063.7692516037077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006345389901075804",
            "extra": "mean: 484.5502951567492 usec\nrounds: 1755"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 86.71748886230647,
            "unit": "iter/sec",
            "range": "stddev: 0.0006013266100137278",
            "extra": "mean: 11.53169923529313 msec\nrounds: 85"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 29245.26659878056,
            "unit": "iter/sec",
            "range": "stddev: 0.000035240986752529785",
            "extra": "mean: 34.193567585453195 usec\nrounds: 10594"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 88.22855322352795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993541572000873",
            "extra": "mean: 11.334199229885249 msec\nrounds: 87"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.4576645635807224,
            "unit": "iter/sec",
            "range": "stddev: 0.004837283638826713",
            "extra": "mean: 289.2125541999974 msec\nrounds: 5"
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
        "date": 1672835252095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 4268.453521068631,
            "unit": "iter/sec",
            "range": "stddev: 0.00006557386055798664",
            "extra": "mean: 234.27688624559386 usec\nrounds: 2312"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 101.48153144015471,
            "unit": "iter/sec",
            "range": "stddev: 0.000023183146153399528",
            "extra": "mean: 9.854009747475246 msec\nrounds: 99"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 101.63346471769961,
            "unit": "iter/sec",
            "range": "stddev: 0.000019558906835266006",
            "extra": "mean: 9.839278851484913 msec\nrounds: 101"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2412.842353177691,
            "unit": "iter/sec",
            "range": "stddev: 0.00000411883229108328",
            "extra": "mean: 414.4489583760038 usec\nrounds: 1946"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 101.37470548062504,
            "unit": "iter/sec",
            "range": "stddev: 0.00002136990066522491",
            "extra": "mean: 9.864393640000486 msec\nrounds: 100"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 35434.20080981179,
            "unit": "iter/sec",
            "range": "stddev: 8.310194990759282e-7",
            "extra": "mean: 28.22132225776342 usec\nrounds: 10594"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 101.16688697630352,
            "unit": "iter/sec",
            "range": "stddev: 0.000021248624797499962",
            "extra": "mean: 9.88465722222165 msec\nrounds: 99"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 4.005374395342206,
            "unit": "iter/sec",
            "range": "stddev: 0.005286762582431445",
            "extra": "mean: 249.6645509999979 msec\nrounds: 5"
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
        "date": 1673270332673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 4678.846535991223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029256314592474017",
            "extra": "mean: 213.7278904763539 usec\nrounds: 2310"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 125.7934792318637,
            "unit": "iter/sec",
            "range": "stddev: 0.00007627304886271744",
            "extra": "mean: 7.949537655738028 msec\nrounds: 122"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 125.86220138991538,
            "unit": "iter/sec",
            "range": "stddev: 0.00002055139421060174",
            "extra": "mean: 7.945197119999876 msec\nrounds: 125"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2296.710286303217,
            "unit": "iter/sec",
            "range": "stddev: 0.000004502103536447854",
            "extra": "mean: 435.4053734873105 usec\nrounds: 1818"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 125.203695684749,
            "unit": "iter/sec",
            "range": "stddev: 0.000014583077440446156",
            "extra": "mean: 7.9869846854832875 msec\nrounds: 124"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 30445.82747627607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010294148784538545",
            "extra": "mean: 32.84522323392977 usec\nrounds: 9116"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 125.62336702599886,
            "unit": "iter/sec",
            "range": "stddev: 0.000011869801264241156",
            "extra": "mean: 7.960302479339224 msec\nrounds: 121"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 4.9061116144748445,
            "unit": "iter/sec",
            "range": "stddev: 0.0081422128514741",
            "extra": "mean: 203.82740520000198 msec\nrounds: 5"
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
        "date": 1673350400170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 11411.763404596175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006961854284673773",
            "extra": "mean: 87.62887597172251 usec\nrounds: 2830"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 324.79585518889814,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723347038316587",
            "extra": "mean: 3.0788570236476986 msec\nrounds: 296"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 324.83801198635183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010984317110551865",
            "extra": "mean: 3.078457456025853 msec\nrounds: 307"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 5926.283788673493,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295424170567074",
            "extra": "mean: 168.739809914475 usec\nrounds: 2804"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 316.3048996807784,
            "unit": "iter/sec",
            "range": "stddev: 0.00012920447084464236",
            "extra": "mean: 3.161506511626033 msec\nrounds: 301"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 80612.58838152229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017976118023221194",
            "extra": "mean: 12.40501043419189 usec\nrounds: 9009"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 321.33472691087246,
            "unit": "iter/sec",
            "range": "stddev: 0.00010108647725934394",
            "extra": "mean: 3.1120196986283606 msec\nrounds: 292"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 12.596107207948032,
            "unit": "iter/sec",
            "range": "stddev: 0.004656795264025033",
            "extra": "mean: 79.38960692308245 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}