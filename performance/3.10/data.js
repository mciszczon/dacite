window.BENCHMARK_DATA = {
  "lastUpdate": 1673428178259,
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
        "date": 1671725126884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2788.0856778819325,
            "unit": "iter/sec",
            "range": "stddev: 0.00010097620705123894",
            "extra": "mean: 358.66903514948126 usec\nrounds: 1707"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 2092.73367715835,
            "unit": "iter/sec",
            "range": "stddev: 0.00014058335506003528",
            "extra": "mean: 477.84388950908703 usec\nrounds: 1792"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 182.33652044345723,
            "unit": "iter/sec",
            "range": "stddev: 0.0008861981070070033",
            "extra": "mean: 5.484364830303434 msec\nrounds: 165"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1452.4153658164475,
            "unit": "iter/sec",
            "range": "stddev: 0.00048546415397584305",
            "extra": "mean: 688.5082763069428 usec\nrounds: 1473"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 2403.530541666502,
            "unit": "iter/sec",
            "range": "stddev: 0.00008675206953266443",
            "extra": "mean: 416.0546257534319 usec\nrounds: 1825"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 19227.870642596015,
            "unit": "iter/sec",
            "range": "stddev: 0.00002627318389841662",
            "extra": "mean: 52.00783896396064 usec\nrounds: 10153"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 1685.599319807805,
            "unit": "iter/sec",
            "range": "stddev: 0.00024278830929571328",
            "extra": "mean: 593.2607994372124 usec\nrounds: 1421"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 84.52554078055277,
            "unit": "iter/sec",
            "range": "stddev: 0.0013077314081634522",
            "extra": "mean: 11.8307435925932 msec\nrounds: 81"
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
        "date": 1671801429544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3266.098900342353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002486780626573428",
            "extra": "mean: 306.17566415247865 usec\nrounds: 2254"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 78.75666545300871,
            "unit": "iter/sec",
            "range": "stddev: 0.00015951603769233976",
            "extra": "mean: 12.69733798717855 msec\nrounds: 78"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 78.73820444637435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000797538707733119",
            "extra": "mean: 12.700315012657708 msec\nrounds: 79"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1909.867738827753,
            "unit": "iter/sec",
            "range": "stddev: 0.000004746602264526158",
            "extra": "mean: 523.5964667447519 usec\nrounds: 1714"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 78.59406245336474,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008872320554982",
            "extra": "mean: 12.723607468355114 msec\nrounds: 79"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23393.696955572337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012031406627198388",
            "extra": "mean: 42.74655698494896 usec\nrounds: 11038"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 78.92553648330995,
            "unit": "iter/sec",
            "range": "stddev: 0.000045712465355140075",
            "extra": "mean: 12.67017044871739 msec\nrounds: 78"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.148040236943249,
            "unit": "iter/sec",
            "range": "stddev: 0.002605894860578615",
            "extra": "mean: 317.65794739999933 msec\nrounds: 5"
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
        "date": 1672821240177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2953.626540807768,
            "unit": "iter/sec",
            "range": "stddev: 0.00009003375426276028",
            "extra": "mean: 338.5668384895121 usec\nrounds: 1907"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 68.21444342652438,
            "unit": "iter/sec",
            "range": "stddev: 0.0009862732104279513",
            "extra": "mean: 14.659651970584896 msec\nrounds: 68"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 68.6953291085596,
            "unit": "iter/sec",
            "range": "stddev: 0.0015905451412462914",
            "extra": "mean: 14.557030484848463 msec\nrounds: 66"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1652.8542685828306,
            "unit": "iter/sec",
            "range": "stddev: 0.0001744601417863118",
            "extra": "mean: 605.0140166667006 usec\nrounds: 600"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 68.31992125636596,
            "unit": "iter/sec",
            "range": "stddev: 0.0010131017643336055",
            "extra": "mean: 14.637019212120673 msec\nrounds: 33"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 20100.65987507403,
            "unit": "iter/sec",
            "range": "stddev: 0.000004464756200635411",
            "extra": "mean: 49.749610520998736 usec\nrounds: 9980"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 72.67179045787957,
            "unit": "iter/sec",
            "range": "stddev: 0.00012457063170209906",
            "extra": "mean: 13.760497624997944 msec\nrounds: 72"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.931353367507706,
            "unit": "iter/sec",
            "range": "stddev: 0.0013887399593770875",
            "extra": "mean: 341.1393559999965 msec\nrounds: 5"
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
        "date": 1672828158415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3907.275260454984,
            "unit": "iter/sec",
            "range": "stddev: 0.000003615036146757101",
            "extra": "mean: 255.93282616171624 usec\nrounds: 2324"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 92.69320319876297,
            "unit": "iter/sec",
            "range": "stddev: 0.00003468125479778736",
            "extra": "mean: 10.78827751648295 msec\nrounds: 91"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 92.75169027613637,
            "unit": "iter/sec",
            "range": "stddev: 0.000018400428527205057",
            "extra": "mean: 10.781474677419276 msec\nrounds: 93"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 2200.1235980820193,
            "unit": "iter/sec",
            "range": "stddev: 0.000004604966300422414",
            "extra": "mean: 454.5199191862495 usec\nrounds: 1819"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 92.52229566830275,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386749173372284",
            "extra": "mean: 10.808205663044204 msec\nrounds: 92"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 33526.790613056386,
            "unit": "iter/sec",
            "range": "stddev: 6.915717951541211e-7",
            "extra": "mean: 29.826893111879563 usec\nrounds: 9814"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 92.10883198461042,
            "unit": "iter/sec",
            "range": "stddev: 0.000024017087964291396",
            "extra": "mean: 10.85672218888934 msec\nrounds: 90"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.6379098829973033,
            "unit": "iter/sec",
            "range": "stddev: 0.004604105488290174",
            "extra": "mean: 274.88311479999936 msec\nrounds: 5"
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
        "date": 1672835256904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3352.7148305035053,
            "unit": "iter/sec",
            "range": "stddev: 0.00007391479835143067",
            "extra": "mean: 298.26574896911876 usec\nrounds: 1940"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 79.85775065828348,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648724493289028",
            "extra": "mean: 12.522266051282426 msec\nrounds: 78"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 81.80532415003105,
            "unit": "iter/sec",
            "range": "stddev: 0.00033371398636139466",
            "extra": "mean: 12.224143237498808 msec\nrounds: 80"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1998.4731690747888,
            "unit": "iter/sec",
            "range": "stddev: 0.000037801510148877284",
            "extra": "mean: 500.38199935551756 usec\nrounds: 1552"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 83.46562145795144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789384699937998",
            "extra": "mean: 11.980980702381553 msec\nrounds: 84"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 30141.991955330843,
            "unit": "iter/sec",
            "range": "stddev: 0.000004367167560956672",
            "extra": "mean: 33.17630770660273 usec\nrounds: 10835"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 83.38351120300456,
            "unit": "iter/sec",
            "range": "stddev: 0.00036888748853605594",
            "extra": "mean: 11.992778734939707 msec\nrounds: 83"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.2728969178048213,
            "unit": "iter/sec",
            "range": "stddev: 0.008630856927266098",
            "extra": "mean: 305.5397176000014 msec\nrounds: 5"
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
        "date": 1673270328372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3677.0331632197435,
            "unit": "iter/sec",
            "range": "stddev: 0.00013994243808167513",
            "extra": "mean: 271.9583848203217 usec\nrounds: 2253"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 100.49110158361988,
            "unit": "iter/sec",
            "range": "stddev: 0.0007130970322998263",
            "extra": "mean: 9.951129843749277 msec\nrounds: 96"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 103.47944127004887,
            "unit": "iter/sec",
            "range": "stddev: 0.0009691988082768387",
            "extra": "mean: 9.663755309523888 msec\nrounds: 84"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1849.7628678571405,
            "unit": "iter/sec",
            "range": "stddev: 0.00021386634216092956",
            "extra": "mean: 540.6098356588003 usec\nrounds: 1290"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 96.4705773182827,
            "unit": "iter/sec",
            "range": "stddev: 0.001028262600352393",
            "extra": "mean: 10.365854831579663 msec\nrounds: 95"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 26460.456558621656,
            "unit": "iter/sec",
            "range": "stddev: 0.00003087829692173963",
            "extra": "mean: 37.79224284299691 usec\nrounds: 8104"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 100.29445628518883,
            "unit": "iter/sec",
            "range": "stddev: 0.0014349249149453061",
            "extra": "mean: 9.970640821427702 msec\nrounds: 112"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.8885528768744617,
            "unit": "iter/sec",
            "range": "stddev: 0.006014638723359925",
            "extra": "mean: 257.16507700000193 msec\nrounds: 5"
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
        "date": 1673350355300,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 11632.92979451857,
            "unit": "iter/sec",
            "range": "stddev: 0.000003800379805783705",
            "extra": "mean: 85.962867279677 usec\nrounds: 3481"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 333.53685958813486,
            "unit": "iter/sec",
            "range": "stddev: 0.000013347586690092371",
            "extra": "mean: 2.9981693814436023 msec\nrounds: 291"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 334.22769722214554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000129561420240791",
            "extra": "mean: 2.991972264151845 msec\nrounds: 318"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 5972.54805882059,
            "unit": "iter/sec",
            "range": "stddev: 0.000044793584525317034",
            "extra": "mean: 167.43272555557667 usec\nrounds: 3283"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 328.38208928540763,
            "unit": "iter/sec",
            "range": "stddev: 0.000013416143286118645",
            "extra": "mean: 3.0452330764327016 msec\nrounds: 314"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 83917.53486968967,
            "unit": "iter/sec",
            "range": "stddev: 5.833244568574043e-7",
            "extra": "mean: 11.916460624741159 usec\nrounds: 10184"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 325.17572107168525,
            "unit": "iter/sec",
            "range": "stddev: 0.0004487730544345221",
            "extra": "mean: 3.0752603444817126 msec\nrounds: 299"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 13.107090160710507,
            "unit": "iter/sec",
            "range": "stddev: 0.00024223872199207066",
            "extra": "mean: 76.2945846666696 msec\nrounds: 12"
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
        "date": 1673428176958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 16434.46918958714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122207386718773",
            "extra": "mean: 60.84772124149886 usec\nrounds: 3512"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 464.4496942594234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913287560777871",
            "extra": "mean: 2.1530857105946097 msec\nrounds: 387"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 439.5751247872682,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066914844203401",
            "extra": "mean: 2.2749239973120603 msec\nrounds: 372"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 7070.119213871192,
            "unit": "iter/sec",
            "range": "stddev: 0.00007651719992992976",
            "extra": "mean: 141.4403307426633 usec\nrounds: 3474"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 432.4739025326338,
            "unit": "iter/sec",
            "range": "stddev: 0.0007225499099454928",
            "extra": "mean: 2.3122782534248794 msec\nrounds: 438"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 195124.89556801144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037965979895934707",
            "extra": "mean: 5.124922666013403 usec\nrounds: 11793"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 466.5493187060506,
            "unit": "iter/sec",
            "range": "stddev: 0.0002716580923778629",
            "extra": "mean: 2.1433961210648556 msec\nrounds: 413"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 17.399403656754693,
            "unit": "iter/sec",
            "range": "stddev: 0.005452070428597261",
            "extra": "mean: 57.4732341249975 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}