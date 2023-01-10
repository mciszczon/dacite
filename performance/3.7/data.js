window.BENCHMARK_DATA = {
  "lastUpdate": 1673350355514,
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
        "date": 1671725118290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2450.3486246691355,
            "unit": "iter/sec",
            "range": "stddev: 0.000005920670758460935",
            "extra": "mean: 408.1051936579137 usec\nrounds: 1766"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 1699.3332773590041,
            "unit": "iter/sec",
            "range": "stddev: 0.000008037347925314465",
            "extra": "mean: 588.4660845070582 usec\nrounds: 1491"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 155.8077157330346,
            "unit": "iter/sec",
            "range": "stddev: 0.0016081969887768186",
            "extra": "mean: 6.418167388535679 msec\nrounds: 157"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1276.921708514178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051957093378825486",
            "extra": "mean: 783.1333693618515 usec\nrounds: 1175"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 1946.9181755540192,
            "unit": "iter/sec",
            "range": "stddev: 0.000003919298165478933",
            "extra": "mean: 513.6322689655091 usec\nrounds: 1740"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 20191.526025063155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010655241142321868",
            "extra": "mean: 49.525726721136834 usec\nrounds: 10385"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 1459.7089479496692,
            "unit": "iter/sec",
            "range": "stddev: 0.00000593790277988325",
            "extra": "mean: 685.0680756630397 usec\nrounds: 1282"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 67.5332797323662,
            "unit": "iter/sec",
            "range": "stddev: 0.00016392054621030012",
            "extra": "mean: 14.807514220588596 msec\nrounds: 68"
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
          "id": "a86ef2036b60e9a008714ac9d0919f18529203fc",
          "message": "Add performance testing (#202)\n\n* Add pytest-benchmark to setup.py\r\n\r\n* Add pre-commit with black\r\n\r\n* Add pytest benchmark config to pyproject.toml\r\n\r\n* Update gitignore\r\n\r\n* Add performance tests\r\n\r\n* Add performance check to CI action\r\n\r\n* Rename publish to Publish\r\n\r\n* Remove performance Github Pages push\r\n\r\n* Set auto-push explicitly to false\r\n\r\n* Change gh-pages branch to master\r\n\r\n* Configure performance CI step further\r\n\r\n* Fix gh-pages for benchmark\r\n\r\n* Split gh-pages by Python version\r\n\r\n* Remove docs/benchmark dir\r\n\r\n* Add performance test for multiple items parsing\r\n\r\n* Update README.md with performance testing\r\n\r\n* Change GITHUB_TOKEN to BENCHMARK_TOKEN\r\n\r\n* Setup Github Actions not to publish performance on PR tests\r\n\r\n* Do not publish performance for PR runs, only compare performance to the master branch",
          "timestamp": "2022-12-22T17:04:25+01:00",
          "tree_id": "f5d80531a2bf409b0362d7802461fed1c2f9df81",
          "url": "https://github.com/konradhalas/dacite/commit/a86ef2036b60e9a008714ac9d0919f18529203fc"
        },
        "date": 1671725118290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2450.3486246691355,
            "unit": "iter/sec",
            "range": "stddev: 0.000005920670758460935",
            "extra": "mean: 408.1051936579137 usec\nrounds: 1766"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 1699.3332773590041,
            "unit": "iter/sec",
            "range": "stddev: 0.000008037347925314465",
            "extra": "mean: 588.4660845070582 usec\nrounds: 1491"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 155.8077157330346,
            "unit": "iter/sec",
            "range": "stddev: 0.0016081969887768186",
            "extra": "mean: 6.418167388535679 msec\nrounds: 157"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1276.921708514178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051957093378825486",
            "extra": "mean: 783.1333693618515 usec\nrounds: 1175"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 1946.9181755540192,
            "unit": "iter/sec",
            "range": "stddev: 0.000003919298165478933",
            "extra": "mean: 513.6322689655091 usec\nrounds: 1740"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 20191.526025063155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010655241142321868",
            "extra": "mean: 49.525726721136834 usec\nrounds: 10385"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 1459.7089479496692,
            "unit": "iter/sec",
            "range": "stddev: 0.00000593790277988325",
            "extra": "mean: 685.0680756630397 usec\nrounds: 1282"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 67.5332797323662,
            "unit": "iter/sec",
            "range": "stddev: 0.00016392054621030012",
            "extra": "mean: 14.807514220588596 msec\nrounds: 68"
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
        "date": 1671801430266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2433.972473325346,
            "unit": "iter/sec",
            "range": "stddev: 0.000005621356643325001",
            "extra": "mean: 410.85098987737456 usec\nrounds: 1877"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 56.10852302922706,
            "unit": "iter/sec",
            "range": "stddev: 0.00006115793502544606",
            "extra": "mean: 17.822604232143085 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 56.15710838353357,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100060286973255",
            "extra": "mean: 17.80718467856904 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1266.2612740663067,
            "unit": "iter/sec",
            "range": "stddev: 0.000005988802995779093",
            "extra": "mean: 789.7264336203934 usec\nrounds: 1160"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 56.02762565343845,
            "unit": "iter/sec",
            "range": "stddev: 0.000051499135762578604",
            "extra": "mean: 17.84833799999928 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 19045.793679765848,
            "unit": "iter/sec",
            "range": "stddev: 0.000022974893754168097",
            "extra": "mean: 52.50503165233775 usec\nrounds: 10331"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 38.3215973406615,
            "unit": "iter/sec",
            "range": "stddev: 0.012901918803121073",
            "extra": "mean: 26.094945654547143 msec\nrounds: 55"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.2239576485304626,
            "unit": "iter/sec",
            "range": "stddev: 0.0040098740233559405",
            "extra": "mean: 449.6488503999956 msec\nrounds: 5"
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
        "date": 1672821247893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2297.06227492709,
            "unit": "iter/sec",
            "range": "stddev: 0.00040148249135850465",
            "extra": "mean: 435.33865446975767 usec\nrounds: 1913"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 61.89700527260796,
            "unit": "iter/sec",
            "range": "stddev: 0.0018385194954823444",
            "extra": "mean: 16.15587047540961 msec\nrounds: 61"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 66.5072282549712,
            "unit": "iter/sec",
            "range": "stddev: 0.0011418737836170587",
            "extra": "mean: 15.035959642856612 msec\nrounds: 70"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1466.8534927865958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467428465812503",
            "extra": "mean: 681.7313418944726 usec\nrounds: 1246"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 69.61329736737707,
            "unit": "iter/sec",
            "range": "stddev: 0.00023810052904120826",
            "extra": "mean: 14.365071585714466 msec\nrounds: 70"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 22567.868692954817,
            "unit": "iter/sec",
            "range": "stddev: 0.000020910428125304842",
            "extra": "mean: 44.310785994256406 usec\nrounds: 11738"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 40.07503782503894,
            "unit": "iter/sec",
            "range": "stddev: 0.021084363594114353",
            "extra": "mean: 24.953189173915106 msec\nrounds: 69"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.7822467817650773,
            "unit": "iter/sec",
            "range": "stddev: 0.006109442045006435",
            "extra": "mean: 359.42174739998904 msec\nrounds: 5"
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
        "date": 1672828171239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2873.461771885414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035289792049190705",
            "extra": "mean: 348.01228601132664 usec\nrounds: 1923"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 63.505548277825476,
            "unit": "iter/sec",
            "range": "stddev: 0.000789437920193581",
            "extra": "mean: 15.74665564062494 msec\nrounds: 64"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 64.15018416871338,
            "unit": "iter/sec",
            "range": "stddev: 0.000319679621591889",
            "extra": "mean: 15.58841978333258 msec\nrounds: 60"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1460.3729256769375,
            "unit": "iter/sec",
            "range": "stddev: 0.000004853049277742102",
            "extra": "mean: 684.7566004665983 usec\nrounds: 1284"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 64.42744874072301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000370756452319093",
            "extra": "mean: 15.521334765626449 msec\nrounds: 64"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23500.78437446385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010887465438104233",
            "extra": "mean: 42.55177121179872 usec\nrounds: 9747"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 61.82662569514335,
            "unit": "iter/sec",
            "range": "stddev: 0.00004708967209611343",
            "extra": "mean: 16.17426131147495 msec\nrounds: 61"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.503247726116108,
            "unit": "iter/sec",
            "range": "stddev: 0.01909366009591459",
            "extra": "mean: 399.481037999999 msec\nrounds: 5"
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
        "date": 1672835250999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 2751.473916005549,
            "unit": "iter/sec",
            "range": "stddev: 0.000003005270488832673",
            "extra": "mean: 363.4415700555684 usec\nrounds: 1977"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 62.02208643711266,
            "unit": "iter/sec",
            "range": "stddev: 0.000018852853287636473",
            "extra": "mean: 16.123288612903256 msec\nrounds: 62"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 61.95147359658809,
            "unit": "iter/sec",
            "range": "stddev: 0.000024625868629775044",
            "extra": "mean: 16.141666080644676 msec\nrounds: 62"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1403.0064761406522,
            "unit": "iter/sec",
            "range": "stddev: 0.000009703314550411581",
            "extra": "mean: 712.7550848879683 usec\nrounds: 1072"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 61.98189279578373,
            "unit": "iter/sec",
            "range": "stddev: 0.000017089996713628412",
            "extra": "mean: 16.133744145161444 msec\nrounds: 62"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23300.265537421885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012848453225359061",
            "extra": "mean: 42.91796582291858 usec\nrounds: 10153"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 60.11040407071114,
            "unit": "iter/sec",
            "range": "stddev: 0.00001801504390219535",
            "extra": "mean: 16.636055196428984 msec\nrounds: 56"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 2.4672082524650114,
            "unit": "iter/sec",
            "range": "stddev: 0.0050338949626969",
            "extra": "mean: 405.31641339999993 msec\nrounds: 5"
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
        "date": 1673270321692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 3279.778915693068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036130856185884443",
            "extra": "mean: 304.89860009014797 usec\nrounds: 2218"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 86.14480318537856,
            "unit": "iter/sec",
            "range": "stddev: 0.000025631878622583444",
            "extra": "mean: 11.60836130588236 msec\nrounds: 85"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 85.59098512485433,
            "unit": "iter/sec",
            "range": "stddev: 0.000026282404982776745",
            "extra": "mean: 11.683473423530153 msec\nrounds: 85"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 1442.024521396533,
            "unit": "iter/sec",
            "range": "stddev: 0.000008575175885341365",
            "extra": "mean: 693.4694834672763 usec\nrounds: 1119"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 84.62210357977789,
            "unit": "iter/sec",
            "range": "stddev: 0.0009827571057268326",
            "extra": "mean: 11.817243458823325 msec\nrounds: 85"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 23539.88782843449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011366398043852408",
            "extra": "mean: 42.48108603100784 usec\nrounds: 10194"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 82.56731658276266,
            "unit": "iter/sec",
            "range": "stddev: 0.00003119694226720507",
            "extra": "mean: 12.111329777777556 msec\nrounds: 81"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 3.4014572381598738,
            "unit": "iter/sec",
            "range": "stddev: 0.00484144224289844",
            "extra": "mean: 293.9916424000032 msec\nrounds: 5"
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
        "date": 1673350355027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 9503.958682818584,
            "unit": "iter/sec",
            "range": "stddev: 0.000003226466853444703",
            "extra": "mean: 105.21931264366889 usec\nrounds: 3480"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 257.77935787872354,
            "unit": "iter/sec",
            "range": "stddev: 0.000011085930024424138",
            "extra": "mean: 3.8792865659571785 msec\nrounds: 235"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 257.7529684135623,
            "unit": "iter/sec",
            "range": "stddev: 0.000012176176200758348",
            "extra": "mean: 3.8796837380957294 msec\nrounds: 252"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 4583.246837530247,
            "unit": "iter/sec",
            "range": "stddev: 0.000003645098044919567",
            "extra": "mean: 218.18593574568752 usec\nrounds: 2957"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 254.14267479219055,
            "unit": "iter/sec",
            "range": "stddev: 0.000009151028577306817",
            "extra": "mean: 3.9347976518217105 msec\nrounds: 247"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 71540.43115898522,
            "unit": "iter/sec",
            "range": "stddev: 0.000025310408391900118",
            "extra": "mean: 13.978109773726233 usec\nrounds: 10385"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 230.37773361505964,
            "unit": "iter/sec",
            "range": "stddev: 0.000050135047750870946",
            "extra": "mean: 4.340697272727362 msec\nrounds: 121"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 10.164036019026403,
            "unit": "iter/sec",
            "range": "stddev: 0.0032826496222291015",
            "extra": "mean: 98.38611336363488 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}