# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-26)

<section class="features">

### Features

-   [`654827d`](https://github.com/stdlib-js/stdlib/commit/654827df5358f2c70fde0259fbbcbfb607076119) - add `blas/ext/base/wasm/dapxsum` [(#5634)](https://github.com/stdlib-js/stdlib/pull/5634)
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`912f410`](https://github.com/stdlib-js/stdlib/commit/912f41098b5dbf1dc535e48259d60f9e1adbec90) - add missing `argv-strided-float64array` dependency to `dapxsum` manifest
-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - add missing checks for `N` and address failing tests stemming from refactoring

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5505](https://github.com/stdlib-js/stdlib/issues/5505)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`c221279`](https://github.com/stdlib-js/stdlib/commit/c2212790b0118b7787b5e292244b4364c08ea05a) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`912f410`](https://github.com/stdlib-js/stdlib/commit/912f41098b5dbf1dc535e48259d60f9e1adbec90) - **fix:** add missing `argv-strided-float64array` dependency to `dapxsum` manifest _(by Philipp Burckhardt)_
-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - **fix:** add missing checks for `N` and address failing tests stemming from refactoring _(by Athan Reines)_
-   [`9f85b5d`](https://github.com/stdlib-js/stdlib/commit/9f85b5d90cb6fcaf052116cd06aa4a693757f0ec) - **test:** fix description _(by Philipp Burckhardt)_
-   [`654827d`](https://github.com/stdlib-js/stdlib/commit/654827df5358f2c70fde0259fbbcbfb607076119) - **feat:** add `blas/ext/base/wasm/dapxsum` [(#5634)](https://github.com/stdlib-js/stdlib/pull/5634) _(by Vivek Maurya, Athan Reines, stdlib-bot)_
-   [`63bb1c5`](https://github.com/stdlib-js/stdlib/commit/63bb1c5e4287293c7a7fcbcb5e1539b9d2891895) - **docs:** update related packages sections [(#4842)](https://github.com/stdlib-js/stdlib/pull/4842) _(by stdlib-bot, Athan Reines)_
-   [`d3d3d14`](https://github.com/stdlib-js/stdlib/commit/d3d3d14939ac77ab7d5a4476551108f8ff1c3f1f) - **docs:** update related packages sections [(#4149)](https://github.com/stdlib-js/stdlib/pull/4149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`49f4678`](https://github.com/stdlib-js/stdlib/commit/49f46785af07e358a254308f25b80c6b6779ae48) - **chore:** update docs and tests of `blas/ext/base/dapxsum` [(#3213)](https://github.com/stdlib-js/stdlib/pull/3213) _(by Muhammad Haris)_
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954) _(by Muhammad Haris)_
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946) _(by Muhammad Haris, Athan Reines)_
-   [`7e366ae`](https://github.com/stdlib-js/stdlib/commit/7e366ae8bd41439be0e99e958d1c3fbb1b7dd0c2) - **chore:** update package.json descriptions _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Muhammad Haris
-   Philipp Burckhardt
-   Vivek Maurya

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`eba97ba`](https://github.com/stdlib-js/stdlib/commit/eba97bab6149fd8664c58d0c850c70d32b5c1f9d) - **build:** fix missing default task _(by Athan Reines)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`b9f2025`](https://github.com/stdlib-js/stdlib/commit/b9f20258c101c9c53379d0704085ab0def1f1831) - **refactor:** update `blas/ext/base/dapxsum` to follow current project conventions _(by Ahmed Atwa, Athan, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Ahmed Atwa
-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

