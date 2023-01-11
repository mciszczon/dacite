window.BENCHMARK_DATA = {
  "lastUpdate": 1673428188760,
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
        "date": 1671725121407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2142.6345437031423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760057094735483",
            "extra": "mean: 466.7151488520704 usec\nrounds: 1263"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 1631.0507873159418,
            "unit": "iter/sec",
            "range": "stddev: 0.00014562930487661303",
            "extra": "mean: 613.1016935687211 usec\nrounds: 1586"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 148.45903923662752,
            "unit": "iter/sec",
            "range": "stddev: 0.00029605172044947826",
            "extra": "mean: 6.73586468794338 msec\nrounds: 141"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1233.7321445546418,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559559726171633",
            "extra": "mean: 810.5487114149761 usec\nrounds: 1244"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 1854.4907149468913,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641838641904423",
            "extra": "mean: 539.2316024772537 usec\nrounds: 1776"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 16087.18393259665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034545485480057",
            "extra": "mean: 62.16128342846571 usec\nrounds: 9124"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 1407.820439972463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000925158966729005",
            "extra": "mean: 710.3178584476015 usec\nrounds: 1314"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 66.9533196173809,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150359785191927",
            "extra": "mean: 14.93577922222101 msec\nrounds: 63"
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
        "date": 1671801429934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2623.1421820818773,
            "unit": "iter/sec",
            "range": "stddev: 0.00030969966589247644",
            "extra": "mean: 381.22218720387554 usec\nrounds: 1688"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 61.5328925711401,
            "unit": "iter/sec",
            "range": "stddev: 0.0005154380675382599",
            "extra": "mean: 16.251470688524332 msec\nrounds: 61"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 61.3211745375804,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342557622369309",
            "extra": "mean: 16.307580661018726 msec\nrounds: 59"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1457.534704988466,
            "unit": "iter/sec",
            "range": "stddev: 0.000041186015656963954",
            "extra": "mean: 686.0900097798449 usec\nrounds: 1227"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 60.34281974065486,
            "unit": "iter/sec",
            "range": "stddev: 0.00031145511782841795",
            "extra": "mean: 16.571979968749595 msec\nrounds: 64"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 20152.546098190833,
            "unit": "iter/sec",
            "range": "stddev: 0.00000475537379734313",
            "extra": "mean: 49.62152152525152 usec\nrounds: 9756"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 60.81220661530606,
            "unit": "iter/sec",
            "range": "stddev: 0.00047079489505880384",
            "extra": "mean: 16.444067000001052 msec\nrounds: 59"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.421872511904388,
            "unit": "iter/sec",
            "range": "stddev: 0.0061868568270319595",
            "extra": "mean: 412.90365000000406 msec\nrounds: 5"
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
        "date": 1672821243941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2225.236108861533,
            "unit": "iter/sec",
            "range": "stddev: 0.00028444387345159973",
            "extra": "mean: 449.3905145695377 usec\nrounds: 1510"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 56.738807664974786,
            "unit": "iter/sec",
            "range": "stddev: 0.0010364900387559947",
            "extra": "mean: 17.62462133333313 msec\nrounds: 54"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 57.0329295145245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008323708439771847",
            "extra": "mean: 17.53373022413887 msec\nrounds: 58"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1310.0254136319413,
            "unit": "iter/sec",
            "range": "stddev: 0.00042426126700599267",
            "extra": "mean: 763.3439699674066 usec\nrounds: 1232"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 54.66219593775678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017487910846503093",
            "extra": "mean: 18.29417905454601 msec\nrounds: 55"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 17463.18253570088,
            "unit": "iter/sec",
            "range": "stddev: 0.000019868226718277253",
            "extra": "mean: 57.263330893761704 usec\nrounds: 9018"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 55.604809176435225,
            "unit": "iter/sec",
            "range": "stddev: 0.0010069880081927539",
            "extra": "mean: 17.984055962263607 msec\nrounds: 53"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.252643024934861,
            "unit": "iter/sec",
            "range": "stddev: 0.00791752861381728",
            "extra": "mean: 443.9229779999948 msec\nrounds: 5"
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
        "date": 1672828163475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3293.703461895206,
            "unit": "iter/sec",
            "range": "stddev: 0.000010050981969252675",
            "extra": "mean: 303.60960285860017 usec\nrounds: 1959"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 77.44821225297261,
            "unit": "iter/sec",
            "range": "stddev: 0.000022730892018944293",
            "extra": "mean: 12.911853881580308 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 77.46306883980284,
            "unit": "iter/sec",
            "range": "stddev: 0.00010171561845913724",
            "extra": "mean: 12.909377526315742 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1802.83608612847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043228797303756054",
            "extra": "mean: 554.6815973422556 usec\nrounds: 1505"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 77.12437450685826,
            "unit": "iter/sec",
            "range": "stddev: 0.000022615733983005863",
            "extra": "mean: 12.966069500000618 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 27441.177951579197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011625960888835084",
            "extra": "mean: 36.44158431407466 usec\nrounds: 9346"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 77.20539438885191,
            "unit": "iter/sec",
            "range": "stddev: 0.00002096056148141801",
            "extra": "mean: 12.95246281578992 msec\nrounds: 76"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.033951054890166,
            "unit": "iter/sec",
            "range": "stddev: 0.006575207993930999",
            "extra": "mean: 329.60320780000245 msec\nrounds: 5"
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
        "date": 1672835263122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2440.740941217553,
            "unit": "iter/sec",
            "range": "stddev: 0.00007546357446495508",
            "extra": "mean: 409.7116507174884 usec\nrounds: 1672"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 57.55948988099998,
            "unit": "iter/sec",
            "range": "stddev: 0.0010526060080656644",
            "extra": "mean: 17.3733297857126 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 57.26721617519211,
            "unit": "iter/sec",
            "range": "stddev: 0.0013944979201609268",
            "extra": "mean: 17.461997750000556 msec\nrounds: 60"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1335.7373541041786,
            "unit": "iter/sec",
            "range": "stddev: 0.00012689905554234086",
            "extra": "mean: 748.6501720771722 usec\nrounds: 1232"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 55.65480906108543,
            "unit": "iter/sec",
            "range": "stddev: 0.0011853886281338803",
            "extra": "mean: 17.96789921428754 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 18905.532877714264,
            "unit": "iter/sec",
            "range": "stddev: 0.000026341288992145746",
            "extra": "mean: 52.894568297452984 usec\nrounds: 9034"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 57.32168390181209,
            "unit": "iter/sec",
            "range": "stddev: 0.0012007699695228973",
            "extra": "mean: 17.445405157896754 msec\nrounds: 38"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.296727180212761,
            "unit": "iter/sec",
            "range": "stddev: 0.010296946120929351",
            "extra": "mean: 435.4021708000005 msec\nrounds: 5"
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
        "date": 1673270319112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3837.0785882531527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041526830538841215",
            "extra": "mean: 260.614938422529 usec\nrounds: 2371"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 103.62726365908102,
            "unit": "iter/sec",
            "range": "stddev: 0.000021969602524309667",
            "extra": "mean: 9.649970139999624 msec\nrounds: 100"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 102.65831285651613,
            "unit": "iter/sec",
            "range": "stddev: 0.000018770632258080162",
            "extra": "mean: 9.741052352941782 msec\nrounds: 102"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1847.7627762969287,
            "unit": "iter/sec",
            "range": "stddev: 0.000004440402086428383",
            "extra": "mean: 541.1950131412884 usec\nrounds: 1598"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 102.69293712683113,
            "unit": "iter/sec",
            "range": "stddev: 0.00001922553872310367",
            "extra": "mean: 9.737768029411292 msec\nrounds: 102"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 28343.950314552636,
            "unit": "iter/sec",
            "range": "stddev: 9.924195556054114e-7",
            "extra": "mean: 35.28089729562396 usec\nrounds: 10428"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 102.6720901199594,
            "unit": "iter/sec",
            "range": "stddev: 0.000019957825992496184",
            "extra": "mean: 9.739745229999954 msec\nrounds: 100"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 4.06577067109977,
            "unit": "iter/sec",
            "range": "stddev: 0.005115371807877435",
            "extra": "mean: 245.95582999999976 msec\nrounds: 5"
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
        "date": 1673350354738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 11173.80774386917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021984933122938036",
            "extra": "mean: 89.49500679825805 usec\nrounds: 2942"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 314.33430893291,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609723004941541",
            "extra": "mean: 3.1813262872728125 msec\nrounds: 275"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 314.00034192156375,
            "unit": "iter/sec",
            "range": "stddev: 0.000010230054174342535",
            "extra": "mean: 3.1847099078949306 msec\nrounds: 304"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6110.263046901579,
            "unit": "iter/sec",
            "range": "stddev: 0.000002363201518005089",
            "extra": "mean: 163.65907528434224 usec\nrounds: 2816"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 310.4213103897958,
            "unit": "iter/sec",
            "range": "stddev: 0.00001085364153903786",
            "extra": "mean: 3.2214283186431394 msec\nrounds: 295"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 79077.67775553571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010028984037917441",
            "extra": "mean: 12.645793710475981 usec\nrounds: 10112"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 313.4691788884459,
            "unit": "iter/sec",
            "range": "stddev: 0.00000965553168875322",
            "extra": "mean: 3.1901062922548737 msec\nrounds: 284"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 12.517359315711076,
            "unit": "iter/sec",
            "range": "stddev: 0.00012885638004391992",
            "extra": "mean: 79.88905445454914 msec\nrounds: 11"
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
        "date": 1673428188216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 18622.28840019632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013262269795020303",
            "extra": "mean: 53.69909317855144 usec\nrounds: 4046"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 522.1892174000697,
            "unit": "iter/sec",
            "range": "stddev: 0.000007788695129979127",
            "extra": "mean: 1.9150146473320622 msec\nrounds: 431"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 522.0900764786643,
            "unit": "iter/sec",
            "range": "stddev: 0.000007426895484163898",
            "extra": "mean: 1.915378293999936 msec\nrounds: 500"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6886.881089480882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019175928913273154",
            "extra": "mean: 145.2036106050116 usec\nrounds: 3621"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 512.1758388889607,
            "unit": "iter/sec",
            "range": "stddev: 0.000013177537577410361",
            "extra": "mean: 1.9524544581588497 msec\nrounds: 478"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 207231.52980739324,
            "unit": "iter/sec",
            "range": "stddev: 3.8334146982620046e-7",
            "extra": "mean: 4.825520522525833 usec\nrounds: 12937"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 518.4249551207487,
            "unit": "iter/sec",
            "range": "stddev: 0.000016067196129787985",
            "extra": "mean: 1.9289194899328976 msec\nrounds: 447"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 20.544723755856023,
            "unit": "iter/sec",
            "range": "stddev: 0.002066869337995939",
            "extra": "mean: 48.674297687500534 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}