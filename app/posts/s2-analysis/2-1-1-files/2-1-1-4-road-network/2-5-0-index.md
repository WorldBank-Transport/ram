---
title: Road Network
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/road-network
---

The road network needs to be a valid [OSM XML](http://wiki.openstreetmap.org/wiki/OSM_XML) file that is routable.

## File requirements

* a valid OSM XML file. To speed up the processing, provide a file that only contains the relevant roads.
* the coordinate system needs to be in WGS84 / EPSG:4326, in decimal degrees

A different road network can be uploaded for each scenario.

## Generating OSM XML
There are different tools and utilities to generate OSM XML:

- [ogr2osm](https://github.com/pnorman/ogr2osm) generates OSM XML from any format supported by OGR. If the source data is in another coordinate system, it will ensure it's converted to WGS84..