---
title: Point of Interest
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/poi
---

Points of Interest are used as the destination in the analysis. When multiple POI categories (eg. schools and clinics) are added to a project, the application will calculate an ETA per category for each origin. POI data can be added by uploading a GeoJSON file, or importing it from OpenStreetMap.

If the POI data contains lines or polygons, they will be converted to a point.

## OSM import

This option imports POI data from OpenStreetMap for the selected categories. It is not possible to customize the OSM tags that get imported for each category. The file upload allows for a more fine-grained control over the POI data.

<dl class='dl-horizontal'>
  <dt>Education</dt>
  <dd>amenity=school
  <dd>amenity=kindergarten</dd>
  <dd>amenity=college</dd>
  <dd>amenity=university</dd>
  <dt>Health</dt>
  <dd>amenity=clinic</dd>
  <dd>amenity=doctors</dd>
  <dd>amenity=hospital</dd>
  <dt>Finance</dt>
  <dd>amenity=atm</dd>
  <dd>amenity=bank</dd>
  <dd>amenity=bureau_de_change</dd>
  <dd>amenity=money_transfer</dd>
  <dd>amenity=payment_center</dd>
</dl>

## File upload

For each POI category, a separate GeoJSON file needs to be uploaded. All the POI data in the file gets labeled as a single category.

### File requirements

* a single GeoJSON for each POI category
* the GeoJSON needs to be [compliant with the spec](https://tools.ietf.org/html/rfc7946), which includes being a geographic coordinate reference system (WGS84 / EPSG:4326), and units of decimal degrees.

POI are defined on a project level. Each scenario uses the same set of POI.

