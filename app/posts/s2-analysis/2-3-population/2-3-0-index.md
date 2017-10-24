---
title: Population data
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/population
---

The population data is used as the origin in the analysis. These are typically population centers like villages, or a population estimates like Worldpop.

## File requirements

* a GeoJSON file with population data
* features need to be points
* each feature needs at least one property that can be used as a population estimate. This property needs to be an integer, or a string that can be cast to an integer, and needs to be present on all features.
* OPTIONAL - the property `name` (string) will be used on the results page to allow for easy identification of origins. If a feature doesn't have a `name` property, it will show as 'N/A'
The origins are defined on a project level. Each scenario uses the same set of origins.