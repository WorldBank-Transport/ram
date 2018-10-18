---
title: OSRM Profile
date: 2017-08-01
layout: post.html
permalink: /setting-up-a-project/osrm-profile
---

The OSRM Profile contains the configuration for the routing, most importantly the speed limits per road type. Speeds are set in kilometer per hour. For example:

``` json
speed_profile = {
  ["Expressway"] = 120,
  ["National"] = 80,
  ["Provincial"] = 60,
  ["Township"] = 20,
  ...
}
```

You'll notice that speeds are set based on different attributes like type of the road, its smoothness, or any speed limits. If a particular road segment has multiple tags that define its speed, the lowest will be used. For example for a road of type expressway (120 km/hr) with a bad smoothness (40 km/hr), OSRM will set a speed of 40 km/hr.

On project setup, you have two options: either start with the default OSRM profile, or upload a custom file.

## Default profile
This profile is a good starting point for OSM based datasets and contains sensible defaults. See the default [RAM profile](https://raw.githubusercontent.com/WorldBank-Transport/ram-backend/develop/app/utils/default.profile.lua) for more information.

When you select the default profile, you can adjust the speed limits once the project is created.

<video width="768" controls>
  <source src="/assets/graphics/content/profile-editor.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

The profile editor also allows you to add new tags for each of the categories. This is useful if your dataset contains values that are not included in the original speed profile.

## File upload
A custom profile can be provided through file upload. The OSRM project has more information about writing custom [profiles](https://github.com/Project-OSRM/osrm-backend/wiki/Profiles).
