# overlayMagnify-magento2
Put the default magnify preview over the top of the thumbnail in magento2. Some fixes were required to make this work with touch screens and the full screen view.

# Installation
- Extract over your magento installation.
- php bin/magento setup:upgrade
- php bin/magento setup:di:compile
- php bin/magento setup:static-content:deploy

# Usage
It should _just work_. 

Note this overrides the following settings from view.xml:
```
<var name="magnifier">
	<var name="top">100</var> <!-- Top position of magnifier -->
	<var name="left">45</var> <!-- Left position of magnifier -->
	<var name="width">7700</var> <!-- Width of magnifier block -->
	<var name="height">7700</var> <!-- Height of magnifier block -->
</var>
```
