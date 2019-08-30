#!/bin/sh
# This is Bash script creates numerous unique section files used by Collections
# using the collection.collection template (Collection No 3, Collection No 4).
# The files are: sections\collection-collection-template_x.liquid
# where x is from 1 to 20.
# It syncs an updated version of config\settings_schema_collection-flow.json

SECTIONS=20

while [ $SECTIONS -gt 0 ]
do
    SECTION_FILES="../Brooklyn/sections/collection-collection-template_$SECTIONS.liquid"
    echo "Creating $SECTION_FILES.."
    (
        echo "<!-- $SECTION_FILES -->"
        echo "{% include 'collection-collection' %}"
        echo "{% schema %}"
        cat ../Brooklyn/config/settings_schema_collection-flow.json
        echo "{% endschema %}"
    ) > $SECTION_FILES
	(( SECTIONS-- ))
done
