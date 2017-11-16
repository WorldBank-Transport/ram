---
title: Setting up a project
date: 2017-07-01
layout: post.html
permalink: /setting-up-a-project
---

Every project needs 5 different inputs to calculate accessibility for a region:

* administrative boundaries
* population data
* points of interest
* road network
* OSRM profile

These files need to be compatible with each other. This means - for example - that the population data, road network and POI all need to fit within the administrative boundaries, or that the OSRM profile specifies travel speeds for road types that in the road network file.
