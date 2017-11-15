---
title: Population data
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/population
---

The population data is used as the origin in the analysis. These are typically population centers like villages, or a population estimates like Worldpop.

## File requirements

* a GeoJSON file with population data
* the GeoJSON needs to be [compliant with the spec](https://tools.ietf.org/html/rfc7946), which includes being a geographic coordinate reference system (WGS84 / EPSG:4326), and units of decimal degrees.
* features need to be points
* each feature needs at least one property that can be used as a population estimate. This property needs to be an integer, or a string that can be cast to an integer, and needs to be present on all features.
* OPTIONAL - the property `name` (string) will be used on the results page to allow for easy identification of origins. If a feature doesn't have a `name` property, it will show as 'N/A'
The origins are defined on a project level. Each scenario uses the same set of origins.

## Incorporating Open Population Datasets - WorldPop
When population data is not readily available for the origins (e.g. village or township) used in the routing analysis, publicly available population estimates such as WorldPop can help fill the gap and, even better, allow for global scaling. WorldPop, initiated in 2013, provides publicly available population distribution maps for the whole of Central and South America, Africa and Asia. The data comes in at 1 km 2 for the whole continents and 100 meter 2 per individual countries (in raster format). The approaches used in WorldPop dataset production are designed with full open access and operational application, using transparent, documented and shareable methods to produce easily updatable maps with accompanying metadata. WorldPop data downloads and detailed methodology can be accessed at http://www.worldpop.org.uk/.

While WorldPop provides a high resolution population estimate, it is a modelled product nonetheless. To use WorldPop for RAM specifically, we need to aggregate them (e.g. the pixel values) to known places (i.e. cities, counties, towns, villages etc.) based on their administrative boundary. If the boundary of the place is not defined or such data is not readily available, a quick and simple method is to create artificial boundaries based on the location of the places, where population headcount in each pixel is considered dwelling in the nearest place per Euclidian distance. Commonly used GIS software like ArcGIS and QGIS have functions/plugins (“euclidean allocation” and “proximity”) to find the nearest point. The methodology can be further improved with satellite data or its derivatives such as Global Human Settlement Layer (GHSL) and Global Urban Footprint (GUF) to refine the artificial boundaries. With the boundary of each origin place defined, population headcounts summed, and the saved as a Geojson file, the processed population data based on WorldPop is ready for use on RAM.