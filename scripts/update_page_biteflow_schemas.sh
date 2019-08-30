#!/bin/sh
# This is Bash script creates numerous unique section files used by Pages
# using the page.biteflow template (Bite Buy Back, Sustainability etc).
# The files are: sections\page-biteflow-template_x.liquid
# where x is from 1 to 20.
# It syncs an updated version of config\settings_schema_page-flow.json

SECTIONS=20

while [ $SECTIONS -gt 0 ]
do
    SECTION_FILES="../VERSION 2/sections/page-biteflow-section_$SECTIONS.liquid"
    echo "Creating $SECTION_FILES.."
    (
        echo "<!-- $SECTION_FILES -->"
        echo "{% include 'page-biteflow_part_of_section' %}"
        echo "{% schema %}"
        cat "../VERSION 2/config/settings_schema_page-flow.json"
        echo "{% endschema %}"
    ) > $SECTION_FILES
	(( SECTIONS-- ))
done
