#!/bin/sh
# This is Bash script creates numerous unique section files used by Collections
# using the collection.type pages (Jackets, Trousers)
# The files are: sections\collection-type-template_x.liquid
# where x is from 1 to 20.
# It syncs an updated version of config\settings_schema_type-flow.json

SECTIONS=30

while [ $SECTIONS -gt 0 ]
do
    SECTION_FILES="../Brooklyn/sections/collection-type-template_$SECTIONS.liquid"
    echo "Creating $SECTION_FILES.."
    (
        echo "<!-- $SECTION_FILES -->"
        echo "{% include 'collection-type' %}"
        echo "{% schema %}"
        cat ../Brooklyn/config/settings_schema_type-flow.json
        echo "{% endschema %}"
    ) > $SECTION_FILES
	(( SECTIONS-- ))
done
