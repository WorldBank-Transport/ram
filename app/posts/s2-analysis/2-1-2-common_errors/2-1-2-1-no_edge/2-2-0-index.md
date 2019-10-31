---
title: No Edges
date: 2019-10-31
layout: post.html
permalink: /common-errors/no-edges
---

If the analysis fails with a `no edges remaining` error during the generation of the results, something is wrong with the underlying road network. This page contains common causes.

The error message will look something like this:

<img src="/assets/graphics/content/no-edge.png" width="100%" />

## Custom classification
The default [OSRM profile](/setting-up-a-project/osrm-profile) asssumes that each road segment has a `highway` tag with a typical OSM value (eg. `primary`, `secondary`). If your road network uses a different classification, make sure to add them to the speed profile.

A road network with the following classification:

``` xml
<tag k="highway" v="departmental"/>
<tag k="highway" v="national"/>
```

requires the following additions:

<img src="/assets/graphics/content/custom-tags.png" width="100%" />

Any road segment that has no tags matching the ones in the OSRM profile, will be discarded when generating the routing graph.
