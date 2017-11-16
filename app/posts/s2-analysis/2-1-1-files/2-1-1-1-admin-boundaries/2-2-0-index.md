---
title: Administrative boundaries
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/admin-boundaries
---

The administrative boundaries are the units of analysis for which RAM generates the results. The backend expects a GeoJSON with one or more polygons, which can overlap. The latter is useful to benchmark results for, for example, municipalities against the results of the bigger province.

## File requirements

* a GeoJSON file with administrative boundaries
* the GeoJSON needs to be [compliant with the spec](https://tools.ietf.org/html/rfc7946), which includes being in a geographic coordinate reference system (WGS84 / EPSG:4326) with units of decimal degrees.
* features need to be a polygon or multi-polygon
* each feature needs a property `name` (string)

The administrative boundaries are defined on project level and are available across all its scenarios.