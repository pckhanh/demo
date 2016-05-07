#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function
import os

from flask.ext.script import Manager
from application import application as app

manager = Manager(app)

@manager.command
def route():
	for rule in app.url_map.iter_rules():
		print(str(rule), 'methods:', ','.join(rule.methods), '->', rule.endpoint)


if __name__ == "__main__":
	manager.run()
